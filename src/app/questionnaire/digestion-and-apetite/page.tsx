"use client";

import { digestionAndAppetiteSchema } from "@/app/schemas/digestionAndAppetiteSchema";
import { BottomNavigationButtons } from "@/components/questionnaire/BottomNavigationButtons";
import { QuestionField } from "@/components/questionnaire/QuestionField";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { Progress } from "@/components/ui/progress";
import { useTranslatedDoshaQuestions } from "@/hooks/useTranslatedDoshaQuestions";
import { useQuestionnaireStore } from "@/store/questionnaire-store";
import { useLanguage } from "@/translations/translations";
import { FormValues } from "@/types/questionnaire.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const DigestionAndApetiteSection = () => {
  const router = useRouter();
  const { digestionAndAppetite, updateDigestionAndAppetite } =
    useQuestionnaireStore();

  const { digestionAndAppetite: sectionQuestions } =
    useTranslatedDoshaQuestions();

  const { t } = useLanguage();

  const form = useForm<FormValues>({
    resolver: zodResolver(digestionAndAppetiteSchema),
    mode: "onSubmit",
    defaultValues: digestionAndAppetite,
  });

  const handleBackClick = () => {
    router.push("/questionnaire/physical");
  };

  const onSubmit = (values: FormValues) => {
    router.push("/questionnaire/sleep-patterns");
    updateDigestionAndAppetite(values);
  };

  return (
    <div className="flex flex-col items-center">
      <Card className="mb-6 w-full">
        <CardHeader>
          <CardTitle>
            {t.questionnaire.sectionTitles.digestionAndAppetite}
          </CardTitle>
        </CardHeader>
      </Card>
      <Progress value={(1 / 7) * 100} />
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

export default DigestionAndApetiteSection;
