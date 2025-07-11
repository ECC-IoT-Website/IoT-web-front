import type { FunctionComponent } from "react";

type NewProjectProps = {
  title: string;
  desc: string;
  image: string;
  tag: string;
};
export const NewProject: FunctionComponent<NewProjectProps> = ({ title, desc, image, tag }: NewProjectProps) => {
  return (
    <button className={"w-[430px] h-[410px] border-solid border rounded-2xl border-yellow-400 bg-white flex flex-col"}>
      <img src={image} alt="トップ画" className="border-b border-solid border-gray-100 my-4 w-full h-3/5" />
      <div className="flex mx-4">
        <p className={`text-2xl font-bold text-left w-full`}>
          {title}
        </p>
        <span className="text-[#EAB308] bg-[#FEF9C3] w-[40px] h-[22px] rounded-2xl">
          {tag}
        </span>
      </div>
      <p className={`text-1xl text-left mx-4`}>
        {desc}
      </p>
    </button>
  );
}