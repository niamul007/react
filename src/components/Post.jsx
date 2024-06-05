import React from "react";

function Post(props) {
  return (
    <main>
      <div className="postContainer">
        <h2 className={`latest-posts ${props.darkMode ? "dark" : ""}`}>Latest Posts_____</h2>
        <div className="posts">
          <div className={`post4 ${props.darkMode ? "dark" : ""}`}>
            <img src={props.img} alt="" className="post4-img" />
            <div className={`post4-detail ${props.darkMode ? "dark" : ""}`}>
              <p className="post4-tag">{props.tag}</p>
              <div className="author-detail">
                <p className="detail">{props.time}</p>
                <p className="postTitle">{props.title}</p>
                <p className="post-detail">{props.detail}</p>
              </div>
            </div>
          </div>
        </div>
        <aside>
          <h2 className={`edited-posts ${props.darkMode ? "dark" : ""}`}>Edited Posts____</h2>
        </aside>
      </div>
    </main>
  );
}

export default Post;
