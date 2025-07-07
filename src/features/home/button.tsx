import type { FunctionComponent} from "react";

type ButtonProps = {
    title: string;
    bgcolor: string;
    fontcolor: string;
    width: number;
};
export const Button: FunctionComponent<ButtonProps> = ({title, bgcolor, fontcolor, width}: ButtonProps) => {
  return (
    <button 
      style={{
        backgroundColor: bgcolor,
        width: `${width}px`,
        height: "44px",
      }}
    className={"border-solid border rounded-3xl border-yellow-400 p-2 m-[30px]"}>
        <p style={{ color: fontcolor}} className={`text-1xl text-center font-bold content-center`}>
            {title}
        </p>
    </button>
  );
}