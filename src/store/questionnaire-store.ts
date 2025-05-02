import { QuestionnaireState } from "@/types/store.types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const calculateDoshaScores = (
  allAnswers: Record<string, Record<string, string>>
) => {
  let vata = 0;
  let pitta = 0;
  let kapha = 0;
  let totalQuestions = 0;

  // Iterate through all sections and questions
  Object.values(allAnswers).forEach((section) => {
    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
    Object.entries(section).forEach(([_, answer]) => {
      if (answer === "Vata") vata++;
      if (answer === "Pitta") pitta++;
      if (answer === "Kapha") kapha++;
      totalQuestions++;
    });
  });

  console.log({ vata, pitta, kapha, totalQuestions });

  const percentageResults = [
    {
      doshaType: "vata",
      percentage: Math.round((vata / totalQuestions) * 100),
    },
    {
      doshaType: "pitta",
      percentage: Math.round((pitta / totalQuestions) * 100),
    },
    {
      doshaType: "kapha",
      percentage: Math.round((kapha / totalQuestions) * 100),
    },
  ];

  return percentageResults;
};

export const useQuestionnaireStore = create<QuestionnaireState>()(
  persist(
    (set, get) => ({
      physicalCharacteristics: {},
      digestionAndAppetite: {},
      sleepPatterns: {},
      mentalAndEmotionalTraits: {},
      activityAndBehavior: {},
      environmental: {},
      healthTendencies: {},

      updatePhysicalCharacteristics: (values) =>
        set({ physicalCharacteristics: values }),
      updateDigestionAndAppetite: (values) =>
        set({ digestionAndAppetite: values }),
      updateSleepPatterns: (values) => set({ sleepPatterns: values }),
      uptdateMentalAndEmotionalTraits: (values) =>
        set({ mentalAndEmotionalTraits: values }),
      updateActivityAndBehavior: (values) =>
        set({ activityAndBehavior: values }),
      updateEnvironmental: (values) => set({ environmental: values }),
      updateHealthTendencies: (values) => set({ healthTendencies: values }),

      calculateDoshaType: () => {
        const {
          physicalCharacteristics,
          digestionAndAppetite,
          sleepPatterns,
          mentalAndEmotionalTraits,
          activityAndBehavior,
          environmental,
          healthTendencies,
        } = get();

        return calculateDoshaScores({
          physicalCharacteristics,
          digestionAndAppetite,
          sleepPatterns,
          mentalAndEmotionalTraits,
          activityAndBehavior,
          environmental,
          healthTendencies,
        });
      },

      resetStore: () =>
        set({
          physicalCharacteristics: {},
          digestionAndAppetite: {},
          sleepPatterns: {},
          mentalAndEmotionalTraits: {},
          activityAndBehavior: {},
          environmental: {},
          healthTendencies: {},
        }),
    }),
    {
      name: "dosha-questionnaire-storage", // Name for localStorage
    }
  )
);
