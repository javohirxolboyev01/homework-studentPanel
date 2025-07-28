import React, { useState, type FormEvent } from "react";

const AddTeachers = () => {
  const [firstname, setFirstname] = useState<string>("");
  const [lasttname, setLastname] = useState<string>("");
  const [types, setTypes] = useState<string>("");
  const [addsess, setAddres] = useState<string>("");
  const [degree, setDegree] = useState<string>("");
  const [data, setData] = useState<any[]>([]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!firstname || !lasttname || !types || !addsess || !degree) {
      alert("Qovunboy inputga malumot kiriting...!");
      return;
    }

    const newData = {
      id: Date.now(),
      firstname,
      lasttname,
      types,
      addsess,
      degree,
    };

    setData([...data, newData]);

    setFirstname("");
    setLastname("");
    setTypes("");
    setAddres("");
    setDegree("");
  };

  const handleDelete = (id: number) => {
    const ress = data.filter((item) => item.id !== id);
    setData(ress);
  };
  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white shadow-lg rounded-lg p-8">
      <h2 className="text-2xl font-bold mb-6 text-center text-[#16A085]">
        Add Teacher
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            First Name
          </label>
          <input
            onChange={(e) => setFirstname(e.target.value)}
            value={firstname}
            type="text"
            placeholder="Enter first name"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#16A085]"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Last Name
          </label>
          <input
            onChange={(e) => setLastname(e.target.value)}
            value={lasttname}
            type="text"
            placeholder="Enter last name"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#16A085]"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Type of Teacher
          </label>
          <input
            onChange={(e) => setTypes(e.target.value)}
            value={types}
            type="text"
            placeholder=" Type of Teacher"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#16A085]"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Address
          </label>
          <input
            onChange={(e) => setAddres(e.target.value)}
            value={addsess}
            type="text"
            placeholder="Enter address"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#16A085]"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Degree</label>
          <input
            onChange={(e) => setDegree(e.target.value)}
            value={degree}
            type="text"
            placeholder="e.g., Master's, PhD"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#16A085]"
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-[#16A085] hover:bg-[#12806C] text-white font-semibold px-6 py-2 rounded shadow-md transition"
          >
            Add Teacher
          </button>
        </div>
      </form>

      <div className="mt-10 space-y-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 shadow-md rounded-lg p-4 bg-gray-50 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-[#16A085] mb-2">
              {item.firstname} {item.lasttname}
            </h3>
            <p className="text-gray-700">
              <span className="font-medium">Type:</span> {item.types}
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Address:</span> {item.addsess}
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Degree:</span> {item.degree}
            </p>

            <div className="mt-4 flex gap-3">
              <button className="bg-[#16A085] hover:bg-[#12806C] text-white px-4 py-1 rounded shadow">
                Update
              </button>

              <button
                onClick={() => handleDelete(item.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded shadow"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(AddTeachers);
