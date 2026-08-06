import { Metadata } from "next";
import PortfolioContent from "@/components/PortfolioContent";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore web development projects, client works, and fullstack applications built by Wahyu Anang.",
};

export default function PortfolioPage() {
  return <PortfolioContent />;
}
