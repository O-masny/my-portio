import React from "react";
import { Painting } from "@/lib/utils/interfaces";
import DetailPage from "@/lib/components/pages/detail_paintings";

export default function Page({ params }: { params: Painting }) {
  return (
    <div>
      <DetailPage params={params} />
    </div>
  );
}
