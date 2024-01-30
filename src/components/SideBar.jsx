import React from "react";
import profileImg from "../assets/BewFoto01.jpg";

export default function SideBar(props) {
  const { sheets } = props;

  return (
    <aside className="sideBar">
      <div>
        <section>
          <div className="profile">
            <img src={profileImg} alt="profile" />
            <div>
              <h2>Tim Dehler</h2>
              <h3>tim.dehler@tibidi.de</h3>
            </div>
          </div>

          <div className="searchBar">
            <input placeholder="Search" type="text" />
            <i class="bx bx-search-alt-2"></i>
          </div>
        </section>
        <section>
          <div className="sideBar_sheet">
            <div className="flex-container">
              <i class="bx bx-task"></i>
              <h4>Tasks</h4>
            </div>
            <div className="sideBar_sheet--openToDoCount">
              <p>3</p>
            </div>
          </div>

          <div className="sideBar_sheet">
            <div className="flex-container">
              <i class="bx bx-star"></i>
              <h4>Favorites</h4>
            </div>
            <div className="sideBar_sheet--openToDoCount">
              <p>12</p>
            </div>
          </div>

          <div className="sideBar_sheet">
            <div className="flex-container">
              <i class="bx bx-sun"></i>
              <h4>Daylies</h4>
            </div>
            <div className="sideBar_sheet--openToDoCount">
              <p>1</p>
            </div>
          </div>

          <div className="sideBar_sheet">
            <div className="flex-container">
              <i class="bx bx-body"></i>
              <h4>Assigned to Me</h4>
            </div>
            <div className="sideBar_sheet--openToDoCount">
              <p>7</p>
            </div>
          </div>
        </section>
      </div>

      <section>
        <button>
          <i className="bx bx-plus"></i> New List
        </button>
      </section>
    </aside>
  );
}
