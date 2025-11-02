// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const FacultyManager = () => {
//   const [faculties, setFaculties] = useState([]);
//   const [faculty, setFaculty] = useState({
//     fid: "",
//     fname: "",
//     fsalary: "",
//     contact: "",
//   });
//   const [count, setCount] = useState(0);

//   const baseURL = "http://localhost:6542/faculty";

//   const fetchFaculties = async () => {
//     const res = await axios.get(`${baseURL}/viewAll`);
//     setFaculties(res.data);
//   };

//   const fetchCount = async () => {
//     const res = await axios.get(`${baseURL}/count`);
//     setCount(res.data);
//   };

//   useEffect(() => {
//     fetchFaculties();
//     fetchCount();
//   }, []);

//   const handleChange = (e) => {
//     setFaculty({ ...faculty, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await axios.post(`${baseURL}/add`, faculty);
//     alert("Faculty added/updated successfully!");
//     setFaculty({ fid: "", fname: "", fsalary: "", contact: "" });
//     fetchFaculties();
//     fetchCount();
//   };

//   const handleDelete = async (fid) => {
//     if (window.confirm("Are you sure you want to delete this faculty?")) {
//       await axios.delete(`${baseURL}/delete/${fid}`);
//       alert("Faculty deleted successfully!");
//       fetchFaculties();
//       fetchCount();
//     }
//   };

//   const handleUpdate = (fac) => {
//     setFaculty(fac);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
//       <h1 className="text-4xl font-bold text-blue-700 mb-8">
//         Faculty Management System
//       </h1>

//       {/* Form */}
//       <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md mb-10">
//         <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">
//           Add / Update Faculty
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             name="fid"
//             value={faculty.fid}
//             onChange={handleChange}
//             placeholder="Faculty ID"
//             required
//             className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
//           />
//           <input
//             type="text"
//             name="fname"
//             value={faculty.fname}
//             onChange={handleChange}
//             placeholder="Faculty Name"
//             required
//             className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
//           />
//           <input
//             type="text"
//             name="fsalary"
//             value={faculty.fsalary}
//             onChange={handleChange}
//             placeholder="Faculty Salary"
//             required
//             className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
//           />
//           <input
//             type="text"
//             name="contact"
//             value={faculty.contact}
//             onChange={handleChange}
//             placeholder="Contact Number"
//             required
//             className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
//           />
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition"
//           >
//             Save Faculty
//           </button>
//         </form>
//       </div>

//       {/* Count Section */}
//       <div className="bg-purple-100 border border-purple-300 rounded-lg px-6 py-3 mb-6">
//         <h3 className="text-lg font-semibold text-purple-800">
//           Total Faculties: <span className="text-2xl">{count}</span>
//         </h3>
//       </div>

//       {/* Table */}
//       <div className="w-11/12 overflow-x-auto">
//         <table className="min-w-full border border-gray-300 bg-white rounded-lg shadow-sm">
//           <thead className="bg-blue-600 text-white">
//             <tr>
//               <th className="px-4 py-2 border">ID</th>
//               <th className="px-4 py-2 border">Name</th>
//               <th className="px-4 py-2 border">Salary</th>
//               <th className="px-4 py-2 border">Contact</th>
//               <th className="px-4 py-2 border">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {faculties.map((fac) => (
//               <tr key={fac.fid} className="text-center hover:bg-gray-50">
//                 <td className="border px-4 py-2">{fac.fid}</td>
//                 <td className="border px-4 py-2">{fac.fname}</td>
//                 <td className="border px-4 py-2">{fac.fsalary}</td>
//                 <td className="border px-4 py-2">{fac.contact}</td>
//                 <td className="border px-4 py-2">
//                   <button
//                     className="bg-green-500 text-white px-3 py-1 rounded-md mr-2 hover:bg-green-600"
//                     onClick={() => handleUpdate(fac)}
//                   >
//                     Update
//                   </button>
//                   <button
//                     className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
//                     onClick={() => handleDelete(fac.fid)}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//             {faculties.length === 0 && (
//               <tr>
//                 <td colSpan="5" className="text-center py-4 text-gray-500">
//                   No Faculty Records Found
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default FacultyManager;

import React, { useEffect, useState } from "react";
import axios from "axios";

