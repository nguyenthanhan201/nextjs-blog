import { useRouter } from "next/router";
import React from "react";
import BlogContent from "../../shared/BlogContent";

const DetailBlogPage = () => {
  const router = useRouter();

  return (
    <>
      <div className="flex mt-[120px] gap-[18px]">
        <BlogContent type="show" dataBlog={router.query} />
      </div>
      <div className="w-1/2">
        <textarea
          placeholder="Description of your event.."
          rows={10}
          className="w-full rounded-lg py-3 bg-transparent"
          defaultValue={router.query.description}
        />
      </div>
    </>
  );
};

export default DetailBlogPage;
