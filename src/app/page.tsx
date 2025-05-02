import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto pt-8 pb-16 px-4 flex flex-col items-center h-screen">
      <Image
        src="/monte-holistico-logo.png"
        height={250}
        width={250}
        alt="Monte Holistico Logo"
      />
      <div className="max-w-3xl mx-auto text-center">
        <div className="d-flex mb-6">
          <h1 className="text-4xl font-bold">Discover Your Ayurvedic Dosha</h1>
          <p>by Monte Holistico</p>
        </div>
        <p className="text-xl mb-8">
          Take our comprehensive questionnaire to understand your unique
          constitution and receive soap recommendations.
        </p>

        <Button asChild size="lg">
          <Link href="/questionnaire">Start Questionnaire</Link>
        </Button>
      </div>
    </div>
  );
}
