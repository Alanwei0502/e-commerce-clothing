import React from "react";
import Directory from "../../components/directory/Directory";
import { HomePageCotainer } from "./HomePage.styles";
// import "./HomePage.styles.scss";

const HomePage = ({ currentUser }) => {
  return (
    <HomePageCotainer>
      <Directory currentUser={currentUser} />
    </HomePageCotainer>
  );
};

export default HomePage;
