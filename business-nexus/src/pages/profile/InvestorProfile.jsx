// import React from "react";
// import { useParams } from "react-router-dom";

// const InvestorProfile = () => {
//   const { id } = useParams();
//   return <div className="p-4">Investor Profile Page for ID: {id}</div>;
// };

// export default InvestorProfile;
import React from "react";
import { useParams } from "react-router-dom";

const InvestorProfile = () => {
  const { id } = useParams();
  return <div className="p-4">Investor Profile Page for ID: {id}</div>;
};

export default InvestorProfile;