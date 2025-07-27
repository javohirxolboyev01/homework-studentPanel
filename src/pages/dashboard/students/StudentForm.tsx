import React, { useEffect, useState, type FormEvent } from "react";
import StudentData from "./StudentData";
import { useBlog } from "../../../api/hook/useBlog";

const StudentForm = () => {
  const { createBlog, updateBlog } = useBlog();

  const [fname, setFname] = useState<string>("");
  const [lname, setLname] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [phone_number, setPhone] = useState<number | "">("");
  const [birthdate, setBirthdate] = useState<number | "">("");
  const [edit, setEdit] = useState<any>(null);

  useEffect(() => {
    if (edit) {
      setFname(edit.fname ?? "");
      setLname(edit.lname ?? "");
      setAddress(edit.address ?? "");
      setPhone(edit.phone_number ?? "");
      setBirthdate(edit.birthdate ?? "");
    }
  }, [edit]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const blogItem = {
      fname,
      lname,
      address,
      phone: phone_number.toString(),
      birthdate: birthdate.toString(),
    };
    if (edit) {
      updateBlog.mutate({ body: blogItem, id: edit.id });
      setEdit(null);
    } else {
      createBlog.mutate(blogItem);
    }

    setFname("");
    setLname("");
    setAddress("");
    setPhone("");
    setBirthdate("");
  };

  return (
    <div className="bg-white rounded shadow p-6 max-w-4xl mx-auto mt-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">New Student</h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            First Name
          </label>
          <input
            type="text"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
            placeholder="Enter first name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#46987a] border-gray-300"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Last Name
          </label>
          <input
            type="text"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
            placeholder="Enter last name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#46987a] border-gray-300"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Address
          </label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter address"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#46987a] border-gray-300"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Phone Number
          </label>
          <input
            type="number"
            value={phone_number}
            onChange={(e) =>
              setPhone(e.target.value === "" ? "" : Number(e.target.value))
            }
            placeholder="Enter phone number"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#46987a] border-gray-300"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Birthdate
          </label>
          <input
            type="number"
            value={birthdate}
            onChange={(e) =>
              setBirthdate(e.target.value === "" ? "" : Number(e.target.value))
            }
            placeholder="20020101"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#46987a] border-gray-300"
          />
        </div>

        <div className="md:col-span-2 flex justify-end">
          <button
            type="submit"
            className={`text-white px-6 py-2 rounded-md transition duration-200 ${
              edit
                ? "bg-yellow-600 hover:bg-yellow-700"
                : "bg-[#46987a] hover:bg-[#3d866c]"
            }`}
          >
            {edit ? "Save" : "Create"}
          </button>
        </div>
      </form>

      <StudentData setEdit={setEdit} />
    </div>
  );
};

export default React.memo(StudentForm);
