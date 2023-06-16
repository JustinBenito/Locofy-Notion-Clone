import { useEffect } from "react";
import ContainerInputsCheckboxs from "./ContainerInputsCheckboxs";

const Drawer = ({ onClose }) => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div
      className="relative bg-white shadow-[0px_0px_0px_1px_rgba(15,_15,_15,_0.02),_0px_3px_6px_rgba(15,_15,_15,_0.03),_0px_9px_24px_rgba(15,_15,_15,_0.06)] h-full overflow-hidden flex flex-col items-start justify-start [&.animate]:animate-[0.25s_ease_0s_1_normal_forwards_slide-in-right] opacity-[0] max-w-[90%] text-left text-base text-black font-inter"
      data-animate-on-scroll
    >
      <div className="flex-1 w-[702px] overflow-hidden flex flex-row items-start justify-between">
        <div className="w-[702px] h-[309px] flex flex-col pt-[38px] px-0 pb-[594.6099853515625px] box-border items-start justify-start gap-[5px]">
          <div className="self-stretch flex flex-col py-0 px-[55px] items-start justify-start z-[1]">
            <div className="flex flex-col py-2.5 px-0 items-start justify-start">
              <input
                className="[border:none] font-inter text-[31px] bg-[transparent] relative leading-[38.4px] font-bold text-darkslategray-100 text-left"
                type="text"
                placeholder="Enter Title"
              />
            </div>
          </div>
          <ContainerInputsCheckboxs />
        </div>
      </div>
      <div className="self-stretch bg-whitesmoke overflow-hidden flex flex-row py-[61px] px-[88px] items-center justify-start">
        <div className="relative font-light">Markdown Comes over here</div>
      </div>
    </div>
  );
};

export default Drawer;
