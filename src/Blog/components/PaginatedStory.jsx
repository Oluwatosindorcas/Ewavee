import React, { useState, useRef } from "react";
import data from "../../constants/dummydata.json";
import { useNavigate } from "react-router-dom";

function PaginatedStory() {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const storyMapRef = useRef(null); // Reference to the storyMap container

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Scroll to the top of the storyMap container when paginated
    storyMapRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleLinkClick = (storyId) => {
    navigate(`/blog/${storyId}`);
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <div ref={storyMapRef} className="storyMap">
        {currentItems.map((story, index) => (
          <div key={story.id} onClick={() => handleLinkClick(story.id)}>
            <div className="StoryContainer">
              <img
                className="StoryImage"
                src="/assets/placeholder.png"
                alt="placeholder"
              />
              <div className="StoryText">
                <div>
                  <p className="StoryTitle">{story.title}</p>
                  <p className="storyTextContent">{story.text}</p>
                </div>
                <p>April 13 2023</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        {Array.from({ length: Math.ceil(data.length / itemsPerPage) }).map(
          (_, index) => (
            <button
              key={index}
              className={index + 1 === currentPage ? "active" : ""}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
}

export default PaginatedStory;
