import React from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";

interface props {
  state: boolean;
  stateChange: any;
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

const EventCard = ({
  state,
  stateChange,
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}: props) => {
  console.log({
    state,
    stateChange,
    id,
    title,
    price,
    description,
    category,
    image,
    ratingRate: rating.rate,
  });
  return (
    <Dialog
      open={state}
      PaperProps={{
        className:
          "!bg-[#000000] min-w-[60vw] min-h-[80vh] border-1 border-white",
      }}
    >
      <DialogContent className="flex flex-col flex-fill p-2 m-2 gap-8">
        <div className="flex h-[10] w-[10] justify-end items-end">
          <CloseIcon
            className=" w-10 h-10 border-2 border-white rounded-full bg-black text-white  hover:bg-white hover:text-black hover:scale-110 transition-all duration-300 ease-in-out"
            onClick={() => {
              stateChange(!state);
            }}
          />
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col">
            <DialogTitle className="text-white text-3xl">
              {id}. {title}
            </DialogTitle>
          </div>
          <div className="flex flex-row flex-fill">
            <Image
              src={image}
              alt="image"
              width={500}
              height={500}
              className="w-52 h-52 rounded-lg p-2 m-2"
            />
            <p className="text-1xl text-white p-2 m-2">
              Description:
              <br />
              {description}
              <br />
              <br />
              Price: {price}
              <br />
              <br />
              Rating:{rating.rate}
            </p>
          </div>
          <Link href={image}>
            <p className="text-1xl text-blue-300 p-2 m-2">Click Here To Buy</p>
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EventCard;
