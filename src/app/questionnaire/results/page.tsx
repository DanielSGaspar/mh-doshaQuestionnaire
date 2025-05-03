"use client";

import { Button } from "@/components/ui/button";
import { useQuestionnaireStore } from "@/store/questionnaire-store";
import { useRouter } from "next/navigation";
import { DoshaResultItem } from "./components/DoshaResultItem";
import { DoshaDescription } from "./components/DoshaDescription";
import { useLanguage } from "@/translations/translations";
import { FollowUsSection } from "./components/FollowUsSection";

const ResultsPage = () => {
  const router = useRouter();
  const { calculateDoshaType, resetStore } = useQuestionnaireStore();

  const { t } = useLanguage();

  const resultsTranslations = t.questionnaire.results;

  const doshaTypes = calculateDoshaType();

  const sortedDoshaArray = Array.from(doshaTypes).sort(
    (a, b) => b.percentage - a.percentage
  );

  const handleClick = () => {
    resetStore();
    router.push("/questionnaire");
  };

  return (
    <>
      <h1 className="text-3xl py-4 font-bold">{resultsTranslations.title}</h1>
      <div className="px-2">
        <div className="container pb-8">
          <p>{resultsTranslations.topSection.intro}</p>
          <div className="py-4">
            <p>{resultsTranslations.topSection.checkPercentages}</p>
            <div className="flex gap-2 justify-between py-2">
              {sortedDoshaArray.map((doshaResult) => {
                return (
                  <DoshaResultItem
                    key={doshaResult.doshaType}
                    result={doshaResult}
                    imagePath="/pitta-1024x721.png"
                  />
                );
              })}
            </div>
          </div>
          <p>{resultsTranslations.topSection.explanation}</p>
        </div>
      </div>
      <div className="pb-2">
        <h1 className="text-xl font-bold">
          {resultsTranslations.bottomSection.title}
        </h1>
      </div>
      <div className="px-2">
        {sortedDoshaArray.map((doshaResult) => {
          return (
            <div key={doshaResult.doshaType} className="py8">
              <DoshaDescription dosha={doshaResult.doshaType} />
            </div>
          );
        })}
      </div>
      <FollowUsSection />
      <div className="mt-5 flex justify-center">
        <Button onClick={handleClick}>
          {resultsTranslations.bottomSection.retakeTest}
        </Button>
      </div>
    </>
  );
};

export default ResultsPage;
