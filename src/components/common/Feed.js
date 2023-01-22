import React from "react";
import Sidemenu from "./SideMenu";
import CreatePost from "./CreatePost";
import Post from "./Post";

export default function Feed() {
  return (
    <div className="row">
      <div className="col-3">
        <Sidemenu />
      </div>
      <div id="feed" className="col-8 d-flex flex-column align-items-start">
        {/* Component to create a post, can be any genre, collaborative or not */}
        <CreatePost />
        <div id="post-feed" className="row">
          {/* Displays the posts in the feed */}
          <Post />
        </div>
      </div>
    </div>
  );
}
