import React from "react";
import './Blog.css';



const blogData = [
  {
    id: 1,
    img: "",
    title: "A",
    desc: "",
    date: "",
    time: "",
  },
  {
    id: 2,
    img: "",
    title: "B",
    desc: "",
    date: "",
    time: "",
  },

  {
    id: 3,
    img: "",
    title: "C",
    desc: "",
    date: "",
    time: "",
  },

  {
    id: 4,
    img: "",
    title: "D",
    desc: "",
    date: "",
    time: "",
  },

  {
    id: 5,
    img: "",
    title: "E",
    desc: "",
    date: "",
    time: "",
  },

  {
    id: 6,
    img: "",
    title: "F",
    desc: "",
    date: "",
    time: "",
  },

  {
    id: 7,
    img: "",
    title: "G",
    desc: "",
    date: "",
    time: "",
  },

  {
    id: 8,
    img: "",
    title: "H",
    desc: "",
    date: "",
    time: "",
  },
];

export const Blog = () => {
  return (
    <div className="blog">
      <div className="blog-block-container">
        {blogData.map((data) => (
          <div className="blog-block" key={data.id}>
            <div className="img-blog-block-container">
              <img src={data.img} alt="" />
            </div>

            <div className="text-blog-block-container">
              <span>{data.title}</span>
              <div className="text-date-blog-block">
                <span>{data.date}</span>
                <span>{data.time}</span>
              </div>
              <p>{data.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
