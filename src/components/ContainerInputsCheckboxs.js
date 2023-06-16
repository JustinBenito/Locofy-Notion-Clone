import AssignDrawer from "./AssignDrawer";
import BoardTime from "./BoardTime";

const ContainerInputsCheckboxs = () => {
  return (
    <div className="self-stretch flex flex-col py-2.5 px-[55px] items-center justify-center gap-[17px] z-[0] text-left text-smi text-darkslategray-200 font-inter">
      <div className="self-stretch h-[109px] flex flex-col items-center justify-between">
        <div className="self-stretch flex flex-row items-center justify-start gap-[181px]">
          <div className="w-[64.03px] flex flex-row items-center justify-between">
            <div className="flex flex-col py-[3px] px-0 items-start justify-start">
              <img
                className="relative w-[15.47px] h-[10.25px]"
                alt=""
                src="/vector2.svg"
              />
            </div>
            <div className="h-[17.8px] overflow-hidden flex flex-col pt-0 pb-[0.7999992370605469px] pr-[1.029998779296875px] pl-0 box-border items-center justify-between">
              <div className="relative leading-[16.8px]">Assign</div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start">
            <AssignDrawer />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[9px]">
          <div className="w-[265px] flex flex-row pt-0 px-0 pb-[0.3999992311000824px] box-border items-center justify-between">
            <div className="w-[90px] flex flex-row items-center justify-between">
              <div className="overflow-hidden flex flex-row items-start justify-start">
                <img className="relative w-4 h-4" alt="" src="/frame7.svg" />
              </div>
              <div className="overflow-hidden flex flex-row pt-0 px-0 pb-[0.7999992370605469px] items-start justify-start">
                <div className="relative leading-[16.8px]">Completed</div>
              </div>
            </div>
            <input
              className="cursor-pointer w-4 overflow-hidden shrink-0 flex flex-row items-center justify-between"
              type="checkbox"
            />
          </div>
          <div className="self-stretch flex flex-row pt-0 px-0 pb-[0.3999992311000824px] items-center justify-start gap-[156px]">
            <div className="w-[90.48px] flex flex-row items-center justify-between">
              <div className="overflow-hidden flex flex-row items-start justify-start">
                <img className="relative w-4 h-4" alt="" src="/frame8.svg" />
              </div>
              <div className="overflow-hidden flex flex-row pt-0 pb-[0.7999992370605469px] pr-[0.48000335693359375px] pl-0 items-start justify-start">
                <div className="relative leading-[16.8px]">Created by</div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start">
              <BoardTime />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row pt-0 px-0 pb-[0.3999992311000824px] items-center justify-start gap-[144px]">
          <div className="w-[102.16px] h-[21px] flex flex-row items-center justify-between">
            <div className="overflow-hidden flex flex-row items-start justify-start">
              <img className="relative w-4 h-4" alt="" src="/frame9.svg" />
            </div>
            <div className="overflow-hidden flex flex-row pt-0 pb-[0.7999992370605469px] pr-[0.160003662109375px] pl-0 items-start justify-start">
              <div className="relative leading-[16.8px]">Created time</div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start">
            <input
              className="[border:none] font-inter text-smi bg-[transparent] relative leading-[21px] text-darkslategray-100 text-left"
              type="text"
              placeholder="May 3, 2023 12:17 PM"
            />
          </div>
        </div>
      </div>
      <div className="h-[21px] flex flex-col p-2.5 box-border items-center justify-between">
        <div className="relative bg-darkslategray-300 w-[509px] h-px" />
      </div>
    </div>
  );
};

export default ContainerInputsCheckboxs;
