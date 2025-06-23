import { CiHome } from "react-icons/ci";
import { MdOutlinePeople } from "react-icons/md";
import { CiTrophy } from "react-icons/ci";
import { AiOutlineProduct } from "react-icons/ai";
import { CiShare1 } from "react-icons/ci";

export const Header = () => {
  return (
    <div className="flex items-center justify-between p-2 border-b border-gray-300">
      <h1><a href="/" className="flex gap-1 items-center font-bold"><img src="src/assets/nyariot-icon.svg" alt="ニャリオットのアイコン" />ECC_IoT部</a></h1>
      <nav>
        <ul className="flex gap-4">
          <li><a href="/" className="flex gap-1 items-center"><CiHome />ホーム</a></li>
          <li><a href="/member" className="flex gap-1 items-center"><MdOutlinePeople />運営メンバー</a></li>
          <li><a href="/achievement" className="flex gap-1 items-center"><CiTrophy />実績</a></li>
          <li><a href="/project" className="flex gap-1 items-center"><AiOutlineProduct />プロジェクト</a></li>
        </ul>
      </nav>
      <button className="flex gap-1 items-center border border-solid border-orange-300 p-1 rounded text-[#A16207]" onClick={() => window.open('https://x.com/ecc_IoT_23')}>
        <CiShare1 />
        <p>公式X</p>
      </button>
    </div>
  );
}
