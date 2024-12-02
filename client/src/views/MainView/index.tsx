import { useEffect, useMemo, useState } from "react";
import Search from "../../components/Search";
import { useGetMovieListQuery } from "../../store/queries";
import CardList from "./CardList";

import "./MainView.scss";
import Pagination from "../../components/Pagination";
interface I_MainView {}

const MainView: React.FC<I_MainView> = () => {
  const { data } = useGetMovieListQuery({ page: 1, language: "", region: "" });
  const [filteredData, setFilteredData] = useState(data?.results);
  const [value, setValue] = useState<string>("");
  const [pagination, setPagination] = useState<{
    currentPage: number;
    itemsPerPage: number;
  }>({
    currentPage: 1,
    itemsPerPage: 10,
  });
  const totalPages: number = Math.ceil(
    data?.results?.length / pagination.itemsPerPage
  );

  const handleSearch = () => {
    if (!data?.results) return;

    const filtered = data?.results?.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handlePageChange = (page: number) => {
    setPagination({ ...pagination, currentPage: page });
  };

  useEffect(() => {
    if (data?.results) {
      handleSearch();
    }
  }, [value, data]);

  return (
    <div className="mainViewBlock">
      <Search onChange={(e) => setValue(e.target.value)} value={value} />
      {filteredData?.length ? (
        <CardList data={filteredData} />
      ) : (
        <h1>No data</h1>
      )}
      <Pagination
        pages={totalPages}
        activePage={pagination.currentPage}
        onClick={handlePageChange}
      />
    </div>
  );
};

export default MainView;
