export default function BookCover({ coverNum = 1, title, size = "md", className = "" }) {
  const isLight = [1, 3, 5, 7].includes(coverNum);

  const sizeClasses = {
    sm: "w-12 h-[70px] text-[7px]",
    md: "aspect-[2/3] text-[11px]",
    lg: "w-[130px] h-[192px] text-[15px]",
    row: "w-[72px] h-[106px] text-[9px]",
  };

  return (
    <div
      className={`cover-${coverNum} rounded-[10px] flex items-center justify-center p-3.5 hover-lift cursor-pointer ${sizeClasses[size]} ${className}`}
    >
      <span
        className={`font-medium text-center leading-tight ${
          isLight ? "cover-light" : "cover-cream"
        }`}
        style={{ whiteSpace: "pre-line" }}
      >
        {title}
      </span>
    </div>
  );
}
