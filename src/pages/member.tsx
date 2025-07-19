import { MemberCard } from "../features/member/member-card";
import { sampleMember } from "../data/sample-member";

export const Member = () => {
  const memberList = sampleMember;
  return (
    <div>
      <h2 className="text-center text-5xl my-8 font-bold">運営メンバー紹介</h2>
      <p className="text-center mx-auto text-gray-500 px-4 lg:max-w-4xl ">
        ITの各分野に特化したメンバーが集まり、それぞれの専門性を生かして、多種多様なITソリューションを開発しています。
      </p>
      <div className="flex gap-10 flex-wrap justify-center m-10">
        {memberList.map((member) => (
          <MemberCard
            key={member.id}
            name={member.name}
            graduationYear={member.graduationYear}
            position={member.position}
            profileImage={member.profileImage}
            description={member.description}
            githubName={member.githubName}
            xUserName={member.xUserName}
          />
        ))}
      </div>
    </div>
  );
};
