import React from "react";
function Post(props) {
  return (
    <main className="post-main">
      <div className="postContainer">
        <h2 className={`latest-posts ${props.darkMode ? "dark" : ""}`}>Latest Posts_____</h2>
        <div className="posts">
          <div className={`post4 ${props.darkMode ? "dark" : ""}`}>
            <img src={props.img} alt="" className="post4-img" />
            <div className="post4-detail">
              <p className="post4-tag">{props.tag}</p>
              <div className="author-detail">
                <p className={`detail ${props.darkMode ? "dark" : ""}`}>{props.time}</p>
                <a href="#" className={`postTitle ${props.darkMode ? "dark" : ""}`}>{props.title}</a>
                <p className={`post-detail ${props.darkMode ? "dark" : ""}`}>{props.detail}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}

export default Post;
