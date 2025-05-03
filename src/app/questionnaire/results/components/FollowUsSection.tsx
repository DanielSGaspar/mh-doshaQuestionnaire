"use client";

import { useLanguage } from "@/translations/translations";
import Image from "next/image";
import Link from "next/link";

export const FollowUsSection = () => {
  const { t } = useLanguage();
  return (
    <div className="my-8 flex items-center flex-col">
      <p className="mb-2">{t.followUs}</p>
      <Link href="https://www.instagram.com/monte_holistico/">
        <div className="flex items-center gap-4">
          <Image
            height={50}
            width={50}
            src="/instagram.png"
            alt="instagram link"
          />
          <p> @monte_holistico</p>
        </div>
      </Link>
    </div>
  );
};
