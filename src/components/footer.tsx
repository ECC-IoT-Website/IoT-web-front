import { CiShare1 } from "react-icons/ci";

export const Footer = () => {
  return (
    <div className="flex items-center justify-around p-8 bg-[#111827] text-white">
      <div className="flex flex-col w-full">
        <div className="md:flex justify-around">
          <div className="basis-1/4">
            <h1><a href="/" className="flex gap-1  font-bold text-lg my-3"><img src="src/assets/nyariot-icon.svg" alt="ニャリオットのアイコン" />ECC_IoT部</a></h1>
            <p className="text-gray-400 w-8/12">ECC_IoT部は、大阪・中崎にあるECCコンピューター専門学校の学生団体です。</p>
          </div>
          <div className="basis-1/4">
            <p className="my-3">クイックリンク</p>
            <ul className="text-gray-400">
              <li className="my-1.5"><a href="/">ホーム</a></li>
              <li className="my-1.5"><a href="/member">運営メンバー紹介</a></li>
              <li className="my-1.5"><a href="/achievement">実績・受賞歴</a></li>
              <li className="my-1.5"><a href="/project">IoTプロジェクト</a></li>
            </ul>
          </div>
          <div className="basis-1/4">
            <p className="my-3">お問い合わせ</p>
            <ul className="text-gray-400 ">
              <li className="my-1.5">メールアドレス：ecc.IoT.23@gmail.com</li>
              <li className="my-1.5">活動場所：ECCコンピュータ専門学校 ３号館５階</li>
              <li className="my-1.5">活動時間：平日 17:00-22:00</li>
            </ul>
          </div>
          <div className="basis-1/4">
            <p className="my-3">SNS・外部リンク</p>
              <ul className="bg-gray-800 rounded-xl p-3 w-full">
                <li className=" text-gray-400">
                  <a href="https://x.com/ecc_IoT_23" className="flex items-center">
                  <CiShare1/><p>公式X</p>
                  </a>
                </li>
                <li>
                  <a href="https://x.com/ecc_IoT_23">
                  @ecc_IoT_23
                  </a>
                </li>
              </ul>
          </div>
        </div>
        <div className="text-center text-gray-400 border-t border-gray-800 border-solid mt-8">
          <p className="mt-8 mb-2">Made with by ECC IoT部 ・   &copy; 2025 ECC的なやつ</p>
        </div>
      </div>
    </div>
  );
}
