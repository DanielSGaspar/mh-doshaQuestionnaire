"use client";

import { cn } from "@/lib/utils"; // Assuming you have the cn utility
import { LANGUAGES, useLanguage } from "@/translations/translations";
import { Button } from "../ui/button";

export function LanguageSelector() {
  const { language, changeLanguage } = useLanguage();

  return (
    <div className="flex gap-8 justify-center items-center h-[75]">
      <Button
        onClick={() => changeLanguage(LANGUAGES.pt)}
        className={cn(
          "flex flex-col items-center justify-center w-[70] hover:w-[75] h-[70] hover:h-[75] rounded-md border-2 bg-transparent p-4 hover:shadow-xl hover:bg-[#8f4c376f] hover:text-accent-foreground",
          language === "pt"
            ? "border-[#8f4c37] bg-[#8f4c3771] shadow-xl w-[72] h-[72]"
            : "border-[#8f4c3795]"
        )}
        aria-label="Portuguese"
      >
        <span className="text-6xl">🇵🇹</span>
      </Button>

      <Button
        onClick={() => changeLanguage(LANGUAGES.en)}
        className={cn(
          "flex flex-col items-center justify-center w-[70] hover:w-[75] h-[70] hover:h-[75] rounded-md border-2 bg-transparent p-4 hover:shadow-xl hover:bg-[#8f4c376f] hover:text-accent-foreground",
          language === "en"
            ? "border-[#8f4c37] bg-[#8f4c3771] shadow-xl w-[72] h-[72]"
            : "border-[#8f4c3795]"
        )}
        aria-label="English"
      >
        <span className="text-6xl">🇬🇧</span>
      </Button>
    </div>
  );
}
