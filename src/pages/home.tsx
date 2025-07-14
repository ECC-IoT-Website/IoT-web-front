import { Card } from "../features/home/card"
import { Button } from "../features/home/button"
import { NewProject } from "../features/home/newProject"
import { GoPerson } from "react-icons/go";
import { GoTrophy } from "react-icons/go";
import { GoCpu } from "react-icons/go";
import { TbNotes } from "react-icons/tb";
import '../App.css'
export const Home = () => {
  return (
    <div className="flex flex-col">
      <div>
        <h2 className="my-8 text-5xl font-bold text-center">
          ECC_IoT部
        </h2>
        <p className="max-w-4xl mx-auto text-center text-gray-500">
          IoT技術とプログラミングを駆使して、未来のスマート社会を創造する学生団体です。センサー技術、データ分析、クラウド連携など最新技術で革新的なソリューションを開発しています。(仮)
        </p>
        <div className="flex justify-center">
          <div className="m-[30px]">
            <Button
              title="プロジェクトを見る"
              bgcolor="#EAB308"
              fontcolor="#ffffff"
              width={190}
              height={44}
            />
          </div>
          <div className="m-[30px]">
            <Button
              title="運営メンバー紹介"
              fontcolor="#EAB308"
              bgcolor="#ffffff"
              width={150}
              height={44}
            />
          </div>
        </div>
        <h2 className="text-2xl text-center">
          私たちの活動
        </h2>

        <div className="flex flex-wrap justify-center">
          <Card icon={<GoPerson color="#CA8A04" />}
            title="チーム開発"
            description="多様な専門分野を持つメンバーが協力して、IoTシステムの企画から実装まで一貫して取り組んでいます。"
          />
          <Card icon={<GoTrophy color="#EA580C" />}
            title="コンテスト実績"
            description="IoT関連のハッカソンや技術コンテストで数々の賞を受賞し、高い技術力を証明しています。"
          />
          <Card icon={<GoCpu color="#D97706" />}
            title="IoT開発"
            description="センサーデバイス、マイコン制御、クラウド連携まで、IoTの全領域をカバーした実践的な開発を行っています。"
          />
          <Card icon={<TbNotes color="#EAB308" />}
            title="技術発信"
            description="SNSや技術ブログを通じて開発過程や技術知見を積極的に発信し、IoTコミュニティに貢献しています。"
          />
        </div>
        <div className="bg-white max-w-full w-full flex flex-col">
          <div className="flex">
            <h2 className="text-2xl p-10 w-full">
              最新のプロジェクト
            </h2>
            <div className="m-[30px]">
              <Button
                title="もっと見る"
                bgcolor="#ffffff"
                fontcolor="#EAB308"
                width={100}
                height={44}
              >
              </Button>
            </div>
          </div>
          <div className="flex p-10 gap-10 overflow-x-scroll">
            <NewProject
              image="../src/assets/react.svg"
              title="仮のプロジェクト"
              desc="制作中！"
              tag="わあ">
            </NewProject>
            <NewProject
              image="../src/assets/react.svg"
              title="仮のプロジェクト"
              desc="制作中！制作中！"
              tag="わあ">
            </NewProject>
            <NewProject
              image="../src/assets/react.svg"
              title="仮のプロジェクト"
              desc="制作中！制作中！"
              tag="わあ">
            </NewProject>
          </div>
        </div>

        <p className="m-8 text-center text-2xl">
          最新情報
        </p>
        <div className="border-solid border rounded-3xl border-yellow-400 bg-white m-10">
          <div className="text-center mx-auto p-8">
            <h2 className="text-2xl font-bold">
              公式X(旧Twitter)
            </h2>
            <p>
              イベントやハッカソン、部活動の様子などを発信中！
            </p>
            <iframe src={"https://ecccomp.net/IoT/x"} className="mx-auto w-full h-[500px] max-w-4xl">
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
}