import React from "react";
import BlogContentEdit from "./edit/BlogContentEdit";
import BlogContentShow from "./show/BlogContentShow";

const BlogContent = ({ setData, data, type, dataBlog }) => {
  return type === "show" ? (
    <BlogContentShow dataBlog={dataBlog}/>
  ) : (
    <BlogContentEdit setData={setData} data={data} />
  );
};

export default BlogContent;
