import React from "react";
import { useDispatch } from "react-redux";
import { deleteRoom } from "../../redux/features/RoomSlice";
import { useGetRoomsQuery } from "../../redux/api/roomApi";
import { Link } from "react-router-dom";

const RoomList: React.FC = () => {
  const { data: response, error, isLoading } = useGetRoomsQuery();
  const rooms = response?.data || [];
  console.log(rooms);
  const dispatch = useDispatch();

  const handleDelete = (roomId: string) => {
    dispatch(deleteRoom(roomId)); // Dispatch delete action
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading rooms</div>;
  }

  return (
    <div>
      <table className="table-auto w-full border-separate border-spacing-0.5 rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
              Room Name
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
              Room No.
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
              Floor No.
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
              Capacity
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
              PricePerSlot
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {rooms.map((room) => (
            <tr key={room._id} className="border-b hover:bg-gray-50">
              <td className="px-6 py-4 text-sm text-gray-800">{room.name}</td>
              <td className="px-6 py-4 text-sm text-gray-800">{room.roomNo}</td>
              <td className="px-6 py-4 text-sm text-gray-800">
                {room.floorNo}
              </td>
              <td className="px-6 py-4 text-sm text-gray-800">
                {room.capacity}
              </td>
              <td className="px-6 py-4 text-sm text-gray-800">
                ${room.pricePerSlot}
              </td>
              <td className="px-6 py-4 text-sm">
                {/* Update button */}
                {room._id ? (
                  <Link
                    to={`/admin/update-room/${room._id}`}
                    className="bg-yellow-400 text-white py-1 px-3 rounded-lg mr-2 hover:bg-yellow-500 transition duration-300"
                  >
                    Update
                  </Link>
                ) : (
                  <span>Loading...</span> // Or any fallback message
                )}

                {/* Delete button */}
                <button
                  className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600 transition duration-300"
                  onClick={() => handleDelete(room._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoomList;
