import { AchievementCard } from "../features/achievement/achivement-card";
import { sampleAchievment } from "../data/sample-achievment";

export const Achievement = () => {
  const achievementList = sampleAchievment;
  return (
    <div className="w-full">
      <h2 className="text-center text-5xl my-8 font-bold">実績・受賞歴</h2>
      <p className="text-center max-w-4xl mx-auto text-gray-500 mb-10">IoT技術の研究開発と実用化に取り組み、数多くのコンテストで受賞してい
ます。 これらの実績は、メンバーの技術力と創造性の証明です。</p>
      <div className="flex flex-col gap-5">
        {achievementList.map((achievement) => (
          <AchievementCard
            title={achievement.title}
            description={achievement.description}
            category={achievement.category}
            date={achievement.date}
          />
        ))}
      </div>
    </div>
  );
}
