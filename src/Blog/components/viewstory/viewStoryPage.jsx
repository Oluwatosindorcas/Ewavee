import React from "react";
import "./style.css";
import { useParams } from "react-router-dom";

function ViewStoryPage({ data }) {
  const id = Number(useParams().id);
  const story = data.find((item) => item.id === Number(id));

  return (
    <div className="storyHeader">
      <h1>{story.title}</h1>
      <p className="datePosted">September 25, 2023</p>
      <img
        src="/assets/pagebanner.png"
        alt="pagebanner"
        className="pageBanner"
      />
      <div className="author">
        <img src="" alt="" />
        <p>
          Jeff Unique <span>product designer, ewave</span>
        </p>
      </div>
      <p className="storyNews">{story.text}</p>
    </div>
  );
}

export default ViewStoryPage;
