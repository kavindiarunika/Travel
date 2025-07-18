import React, { useState } from "react";
import axios from "axios";
import { assets } from "../assets/assets";
import { backendUrl } from "../App";
import { toast, ToastContainer } from "react-toastify";

const Add = ({ token }) => {
  const [subImage1, setImage1] = useState(false);
  const [subImage2, setImage2] = useState(false);
  const [subImage3, setImage3] = useState(false);
  const [subImage4, setImage4] = useState(false);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [mainImage, setMainImage] = useState(false);

  const [visitingPlaces, setVisitingPlaces] = useState([]);
  const [includes, setIncludes] = useState([{ name: "", image: false }]);
  const [hotel, setHotel] = useState([]);
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");
  const [moreDetail, setMoreDetail] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("_id", id);
      formData.append("name", name);
      formData.append("price", price);
      formData.append("duration", duration);
      formData.append("description", description);
      formData.append("MoreDetail", moreDetail);
      formData.append("image", mainImage);

      formData.append("subImage1", subImage1);
      formData.append("subImage2", subImage2);
      formData.append("subImage3", subImage3);
      formData.append("subImage4", subImage4);
      


      includes.forEach((inc, i) => {
        formData.append(`includes[${i}][name]`, inc.name);
        formData.append(`includes[${i}][image]`, inc.image);
      });

      visitingPlaces.forEach((place, i) => {
        formData.append(`visitingPlaces[${i}]`, place);
      });

      hotel.forEach((h, i) => {
        formData.append(`hotel[${i}]`, h);
      });

      const response = await axios.post(
        `${backendUrl}/api/package/add`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`
          },
        }
      );

      if (response.data.success) {
        toast.success(response.data.message || "Package added successfully");
        setId("");
        setName("");
        setMainImage(false);

        setVisitingPlaces([]);
        setIncludes([{ name: "", image: false }]);
        setHotel([]);
        setPrice("");
        setDuration("");
        setDescription("");
        setMoreDetail("");
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
      } else {
        toast.error(response.data.message || "Failed to add package");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Something went wrong");
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="max-w-4xl mx-auto mt-16 p-6 bg-white shadow-xl rounded-3xl flex flex-col gap-6"
    >
      <h2 className="text-2xl font-bold text-center text-gray-800">
        Add New Package
      </h2>

      <div className="flex flex-col gap-2">
        <label className="font-medium">Index Number</label>
        <input
          type="number"
          className="input input-bordered w-full rounded-xl py-1 px-2"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-medium">Package Name</label>
        <input
          type="text"
          className="input input-bordered w-full rounded-xl py-1 px-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-medium">Upload Main Image</label>
        <input
          type="file"
          onChange={(e) => setMainImage(e.target.files[0])}
          accept="image/*"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-medium">Upload Sub Images</label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[setImage1, setImage2, setImage3, setImage4].map(
            (setImage, index) => {
              const image = [subImage1,subImage2,subImage3,subImage4][index];
              return (
                <label htmlFor={`image${index + 1}`} key={index}>
                  <img
                    className="w-24 h-24 object-cover border rounded-xl"
                    src={
                      !image ? assets.upload_area : URL.createObjectURL(image)
                    }
                    alt=""
                  />
                  <input
                    type="file"
                    id={`image${index + 1}`}
                    hidden
                    accept="image/*"
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                </label>
              );
            }
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-medium">Visiting Places (comma separated)</label>
        <input
          type="text"
          className="input input-bordered w-full rounded-xl py-1 px-2"
          onChange={(e) => setVisitingPlaces(e.target.value.split(","))}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-medium">Hotel Includes (comma separated)</label>
        <input
          type="text"
          className="input input-bordered w-full rounded-xl py-1 px-2"
          onChange={(e) => setHotel(e.target.value.split(","))}
        />
      </div>

      <div className="flex flex-col gap-4">
        <label className="font-medium">Includes</label>
        {includes.map((inc, idx) => (
          <div key={idx} className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <input
              type="text"
              placeholder="Include Name"
              value={inc.name}
              className="input input-bordered rounded-xl py-1 px-2"
              onChange={(e) => {
                const copy = [...includes];
                copy[idx].name = e.target.value;
                setIncludes(copy);
              }}
            />
            <input
              type="file"
              className="input input-bordered rounded-xl"
              onChange={(e) => {
                const copy = [...includes];
                copy[idx].image = e.target.files[0];
                setIncludes(copy);
              }}
            />
          </div>
        ))}
        <button
          type="button"
          className="btn btn-outline btn-sm w-40"
          onClick={() => setIncludes([...includes, { name: "", image: null }])}
        >
          + Add Include
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="number"
          placeholder="Price"
          className="input input-bordered rounded-xl py-1 px-2"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          placeholder="Duration (e.g. 4 Day)"
          className="input input-bordered rounded-xl py-1 px-2"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
      </div>

      <textarea
        placeholder="Short Description"
        className="textarea textarea-bordered rounded-xl py-1 px-2"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <textarea
        placeholder="More Detail"
        className="textarea textarea-bordered rounded-xl py-1 px-2"
        value={moreDetail}
        onChange={(e) => setMoreDetail(e.target.value)}
      />

      <button
        type="submit"
        className="btn btn-primary text-white font-semibold rounded-xl py-2 px-6 mt-4 self-center bg-green-900"
      >
        Add Package
      </button>
      <ToastContainer position="top-center" autoClose={3000} />
    </form>
  );
};

export default Add;
