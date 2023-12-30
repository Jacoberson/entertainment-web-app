import { useState } from "react";
import SearchInput from "../SearchInput/SearchInput";
import TrendingSection from "../TrendingSection/TrendingSection";
import RecommendedSection from "../RecommendedSection/RecommendedSection";
import PropTypes from "prop-types";

HomeTab.propTypes = {
  mediaItems: PropTypes.array,
  setMediaItems: PropTypes.func,
};

export default function HomeTab({ mediaItems, setMediaItems }) {
  const [searchTerm, setSearchTerm] = useState("");
  const recommendedItems = mediaItems.filter(item => item.isTrending !== true);

  const filteredData = recommendedItems.filter(item => {
    if (searchTerm === "") return item;
    else return item.title.toLowerCase().includes(searchTerm);
  });

  return (
    <>
      <SearchInput
        placeholder="Search for movies or TV series"
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      {searchTerm === "" && (
        <TrendingSection
          mediaItems={mediaItems}
          setMediaItems={setMediaItems}
        />
      )}
      <RecommendedSection
        mediaItems={mediaItems}
        setMediaItems={setMediaItems}
        filteredData={filteredData}
        searchTerm={searchTerm}
      />
    </>
  );
}
