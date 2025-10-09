import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import downloadIcon from "../../assets/icon-downloads.png";
import ratingIcon from "../../assets/icon-ratings.png";
import likesIcon from "../../assets/icon-review.png";
import { Link, useParams } from "react-router";
import useApp from "../../Hooks/useCard";
import { addToStoredDB } from "../../Utility/addToDB";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const CardDetails = () => {
  const { id } = useParams();
  const data = useApp();
  const [Install, setinstall] = useState();
  const cardData = data.apps;
  console.log(cardData.ratings);
  const convertedId = parseInt(id);
  const card = cardData.find((c) => c.id == convertedId) || {};
  const {
    image,
    title,
    companyName,
    ratings,
    reviews,
    ratingAvg,
    downloads,
    size,
  } = card;
  console.log(ratings);
  const handleAppInstall = (id) => {
    setinstall(id);
    addToStoredDB(id);
    if (Install) {
      toast("This data is exist ");
    }
  };

  return (
    <div>
      <div className="flex justify-start items-center gap-12 m-6 p-5">
        <div className="w-[500px]">
          <img className="rounded-xl" src={image} alt="" />
        </div>
        <div className="space-y-5">
          <h3 className="font-bold text-[#001931] text-4xl">
            {companyName} : {title}
          </h3>
          <p className="text-gray-500 font-bold text-2xl">
            Developed by{" "}
            <span className="bg-gradient-to-b from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
              productive.io
            </span>
          </p>
          <hr className="mt-2 text-gray-300" />
          <div className="flex justify-start items-center gap-12">
            <div className="space-y-2">
              <img src={downloadIcon} alt="" />
              <p>Downloads</p>
              <h3 className="font-bold text-3xl">{downloads}M</h3>
            </div>{" "}
            <div className="space-y-2">
              <img src={ratingIcon} alt="" />
              <p>Average Ratings</p>
              <h3 className="font-bold text-3xl">{ratingAvg}</h3>
            </div>
            <div className="space-y-2">
              <img src={likesIcon} alt="" />
              <p>Total Reviews</p>
              <h3 className="font-bold text-3xl">{reviews}K</h3>
            </div>
          </div>
          <button
            onClick={() => handleAppInstall(id)}
            className="btn bg-[#00D390] text-white font-semibold rounded-lg"
          >
            {Install ? "Installed " : `Install Now (${size} MB)`}
          </button>
        </div>
      </div>
      <div>
        {/* <BarChart ratings={ratings}></BarChart> */}

        <div className=" bg-base-100 border rounded-xl  h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart width={500} height={300} data={cardData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="count" />
              <YAxis />
              <Tooltip />
              <Legend />

              <Bar dataKey="rating " fill="#82ca9d" />
              <Bar
                dataKey="pv"
                fill="#8884d8"
                activeBar={<Rectangle fill="pink" stroke="blue" />}
              />
              <Bar
                dataKey="uv"
                fill="#82ca9d"
                activeBar={<Rectangle fill="gold" stroke="purple" />}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
