import React, { useEffect, useState } from "react";
import useApp from "../../Hooks/useCard";
import downloadIcon from "../../assets/icon-downloads.png";
import ratingIcon from "../../assets/icon-ratings.png";
import { Link } from "react-router";
import LoadingSpinner from "../../Component/LoadingSpiner/LoadingSpiner";

const Apps = () => {
  const { apps: cardData, loading, error } = useApp();
  const [search, setSearch] = useState("");
  const [filteredCards, setFilteredCards] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (!loading && cardData?.length > 0) {
      setFilteredCards(cardData);
    }
  }, [loading, cardData]);
  useEffect(() => {
    if (!cardData) return;
    setIsSearching(true);
    const delay = setTimeout(() => {
      const term = search.trim().toLowerCase();
      const results = term
        ? cardData.filter((app) => app.title.toLowerCase().includes(term))
        : cardData;

      setFilteredCards(results);
      setIsSearching(false);
    }, 300);

    return () => clearTimeout(delay);
  }, [search, cardData]);

  if (loading) {
    return (
      <div className="full-page-center h-screen flex justify-center items-center bg-gray-50">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 mt-20 p-8">
        Something has been issue try again
      </div>
    );
  }

  return (
    <div className="md:m-3 m-2">
      <div className="space-y-2 text-center pt-6 md:p-0 p-2 mt-10 mb-8 ">
        <h3 className="text-[#001931] font-bold text-3xl md:text-5xl">
          Our All Applications
        </h3>
        <p className="text-[#627382] text-xl">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="md:flex space-y-2 justify-between items-center mb-4">
        <h3 className="text-[#001931] font-semibold text-2xl">
          ({filteredCards.length}) Apps Found
        </h3>
        <label>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search Apps"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-[#9F62F2]/50 shadow-md transition duration-300 ease-in-out hover:border-[#632EE3]"
          />
        </label>
      </div>

      {isSearching ? (
        <div className="full-page-center flex justify-center items-center">
          <LoadingSpinner />
        </div>
      ) : filteredCards.length > 0 ? (
        <div className="grid grid-cols-1 justify-center gap-4 items-center md:grid-cols-4">
          {filteredCards.map((app) => (
            <Link key={app.id} to={`/card/${app.id}`}>
              <div className="card bg-base-100 mb-4 shadow-xl">
                <figure>
                  <img
                    className="w-[300px] h-[326px] rounded-xl object-cover"
                    src={app.image}
                    alt={app.title}
                  />
                </figure>
                <div className="card-body">
                  <p className="text-[#001931] font-medium">
                    {app.title} : {app.companyName}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="btn border-none">
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
      ) : (
        <div className="text-center space-y-6">
          <h1 className="text-5xl font-black text-gray-500">No Apps Found</h1>
          <Link
            to="/"
            className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white hover:scale-105 transition duration-300 px-12 py-3 rounded-md shadow-md hover:shadow-lg"
          >
            Go Back !
          </Link>
        </div>
      )}
    </div>
  );
};

export default Apps;
