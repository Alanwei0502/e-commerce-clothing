import React from "react";
import Directory from "../../components/directory/Directory";
import "./HomePage.styles.scss";

const HomePage = ({ currentUser }) => {
  return (
    <div className="HomePage">
      <Directory currentUser={currentUser} />
    </div>
  );
};

export default HomePage;
