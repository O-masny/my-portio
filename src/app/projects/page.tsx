import { projectDetails } from "@/lib/data/about_me";
import { CardProjectProps } from "@/lib/utils/interfaces";
import dynamic from "next/dynamic";

// Dynamický import klientské komponenty s explicitním typem props
const PortfolioClientSide = dynamic<{ projectDetails: CardProjectProps[] }>(
  () => import("../../lib/components/pages/_projects"),
  { ssr: false }
);

export default function ProjectsPage() {
  return (
    <div>
      <PortfolioClientSide projectDetails={projectDetails} />
    </div>
  );
}