import Card from "../../../components/Card";
import { I_MovieData } from "../../../interfaces/API";

import "./CardList.scss";

interface I_CardList {
  data: Array<I_MovieData> | undefined;
}

const CardList: React.FC<I_CardList> = ({ data }) => {
  return (
    <div className="cardList">
      {data?.map((item: I_MovieData) => (
        <Card
          title={item.title}
          description={item.release_date}
          image={item.poster_path}
          id={item.id}
        />
      ))}
    </div>
  );
};

export default CardList;
