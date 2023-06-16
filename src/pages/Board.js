import { useState, useMemo, useCallback } from "react";
import Drawer from "./Drawer";
import PortalDrawer from "./PortalDrawer";

const DesignOverviewCard = ({
  propJustifyContent,
  propColor,
  propCursor,
  propJustifyContent1,
  propGap,
  propWidth,
  propFlex,
  frame,
  toDoValue = "Todo",
  counterValue = "0",
  frameOverflow,
  frameFlexShrink,
  frame1,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      justifyContent: propJustifyContent,
    };
  }, [propJustifyContent]);

  const toDoStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const buttonStyle = useMemo(() => {
    return {
      cursor: propCursor,
    };
  }, [propCursor]);

  const frameIconStyle = useMemo(() => {
    return {
      overflow: frameOverflow,
      flexShrink: frameFlexShrink,
    };
  }, [frameOverflow, frameFlexShrink]);

  const [isDrawer1Open, setDrawer1Open] = useState(false);

  const openDrawer1 = useCallback(() => {
    setDrawer1Open(true);
  }, []);

  const closeDrawer1 = useCallback(() => {
    setDrawer1Open(false);
  }, []);

  return (
    <>
      <div className="self-stretch w-[265px] flex flex-col items-start justify-start text-left text-sm text-darkslategray-400 font-inter">
        <div className="self-stretch flex flex-row items-center justify-between">
          <div
            className="flex flex-row items-center justify-center gap-[7px]"
            style={frameDivStyle}
          >
            <img
              className="relative w-4 h-4"
              alt=""
              src={frame}
              style={frameIconStyle}
            />
            <input
              className="[border:none] font-medium font-inter text-xs bg-[transparent] relative leading-[21px] text-gray text-left"
              type="text"
              placeholder="To-do"
              style={toDoStyle}
              value={toDoValue}
            />
            <div className="relative leading-[21px] flex items-center w-2 h-4 shrink-0">
              {counterValue}
            </div>
          </div>
          <button
            className="[border:none] p-1 bg-gray-50 rounded-md flex flex-col items-start justify-start"
            disabled
            style={buttonStyle}
          >
            <img
              className="relative w-[12.03px] h-3 overflow-hidden shrink-0"
              alt=""
              src={frame1}
            />
          </button>
        </div>
        <div className="self-stretch flex-1 rounded-xl flex flex-col p-3 items-start justify-start">
          <div className="self-stretch rounded-lg bg-white shadow-[0px_2px_4px_rgba(0,_0,_0,_0.08)] flex flex-col p-4 items-start justify-start gap-[8px] border-[1px] border-solid border-gainsboro">
            <div className="self-stretch h-[38px] flex flex-row items-center justify-start gap-[10px]">
              <h2 className="m-0 self-stretch flex-1 flex flex-row items-center justify-start">
                <input
                  className="[border:none] font-light font-inter text-base bg-[transparent] flex-1 relative tracking-[-0.2px] text-black text-left inline-block max-w-[100px]"
                  type="text"
                  placeholder="Design Overview"
                />
              </h2>
              <button
                className="cursor-pointer p-0 bg-white self-stretch flex-1 rounded-10xs shadow-[0px_2px_4px_rgba(0,_0,_0,_0.08)] flex flex-row items-center justify-start border-[1px] border-solid border-gainsboro"
                autoFocus
                onClick={openDrawer1}
              >
                <div className="self-stretch flex-1 flex flex-row items-center justify-start">
                  <div className="self-stretch flex-1 overflow-hidden flex flex-row items-center justify-between">
                    <div className="self-stretch w-[49.75px] flex flex-row items-center justify-center">
                      <img
                        className="relative w-[7px] h-[7.5px]"
                        alt=""
                        src="/vector1.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch bg-gainsboro w-px overflow-hidden shrink-0" />
                  <div className="self-stretch flex-1 flex flex-row items-center justify-center">
                    <div className="self-stretch flex-1 flex flex-row items-center justify-center">
                      <img
                        className="relative w-7 h-[5px]"
                        alt=""
                        src="/2.svg"
                      />
                    </div>
                  </div>
                </div>
              </button>
            </div>
            <textarea className="[border:none] bg-[transparent] self-stretch h-[38px] overflow-hidden shrink-0" />
          </div>
        </div>
      </div>
      {isDrawer1Open && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Right"
          onOutsideClick={closeDrawer1}
        >
          <Drawer onClose={closeDrawer1} />
        </PortalDrawer>
      )}
    </>
  );
};

export default DesignOverviewCard;
