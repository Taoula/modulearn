"use client";
import React, { useState } from "react";
import SearchBar from "app/components/SearchBar.js"; // Import the SearchBar component

function ExplorePage() {
  const handleSearch = (query) => {
    // Implement your search logic here, e.g., make an API request or filter data.
    console.log(`Search query: ${query}`);
  };

  return (
    <div className="mt-12">
      <div>
        <SearchBar onSearch={handleSearch} />{" "}
        {/* Use the SearchBar component */}
        {/* Other content for your Explore page */}
      </div>
    </div>
  );
}

export default ExplorePage;
