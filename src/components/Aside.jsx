import React from "react";

function Aside() {
  return (
    <div>
      <aside className="editedContainer">
        <h2 >
          Edited Posts____
        </h2>
        <div className="edited-posts">
          <img src="post4.jpeg" alt="" className="edited-img" />
          <div className="edited-podt-detail">
            <p className="e-tag">Fashion</p>
            <p className="e-title">Ami bokchod</p>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default Aside;
