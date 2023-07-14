import React from "react";
import { useQuery } from "@tanstack/react-query";

export default function Page_1() {

  const fetchFunction = async () => {
    const data = await fetch(
      "https://www.mockachino.com/3fdcbffc-c668-41/api/request/all"
    );
    const res = await data.json();
    return res;
  };

  const data = useQuery({
    queryKey: ["page_1"],
    queryFn: () => fetchFunction(),
  });

  return (
    <div>
      Page_1
    </div>
  );
}
