import React from "react";
import Banner from "../../Component/Banner/Banner";
import HomeCard from "../../Component/HomeCard/HomeCard";
import useApp from "../../Hooks/useCard";
import LoadingSpinner from "../../Component/LoadingSpiner/LoadingSpiner";

const Home = () => {
  const { loading, error } = useApp();
  if (loading) {
    return (
      <div className="full-page-center">
        <LoadingSpinner></LoadingSpinner>
      </div>
    );
  }
  if (error) {
    return <div>This iteam will not Fount</div>;
  }
  return (
    <div>
      <Banner></Banner>
      <HomeCard></HomeCard>
    </div>
  );
};

export default Home;
