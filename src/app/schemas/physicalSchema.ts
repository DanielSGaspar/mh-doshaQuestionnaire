import { doshaQuestions } from "@/data/doshaQuestions";
import { z } from "zod";

const questionFields = doshaQuestions.physicalCharacteristicsSection.reduce(
  (acc, question) => {
    acc[question.id] = z.string({
      required_error: `Please select an option for "${question.text}"`,
    });
    return acc;
  },
  {} as Record<string, z.ZodString>
);

export const physicalSchema = z.object(questionFields);
