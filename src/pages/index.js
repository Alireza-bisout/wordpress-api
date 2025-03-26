// import { useEffect, useState } from "react";
import HomePageTemplate from "@/components/template/HomePageTemplate/HomePageTemplate"
import styles from "@/styles/Home.module.css"


export default function Home() {
  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost/wordpress/graphql", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       query: `
  //         query GetPosts {
  //           posts(first: 100) {
  //             nodes {
  //               title
  //               content
  //               date
  //             }
  //           }
  //         }
  //       `,
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const posts = data?.data?.posts?.nodes || []; // جلوگیری از خطا در صورت نبود داده
  //       setPosts(posts);
  //     })
  //     .catch((error) => console.error("خطا:", error));
  // }, []);

  return <HomePageTemplate/>
}