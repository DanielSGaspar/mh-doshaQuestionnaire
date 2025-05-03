"use client";

import { healthTendenciesSectionSchema } from "@/app/schemas/healthTendenciesSchema";
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

const HealthTendenciesSection = () => {
  const router = useRouter();

  const { healthTendencies, updateHealthTendencies } = useQuestionnaireStore();

  const { t } = useLanguage();

  const { healthTendencies: sectionQuestions } = useTranslatedDoshaQuestions();

  const form = useForm<FormValues>({
    resolver: zodResolver(healthTendenciesSectionSchema),
    mode: "onSubmit",
    defaultValues: healthTendencies,
  });

  const handleBackClick = () => {
    router.push("/questionnaire/environmental");
  };

  const onSubmit = (values: FormValues) => {
    router.push("/questionnaire/results");
    updateHealthTendencies(values);
  };

  return (
    <div className="flex flex-col items-center">
      <Card className="mb-6 w-full">
        <CardHeader>
          <CardTitle>
            {t.questionnaire.sectionTitles.healthTendencies}
          </CardTitle>
        </CardHeader>
      </Card>
      <Progress value={(6 / 7) * 100} />
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
          <BottomNavigationButtons
            handleBackClick={handleBackClick}
            finalSubmit
          />
        </form>
      </Form>
    </div>
  );
};

export default HealthTendenciesSection;
