import { MemberCard } from "../features/member/member-card";

export const Member = () => {
  return (
    <div>
      <h2 className="text-center text-5xl my-8 font-bold">運営メンバー紹介</h2>
      <p className="text-center max-w-4xl mx-auto text-gray-500 mb-10">ITの各分野に特化したメンバーが集まり、それぞれの専門性を生かして、多種多様なITソリューションを開発しています。</p>
      <div className="flex gap-10 flex-wrap justify-center">
        <MemberCard name="井上明日可" graduationYear="2027" position="部長" profileImage="" description="ここに説明文を書きます。(仮)" />
        <MemberCard name="藤井陽斗" graduationYear="2028" position="副部長" profileImage="" description="ここに説明文を書きます。(仮)" />
        <MemberCard name="篠原晴哉" graduationYear="2026" position="渉外" profileImage="" description="ここに説明文を書きます。(仮)" />
        <MemberCard name="波戸梓実" graduationYear="2028" position="渉外" profileImage="" description="ここに説明文を書きます。(仮)" />
      </div>
    </div>
  );
}
