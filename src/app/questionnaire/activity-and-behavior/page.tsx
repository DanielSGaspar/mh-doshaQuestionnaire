"use client";

import { activityAndBehaviorSchema } from "@/app/schemas/activityAndBehaviorSchema";
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

const ActivityAndBehaviorSection = () => {
  const router = useRouter();

  const { activityAndBehavior, updateActivityAndBehavior } =
    useQuestionnaireStore();

  const { t } = useLanguage();

  const { activityAndBehavior: sectionQuestions } =
    useTranslatedDoshaQuestions();

  const form = useForm<FormValues>({
    resolver: zodResolver(activityAndBehaviorSchema),
    mode: "onSubmit",
    defaultValues: activityAndBehavior,
  });

  const handleBackClick = () => {
    router.push("/questionnaire/mental-and-emotional-traits");
  };

  const onSubmit = (values: FormValues) => {
    router.push("/questionnaire/environmental");
    updateActivityAndBehavior(values);
  };

  return (
    <div className="flex flex-col items-center">
      <Card className="mb-6 w-full">
        <CardHeader>
          <CardTitle>
            {t.questionnaire.sectionTitles.activityAndBehavior}
          </CardTitle>
        </CardHeader>
      </Card>
      <Progress value={(4 / 7) * 100} />
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

export default ActivityAndBehaviorSection;
