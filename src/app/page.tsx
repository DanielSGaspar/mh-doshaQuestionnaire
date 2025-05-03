"use client";

import { LanguageSelector } from "@/components/landing-page/LanguageSelector";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/translations/translations";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto pt-8 pb-16 px-4 flex flex-col items-center h-screen">
      <div className="my-4">
        <Image
          src="/monte-holistico-logo.png"
          height={250}
          width={250}
          alt="Monte Holistico Logo"
        />
      </div>
      <div className="max-w-3xl mx-auto text-center">
        <div className="d-flex mb-6">
          <h1 className="text-4xl font-bold">{t.landing.title}</h1>
          <p>by Monte Holistico</p>
        </div>
        <div className="my-8">
          <LanguageSelector />
        </div>
        <p className="text-xl mb-8">{t.landing.description}</p>
        <div className="mb-8">
          <Button asChild size="lg">
            <Link href="/questionnaire">{t.landing.startQuestionnaire}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
