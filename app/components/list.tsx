import React from "react";
import Image from "next/image";

const List = async () => {
  const data = await fetch("https://fakestoreapi.com/products",{next:{revalidate:600}});
  // console.log(data);
  const posts = await data.json();
  //   console.log(posts);

  return (
    <div className="flex flex-row items-center justify-center gap-8 max-w-lvw flex-wrap ">
      {posts.map((item) => (
        <div
          key={item.id}
          className="w-50 h-100 shadow-lg shadow-white rounded-lg"
        >
          <Image
            src={item.image}
            alt="image"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "200px" }}
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
