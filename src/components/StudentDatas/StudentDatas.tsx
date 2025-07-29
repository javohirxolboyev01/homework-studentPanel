import React, { type Dispatch, type FC, type SetStateAction } from "react";
import { useBlog } from "../../api/hook/useBlog";
interface Props {
  setEdit: Dispatch<SetStateAction<any>>;
}
const StudentDatas: FC<Props> = ({ setEdit }) => {
  // const dispatch = useDispatch();
  const { getBlog, deleteBlog } = useBlog();
  const { data } = getBlog();

  const handleUpdate = (item: any) => {
    setEdit(item);
    //   dispatch(setEditStudent(item));
    window.scrollTo({ top: 0 });
  };

  return (
    <div className="mt-10">
      <h3 className="text-xl font-semibold text-gray-700 mb-4">Student List</h3>
      <div className="overflow-x-auto rounded-lg shadow">
        <table className="min-w-full bg-white border border-gray-200 text-sm">
          <thead className="bg-[#46987a] text-white text-sm whitespace-nowrap">
            <tr>
              <th className="px-4 py-3 text-left">ID</th>
              <th className="px-4 py-3 text-left">Photo</th>
              <th className="px-4 py-3 text-left">First Name</th>
              <th className="px-4 py-3 text-left">Last Name</th>
              <th className="px-4 py-3 text-left">Phone</th>
              <th className="px-4 py-3 text-left">Birthdate</th>
              <th className="px-4 py-3 text-left">Address</th>
              <th className="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item: any) => (
              <tr key={item.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4">{item.id}</td>
                <td className="px-6 py-4">
                  <img
                    src={item.image}
                    alt="profile"
                    className="w-10 h-10 rounded-full object-cover border"
                  />
                </td>
                <td className="px-6 py-4">{item.fname}</td>
                <td className="px-6 py-4">{item.lname}</td>
                <td className="px-6 py-4">{item.phone_number}</td>
                <td className="px-6 py-4">{item.birthdate}</td>
                <td className="px-6 py-4">{item.address}</td>
                <td className="px-6 py-4 flex justify-center gap-2">
                  <button
                    onClick={() => handleUpdate(item)}
                    className="bg-[#46987a] hover:bg-[#3d866c] text-white px-4 py-1 rounded-md"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteBlog.mutate(item.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-md"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default React.memo(StudentDatas);
