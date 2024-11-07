import { FC, useCallback, useEffect, useRef } from "react";
import { Experience, isJob } from "../../content";
import "./ExperienceModal.css";

type Props = {
  /**
   * The experience to display. If `null` is passed, nothing will be displayed.
   */
  experience: Experience | null;
  /**
   * Whether the modal is open or not.
   */
  isOpen: boolean;
  /**
   * Callback that should set the value of `isOpen` to `false`.
   * @returns
   */
  close: () => void;
};

/**
 * Used to display an experience item through a pop-up.
 */
const ExperienceModal: FC<Props> = ({ experience, isOpen, close }) => {
  const bgRef = useRef<HTMLDivElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const bodyRef = useRef<HTMLBodyElement>(
    document.getElementsByTagName("body")[0]
  );

  const title =
    experience && (isJob(experience) ? experience.company : experience.title);
  const subtitle =
    experience &&
    (isJob(experience) ? experience.position : experience.subtitle);
  const timePeriod =
    (experience && isJob(experience) && experience.timePeriod) || null;

  const transferScrollbar = useCallback(
    (to: "modal" | "body") => {
      const toRemove =
        to === "modal" ? "overflow-y-scroll" : "overflow-y-hidden";
      const toAdd = to === "modal" ? "overflow-y-hidden" : "overflow-y-scroll";

      bodyRef.current.classList.add(toAdd);
      bodyRef.current.classList.remove(toRemove);
    },
    [bodyRef]
  );

  const showModal = useCallback(() => {
    if (bgRef.current && modalRef.current && contentRef.current) {
      bgRef.current.style.opacity = "100%";
      bgRef.current.style.visibility = "visible";

      modalRef.current.style.opacity = "100%";
      modalRef.current.style.visibility = "visible";

      transferScrollbar("modal");
      contentRef.current.scroll(0, 0);
    }
  }, [bgRef, modalRef, contentRef]);

  const hideModal = useCallback(() => {
    if (bgRef.current && modalRef.current) {
      bgRef.current.style.opacity = "0%";
      modalRef.current.style.opacity = "0%";

      transferScrollbar("body");

      setTimeout(() => {
        if (bgRef.current && modalRef.current) {
          bgRef.current.style.visibility = "hidden";
          modalRef.current.style.visibility = "hidden";
        }
      }, 300);
    }
  }, [bgRef, modalRef]);

  useEffect(() => {
    isOpen ? showModal() : hideModal();
  }, [isOpen]);

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.code === "Escape") {
        close();
      }
    };

    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, []);

  return (
    <>
      <div className="dark-bg" ref={bgRef} onClick={close} />
      <div
        className="centered z-50 w-full h-full sm:w-10/12 sm:h-5/6 max-w-screen-lg sm:max-h-modal"
        ref={modalRef}
      >
        {experience && (
          <div className="bg-white h-full max-h-dvh sm:rounded-2xl flex flex-col lg:flex-row items-stretch overflow-hidden relative">
            <div className="flex-grow overflow-hidden">
              <img src={experience.imgSrc} className="absolute img scale-101" />
            </div>
            <div
              className="h-4/6 sm:h-3/5 lg:w-3/5 lg:h-full p-8 z-20 bg-gray-800 overflow-y-scroll text-left"
              ref={contentRef}
            >
              <h1 className="font-lemon text-4xl text-white">{title}</h1>
              <h2 className="text-accent text-xl">{subtitle}</h2>
              <p className="text-gray-300 ">{timePeriod}</p>
              <h2 className="font-lemon text-2xl text-white mt-4">Overview</h2>
              <p className="text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a
                augue sollicitudin, sollicitudin nisl at, finibus arcu. Ut eget
                dictum odio. Morbi elit neque, tempor eu arcu eu, posuere
                viverra elit. Curabitur egestas nibh sit amet ligula ornare
                varius. Nullam luctus, libero eu pulvinar auctor, nisl mi
                fringilla nulla, et vulputate diam metus a augue. Nullam vel
                blandit ligula. Ut vestibulum nec nibh nec tempus. Suspendisse
                at mollis enim, quis vestibulum dolor. Curabitur id odio quis
                ligula sagittis vehicula sed quis mauris. Vivamus non ipsum a
                mauris accumsan blandit eu fringilla sapien. Donec porta
                volutpat nulla id dapibus. Praesent id lectus vitae ligula
                laoreet pellentesque ut et odio. Nulla a turpis sed odio
                pharetra finibus. Interdum et malesuada fames ac ante ipsum
                primis in faucibus. Ut rutrum turpis sapien, elementum posuere
                leo vehicula at. Sed in elit ipsum. Quisque ac massa ut velit
                faucibus condimentum. Pellentesque laoreet nibh quis libero
                egestas tempor. Donec molestie quis purus efficitur facilisis.
                Nulla tincidunt malesuada nunc ut pharetra. Cras in commodo
                ligula. Pellentesque finibus porta leo, id cursus dolor
                hendrerit vel. Nullam auctor turpis sit amet augue venenatis,
                vitae rutrum odio porttitor. Nulla vitae nisi ac sapien aliquam
                rutrum vitae et libero. Maecenas diam erat, viverra vel mi at,
                bibendum lacinia magna. In rutrum ante in enim sagittis
                pharetra. Vivamus et lacus fermentum, sagittis orci ut, luctus
                dolor. Vestibulum gravida eleifend dolor et viverra. In posuere
                eros eget dui consequat egestas. Vivamus dictum in justo a
                scelerisque. Curabitur scelerisque vehicula tellus. Vivamus
                condimentum mi sed molestie laoreet. Nullam sit amet felis
                neque. Nullam sodales augue lacinia felis auctor aliquam.
                Integer lacinia commodo turpis, et elementum lacus maximus nec.
                Cras ac vehicula est, sit amet elementum quam. Cras congue nulla
                at nisi fringilla, eget placerat leo semper. Nam ipsum mi,
                placerat vitae euismod a, blandit non lorem. Vestibulum suscipit
                maximus vehicula. Vivamus vitae tellus porttitor, vestibulum
                elit id, aliquam quam. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Mauris
                sollicitudin lacus vitae est tincidunt lobortis. Integer congue
                eget massa sit amet scelerisque. Pellentesque commodo dapibus
                eros accumsan fringilla. Vivamus nec vestibulum urna. Donec
                tempus, turpis vitae auctor efficitur, quam risus tempor leo, eu
                molestie enim nibh et neque. Nullam viverra placerat fermentum.
                Aenean ac molestie lorem. Donec porta aliquam neque ut eleifend.
                Sed pulvinar nisl et justo condimentum, eget vestibulum ligula
                lacinia. Aliquam nulla libero, euismod pharetra ultrices sit
                amet, tincidunt sit amet ligula. Ut iaculis, justo et feugiat
                ornare, elit nulla porta turpis, lacinia volutpat quam tortor et
                neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed ut dolor vel metus tempor dignissim. Mauris rhoncus
                dignissim lobortis. Fusce pretium nibh lectus, ac tempor ligula
                mattis non. Sed cursus, dui facilisis semper congue, metus orci
                maximus dui, quis tincidunt eros nulla eget eros. Duis in
                malesuada dolor, eu euismod eros. Duis pretium dui magna, ac
                fringilla tortor placerat a. Proin euismod congue nisl, at
                euismod elit egestas et. Ut sagittis id orci vitae vulputate.
                Vivamus gravida turpis non erat tempus, id dictum nibh rutrum.
                Proin dignissim imperdiet purus id tempus. Mauris dictum laoreet
                porttitor. Donec posuere, ipsum a malesuada imperdiet, eros
                sapien facilisis magna, eget porttitor odio justo ac tellus.
              </p>
              <h2 className="font-lemon text-2xl text-white mt-4">
                Contributions
              </h2>
              <h2 className="font-lemon text-2xl text-white mt-4">Skills</h2>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ExperienceModal;
