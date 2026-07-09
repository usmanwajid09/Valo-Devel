import type { Metadata } from "next";
import { CareersClient } from "@/components/CareersClient";

export const metadata: Metadata = {
  title: "Careers — Join the Valor Devs Team",
  description:
    "Work with a small, senior, AI-native team building serious software for US & UK clients. Remote-first, outcome-driven.",
};

export default function CareersPage() {
  return <CareersClient />;
}
