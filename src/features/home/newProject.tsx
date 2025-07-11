import type { FunctionComponent } from "react";
import { Button } from "./button"

type NewProjectProps = {
  title: string;
  desc: string;
  image: string;
  tag: string;
};
export const NewProject: FunctionComponent<NewProjectProps> = ({ title, desc, image, tag }: NewProjectProps) => {
  return (
    <button className={"w-[430px] h-[410px] border-solid border rounded-2xl border-yellow-400 py-2xl m-2xl bg-white flex flex-col"}>
      <img src={image} alt="トップ画" className="my-4 w-full h-3/5" />
      <div className="flex mx-4">
        <p className={`text-2xl font-bold text-left w-full`}>
          {title}
        </p>
        <Button
          title={tag}
          fontcolor="#EAB308"
          bgcolor="#FEF9C3"
          width={40}
          height={22}
        />
      </div>
      <p className={`text-1xl text-left font-bold mx-4`}>
        {desc}
      </p>
    </button>
  );
}