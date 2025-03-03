import React from "react";
import "./Feed.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Feed = () => {
  return (
    <main className="feed">
      {/* Post 1 */}
      <article className="post">
        <div className="post-header">
          <img
            src={require("../../Assets/Feed/pexels-ali-pazani-2613260@2x.jpg")}
            alt="User Avatar"
            className="avatar"
          />
          <div className="post-user-info">
            <h4>Lara Leones</h4>
            <span className="username">@thewallart</span>
          </div>
          <button className="post-options">⋮</button>
        </div>

        <p className="post-text">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.{" "}
          <a href="#readMore">Read More</a>
        </p>

        {/* Image container with heart icon overlay */}
        <div className="post-image">
          <img
            src={require("../../Assets/Feed/pexels-humphrey-muleba-2045248@2x.jpg")}
            alt="Post Artwork"
          />
          <div className="heart-icon">
            <FontAwesomeIcon icon={["far", "heart"]} />
          </div>
        </div>

        <div className="post-actions">
          <span className="action-item">
            <FontAwesomeIcon icon={["far", "heart"]} /> 9.8k
          </span>
          <span className="action-item">
            <FontAwesomeIcon icon={["far", "comment"]} /> 8.6k
          </span>
          <span className="action-item">
            <img
              width="20"
              height="18"
              src="https://img.icons8.com/ios/28/forward-arrow.png"
              alt="forward-arrow"
            />{" "}
            7.2k
          </span>
        </div>
      </article>

      {/* Post 2 */}
      <article className="post">
        <div className="post-header">
          <img
            src={require("../../Assets/Feed/pexels-imad-clicks-9810659@2x.jpg")}
            alt="User Avatar"
            className="avatar"
          />
          <div className="post-user-info">
            <h4>Thomas J.</h4>
            <span className="username">@thecustomcreater</span>
          </div>
          <button className="post-options">⋮</button>
        </div>

        <p className="post-text">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.{" "}
          <a href="#readMore">Read More</a>
        </p>

        {/* Image container with heart icon overlay */}
        <div className="post-image">
          <img
            src={require("../../Assets/Feed/pexels-tobias-bjørkli-2236382@2x.jpg")}
            alt="Another Artwork"
          />
          <div className="heart-icon">
            <FontAwesomeIcon icon={["far", "heart"]} />
          </div>
        </div>

        <div className="post-actions1">
          <span className="action-item">
            <FontAwesomeIcon icon={["far", "heart"]} /> 9.8k
          </span>
          <span className="action-item">
            <FontAwesomeIcon icon={["far", "comment"]} /> 8.6k
          </span>
          <span className="action-item">
            <img
              width="20"
              height="18"
              src="https://img.icons8.com/ios/28/forward-arrow.png"
              alt="forward-arrow"
            />{" "}
            7.2k
          </span>
        </div>
      </article>

      {/* Image Carousel */}
      <div className="carousel">
        {/* Carousel items */}
      </div>
    </main>
  );
};

export default Feed;
