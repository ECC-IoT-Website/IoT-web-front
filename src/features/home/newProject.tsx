import type { FunctionComponent } from "react";

type NewProjectProps = {
  title: string;
  desc: string;
  image: string;
  tag: string;
};
export const NewProject: FunctionComponent<NewProjectProps> = ({ title, desc, image, tag }: NewProjectProps) => {
  return (
    <button className="min-w-60 w-full max-w-sm border border-yellow-400 rounded-2xl bg-white flex flex-col shadow-sm">
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
