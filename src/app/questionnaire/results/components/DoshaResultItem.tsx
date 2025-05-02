import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";
import { DOSHA_IMAGES } from "@/utils/doshaIcons";
import Image from "next/image";

type DoshaResultItemProps = {
  imagePath: string;
  result: {
    doshaType: string;
    percentage: number;
  };
};

export const DoshaResultItem = ({ result }: DoshaResultItemProps) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image
        src={DOSHA_IMAGES[result.doshaType]}
        width={200}
        height={200}
        alt={`Image of ${result.doshaType} icon`}
      />
      <h1>{capitalizeFirstLetter(result.doshaType)}</h1>
      <h1>{result.percentage}%</h1>
    </div>
  );
};
