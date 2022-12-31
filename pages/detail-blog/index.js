import React from "react";
import DetailBlogPage from "../../components/index/detail-blog/DetailBlogPage";
import DefaultLayout from "../../layouts/default-layout/DefaultLayout";

export default function Page() {
  return (
    <DefaultLayout>
      <DetailBlogPage />
    </DefaultLayout>
  );
}
