"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

function SimpleForm() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    text: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await fetch("api/create-post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: formData.text }),
    });
    setLoading(false);
    router.push("/server-page");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <form
        onSubmit={handleSubmit}
        className="p-8 space-y-4 bg-gray-100 rounded-md shadow-md max-w-md mx-auto mt-10"
      >
        <input
          disabled={loading}
          type="text"
          name="text"
          value={formData.text}
          onChange={handleChange}
          placeholder="Enter your post text"
          className="w-full p-2 border border-gray-300 rounded-md text-black"
        />

        <button
          disabled={loading}
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-400"
        >
          Create new post
        </button>
      </form>
    </div>
  );
}

export default SimpleForm;
