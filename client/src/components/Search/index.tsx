import "./Search.scss";
import React from "react";

interface I_Search {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const Search: React.FC<I_Search> = ({ onChange, value }) => {
  return (
    <div className="search">
      <input onChange={onChange} value={value} />
    </div>
  );
};

export default Search;
