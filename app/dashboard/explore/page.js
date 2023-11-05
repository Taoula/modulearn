"use client";
import React, { useState } from "react";
import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  SearchBox,
  Hits,
  useInstantSearch,
} from "react-instantsearch";
import SearchResult from "@/app/components/SearchResult";
import { QuestionMarkCircleIcon } from "@heroicons/react/20/solid";

function ExplorePage() {
  const searchClient = algoliasearch(
    "S1V0P8Z3CV",
    "f08d6472a8fbbbe0cb8cb60a2b837d9a"
  );

  function EmptyQueryBoundary({ children, fallback }) {
    const { indexUiState } = useInstantSearch();

    if (!indexUiState.query) {
      return fallback;
    }

    return children;
  }

  return (
    <div className="mt-12">
      <div>
        <InstantSearch searchClient={searchClient} indexName="ModulearnTitles">
          <SearchBox
            placeholder="Learn something new..."
            classNames={{
              root: "flex justify-center pb-10",
              form: "flex justify-center w-full ",
              input:
                "flex justify-center px-3 w-4/5 shadow-sm block w-full rounded-md border-0  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
              submit:
                "flex justify-center shadow-sm block px-5 py-3 bg-green-200 rounded-md border-0  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 hover:bg-green-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
            }}
          />
          <EmptyQueryBoundary fallback={null}>
            <Hits
              hitComponent={({ hit }) => <SearchResult id={hit.objectID} />}
            />
          </EmptyQueryBoundary>
        </InstantSearch>
      </div>
    </div>
  );
}

export default ExplorePage;
