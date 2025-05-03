"use client";

import { doshaQuestions, Option, sectionMapping } from "@/data/doshaQuestions";
import { useLanguage } from "@/translations/translations";

type SectionKey = keyof typeof sectionMapping;

// Define the Question type
export interface TranslatedQuestion {
  id: number;
  category: string;
  text: string;
  options: Option[];
}

// Define the return type for the hook
export type TranslatedQuestions = {
  [K in SectionKey]: TranslatedQuestion[];
};

export const useTranslatedDoshaQuestions = (): TranslatedQuestions => {
  const { t } = useLanguage();

  // Create an object to hold all translated questions by section
  const translatedQuestions = {};

  // Process each section using the sectionMapping
  Object.keys(sectionMapping).forEach((sectionKey) => {
    // Get the question IDs for this section
    const questionIds = sectionMapping[sectionKey];

    // Create an array to hold the translated questions for this section
    translatedQuestions[sectionKey] = questionIds
      .map((id) => {
        // Find the original question from doshaQuestions
        let originalQuestion;

        // Find the right section and question in the original data
        for (const section in doshaQuestions) {
          const question = doshaQuestions[section].find((q) => q.id === id);
          if (question) {
            originalQuestion = question;
            break;
          }
        }

        if (!originalQuestion) {
          console.error(`Question with ID ${id} not found in original data`);
          return null;
        }

        // Get translated question text
        const translatedText =
          t.questionnaire.questions[id]?.text || originalQuestion.text;

        // Get translated options
        const translatedOptions = originalQuestion.options.map((option) => ({
          ...option,
          label:
            t.questionnaire.questions[id]?.options[option.value] ||
            option.label,
        }));

        // Return translated question
        return {
          ...originalQuestion,
          text: translatedText,
          options: translatedOptions,
          category:
            t.questionnaire.sectionTitles[sectionKey] ||
            originalQuestion.category,
        };
      })
      .filter(Boolean) as TranslatedQuestion[]; // Remove any null values
  });

  return translatedQuestions;
};
