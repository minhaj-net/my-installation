import React from "react";
import downloadIcon from "../../assets/icon-downloads.png";
import ratingIcon from "../../assets/icon-ratings.png";

const InstallationCard = ({ app }) => {
  const { image, title, companyName, ratingAvg, downloads, size, id } = app;
  console.log(app);

  const handleRemove = (id) => {
    const existingList = JSON.parse(localStorage.getItem("appList"));
    const ubdateList = existingList.filter((p) => p.id !== id);
    localStorage.setItem("appList", JSON.stringify(ubdateList));
  };
  return (
    <div className="mt-8 flex justify-between rounded-xl items-center  space-y-3 border-gray-500 p-3 bg-white shadow-lg">
      <div className="flex gap-8  justify-start items-center">
        <div>
          <img className="w-[50px] rounded-lg h-[50px] " src={image} alt="" />
        </div>
        <div>
          <p className="text-[#001931] font-medium text-[20px]">
            {companyName} : {title}
          </p>
          <div className="flex gap-8">
            <div className="flex items-center gap-2">
              <img className="w-[12px] h-[12px]" src={downloadIcon} alt="" />
              <h4 className=" text-[#00D390] font-medium">{downloads}M</h4>
            </div>
            <div className="flex items-center gap-2">
              <img className="w-[12px] h-[12px]" src={ratingIcon} alt="" />
              <p className="text-[#FF8811] font-medium"> {ratingAvg}</p>
            </div>
            <p className="text-[#627382]">{size}MB</p>
          </div>
        </div>
      </div>
      <div>
        <button
          onClick={() => handleRemove(id)}
          className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white"
        >
          Uninstall
        </button>
      </div>
    </div>
  );
};

export default InstallationCard;