const FacultyManager = () => {
  const [faculties, setFaculties] = useState([]);
  const [faculty, setFaculty] = useState({
    fid: "",
    fname: "",
    fsalary: "",
    contact: "",
  });
  const [count, setCount] = useState(0);

  //const baseURL = "http://localhost:6542/faculty";
  const baseURL = "https://facultybackend1.onrender.com/faculty";

  const fetchFaculties = async () => {
    const res = await axios.get(`${baseURL}/viewAll`);
    setFaculties(res.data);
  };

  const fetchCount = async () => {
    const res = await axios.get(`${baseURL}/count`);
    setCount(res.data);
  };

  useEffect(() => {
    fetchFaculties();
    fetchCount();
  }, []);

  const handleChange = (e) => {
    setFaculty({ ...faculty, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`${baseURL}/add`, faculty);
    alert("Faculty added/updated successfully!");
    setFaculty({ fid: "", fname: "", fsalary: "", contact: "" });
    fetchFaculties();
    fetchCount();
  };

  const handleDelete = async (fid) => {
    if (window.confirm("Are you sure you want to delete this faculty?")) {
      await axios.delete(`${baseURL}/delete/${fid}`);
      alert("Faculty deleted successfully!");
      fetchFaculties();
      fetchCount();
    }
  };

  const handleUpdate = (fac) => {
    setFaculty(fac);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex flex-col items-center py-10 px-4">
      <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-10 text-center drop-shadow-md">
        Faculty Management System
      </h1>

      {/* Form */}
      <div className="bg-white/70 backdrop-blur-md shadow-lg rounded-2xl p-8 w-full max-w-lg mb-10 border border-gray-200 transition-transform hover:scale-[1.01]">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Add / Update Faculty
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-4">
            <input
              type="text"
              name="fid"
              value={faculty.fid}
              onChange={handleChange}
              placeholder="Faculty ID"
              required
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
            <input
              type="text"
              name="fname"
              value={faculty.fname}
              onChange={handleChange}
              placeholder="Faculty Name"
              required
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
            <input
              type="text"
              name="fsalary"
              value={faculty.fsalary}
              onChange={handleChange}
              placeholder="Faculty Salary"
              required
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
            <input
              type="text"
              name="contact"
              value={faculty.contact}
              onChange={handleChange}
              placeholder="Contact Number"
              required
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3 rounded-xl shadow-md hover:from-blue-600 hover:to-purple-600 transition-all"
          >
            Save Faculty
          </button>
        </form>
      </div>

      {/* Count Section */}
      <div className="bg-white/70 backdrop-blur-md border border-blue-100 rounded-xl px-6 py-4 mb-8 shadow-sm">
        <h3 className="text-xl font-semibold text-blue-700">
          Total Faculties:{" "}
          <span className="text-3xl font-bold text-purple-700">{count}</span>
        </h3>
      </div>

      {/* Table */}
      <div className="w-full max-w-5xl overflow-x-auto">
        <table className="min-w-full bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl shadow-lg overflow-hidden">
          <thead className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
            <tr>
              <th className="px-4 py-3 text-left font-semibold">ID</th>
              <th className="px-4 py-3 text-left font-semibold">Name</th>
              <th className="px-4 py-3 text-left font-semibold">Salary</th>
              <th className="px-4 py-3 text-left font-semibold">Contact</th>
              <th className="px-4 py-3 text-center font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {faculties.map((fac, index) => (
              <tr
                key={fac.fid}
                className={`${
                  index % 2 === 0 ? "bg-white/70" : "bg-gray-50/70"
                } hover:bg-blue-50 transition`}
              >
                <td className="px-4 py-3 border-b">{fac.fid}</td>
                <td className="px-4 py-3 border-b">{fac.fname}</td>
                <td className="px-4 py-3 border-b">{fac.fsalary}</td>
                <td className="px-4 py-3 border-b">{fac.contact}</td>
                <td className="px-4 py-3 border-b text-center space-x-2">
                  <button
                    className="bg-green-500 text-white px-4 py-1.5 rounded-lg hover:bg-green-600 transition"
                    onClick={() => handleUpdate(fac)}
                  >
                    Update
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-1.5 rounded-lg hover:bg-red-600 transition"
                    onClick={() => handleDelete(fac.fid)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {faculties.length === 0 && (
              <tr>
                <td
                  colSpan="5"
                  className="text-center py-6 text-gray-500 text-lg"
                >
                  No Faculty Records Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FacultyManager;


