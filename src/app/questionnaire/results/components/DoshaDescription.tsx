import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/translations/translations";
import { DoshaResultType } from "@/types/questionnaire.types";
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";
import { DOSHA_IMAGES } from "@/utils/doshaIcons";
import Image from "next/image";

type DoshaDescriptionProps = {
  dosha: DoshaResultType;
};

const colorConfig = {
  vata: {
    borderColor: "#689fc7",
    backgroundColor: "#689fc73d",
  },
  pitta: {
    borderColor: "#ef9102",
    backgroundColor: "#ef910233",
  },
  kapha: {
    borderColor: "#46a085",
    backgroundColor: "#46a08521",
  },
};

export const DoshaDescription = ({ dosha }: DoshaDescriptionProps) => {
  const { t } = useLanguage();

  const resultsTranslations = t.questionnaire.results;

  const doshaDescriptions = t.questionnaire.results.doshasDescriptions;
  const currentDosha = doshaDescriptions[dosha];
  const currentColorConfig = colorConfig[dosha];

  return (
    <Card
      className="w-full my-4"
      style={{
        borderColor: currentColorConfig.borderColor,
        backgroundColor: currentColorConfig.backgroundColor,
      }}
    >
      <CardContent className="pl-8 pr-0">
        <div className="flex items-center">
          <div className="flex flex-col">
            <h1 className="text-xl font-bold">
              {capitalizeFirstLetter(dosha)}
            </h1>
            <p>{currentDosha.characteristics}</p>
            <p>
              {resultsTranslations.additionalCopy.theyNeed}
              {currentDosha.needs}
            </p>
          </div>
          <div className="w-100">
            <Image
              src={DOSHA_IMAGES[dosha]}
              width={100}
              height={100}
              alt={`Image of ${dosha} icon`}
            />
          </div>
        </div>
        <div className="py-4 pr-2">
          <h1 className="text-xl font-bold">
            {resultsTranslations.additionalCopy.soapRecommendations}
          </h1>
          <p>{currentDosha.soapRecommendations.soaps}</p>
          <p className="pt-4">
            <b>{resultsTranslations.additionalCopy.benefits}</b>{" "}
            {currentDosha.soapRecommendations.effects}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
