import React from "react";
import useApp from "../../Hooks/useCard";
import downloadIcon from "../../assets/icon-downloads.png";
import ratingIcon from "../../assets/icon-ratings.png";
import { Link } from "react-router";

const HomeCard = () => {
  const { apps } = useApp();
  const featuredApp = apps.slice(0, 8);

  return (
    <div>
      <div className="text-center mb-8 space-y-2 mt-8">
        <h3 className="text-[#001931]  font-bold text-4xl">Trending Apps</h3>
        <p className="text-gray-500">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="grid grid-cols-1 justify-center gap-4 items-center mx-auto text-center  md:grid-cols-4 ">
        {featuredApp.map((app, index) => (
          <Link key={index} to={`/card/${app.id}`}>
            <div className="card bg-base-100 hover:shadow-2xl transition duration-300 transform hover:scale-[1.03] overflow-hidden">
              <figure>
                <img
                  className="w-[300px] h-[326px] object-cover rounded-xl"
                  src={app.image}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <p className="text-[#001931] font-medium">
                  {app.title} : {app.companyName}
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
      <div className="text-center mt-4">
        <Link
          to="/apps"
          className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2]  text-white  hover:scale-105 transition duration-300 px-12 py-3 rounded-md shadow-md hover:shadow-lg "
        >
          Show all
        </Link>
      </div>
    </div>
  );
};

export default HomeCard;
