// import React from "react";
// import { useParams } from "react-router-dom";

// const EntrepreneurProfile = () => {
//   const { id } = useParams();
//   return <div className="p-4">Entrepreneur Profile Page for ID: {id}</div>;
// };

// export default EntrepreneurProfile;
import React from "react";
import { useParams } from "react-router-dom";

const EntrepreneurProfile = () => {
  const { id } = useParams();
  return <div className="p-4">Entrepreneur Profile Page for ID: {id}</div>;
};

export default EntrepreneurProfile;