import React from "react";
import Layout from "../../Layout";
import Sidemenu from "./SideMenu";
import CreatePost from "./CreatePost";
import Post from "./Post";

export default function Feed() {
  return (
    <div className="container-fluid">
      <div className="row">
        <Sidemenu />
        <div id="feed" className="col-8 d-flex flex-column align-items-start">
          {/*Post Feed */}
          <CreatePost />
          <Post />
        </div>
      </div>
    </div>
  );
}
