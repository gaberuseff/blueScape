import {cn} from "@/lib/utils";

function MaxWidthWrapper({className, children}) {
  return (
    <div
      className={cn(
        "h-full mx-auto w-full max-w-7xl px-4 md:px-20",
        className,
      )}>
      {children}
    </div>
  );
}

export default MaxWidthWrapper;
