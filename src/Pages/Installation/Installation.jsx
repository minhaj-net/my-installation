import React, { useEffect, useState } from "react";
import useApp from "../../Hooks/useCard";
import { getStoredData } from "../../Utility/addToDB";
import InstallationCard from "../../Component/InstallationCard/InstallationCard";

const Installation = () => {
  const data = useApp();
  const cardData = data.apps;

  const [appList, setAppList] = useState([]);
  const [sort, setSort] = useState("none");
  // console.log(cardData);
  useEffect(() => {
    const storedAppData = getStoredData();
    const convartedStoredApp = storedAppData.map((id) => parseInt(id));
    const myAppList = cardData.filter((app) =>
      convartedStoredApp.includes(app.id)
    );
    setAppList(myAppList);
  }, [cardData]);

  const sortedIteam = (() => {
    if (sort === "size-asc") {
      return [...appList].sort((a, b) => a.size - b.size);
    } else if (sort === "size-dsc") {
      return [...appList].sort((a, b) => b.size - a.size);
    } else {
      return appList;
    }
  })();
  return (
    <div className="mt-4">
      <div className="text-center space-y-2 mb-8">
        <h3 className="text-[#001931] font-bold text-4xl">
          Your Installed Apps
        </h3>
        <p className="text-[#627382] text-[20px]">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="flex justify-between items-center ">
        <h3>{appList.length} Apps Found</h3>
        <div>
          <lebel className="from-control  w-full  max-w-xs">
            <select
              className="select b border-violet-500 mr-32"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="none">Sort By Size</option>
              <option value="size-dsc">High-low</option>
              <option value="size-asc ">Low-high</option>
            </select>
          </lebel>
        </div>
      </div>
      <div>
        {sortedIteam.map((app) => (
          <InstallationCard key={app.id} app={app}></InstallationCard>
        ))}
      </div>
    </div>
  );
};

export default Installation;
