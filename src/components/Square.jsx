const Square = ({ value, onClick, isWinningSquare }) => {
  const textColor =
    value === "X"
      ? "text-cyan-400"
      : "text-pink-400";

  return (
    <button
      onClick={onClick}
      className={`
        w-24 h-24
        md:w-28 md:h-28
        border
        rounded-2xl
        text-5xl
        font-bold
        backdrop-blur-lg
        shadow-lg
        flex
        items-center
        justify-center
        transition-all
        duration-300
        hover:scale-105
        active:scale-95
        cursor-pointer
        
        ${
          isWinningSquare
            ? "bg-green-500/30 border-green-400 shadow-green-400/40"
            : "bg-white/10 border-white/10 hover:bg-white/20"
        }
      `}
    >
      <span
        className={`
          ${textColor}
          drop-shadow-lg
          animate-pulse
        `}
      >
        {value}
      </span>
    </button>
  );
};

export default Square;