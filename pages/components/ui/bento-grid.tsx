import { cn } from "../../../utils/cn";




export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  i,
  className,
  title,
  description,
  header,
  icon,
  
}: {
  i: number;
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: string;
  icon?: React.ReactNode;
  Globe?:string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none bg-black border pb-4 border-slate-700 justify-between flex flex-col overflow-hidden",
        className
      )}
    >
      <img src={header} className="w-full h-[70%] object-cover" />
      
      <div className="group-hover/bento:translate-x-2 transition duration-200">
    
        <div className="font-sans font-bold m-2 text-neutral-200 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal m-2 text-neutral-400 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
