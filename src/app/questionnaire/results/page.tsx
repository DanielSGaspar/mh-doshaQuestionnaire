"use client";

import { Button } from "@/components/ui/button";
import { useQuestionnaireStore } from "@/store/questionnaire-store";
import { useRouter } from "next/navigation";
import { DoshaResultItem } from "./components/DoshaResultItem";
import { DoshaDescription } from "./components/DoshaDescription";

const ResultsPage = () => {
  const router = useRouter();
  const { calculateDoshaType, resetStore } = useQuestionnaireStore();

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
      <h1 className="text-3xl py-4 font-bold">
        Dosha Test Result: Interpretation & Guide
      </h1>
      <div className="px-2">
        <div className="container pb-8">
          <p>
            We all have the three doshas within us, but one or two usually
            predominate.
          </p>
          <div className="py-4">
            <p>Check your percentages:</p>
            <div className="flex gap-2 justify-between py-2">
              {sortedDoshaArray.map((doshaResult) => {
                console.log({ doshaResult });

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
          <p>
            If one dosha is significantly higher (over 10% difference), that is
            your primary dosha. If two are close together, your constitution is
            dual. If all three are balanced (less than 7% difference), you have
            a tridoshic constitution. Knowing your predominant dosha helps you
            better care for your body, mind and emotions in daily life.
          </p>
        </div>
      </div>
      <div className="pb-2">
        <h1 className="text-xl font-bold">Get to Know the Doshas</h1>
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
      <div className="mt-5 flex justify-center">
        <Button onClick={handleClick}>Retake test</Button>
      </div>
    </>
  );
};

export default ResultsPage;
