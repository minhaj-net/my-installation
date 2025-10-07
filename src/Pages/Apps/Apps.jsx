import React, { useState } from "react";
import useApp from "../../Hooks/useCard";
import downloadIcon from "../../assets/icon-downloads.png";
import ratingIcon from "../../assets/icon-ratings.png";
import { Link } from "react-router";

const Apps = () => {
  const [search, setSearch] = useState("");
  const data = useApp();
  const cardData = data.apps;
  const term = search.trim().toLocaleLowerCase();
  const searchCard = term
    ? cardData.filter((searchCard) =>
        searchCard.companyName.toLocaleLowerCase().includes(term)
      )
    : cardData;

  console.log(searchCard);

  return (
    <div>
      <div className="space-y-2 text-center pt-6 md:p-0 p-2 mb-4">
        <h3 className="text-[##001931] font-medium md:font-bold text-2xl md:text-5xl">
          Our All Applications
        </h3>
        <p className="text-[#627382] text-xl">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-[#001931] font-semibold text-2xl">
            ({searchCard.length}) Apps Found
          </h3>
          <lebel className="input ">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              placeholder="Search Your App"
            />
          </lebel>
        </div>
      </div>
      <div className="grid grid-cols-1 justify-center items-center  md:grid-cols-4 ">
        {searchCard.map((app) => (
          <Link to={`/card/${app.id}`}>
            <div className="card bg-base-100  shadow-sm">
              <figure className=" object-cover">
                <img
                  className="w-[300px] h-[326px]  overflow-hidden rounded-xl"
                  src={app.image}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <p className="text-[#001931] font-medium">
                  {app.companyName} : {app.title}
                </p>
                <div className="flex justify-between items-center">
                  <div className="btn border-none  !rounde-xl">
                    <img className="w-[18px]" src={downloadIcon} alt="" />
                    <p>{app.downloads}M</p>
                  </div>
                  <div className="btn">
                    <img className="w-[18px]" src={ratingIcon} alt="" />
                    {app.ratingAvg}K
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Apps;
