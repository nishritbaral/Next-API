import React from "react";
import Navbar from "./components/navbar";
import List from "./components/list";

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

export const getData = async () => {
  const data = await fetch("https://fakestoreapi.com/products", {
    next: { revalidate: 600 },
  });
  return data.json();
};

const Home = async () => {
  const posts: Card[] = await getData();
  console.log(posts);
  return (
    <div>
      <Navbar />
      <List posts={posts} />
    </div>
  );
};

export default Home;
