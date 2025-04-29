import React from "react";
import Image from "next/image";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "next/link";
import { Card } from "../page";

const EventList = (props: { data: Card[] }) => {
  // console.log(props.data);
  return (
    <div className="flex flex-row items-center justify-center p-2 m-2 gap-8 max-w-lvw flex-wrap ">
      {props.data.map((item: Card) => (
        <div
          key={item.id}
          className=" flex flex-col w-58 h-96 border-1 border-white rounded-lg  opacity-80 hover:opacity-100 hover:shadow-lg hover:shadow-white hover:scale-105 transition-all ease-in-out duration-200"
        >
          <Image
            src={item.image}
            alt="image"
            width={500}
            height={500}
            className="w-full h-52 rounded-lg "
          />
          <div className="flex flex-col flex-grow p-4 justify-between">
            <h2>{item.id}</h2>
            <p>{item.title}</p>

            <Link
              href="https://www.youtube.com"
              target="_blank"
              className="flex justify-end items-end "
            >
              <ExpandMoreIcon className=" w-32 h-32 border-2 border-white rounded-full bg-black text-white  hover:bg-white hover:text-black hover:scale-110 transition-all duration-300 ease-in-out" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventList;
