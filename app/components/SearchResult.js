"use client";

import { useDoc } from "../hooks/useFirebase";

export default function SearchResult({ id }) {
  const { data } = useDoc(`/roadmaps/${id}`);

  return <div>{data && <h1>{data?.title}</h1>}</div>;
}
