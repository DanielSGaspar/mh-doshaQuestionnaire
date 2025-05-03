"use client";

import { environmentalSectionSchema } from "@/app/schemas/environmentalSchema";
import { BottomNavigationButtons } from "@/components/questionnaire/BottomNavigationButtons";
import { QuestionField } from "@/components/questionnaire/QuestionField";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { Progress } from "@/components/ui/progress";
import { doshaQuestions } from "@/data/doshaQuestions";
import { useTranslatedDoshaQuestions } from "@/hooks/useTranslatedDoshaQuestions";
import { useQuestionnaireStore } from "@/store/questionnaire-store";
import { useLanguage } from "@/translations/translations";
import { FormValues } from "@/types/questionnaire.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const EnvironmentalSection = () => {
  const router = useRouter();

  const { environmental, updateEnvironmental } = useQuestionnaireStore();

  const { t } = useLanguage();

  const { environmentalResponses: sectionQuestions } =
    useTranslatedDoshaQuestions();

  const form = useForm<FormValues>({
    resolver: zodResolver(environmentalSectionSchema),
    mode: "onSubmit",
    defaultValues: environmental,
  });

  const handleBackClick = () => {
    router.push("/questionnaire/activity-and-behavior");
  };

  const onSubmit = (values: FormValues) => {
    router.push("/questionnaire/health-tendencies");
    updateEnvironmental(values);
  };

  return (
    <div className="flex flex-col items-center">
      <Card className="mb-6 w-full">
        <CardHeader>
          <CardTitle>
            {t.questionnaire.sectionTitles.environmentalResponses}
          </CardTitle>
        </CardHeader>
      </Card>
      <Progress value={(5 / 7) * 100} />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
          {sectionQuestions.map((question) => (
            <div key={question.id} className="mt-6">
              <QuestionField
                id={question.id}
                options={question.options}
                question={question.text}
              />
            </div>
          ))}
          <BottomNavigationButtons handleBackClick={handleBackClick} />
        </form>
      </Form>
    </div>
  );
};

export default EnvironmentalSection;
