import { CiTrophy } from "react-icons/ci";
import type { Member } from "../../types/member";

type AchievementCardProps = {
    title: string;
    description?: string;
    category: string;
    date: string;
    githubUrl?: string;
    demoUrl?: string;
    imageUrl?: string;
    projectId?: number;
    members?: Member[],
}

export const AchievementCard = ({ title, description, category, date, githubUrl, demoUrl, imageUrl, projectId, members }: AchievementCardProps) => {
    return (
        <div className="flex gap-3 p-4 bg-white border-solid border rounded-xl border-yellow-400">
            <CiTrophy size={45} color="#EAB308" className="rounded-full bg-yellow-100 p-2" />
            <div>
                <div className="flex gap-2">
                    <span className="p-1 border-solid border rounded-xl border-yellow-400 text-sm">{date}</span>
                    <span className="p-1 rounded-xl bg-orange-100 text-sm text-orange-800">{category}</span>
                </div>
                <p className="text-xl leading-10">{title}</p>
                <p>{description}</p>
            </div>
        </div>
    );
}