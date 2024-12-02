import { useEffect, useState } from "react";
import Search from "../../components/Search";
import { useGetMovieListQuery } from "../../store/queries";
import CardList from "./CardList";

import "./MainView.scss";
import Pagination from "../../components/Pagination";
import { I_MovieData } from "../../interfaces/API";
import { CURRENT_PAGE, PER_PAGE } from "./constants";
interface I_MainView {}

const MainView: React.FC<I_MainView> = () => {
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
    <div className="mainViewBlock">
      <Search onChange={(e) => setValue(e.target.value)} value={value} />
      {filteredData?.length ? (
        <CardList data={isSearching ? filteredData : paginatedItems} />
      ) : (
        <div>
          <h1>No data</h1>
        </div>
      )}
      <Pagination
        pages={totalPages}
        activePage={currentPage}
        onClick={handlePageChange}
      />
    </div>
  );
};

export default MainView;
