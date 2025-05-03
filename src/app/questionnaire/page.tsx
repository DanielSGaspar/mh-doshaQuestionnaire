// src/app/questionnaire/page.tsx
"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useQuestionnaireStore } from "@/store/questionnaire-store";
import { useLanguage } from "@/translations/translations";
// import { useQuestionnaireStore } from '@/store/questionnaire-store';

export default function QuestionnaireIntro() {
  const router = useRouter();
  const { resetStore } = useQuestionnaireStore();
  const { t } = useLanguage();

  const introTranslations = t.questionnaire.intro;

  const handleStart = () => {
    resetStore();
    router.push("/questionnaire/physical");
  };

  return (
    <div className="container mx-auto px-4 flex h-screen">
      <div>
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-2xl">
              {introTranslations.title}
            </CardTitle>
            <CardDescription>{introTranslations.subtitle}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>{introTranslations.p1}</p>
            <p>{introTranslations.p2}</p>
            <p>{introTranslations.p3}</p>
          </CardContent>
          <CardFooter>
            <Button onClick={handleStart} className="w-full">
              {introTranslations.beginAssessment}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
