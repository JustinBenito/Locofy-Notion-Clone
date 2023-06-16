import { useState, useCallback } from "react";
import BoardDescription from "../components/BoardDescription";
import Drawer from "../components/Drawer";
import PortalDrawer from "../components/PortalDrawer";
import DesignOverviewCard from "../components/DesignOverviewCard";

const Board = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isDrawer2Open, setDrawer2Open] = useState(false);
  const [isDrawer3Open, setDrawer3Open] = useState(false);

  const openDrawer = useCallback(() => {
    setDrawerOpen(true);
  }, []);

  const closeDrawer = useCallback(() => {
    setDrawerOpen(false);
  }, []);

  const openDrawer2 = useCallback(() => {
    setDrawer2Open(true);
  }, []);

  const closeDrawer2 = useCallback(() => {
    setDrawer2Open(false);
  }, []);

  const openDrawer3 = useCallback(() => {
    setDrawer3Open(true);
  }, []);

  const closeDrawer3 = useCallback(() => {
    setDrawer3Open(false);
  }, []);

  return (
    <>
      <div className="relative bg-white w-full h-[444px] overflow-hidden flex flex-col items-center justify-start text-left text-xs text-gray font-inter">
        <div className="self-stretch rounded-xl bg-white h-[444px] overflow-hidden shrink-0 flex flex-row p-10 box-border items-center justify-center">
          <div className="self-stretch flex-1 flex flex-col py-0 px-[45px] items-center justify-start gap-[24px]">
            <div className="self-stretch h-24 flex flex-col items-start justify-between">
              <div className="self-stretch flex flex-row p-2.5 items-start justify-start">
                <input
                  className="[border:none] font-inter text-[32px] bg-[transparent] flex-1 relative font-bold text-black text-left"
                  type="text"
                  placeholder="Kanban Board"
                />
              </div>
              <div className="self-stretch flex flex-row p-2.5 items-start justify-start">
                <BoardDescription />
              </div>
            </div>
            <div className="self-stretch flex-1 rounded-xl bg-white flex flex-row items-center justify-between">
              <div className="self-stretch w-[361px] hidden flex-col items-start justify-start">
                <div className="self-stretch flex flex-row items-center justify-between">
                  <div className="flex flex-row items-center justify-center gap-[7px]">
                    <img className="relative w-4 h-4" alt="" src="/frame.svg" />
                    <div className="relative leading-[21px] font-medium">
                      To-do
                    </div>
                    <div className="relative text-sm leading-[21px] text-darkslategray-400 flex items-center w-2 h-4 shrink-0">
                      0
                    </div>
                  </div>
                  <button
                    className="[border:none] p-1 bg-gray-50 rounded-md flex flex-col items-start justify-start"
                    disabled
                  >
                    <img
                      className="relative w-[12.03px] h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/frame1.svg"
                    />
                  </button>
                </div>
                <div className="self-stretch rounded-xl flex flex-col p-3 items-start justify-start text-base text-black">
                  <div className="self-stretch rounded-lg bg-white shadow-[0px_2px_4px_rgba(0,_0,_0,_0.08)] flex flex-row p-4 items-start justify-start gap-[8px] border-[1px] border-solid border-gainsboro">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
                      <div className="self-stretch flex flex-row items-center justify-start">
                        <div className="flex-1 relative tracking-[-0.2px] font-light">
                          Extend Function
                        </div>
                      </div>
                      <div className="self-stretch flex flex-col py-2 px-0 items-start justify-start gap-[8px] text-sm text-dark-grey">
                        <div className="self-stretch flex flex-row items-start justify-start gap-[6px] text-grey">
                          <img
                            className="relative rounded w-4 h-4 overflow-hidden shrink-0"
                            alt=""
                            src="/checkboxunchecked.svg"
                          />
                          <div className="flex-1 relative tracking-[0.1px]">
                            Add DnD Support
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start gap-[6px]">
                          <img
                            className="relative rounded w-4 h-4 overflow-hidden shrink-0"
                            alt=""
                            src="/checkboxunchecked.svg"
                          />
                          <div className="flex-1 relative tracking-[0.1px]">
                            Add React Markdown
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start gap-[6px]">
                          <img
                            className="relative rounded w-4 h-4 overflow-hidden shrink-0"
                            alt=""
                            src="/checkboxunchecked.svg"
                          />
                          <div className="relative tracking-[0.1px]">
                            Add Final touch
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 rounded-10xs bg-white shadow-[0px_2px_4px_rgba(0,_0,_0,_0.08)] box-border h-[27.5px] flex flex-row items-center justify-start border-[1px] border-solid border-gainsboro">
                      <div className="flex-1 flex flex-row items-center justify-start gap-[6px]">
                        <button className="cursor-pointer [border:none] py-2.5 px-0 bg-[transparent] flex-1 flex flex-row items-center justify-between">
                          <img
                            className="relative w-[7px] h-[7.5px]"
                            alt=""
                            src="/vector.svg"
                          />
                        </button>
                        <div className="self-stretch bg-gainsboro w-px overflow-hidden shrink-0" />
                        <div className="flex-1 h-[7px] flex flex-row p-2.5 box-border items-center justify-between">
                          <button
                            className="[border:none] p-2.5 bg-[transparent] flex flex-col items-start justify-start cursor-pointer"
                            disabled
                            onClick={openDrawer}
                          >
                            <img
                              className="relative w-7 h-[5px]"
                              alt=""
                              src="/1.svg"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <DesignOverviewCard frame="/frame.svg" />
              <div className="self-stretch w-[265px] flex flex-col items-start justify-start text-sm text-darkslategray-400">
                <div className="self-stretch flex flex-row items-center justify-between">
                  <div className="flex flex-row items-center justify-start gap-[8px]">
                    <img
                      className="relative w-4 h-4 overflow-hidden shrink-0"
                      alt=""
                      src="/svg.svg"
                    />
                    <input
                      className="[border:none] font-medium font-inter text-smi bg-[transparent] relative leading-[21px] text-steelblue text-left"
                      type="text"
                      placeholder="In Progress"
                    />
                    <div className="relative leading-[21px] flex items-center w-2 h-4 shrink-0">
                      0
                    </div>
                  </div>
                  <button className="cursor-pointer [border:none] p-1 bg-gray-50 rounded-md flex flex-col items-start justify-start">
                    <img
                      className="relative w-[12.03px] h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/frame3.svg"
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
                        onClick={openDrawer2}
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
                                src="/1.svg"
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
              <div className="self-stretch w-[264px] hidden flex-col items-center justify-start text-seagreen">
                <div className="self-stretch flex flex-row items-center justify-between">
                  <div className="flex flex-row items-center justify-start gap-[9px]">
                    <img
                      className="relative w-4 h-4"
                      alt=""
                      src="/frame4.svg"
                    />
                    <div className="relative leading-[21px] font-medium">
                      Complete
                    </div>
                    <div className="relative text-sm leading-[21px] text-darkslategray-400 flex items-center w-2 h-4 shrink-0">
                      0
                    </div>
                  </div>
                  <button className="cursor-pointer [border:none] p-1 bg-gray-50 rounded-md flex flex-col items-start justify-start">
                    <img
                      className="relative w-[12.03px] h-3 overflow-hidden shrink-0"
                      alt=""
                      src="/frame3.svg"
                    />
                  </button>
                </div>
                <div className="self-stretch rounded-xl h-[94px] flex flex-row items-center justify-start text-base text-black">
                  <div className="flex-1 rounded-lg bg-white shadow-[0px_2px_4px_rgba(0,_0,_0,_0.08)] flex flex-row p-4 items-center justify-start border-[1px] border-solid border-gainsboro">
                    <div className="self-stretch flex-1 flex flex-row items-center justify-start">
                      <div className="flex-1 flex flex-row items-center justify-start">
                        <h2 className="m-0 flex-1 relative text-[inherit] tracking-[-0.2px] font-light font-inherit">
                          Intro to Quick Build
                        </h2>
                      </div>
                    </div>
                    <div className="flex-1 rounded-10xs bg-white shadow-[0px_2px_4px_rgba(0,_0,_0,_0.08)] box-border h-[27.5px] flex flex-row items-center justify-between border-[1px] border-solid border-gainsboro">
                      <div className="w-[120px] flex flex-row items-center justify-start gap-[6px]">
                        <button className="cursor-pointer [border:none] py-2.5 px-0 bg-[transparent] flex-1 flex flex-row items-center justify-between">
                          <img
                            className="relative w-[7px] h-[7.5px]"
                            alt=""
                            src="/vector11.svg"
                          />
                        </button>
                        <div className="self-stretch bg-gainsboro w-px overflow-hidden shrink-0" />
                        <div className="flex-1 h-[7px] flex flex-row p-2.5 box-border items-center justify-between">
                          <button
                            className="[border:none] p-2.5 bg-[transparent] flex flex-col items-start justify-start cursor-pointer"
                            disabled
                            onClick={openDrawer3}
                          >
                            <img
                              className="relative w-7 h-[5px]"
                              alt=""
                              src="/1.svg"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <DesignOverviewCard
                propJustifyContent="flex-start"
                propColor="#448361"
                propCursor="pointer"
                frame="/frame4.svg"
                counterValue="0"
              />
            </div>
          </div>
        </div>
      </div>
      {isDrawerOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Right"
          onOutsideClick={closeDrawer}
        >
          <Drawer onClose={closeDrawer} />
        </PortalDrawer>
      )}
      {isDrawer2Open && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Right"
          onOutsideClick={closeDrawer2}
        >
          <Drawer onClose={closeDrawer2} />
        </PortalDrawer>
      )}
      {isDrawer3Open && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Right"
          onOutsideClick={closeDrawer3}
        >
          <Drawer onClose={closeDrawer3} />
        </PortalDrawer>
      )}
    </>
  );
};

export default Board;
