type MemberCardProps = {
    name: string;
    role: string;
}

export const MemberCard = ({name, role}: MemberCardProps) => {
  return (
    <div className="bg-white py-5 px-10 rounded-2xl border-solid border-2 border-yellow-800 text-center">
      <p className="text-2xl mb-4">{name}</p>
      <span className="bg-red-200 rounded-xl p-1 mt-4">{role}</span>
    </div>
  );
}
