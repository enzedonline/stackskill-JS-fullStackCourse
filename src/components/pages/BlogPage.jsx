import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useStore } from "react-redux";
import axios from "axios";
import Header from "../common/Header";

const getPost = async (id, token, success) => {
  const hostname = "http://localhost:8000/";
  let result;
  await axios
    .get(
      `${hostname}posts/${id}?filter=%7B%22include%22%3A%20%5B%22profile%22%2C%22category%22%5D%0A%7D`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((res) => {
      result = { success: true, data: res.data };
    })
    .catch((res) => {
      result = { success: false, data: res.data };
    });
  return result;
};

function BlogPage() {
  const { id } = useParams();
  const store = useStore("");
  const token = store.getState().auth.token;
  let [post, setPost] = useState(0);
  let [author, setAuthor] = useState(0);
  let [category, setCategory] = useState(0);
  let success = useRef(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    let result;
    getPost(id, token, result).then((result) => {
      success.current = result.success;
      setPost(result.data);
      setCategory(result.data.category)
      setAuthor(result.data.profile)
    });
  }, [token, id]);

  return (
    <div>
      <Header
        title={category ? category.name : ""}
        subtitle={post ? post.title : ""}
        showButton={false}
        image={post ? post.imageURL : ""}
      />
      <div className="container" style={{ paddingTop: "2rem" }}>
        <section className="bg-light">
          {post ? (
            <div>
              <h4>
                Article by {author.firstName} {author.lastName} 
              </h4>
              <p>{post.content}</p>
            </div>
          ) : (
            ""
          )}
        </section>
      </div>
    </div>
  );
}

export default BlogPage;
