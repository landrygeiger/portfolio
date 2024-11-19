import { FC, useCallback, useEffect, useRef } from "react";
import { Experience, isJob } from "../../content";
import SkillList from "../SkillList";
import "./ExperienceModal.css";
import CloseButton from "../CloseButton";

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
              <div className="flex flex-row items-start">
                <h1 className="font-lemon text-4xl text-white flex-1">
                  {title}
                </h1>
                <CloseButton close={close} className="-mt-1" />
              </div>
              <h2 className="text-accent text-xl">{subtitle}</h2>
              <p className="text-gray-300 ">{timePeriod}</p>
              <SkillList skills={experience.skills} overflow="visible" />
              <h2 className="font-lemon text-2xl text-white mt-4">Overview</h2>
              <p className="text-white">{experience.overview}</p>
              <h2 className="font-lemon text-2xl text-white mt-4 mb-2">
                Contributions
              </h2>
              <ul className="flex flex-col gap-3 list-disc pl-5 m-0">
                {experience.contributions.map((contribution, i) => (
                  <li key={i} className="text-white pl-0">
                    {contribution}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ExperienceModal;
