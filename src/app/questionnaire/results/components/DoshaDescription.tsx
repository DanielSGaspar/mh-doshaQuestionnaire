import { Card, CardContent } from "@/components/ui/card";
import { DoshaResultType } from "@/types/questionnaire.types";
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";
import { DOSHA_IMAGES } from "@/utils/doshaIcons";
import Image from "next/image";

type DoshaDescriptionProps = {
  dosha: DoshaResultType;
};

const doshaDescriptions = {
  vata: {
    characteristics:
      "Creativity, quick thinking, enthusiasm. Light, expressive and active personalities, but prone to exhaustion, anxiety and dryness.",
    needs: "Warmth, rest, grounding and stability.",
    soapRecommendations: {
      soaps: "Jasmine, calendula & patchouli, lavender, ylang ylang, coconut",
      effects:
        "Nourishing and grounding scents that calm the nervous system and hydrate dry skin.",
    },
  },
  pitta: {
    characteristics:
      "Clarity, leadership, passion. Organised, intense and action-driven, but can lean towards anger, criticism and burnout.",
    needs: "Coolness, gentleness, and time to enjoy without pressure.",
    soapRecommendations: {
      soaps:
        "Peppermint, rosemary, lavender, lemongrass, ylang ylang, charcoal & eucalyptus, coconut",
      effects:
        "Cooling and soothing aromas to balance heat and calm intensity.",
    },
  },
  kapha: {
    characteristics:
      "Stability, tenderness, calm. Patient, loving and dependable, but may tend towards sluggishness, attachment and heaviness.",
    needs: "Movement, lightness, motivation and change.",
    soapRecommendations: {
      soaps:
        "Coffee & cinnamon, rose geranium, rosemary, charcoal & eucalyptus, lemongrass",
      effects: "Stimulating and invigorating blends that awaken and energise.",
    },
  },
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
            <p>They need: {currentDosha.needs}</p>
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
          <h1 className="text-xl font-bold">Soap Recommendations</h1>
          <p>{currentDosha.soapRecommendations.soaps}</p>
          <p className="pt-4">
            <b>Benefits:</b> {currentDosha.soapRecommendations.effects}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
