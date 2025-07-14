type MemberCardProps = {
  name: string;
  graduationYear: string;
  position?: string;
  profileImage?: string;
  description?: string;
}

export const MemberCard = ({ name, graduationYear, position, profileImage, description }: MemberCardProps) => {
    return (
        <div className="bg-white border-solid border rounded-xl border-yellow-400 p-4 flex gap-5 md:min-w-[500px]">
            <div>
            <img src="src/assets/nyariot-icon.svg" alt="運営メンバーのアイコン" className="w-28" />
            </div>
            <div>
            <div className="flex gap-2">
                <span className="p-1 border-solid border rounded-xl border-yellow-400 text-sm">{position}</span>
                <span className="p-1 rounded-xl bg-orange-100 text-sm text-orange-800">{graduationYear}年卒</span>
            </div>
            <p className="text-xl leading-10">{name}</p>
            <p className="text-gray-500">X(旧Twitter) <a href="">@123456789(仮)</a></p>
            <p className="my-3">{description}</p>
            </div>
        </div>
    );
}