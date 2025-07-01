import { Card } from "../features/kitora/card"
import { GoPerson } from "react-icons/go";
import { GoTrophy } from "react-icons/go";
import { GoCpu } from "react-icons/go";
import { TbNotes } from "react-icons/tb";
import '../App.css'
export const Home = () => {
  return (
    <div className="flex flex-col">
      <div>
        <p className="text-3xl text-center">
          私たちの活動
        </p>
        <div className="flex flex-wrap justify-center">
            <Card icon={<GoPerson  color="#CA8A04"/>}
              title="チーム開発"
              description="多様な専門分野を持つメンバーが協力して、IoTシステムの企画から実装まで一貫して取り組んでいます。"
            />
            <Card icon={<GoTrophy color="#EA580C"/>}
              title="コンテスト実績"
              description="IoT関連のハッカソンや技術コンテストで数々の賞を受賞し、高い技術力を証明しています。"
            />
            <Card icon={<GoCpu color="#D97706"/>}
              title="IoT開発"
              description="センサーデバイス、マイコン制御、クラウド連携まで、IoTの全領域をカバーした実践的な開発を行っています。"
            />
            <Card icon={<TbNotes color="#EAB308"/>}
              title="技術発信"
              description="SNSや技術ブログを通じて開発過程や技術知見を積極的に発信し、IoTコミュニティに貢献しています。"
            />
        </div>
      </div>
    </div>
  );
}