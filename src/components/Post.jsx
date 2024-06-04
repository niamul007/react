import React from "react";

function Post() {
  return (
    <main>
      <div className="postContainer">
        <h2 className="latest-posts">Latest Posts_____</h2>
        <div className="posts">
          <div className="post4">
             <img src="post4.jpeg" alt="" srcSet="" className="post4-img"/>
            <div className="post4-detail">
              <p className="post4-tag">Fashion</p>
              <div className="author-detail">
                <p className="detail">GELLO DOE | March 29, 2021 | 163 Views</p>
                <p className="postTitle">Style Tips Every Woman Should Know</p>
                <p className="post-detail">Venus has a runaway greenhouse effect. I kind of want to know what happened there because we’re twirling knobs here on Earth without knowing the consequences of it. Mars once</p>
              </div>
            </div>
          </div>
        </div>
        <aside>
            <h2 className="edited-posts">Edited Posts____</h2>

        </aside>
      </div>
    </main>
  );
}

export default Post;
