import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import BlogContent from "../../shared/BlogContent";
import Setting from "./Setting";

const HomePage = () => {
  const router = useRouter();
  const [data, setData] = useState({
    title: "",
    date: "",
    time: "",
    description: "",
    image: "",
  });

  // console.log(data);

  const createBlog = () => {
    axios
      .post(
        "https://1p8s3jhf8j.execute-api.us-east-1.amazonaws.com/Supermomos/interview/social",
        {
          title: data.title || "Untitled Event",
          startAt:
            `${data.date}T${data.time}:00+00:00` || "2022-10-11T19:00:00+00:00",
          venue: "Chelsea Market (163 W 20nd Street). Manhattan, NYC",
          capacity: 50,
          price: 30,
          description:
            data.description ||
            "Calling all web3 founders and designers for an exciting night of exchanging ideas and making new friends! Come make friends with fellow designers and founders in web3. There will also be lots of insights to be gained through an intimate chat +Q&A with two giants in the industry: \n\nPhil Hedayatnia, Founder & CEO of Airfoil, a",
          isManualApprove: true,
          privacy: "Public",
          banner:
            data.image ||
            "https://supermomos-app-resourcesus.s3.amazonaws.com/Images/SocialBanner/banner_1.jpg",
          tags: ["Product", "Design"],
        }
      )
      .then((res) => {
        // console.log(res.data);
        if (res.data) {
          router.push({
            pathname: "/detail-blog",
            query: {
              banner: res.data.banner,
              capacity: res.data.capacity,
              description: res.data.description,
              isManualApprove: res.data.isManualApprove,
              price: res.data.price,
              privacy: res.data.privacy,
              startAt: res.data.startAt,
              title: res.data.title,
              tags: res.data.tags[0],
              venue: res.data.venue,
            },
          });
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong");
      });
  };

  return (
    <>
      <div className="flex mt-[120px] gap-[18px]">
        <BlogContent setData={setData} data={data} />
      </div>
      <div className="w-1/2">
        <p className="mb-[18px]">Description</p>
        <textarea
          placeholder="Description of your event.."
          rows={10}
          className="w-full rounded-lg px-[14px] py-3"
          onChange={(e) => setData({ ...data, description: e.target.value })}
        />
        <Setting />
        <button
          type="button"
          className="w-full mt-8 bg-[#FEF452] rounded-lg text-[#942F70] py-3 font-medium"
          onClick={createBlog}
        >
          CREATE SOCIAL
        </button>
      </div>
    </>
  );
};

export default HomePage;
