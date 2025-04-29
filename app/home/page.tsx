import React from "react";
import EventList from "./eventList";

export type Card = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

const getData = async () => {
  const data = await fetch("https://fakestoreapi.com/products", {
    next: { revalidate: 600 },
  });
  return data.json();
};

const Home = async () => {
  const posts: Card[] = await getData();

  return (
    <div className="flex flex-row items-center justify-center flex-fill p-2 m-2 gap-8 max-w-lvw flex-wrap ">
      {posts.map((item: Card) => (
        <EventList
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          description={item.description}
          category={item.category}
          image={item.image}
          rating={item.rating}
        />
      ))}
    </div>
  );
};

export default Home;
