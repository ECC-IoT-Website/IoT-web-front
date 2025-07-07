import type { FunctionComponent, ReactNode } from "react";

type CardProps = {
    icon: ReactNode
    title: string;
    description: string;
}
export const Card: FunctionComponent<CardProps> = ({icon, title, description}: CardProps) => {
  return (
    <div className="bg-white border-solid border rounded-3xl border-yellow-400 p-4 m-4 w-[316px] h-[256px]">
        <p className="text-5xl place-items-center m-5">
            {icon}
        </p>
        <p className="text-1xl text-center font-bold">
            {title}
        </p>
        <p className="text-1xl text-center text-gray-500">
            {description}
        </p>
    </div>
  );
}