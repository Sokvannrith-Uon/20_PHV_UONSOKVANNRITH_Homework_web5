"use client";
import React, { useEffect, useState } from "react";
import { Bookmark } from "lucide-react";


function Content() {
  const card = [
    {
      id: 1,
      Image: "https://www.rottler.com/wp-content/uploads/medow-mouse.jpg",
      title: "MouseKhmer",
      price: 30,
    },
    {
      id: 2,
      Image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXCG0Z0CrFlFPfiNQW-gDorW1seFJus1WZBw&s",
      title: "Keybord make by khmer ",
      price: 120,
    },
    {
      id: 3,
      Image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHTaEz247zqcrf6hSuF8WudGwBNDkoel3-gg&s",
      title: "laptop make by student KHSRD",
      price: 12,
    },
    {
      id: 4,
      Image:
        "https://www.apple.com/v/macbook-air/y/images/overview/highlights/storage__ycmn2gj0yj66_large.jpg",
      title: "new macbook provide by khmer ",
      price: 1200,
    },
    {
      id: 5,
      Image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAipzPsbQHaNWbWbhd0nycaa1ltfEuIA7JrQ&s",
      title: "khmer production public in 2026",
      price: 12,
    },
  ];
  const [open, setOpen] = useState(false);
  const [saves, setSaves] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const save = (id) => {
    if (saves.includes(id)) {
      setSaves(saves.filter((item) => item !== id));
    } else {
      setSaves([...saves, id]);
    }
  };

  return (
    <div className="flex-1 h-screen bg-gray-500 p-6">
      {open && selectedCard && (
        <dialog
          open
          className=" inset-0 flex justify-center items-center rounded-lg m-auto"
        >
          <div className="w-[500px] h-[300px] bg-white rounded-xl p-5 ">
            <button
              onClick={() => setOpen(false)}
              className="float-end bg-red-500 px-3 py-1 rounded"
            >
              Close
            </button>

            <div>ID: {selectedCard.id}</div>
            <div>Name: {selectedCard.title}</div>
            <div>Price: ${selectedCard.price}</div>
          </div>
        </dialog>
      )}
      <div>
        <button className="text-xl font-bold text-gray-800 bg-white px-2 mb-4 border-2 rounded-lg">
          Back
        </button>
      </div>

      {card.map((card) => (
        <div
          key={card.id}
          className="flex items-center justify-between rounded-xl p-4 bg-black my-2"
        >
          <div className="flex items-center gap-3">
            <img
              className="w-20 h-16 object-cover rounded-lg"
              src={card.Image}
              alt={card.title}
            />
            <p className="text-gray-50">{card.title}</p>
            <span className="text-white font-bold">${card.price}</span>
            <button onClick={() => save(card.id)}>
              {" "}
              <Bookmark
                className={
                  saves.includes(card.id)
                    ? "fill-yellow-300 text-yellow-300"
                    : "text-white"
                }
              />
            </button>
          </div>
          <button
            className="bg-blue-400 h-8 px-4 rounded-lg text-white"
            onClick={() => {
              setSelectedCard(card);
              setOpen(true);
            }}
          >
            View
          </button>
        </div>
      ))}
    </div>
  );
}

export default Content;
