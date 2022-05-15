import React from "react";
import TeamCards from "./TeamCards";

function TeamCardContainer({dataOne}) {
  return (
    <div>
      <h3>Team</h3>
      <div className="photosContainer">
      {dataOne.map((data) => (
        <TeamCards key={data.id} data={data}/>
  ))}
    </div>
    </div>
  );
}

export default TeamCardContainer;
