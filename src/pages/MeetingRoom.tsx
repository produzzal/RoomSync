import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetRoomsQuery } from "../redux/api/roomApi";
import RoomCard from "../components/ui/RoomCard";
import {
  searchQuery,
  setCapacityFilter,
  setPriceFilter,
  setSortOrder,
  clearFilters,
} from "../redux/features/RoomSlice";

const MeetingRoom: React.FC = () => {
  const dispatch = useDispatch();
  const { query, capacityFilter, priceFilter, sortOrder } = useSelector(
    (state: any) => state.room
  );
  const { data: response, error, isLoading } = useGetRoomsQuery();
  const rooms = response?.data || [];

  console.log("Rooms Data:", rooms); // Log the fetched rooms data

  // Filter rooms based on search query, capacity, and price (Only when filters are set)
  const filteredRooms = rooms.filter((room) => {
    const roomName = room?.name ? room.name.toLowerCase() : "";
    const searchQueryValue =
      query && typeof query === "string" ? query.toLowerCase() : "";

    const roomKeywords = Array.isArray(room?.keywords) ? room.keywords : [];
    const roomCapacity = room.capacity || 0;
    const roomPrice = room.pricePerSlot || 0;

    // Apply filters only if they are set
    const matchesSearch =
      roomName.includes(searchQueryValue) ||
      roomKeywords.some((keyword) =>
        typeof keyword === "string"
          ? keyword.toLowerCase().includes(searchQueryValue)
          : false
      );

    const matchesCapacity =
      !capacityFilter || roomCapacity >= Number(capacityFilter);

    const matchesPrice = !priceFilter || roomPrice <= Number(priceFilter);

    return matchesSearch && matchesCapacity && matchesPrice;
  });

  console.log("Filtered Rooms:", filteredRooms); // Log filtered rooms

  // Sort rooms based on the sort order
  const sortedRooms = filteredRooms.sort((a, b) => {
    const priceA = a.pricePerSlot || 0;
    const priceB = b.pricePerSlot || 0;
    if (sortOrder === "ascending") {
      return priceA - priceB;
    } else {
      return priceB - priceA;
    }
  });

  console.log("Sorted Rooms:", sortedRooms); // Log sorted rooms

  if (isLoading) return <p>Loading rooms...</p>;
  if (error) return <p>Error fetching rooms.</p>;

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-8 lg:px-16">
      <div className="container mx-auto">
        {/* Search Bar */}
        <div className="mb-8 max-w-2xl mx-auto">
          <input
            type="text"
            value={query}
            onChange={(e) => dispatch(searchQuery(e.target.value))}
            placeholder="Search by room name or keyword"
            className="w-full p-4 text-lg rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out"
          />
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap gap-4 mb-8">
          {/* Capacity Filter */}
          <div className="flex items-center">
            <label htmlFor="capacity" className="mr-2 text-lg">
              Capacity
            </label>
            <select
              id="capacity"
              value={capacityFilter || ""}
              onChange={(e) => dispatch(setCapacityFilter(e.target.value))}
              className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All</option>
              <option value="10">10+</option>
              <option value="20">20+</option>
              <option value="50">50+</option>
              <option value="100">100+</option>
            </select>
          </div>

          {/* Price Filter */}
          <div className="flex items-center">
            <label htmlFor="price" className="mr-2 text-lg">
              Max Price
            </label>
            <input
              id="price"
              type="number"
              value={priceFilter || ""}
              onChange={(e) => dispatch(setPriceFilter(e.target.value))}
              placeholder="Enter price"
              className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Sort Filter */}
          <div className="flex items-center">
            <label htmlFor="sort" className="mr-2 text-lg">
              Sort by PricePerSlot
            </label>
            <select
              id="sort"
              value={sortOrder || "ascending"}
              onChange={(e) => dispatch(setSortOrder(e.target.value))}
              className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="ascending">Ascending</option>
              <option value="descending">Descending</option>
            </select>
          </div>
        </div>

        {/* Clear Filters Button */}
        <div className="mb-8">
          <button
            onClick={() => dispatch(clearFilters())}
            className="p-3 text-white bg-red-500 hover:bg-red-600 rounded-md"
          >
            Clear Filters
          </button>
        </div>

        {/* Room Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedRooms.length > 0 ? (
            sortedRooms.map((room) => (
              <RoomCard
                key={room._id}
                image={room.imageLink}
                name={room.name}
                capacity={room.capacity}
                pricePerSlot={room.pricePerSlot}
                onSeeDetails={() =>
                  console.log(`See details for room ${room._id}`)
                }
              />
            ))
          ) : (
            <p>No rooms found matching your filters.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MeetingRoom;
