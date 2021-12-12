import React, { useEffect, useRef, useState } from "react";
import { useStore } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";

const hostname = "http://localhost:8000/";

const getPosts = async (token) => {
  let result;
  await axios
    .get(
      `${hostname}posts?filter=%7B%20%22order%22%3A%20%22createdAt%20DESC%22%7D`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((res) => {
      result = {success: true, data: res.data};
    })
    .catch((res) => {
      result = {success: false, data: res.data};
    });
  return result;
};

function BlogList() {
  const store = useStore("");
  const token = store.getState().auth.token;
  let [posts, setPosts] = useState({});
  let success = useRef(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    let result;
    getPosts(token, result).then((result) => {
      success.current = result.success;
      setPosts(result.data);
    });
  }, [token]);

  return (
    <div className="container" style={{ paddingTop: "2rem" }}>
      <section className="page-section bg-light">
        <h1>blogs</h1>
        <div id="portfolio">
        <BlogTiles {...posts} />
        </div>
      </section>
    </div>
  );
}

function BlogTiles(blogList) {
  return (
    <div className="row">
      {Object.keys(blogList).length > 0
        ? Object.values(blogList).map((post, index) => {
            return <BlogTile key={index} {...post} />;
          })
        : null}
    </div>
  );
}

function BlogTile(blogItem) {
  return (
    <div className="col-lg-4 col-sm-6 mb-4">
      <div className="portfolio-item">
        <Link to={`/blog/${blogItem.id}`}>
        <img className="img-fluid" src={blogItem.imageURL} alt="..." />
        <div className="portfolio-caption">
          <div className="portfolio-caption-heading">{blogItem.title}</div>
          <div className="portfolio-caption-subheading text-muted">
            {blogItem.category.name}
          </div>
        </div>
        </Link>
      </div>
    </div>
  );
}

export default BlogList;
