import type { FunctionComponent} from "react";

type ButtonProps = {
    title: string;
    bgcolor: string;
    fontcolor: string;
    width: number;
    height: number;
    onClick: ()=>void;
};
export const Button: FunctionComponent<ButtonProps> = ({title, bgcolor, fontcolor, width, height, onClick}: ButtonProps) => {
  return (
    <button 
      style={{
        backgroundColor: bgcolor,
        width: `${width}px`,
        height: `${height}px`
      }}
      className={"border-solid border rounded-2xl border-yellow-400"}
      onClick={onClick}
    >
      <p style={{ color: fontcolor}} className={`text-1xl text-center font-bold`}>
          {title}
      </p>
    </button>
  );
}
