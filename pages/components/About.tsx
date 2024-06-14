
  import { cn } from "../../../utils/cn";
    import React from "react";
    import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
    import {
      IconClipboardCopy,
      IconFileBroken,
      IconSignature,
      IconTableColumn,
    } from "@tabler/icons-react";


const About = () => {
  return (

    
    
        <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
          {items.map((item, i) => (
            <BentoGridItem
              
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              className={item.className}
              icon={item.icon}
              
            />
          ))}
        </BentoGrid>
      );
    }
export default About;
    const Skeleton = () => (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
    );
    const items = [
      {
        title: "I priortize client collaboration,fosetring and open communication",
        
        header: "/b1.svg",
        className: "md:col-span-2",
      },
      {
       
        title: "I am very flexible with time zone communication",
        
        header: "https://miro.medium.com/v2/resize:fit:1200/1*taSXhapJcYSB4CGwSPxA5A.png",
        className: "md:col-span-1",
      
      },
      {
        header: "/b5.svg",
        title: "I constantly try to imporve my tech stack",
        className: "md:col-span-1",
        
      },
      {
        title: "Tech ethusiast with a passion for development.",
        header: "https://ids.ac.id/wp-content/uploads/2022/04/tech-stack-scaled.jpg",
        className: "md:col-span-2",
        
      },
    ];


