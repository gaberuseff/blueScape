import {cn} from "@/lib/utils";

function MaxWidthWrapper({className, children, size = "lg"}) {
  const sizeMap = {
    sm: "max-w-5xl",
    md: "max-w-6xl",
    lg: "max-w-7xl",
    xl: "max-w-8xl",
  };

  return (
    <div
      className={cn(
        "h-full mx-auto w-full px-4 md:px-20",
        sizeMap[size],
        className,
      )}>
      {children}
    </div>
  );
}

export default MaxWidthWrapper;
