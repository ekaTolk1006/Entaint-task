import { ChangeEvent, useEffect, useState } from "react";
import Search from "../../components/Search";
import { useGetMovieListQuery } from "../../store/queries";
import CardList from "./CardList";

import "./MainView.scss";
import Pagination from "../../components/Pagination";
import { I_MovieData } from "../../interfaces/API";
import {
  CURRENT_PAGE,
  NO_DATA_TEXT,
  PER_PAGE,
  PLACEHOLDER_TEXT,
} from "./constants";



const MainView: React.FC = () => {
  const { data } = useGetMovieListQuery({ page: 1 });
  const [filteredData, setFilteredData] = useState<Array<I_MovieData>>([]);
  const [value, setValue] = useState<string>("");
  const isSearching: boolean = value.trim().length > 0;
  const [currentPage, setCurrentPage] = useState<number>(CURRENT_PAGE);

  const totalPages: number | null = isSearching
    ? 0
    : Math.ceil((data?.results?.length as number) / PER_PAGE);

  const handleSearch = (): void => {
    if (!data?.results) return;

    const filtered: Array<I_MovieData> = data?.results?.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handlePageChange = (page: number): void => {
    setCurrentPage(page);
  };

  const paginatedItems: Array<I_MovieData> | undefined = data?.results?.slice(
    (currentPage - 1) * PER_PAGE,
    currentPage * PER_PAGE
  );

  useEffect(() => {
    if (data?.results) {
      handleSearch();
    }
  }, [value, data]);

  return (
    <div className="mainView">
      <Search
        placeholder={PLACEHOLDER_TEXT}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
        value={value}
      />

      <div className="mainView__cardList">
        {filteredData?.length ? (
          <CardList data={isSearching ? filteredData : paginatedItems} />
        ) : (
          <div className="mainView__cardList-message">
            <h1>{NO_DATA_TEXT}</h1>
          </div>
        )}
      </div>
      <div className="paginationBlock">
        <Pagination
          pages={totalPages}
          activePage={currentPage}
          onClick={handlePageChange}
        />
      </div>
    </div>
  );
};

export default MainView;
