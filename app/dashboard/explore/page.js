"use client";
import React, { useState } from "react";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox, Hits } from "react-instantsearch";
import SearchResult from "@/app/components/SearchResult";

function ExplorePage() {
  const searchClient = algoliasearch(
    "S1V0P8Z3CV",
    "f08d6472a8fbbbe0cb8cb60a2b837d9a"
  );

  return (
    <div className="mt-12">
      <div>
        <InstantSearch searchClient={searchClient} indexName="ModulearnTitles">
          <SearchBox />
          <Hits
            hitComponent={({ hit }) => <SearchResult id={hit.objectID} />}
          />
        </InstantSearch>
      </div>
    </div>
  );
}

export default ExplorePage;
