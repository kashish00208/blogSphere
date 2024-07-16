"use client";
import Navbar from "@/Components/Navbar";
import { Client, Databases, ID } from "appwrite";
import { useState } from "react";
import BlogCard from "@/Components/BlogCard";

export default function Home() {
  const client = new Client();

  const [blogPosts,setblogPosts] = useState([]);
  client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("6693f8e4003898b73c68");
  const databases = new Databases(client);
 
  let promise = databases.listDocuments(
    "66940c2b003dade0f366",
    "66940c3c00336cc1092d",
    []
  )
  promise.then(
    function (response) {
      setblogPosts(response.documents)
    },
    function (error) {
      console.log(error);
    }
  );
  function extractFirst100Chars(htmlString) {
    
    const plainText = htmlString.replace(/<[^>]*>/g, ''); 
    
    const truncatedText = plainText.slice(0, 100);
    return plainText.length > 100 ? truncatedText + '...' : truncatedText;
}

  return (
    <>
      <Navbar/>
      <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6  text-slate-600">Blog</h1>
      <div className="">
      {blogPosts.length==0 && "loading..."}  
      {blogPosts.map((post,index) => (
        <BlogCard
          key={index} {...post} metDesc = {extractFirst100Chars(post.Content)}
        />
      ))}
      </div>
    </div>
    </>
  );
}
