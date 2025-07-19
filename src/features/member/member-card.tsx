type MemberCardProps = {
  name: string;
  graduationYear: string;
  position?: string;
  profileImage?: string;
  description?: string;
  githubName?: string;
  xUserName?: string;
}

export const MemberCard = ({ name, graduationYear, position, profileImage, description, githubName, xUserName }: MemberCardProps) => {
    return (
        <div className="bg-white border-solid border rounded-xl border-yellow-400 p-4 flex flex-col md:flex-row gap-5 w-full max-w-md">
            <div className="w-20 md:w-28 flex-shrink-0">
                <img src="src/assets/nyariot-icon.svg" alt="運営メンバーのアイコン" className="w-full" />
            </div>
            <div className="flex-1 flex flex-col">
                <div className="flex gap-2">
                    <span className="p-1 border rounded-xl border-yellow-400 text-sm">{position}</span>
                    <span className="p-1 rounded-xl bg-orange-100 text-sm text-orange-800">{graduationYear}年卒</span>
                </div>
                <p className="text-xl leading-10">{name}</p>
                <div className="flex gap-4 text-xs">
                    <p className="text-gray-500 w-32">X(旧Twitter):</p>
                    <p className="text-gray-500">
                        <a
                        href={`https://x.com/${xUserName}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                        >
                        @{xUserName}
                        </a>
                    </p>
                </div>
                <div className="flex gap-4 mt-1 text-xs">
                    <p className="text-gray-500 w-32">GitHub:</p>
                    <p className="text-gray-500">
                        <a
                        href={`https://github.com/${githubName}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                        >
                        {githubName}
                        </a>
                    </p>
                </div>
                <p className="my-3 leading-relaxed">{description}</p>
            </div>
            </div>
    );
}
