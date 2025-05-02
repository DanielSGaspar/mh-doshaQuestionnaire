"use client";

import { physicalSchema } from "@/app/schemas/physicalSchema";
import { QuestionField } from "@/components/questionnaire/QuestionField";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { Progress } from "@/components/ui/progress";
import { doshaQuestions } from "@/data/doshaQuestions";
import { useQuestionnaireStore } from "@/store/questionnaire-store";
import { FormValues } from "@/types/questionnaire.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const PhysicalSection = () => {
  const router = useRouter();
  const { physicalCharacteristics, updatePhysicalCharacteristics } =
    useQuestionnaireStore();

  const form = useForm<FormValues>({
    resolver: zodResolver(physicalSchema),
    mode: "onSubmit",
    defaultValues: physicalCharacteristics,
  });

  const handleBackClick = () => {
    router.push("/questionnaire");
  };

  const onSubmit = (values: FormValues) => {
    router.push("/questionnaire/digestion-and-apetite");
    updatePhysicalCharacteristics(values);
  };

  return (
    <div className="flex flex-col items-center">
      <Card className="mb-6 w-full">
        <CardHeader>
          <CardTitle>Physical Characteristics</CardTitle>
        </CardHeader>
      </Card>
      <Progress value={0} />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
          {doshaQuestions.physicalCharacteristicsSection.map((question) => (
            <div key={question.id} className="mt-6">
              <QuestionField
                id={question.id}
                options={question.options}
                question={question.text}
              />
            </div>
          ))}
          <div className="flex justify-between w-full pt-4">
            <Button type="button" variant="outline" onClick={handleBackClick}>
              Back
            </Button>
            <Button type="submit">Next</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default PhysicalSection;
