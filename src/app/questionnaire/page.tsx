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
// import { useQuestionnaireStore } from '@/store/questionnaire-store';

export default function QuestionnaireIntro() {
  const router = useRouter();
  const { resetStore } = useQuestionnaireStore();

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
              Ayurvedic Dosha Questionnaire
            </CardTitle>
            <CardDescription>
              Learn about your unique mind-body constitution
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              In Ayurveda, the doshas—Vata, Pitta, and Kapha—are energetic
              forces that make up every individual.
            </p>
            <p>
              This questionnaire will help you discover your unique dosha
              profile, which can guide your dietary, exercise, and lifestyle
              choices for optimal health and well-being.
            </p>
            <p>
              The assessment takes about 5-10 minutes to complete. Answer each
              question based on your natural tendencies throughout your life,
              not just your current state.
            </p>
          </CardContent>
          <CardFooter>
            <Button onClick={handleStart} className="w-full">
              Begin Assessment
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
