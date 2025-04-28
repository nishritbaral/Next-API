import React from "react";
import Image from "next/image";

type card = {
  id: number;
  title: string;
  price: number;
  decription: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};
const List = async () => {
  const data = await fetch("https://fakestoreapi.com/products", {
    next: { revalidate: 600 },
  });
  // console.log(data);
  const posts: card[] = await data.json();
  // console.log(posts);

  return (
    <div className="flex flex-row items-center justify-center gap-8 max-w-lvw flex-wrap ">
      {posts.map((item: card) => (
        <div
          key={item.id}
          className="w-50 h-100 border-1 border-white rounded-lg hover:shadow-lg hover:shadow-white hover:scale-105 transition-all ease-in-out duration-250 "
        >
          <Image
            src={item.image}
            alt="image"
            width="500"
            height="500"
            className="w-full h-52 rounded-lg "
          />
          <div className="flex flex-col p-4">
            <h2>{item.id}</h2>
            <p>{item.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
