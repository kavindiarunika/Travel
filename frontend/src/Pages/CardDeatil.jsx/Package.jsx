import { packeges } from "../../assets/Assest";
import { useParams } from "react-router-dom";
import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";
import { useContext } from "react";
import { TravelContext } from "../../Context/TravelContext";
import RightCard from "./RightCard";
import PackageCard from "./PackageCard";
import { trending } from "../../assets/Assest";

import TrendingCard from "./TrendingCard";

const Package = () => {
  const { id } = useParams();
  const item = packeges.find((pkg) => pkg._id === parseInt(id));
  const places = trending.filter((plc) =>
    item.visitingPlaces?.some(
      (name) => plc.name.toLowerCase() === name.toLowerCase()
    )
  );

  const { navigate } = useContext(TravelContext);

  if (!item) {
    return (
      <div className="mt-40 text-center text-red-500">Package not found</div>
    );
  }

  return (
    <div className="mt-32 flex flex-col md:flex-row px-6 gap-6">
      {/*--------------------left side----------------------- */}

      <div className="w-full md:w-2/3 flex flex-col gap-6">
        <h2 className="text-xl sm:text-4xl font-bold ml-4 prata-regular flex items-center gsp-6">
          {" "}
          <IoMdArrowBack
            className="size-4 sm:size-8 "
            onClick={() => navigate("/")}
          />
          {item.name}
        </h2>

        {/* Main Image */}
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-96 rounded-2xl shadow-2xl object-cover"
        />

        {/* Sub Images Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {item.subImage?.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`sub-${index}`}
              className="w-full h-32 object-cover rounded-xl shadow"
            />
          ))}
        </div>

        {/*-------------visiting places------------- */}

        {item.visitingPlaces && places.length > 0 && (
          <TrendingCard item={places} />
        )}

        {/*------------------- Hotel Facilities -------------------*/}
        <div className="border border-gray-200 rounded-2xl shadow px-4 sm:px-8 py-6 mb-10 bg-white">
          <h2 className="text-xl sm:text-2xl font-bold prata-regular mb-6">
            Hotel Facilities
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {item.Hotel?.map((facility, index) => (
              <p
                key={index}
                className="text-gray-700 text-sm sm:text-lg inter-regular flex items-center gap-2"
              >
                <FaRegHeart className="text-red-700" />
                {facility}
              </p>
            ))}
          </div>
        </div>

        {/*------------------- Include Into Package -------------------*/}

        <PackageCard item={item} />
      </div>

      {/*--------------------right side----------------------- */}

      <RightCard item={item} />
    </div>
  );
};

export default Package;
