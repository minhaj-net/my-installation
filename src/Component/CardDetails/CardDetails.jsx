import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

import downloadIcon from "../../assets/icon-downloads.png";
import ratingIcon from "../../assets/icon-ratings.png";
import likesIcon from "../../assets/icon-review.png";
import { Link, useParams } from "react-router";
import useApp from "../../Hooks/useCard";
import { addToStoredDB } from "../../Utility/addToDB";

import Chart from "../BarChart/Chart";
import LoadingSpinner from "../LoadingSpiner/LoadingSpiner";

const CardDetails = () => {
  const { id } = useParams();
  const data = useApp();
  const [Install, setinstall] = useState();

  useEffect(() => {
    const existingList = JSON.parse(localStorage.getItem("installation")) || [];
    setinstall(existingList.includes(String(id)));
  }, [id]);

  const cardData = data.apps;
  const convertedId = parseInt(id);
  const card = cardData.find((c) => c.id == convertedId) || {};
  const {
    image,
    title,
    companyName,

    reviews,
    ratingAvg,
    downloads,
    description,
    size,
  } = card;

  const handleAppInstall = (id) => {
    if (Install) {
      toast("Data already exits");
    } else {
      toast("App installed successfully");
    }
    setinstall(id);
    addToStoredDB(id);
  };
  const { loading, error } = useApp();
  if (loading) {
    return (
      <div className="full-page-center">
        <LoadingSpinner></LoadingSpinner>
      </div>
    );
  }
  if (error) {
    return <div> This iteam will not Fount</div>;
  }

  return (
    <div>
      <div className=" md:flex justify-start items-center gap-12 m-6 p-5">
        <div className="md:w-[500px] mb-6 md:mb-0 overflow-hidden">
          <img className="rounded-xl" src={image} alt="" />
        </div>
        <div className="space-y-5">
          <h3 className="font-bold text-[#001931] text-4xl">
            {companyName} : {title}
          </h3>
          <p className="text-gray-500 font-bold text-2xl">
            Developed by{" "}
            <span className="bg-gradient-to-b from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
              {companyName}
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

        <div>
          <Chart card={card}></Chart>
        </div>
        <div className="space-y-3 mt-8 m-2">
          <h1 className="text-[##001931] font-bold text-2xl">Description</h1>
          <p>{description}</p>
          <p>{description}</p>
          <br />
          <p>{description}</p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
