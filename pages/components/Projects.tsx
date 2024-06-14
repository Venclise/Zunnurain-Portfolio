import PinContainer from "./ui/3d-pin"
const Projects = () => {
  return (
    <div className="w-full h-max flex items-center justify-center mt-4 p-10 flex-col">
      <h1 className="font-semibold text-4xl text-white">Projects</h1>
      <div className="p-5 max-sm:mt-4 mt-12">
      
      {ProjectData.map((item) => {
        return (
          <PinContainer title={item.title} href={item.href}> 
          <a target="_blank"href={item.href} className="underline-none bg-black border border-slate-700 h-[60vh] w-[30rem] max-sm:w-[20rem] rounded-md overflow-hidden flex flex-col">
            <img
              src={item.image}
              alt={item.title}
              className="h-[50vh] w-full obejct-cover"
            />
<div className="p-5">
            <h1 className="font-semibold text-white text-3xl">{item.title}</h1>
            <h2 className="font-nornal text-xs text-gray-500 mt-2 line-clamp-2">{item.desc}</h2>
</div>
          </a>
          </PinContainer>
        );
      })}
        </div>
    </div>
  );
};

const ProjectData = [
  {
    id: 1,
    title: "Brain AI",
    desc:
      "Brain AI is a platform that allows users to create and share their own AI models",
    image: "/brain-ai.png",
    href: "https://brain-ai-two.vercel.app/"
  },
];

export default Projects;
