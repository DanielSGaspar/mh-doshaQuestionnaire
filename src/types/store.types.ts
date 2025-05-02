import { DoshaResult } from "./questionnaire.types";

export interface QuestionnaireState {
  // All form sections
  physicalCharacteristics: Record<string, string>;
  digestionAndAppetite: Record<string, string>;
  sleepPatterns: Record<string, string>;
  mentalAndEmotionalTraits: Record<string, string>;
  activityAndBehavior: Record<string, string>;
  environmental: Record<string, string>;
  healthTendencies: Record<string, string>;
  // Add other sections as needed

  // Actions
  updatePhysicalCharacteristics: (values: Record<string, string>) => void;
  updateDigestionAndAppetite: (values: Record<string, string>) => void;
  updateSleepPatterns: (values: Record<string, string>) => void;
  uptdateMentalAndEmotionalTraits: (values: Record<string, string>) => void;
  updateActivityAndBehavior: (values: Record<string, string>) => void;
  updateEnvironmental: (values: Record<string, string>) => void;
  updateHealthTendencies: (values: Record<string, string>) => void;
  // Add other update actions

  calculateDoshaType: () => DoshaResult[];

  // Reset store
  resetStore: () => void;
}
