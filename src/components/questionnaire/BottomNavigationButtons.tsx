"use client";

import { useLanguage } from "@/translations/translations";
import { Button } from "../ui/button";

type BottomNavigationButtonsProps = {
  handleBackClick: () => void;
  finalSubmit?: boolean;
};

export const BottomNavigationButtons = ({
  handleBackClick,
  finalSubmit = false,
}: BottomNavigationButtonsProps) => {
  const { t } = useLanguage();

  const { questionnaire: questionnaireTranslations } = t;

  const submitCopy = finalSubmit
    ? questionnaireTranslations.submitButton
    : questionnaireTranslations.nextButton;

  return (
    <div className="flex justify-between w-full pt-4">
      <Button type="button" variant="outline" onClick={handleBackClick}>
        {questionnaireTranslations.backButton}
      </Button>
      <Button type="submit">{submitCopy}</Button>
    </div>
  );
};
