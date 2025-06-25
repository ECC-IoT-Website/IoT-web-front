import { useState } from "react";
import { CiHome } from "react-icons/ci";
import { MdOutlinePeople } from "react-icons/md";
import { CiTrophy } from "react-icons/ci";
import { AiOutlineProduct } from "react-icons/ai";
import { CiShare1 } from "react-icons/ci";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

export const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <div className="flex items-center justify-between p-2 border-b border-gray-300">
      <h1><a href="/" className="flex gap-1 items-center font-bold"><img src="src/assets/nyariot-icon.svg" alt="ニャリオットのアイコン" />ECC_IoT部</a></h1>

      {/* モバイルのナビゲーション */}
      <button
        className="md:hidden p-2 hover:opacity-50"
        onClick={() => setMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <IoMdClose /> : <CiMenuBurger />}
      </button>
      {isMenuOpen && (
        <div className="absolute top-12 left-0 w-full bg-white shadow-lg rounded-b-md md:hidden z-50 px-6">
          <nav>
            <ul className="flex flex-col w-full">
              <li><a href="/" className="flex items-center gap-2 px-4 py-3 border-b border-gray-200 hover:opacity-50 "><CiHome />ホーム</a></li>
              <li><a href="/member" className="flex items-center gap-2 px-4 py-3 border-b border-gray-200 hover:opacity-50 "><MdOutlinePeople />運営メンバー</a></li>
              <li><a href="/achievement" className="flex items-center gap-2 px-4 py-3 border-b border-gray-200 hover:opacity-50 "><CiTrophy />実績</a></li>
              <li><a href="/project" className="flex items-center gap-2 px-4 py-3 border-b border-gray-200 hover:opacity-50 "><AiOutlineProduct />プロジェクト</a></li>
            </ul>
          </nav>
          <a href="https://x.com/ecc_IoT_23" target="_blank" rel="noopener noreferrer" className="flex gap-1 items-center text-[#A16207] hover:opacity-50 px-4 py-3 underline">
            <CiShare1 />
            <p>公式X</p>
          </a>
        </div>
      )}

      {/* デスクトップのナビゲーション */}
      <nav className="hidden md:block items-center">
        <ul className="flex gap-4">
          <li><a href="/" className="flex gap-1 items-center hover:opacity-50 px-4 rounded-md"><CiHome />ホーム</a></li>
          <li><a href="/member" className="flex gap-1 items-center hover:opacity-50"><MdOutlinePeople />運営メンバー</a></li>
          <li><a href="/achievement" className="flex gap-1 items-center hover:opacity-50"><CiTrophy />実績</a></li>
          <li><a href="/project" className="flex gap-1 items-center hover:opacity-50"><AiOutlineProduct />プロジェクト</a></li>
        </ul>
      </nav>
      <a href="https://x.com/ecc_IoT_23" target="_blank" rel="noopener noreferrer" className="hidden md:flex gap-1 items-center border border-solid border-orange-300 p-1 rounded text-[#A16207] hover:opacity-50">
        <CiShare1 />
        <p>公式X</p>
      </a>
    </div>
  );
}
