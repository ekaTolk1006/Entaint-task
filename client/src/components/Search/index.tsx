import "./Search.scss";
import React from "react";

export interface I_Search {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder: string;
}

const Search: React.FC<I_Search> = ({ onChange, value, placeholder }) => {
  return (
    <div data-testid="search" className="search">
      <input placeholder={placeholder} onChange={onChange} value={value} />
    </div>
  );
};

export default Search;
