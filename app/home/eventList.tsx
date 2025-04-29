"use client";

import React, { useState } from "react";
import Image from "next/image";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EventCard from "./eventCard";

interface props {
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
}

const EventList = ({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}: props) => {
  const [open, setOpen] = useState(false);
  // console.log(props.data);

  return (
    <div className=" flex flex-col w-58 h-96 border-1 border-white rounded-lg  opacity-80 hover:opacity-100 hover:shadow-lg hover:shadow-white hover:scale-105 transition-all ease-in-out duration-200">
      <Image
        src={image}
        alt="image"
        width={500}
        height={500}
        className="w-full h-52 rounded-lg "
      />
      <div className="flex flex-col flex-grow p-4 justify-between">
        <h2>{id}</h2>
        <p>{title}</p>

        <div className="flex justify-end items-end">
          <ExpandMoreIcon
            className=" w-32 h-32 border-2 border-white rounded-full bg-black text-white  hover:bg-white hover:text-black hover:scale-110 transition-all duration-300 ease-in-out"
            onClick={() => {
              setOpen(true);
            }}
          />
        </div>
      </div>
      <EventCard
        state={open}
        stateChange={setOpen}
        id={id}
        title={title}
        price={price}
        description={description}
        category={category}
        image={image}
        rating={rating}
      />
    </div>
  );
};

export default EventList;
