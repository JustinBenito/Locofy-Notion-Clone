const BoardDescription = ({
  aBoardToKeepTracValue = "Enter Description...",
}) => {
  return (
    <input
      className="[border:none] font-inter text-sm bg-[transparent] flex-1 relative tracking-[0.1px] text-dark-grey text-left"
      type="text"
      placeholder="A board to keep track of personal tasks."
      value={aBoardToKeepTracValue}
    />
  );
};

export default BoardDescription;
