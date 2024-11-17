import { CardProjectProps } from "@/lib/utils/interfaces";
import dynamic from "next/dynamic";

// Dynamický import klientské komponenty s explicitním typem props
const PortfolioClientSide = dynamic<{ projectDetails: CardProjectProps[] }>(
  () => import("../../lib/components/pages/_projects"),
  { ssr: false }
);

export default function Portfolio({ projectDetails }: { projectDetails: CardProjectProps[] }) {
  return (
    <div>
      {/* Klientská část */}
      <PortfolioClientSide projectDetails={projectDetails} />
    </div>
  );
}
