import { Card } from "../features/kitora/card"
import { GoPerson } from "react-icons/go";
import { GoTrophy } from "react-icons/go";
import { GoCpu } from "react-icons/go";
import { TbNotes } from "react-icons/tb";
import '../App.css'
import { IconContext } from "react-icons";
export const Home = () => {
  return (
    <div className="flex flex-col">
      <div>
        <p className="text-3xl text-center">
          私たちの活動
        </p>
        <div className="flex wrap justify-center">
          <IconContext.Provider value={{ color: "#CA8A04" }}>
            <Card icon={<GoPerson />}
              title="チーム開発"
              description="多様な専門分野を持つメンバーが協力して、IoTシステムの企画から実装まで一貫して取り組んでいます。"
            />
          </IconContext.Provider>
          <IconContext.Provider value={{ color: "#EA580C" }}>
            <Card icon={<GoTrophy />}
              title="コンテスト実績"
              description="IoT関連のハッカソンや技術コンテストで数々の賞を受賞し、高い技術力を証明しています。"
            />
          </IconContext.Provider>
          <IconContext.Provider value={{ color: "#D97706" }}>
            <Card icon={<GoCpu />}
              title="IoT開発"
              description="センサーデバイス、マイコン制御、クラウド連携まで、IoTの全領域をカバーした実践的な開発を行っています。"
            />
          </IconContext.Provider>
          <IconContext.Provider value={{ color: "#EAB308" }}>
            <Card icon={<TbNotes />}
              title="技術発信"
              description="SNSや技術ブログを通じて開発過程や技術知見を積極的に発信し、IoTコミュニティに貢献しています。"
            />
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
}
// export const Kitora = () => {
//   return (
//     <>
//       <div className=" bg-orange-100">
//         <p className = "text-5xl text-center">
//           私たちの活動
//         </p>
//         <div className = "flex wrap justify-center">
//           <IconContext.Provider value={{ color: "#CA8A04" }}>
//           <Card icon = {<GoPerson />} title = "チーム開発" description="多様な専門分野を持つメンバーが協力して、IoTシステムの企画から実装まで一貫して取り組んでいます。"/>
//           </IconContext.Provider>
// <IconContext.Provider value={{ color: "#EA580C" }}>
// <Card icon = {<GoTrophy />} title = "コンテスト実績" description="IoT関連のハッカソンや技術コンテストで数々の賞を受賞し、高い技術力を証明しています。"/>
// </IconContext.Provider>
// <IconContext.Provider value={{ color: "#D97706" }}>
// <Card icon = {<GoCpu />} title = "IoT開発" description="センサーデバイス、マイコン制御、クラウド連携まで、IoTの全領域をカバーした実践的な開発を行っています。"/>
// </IconContext.Provider>
// <IconContext.Provider value={{ color: "#EAB308" }}>
// <Card icon = {<TbNotes />} title = "技術発信" description="SNSや技術ブログを通じて開発過程や技術知見を積極的に発信し、IoTコミュニティに貢献しています。"/>
// </IconContext.Provider>
//         </div>
//       </div>
//     </>
//   );
// }