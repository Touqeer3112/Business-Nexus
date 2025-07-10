// import React from "react";
// import { Link } from "react-router-dom";

// const DashboardLayout = ({ children }) => {
//   return (
//     <div className="flex">
//       <aside className="w-64 bg-gray-800 text-white min-h-screen p-4">
//         <h2 className="text-xl font-bold mb-4">Business Nexus</h2>
//         <nav>
//           <Link to="/dashboard/investor" className="block mb-2">Investor Dashboard</Link>
//           <Link to="/dashboard/entrepreneur" className="block mb-2">Entrepreneur Dashboard</Link>
//         </nav>
//       </aside>
//       <main className="flex-1 p-6">{children}</main>
//     </div>
//   );
// };

// export default DashboardLayout;
import React from "react";
import { Link } from "react-router-dom";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex">
      <aside className="w-64 bg-gray-800 text-white min-h-screen p-4">
        <h2 className="text-xl font-bold mb-6">Business Nexus</h2>
        <nav className="space-y-2">
          <Link to="/dashboard/investor" className="block hover:underline">Investor Dashboard</Link>
          <Link to="/dashboard/entrepreneur" className="block hover:underline">Entrepreneur Dashboard</Link>
        </nav>
      </aside>
      <main className="flex-1 p-6 bg-gray-100 min-h-screen">{children}</main>
    </div>
  );
};

export default DashboardLayout;
