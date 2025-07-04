import { MemberCard } from "../features/member/member-card";
export const Member = () => {
  return (
    <div>
      <div className="text-2xl text-center mt-10 mb-4 text-gray-800">運営メンバー紹介</div>
      <div className="text-center text-gray-500 mb-6">IoT技術の各分野に特化したメンバーが集まり、それぞれの専門性を生かして<br></br>革新的なIoTソリューションを開発しています。</div>
      <div className="flex justify-between p-4">
        <MemberCard name="井上明日可" role="部長" />
        <MemberCard name="藤井陽斗" role="副部長" />
      </div>
    </div>
  );
}
