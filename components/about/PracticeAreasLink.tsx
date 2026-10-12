"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  PRACTICE_AREAS_HREF,
  markPracticeAreasScrollIntent,
} from "@/lib/practice-areas-navigation";

export default function PracticeAreasLink() {
  const router = useRouter();

  return (
    <Link
      href={PRACTICE_AREAS_HREF}
      onClick={(event) => {
        event.preventDefault();
        markPracticeAreasScrollIntent();
        router.push(PRACTICE_AREAS_HREF);
      }}
      className="inline-flex items-center rounded-full border-[1.5px] border-white/30 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
    >
      Our Practice Areas
    </Link>
  );
}
