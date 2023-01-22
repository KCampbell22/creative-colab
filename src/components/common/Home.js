import Login from "./Login";
import Feed from "./Feed";
import Layout from "./Layout";
import { useState } from "react";
import { useEffect } from "react";

export default function Home() {
  return (
    <Layout>
      {localStorage.getItem("login") === "true" && <Feed />}
      {localStorage.getItem("login") === "false" && <Login />}
    </Layout>
  );
}
