"use client";
import { useRouter } from "next/navigation";
import { useState, ChangeEvent } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Add() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<string | undefined>();
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile);
      setImage(imageUrl);
    }
  };

  const handleClick = () => {
    const data = {
      title,
      price,
      description,
      image,
    };
    const existingData = localStorage.getItem("sale");
    let updatedData: any[] = [];
    if (existingData) {
      const sale = JSON.parse(existingData);
      updatedData = [...sale, data];
    } else {
      updatedData = [data];
    }
    localStorage.setItem("sale", JSON.stringify(updatedData));
    toast.success("Success");
  };
  return (
    <>
      <ToastContainer theme="dark" />
      <div className="siginContainer">
        <h3 className="white-text center-text">Add parts for sale </h3>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            className="contactinputs"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />{" "}
          <br />
          <input
            type="number"
            className="contactinputs"
            placeholder="$"
            onChange={(e) => setPrice(e.target.value)}
          />{" "}
          <br />
          <textarea
            className="contactinputs"
            placeholder="Description"
            autoComplete="on"
            onChange={(e) => setDescription(e.target.value)}
            style={{ width: "230px" }}
          />{" "}
          <br />
          <input
            type="file"
            className="contactinputs"
            autoComplete="on"
            style={{ width: "230px" }}
            onChange={handleFileChange}
          />{" "}
          <br />
          <button
            className="btn btn-dark"
            style={{ width: "100%", marginTop: "8px" }}
            onClick={() => handleClick()}
          >
            Add
          </button>
        </form>
      </div>
    </>
  );
}
