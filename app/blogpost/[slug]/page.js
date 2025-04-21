"use client";
import Navbar from "@/Components/Navbar";
import { Client, Databases, ID, Query } from "appwrite";
import { useState } from "react";
export default function page({ params }) {
  const client = new Client();

  const [blog, setblog] = useState([]);
  client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("6693f8e4003898b73c68");
  const databases = new Databases(client);

  let promise = databases.listDocuments(
    "66940c2b003dade0f366",
    "66940c3c00336cc1092d",
    [Query.equal("Slug", params.slug)]
  );
  promise.then(
    function (response) {
      setblog(response.documents[0]);
    },
    function (error) {
      console.log(error);
    }
  );
  function htmlToPlainText(html) {
    // Create a new DOM element to parse the HTML
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;

    // Extract the text content
    return tempDiv.textContent || tempDiv.innerText || "";
  }
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-purple-600">
          {blog.Tittle}
        </h1>
        <div>{blog ? htmlToPlainText(blog.Content) : "loading..."}</div>
      </div>
    </>
  );
}
