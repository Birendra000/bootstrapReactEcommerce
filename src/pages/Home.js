import React from "react";
import { useSelector } from "react-redux";
import Mainsection from "../Components/Mainsection";
import Card from "../Components/Card";
const Home = () => {
  const item_store = useSelector((store) => store.itemStore);
  const items = item_store.items;

  return (
    <>
      <Mainsection />
      <div className="row row-cols-1 row-cols-md-2  row-cols-lg-4 my-3">
        {items.map((item, id) => {
          return <Card key={id} product={item} />;
        })}
      </div>
    </>
  );
};

export default Home;
