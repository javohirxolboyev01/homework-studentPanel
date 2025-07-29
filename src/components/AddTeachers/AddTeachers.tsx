import React, { useState, type FormEvent } from "react";

const AddTeachers = () => {
  const [firstname, setFirstname] = useState("");
  const [lasttname, setLastname] = useState("");
  const [types, setTypes] = useState("");
  const [address, setAddress] = useState("");
  const [degree, setDegree] = useState("");
  const [image, setImage] = useState("");
  const [data, setData] = useState<any[]>([]);
  const [edit, setEdit] = useState<any>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const datas = {
      firstname,
      lasttname,
      types,
      address,
      degree,
      image,
    };
    if (edit) {
      setData(
        data.map((item) =>
          item.id === edit.id ? { ...datas, id: edit.id } : item
        )
      );
      setEdit(null);
    } else {
      setData([...data, { ...datas, id: Date.now() }]);
    }
    setFirstname("");
    setLastname("");
    setTypes("");
    setAddress("");
    setDegree("");
    setImage("");
  };

  const handleUpdate = (item: any) => {
    setFirstname(item.firstname);
    setLastname(item.lasttname);
    setTypes(item.types);
    setAddress(item.address);
    setDegree(item.degree);
    setImage(item.image);
    setEdit(item);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = (id: number) => {
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white shadow-lg rounded-lg p-8">
      <h2 className="text-2xl font-bold mb-6 text-center text-[#16A085]">
        {edit ? "Edit Teacher" : "Add Teacher"}
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
            placeholder="Type of Teacher"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#16A085]"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Address
          </label>
          <input
            onChange={(e) => setAddress(e.target.value)}
            value={address}
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
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Image URL
          </label>
          <input
            onChange={(e) => setImage(e.target.value)}
            value={image}
            type="text"
            placeholder="https://example.com/image.jpg"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#16A085]"
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className={`${
              edit
                ? "bg-amber-600 hover:bg-amber-700 text-white"
                : "bg-[#16A085] hover:bg-[#12806C] text-white"
            } w-full font-semibold px-6 py-2 rounded shadow-md transition`}
          >
            {edit ? "Save" : "Add Teacher"}
          </button>
        </div>
      </form>

      <div className="mt-10 space-y-4">
        {data.map((item) => (
          <div
            key={item.id}
            className="border border-gray-200 shadow-md rounded-lg p-4 bg-gray-50 hover:shadow-lg transition flex justify-between items-start gap-4"
          >
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-[#16A085] mb-2">
                {item.firstname} {item.lasttname}
              </h3>
              <p className="text-gray-700">
                <span className="font-medium">Type:</span> {item.types}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Address:</span> {item.address}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Degree:</span> {item.degree}
              </p>
              <div className="mt-4 flex gap-3">
                <button
                  onClick={() => handleUpdate(item)}
                  className="bg-[#16A085] hover:bg-[#12806C] text-white px-4 py-1 rounded shadow"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded shadow"
                >
                  Delete
                </button>
              </div>
            </div>
            {item.image && (
              <div className="w-28 h-28 flex-shrink-0">
                <img
                  src={item.image}
                  alt="Teacher"
                  className="w-full h-full object-cover rounded-full border"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(AddTeachers);
