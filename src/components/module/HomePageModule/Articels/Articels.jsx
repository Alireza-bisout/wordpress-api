import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // نیازی نیست اما بهتر است برای سازگاری باشد
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // تغییر مکان ماژول‌ها در نسخه جدید
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import styles from "./Articels.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useState } from "react";
import Link from "next/link";




function Articels() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("http://localhost/wordpress/graphql", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                query: `
                    query GetPosts {
                    posts(first: 100) {
                        nodes {
                        id
                        slug
                        title
                        content
                        date
                        }
                    }
                }
          `,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                const posts = data?.data?.posts?.nodes || []; // جلوگیری از خطا در صورت نبود داده
                setPosts(posts);
                console.log(posts)
            })
            .catch((error) => console.error("خطا:", error));
    }, []);

    return (
        <section className={`${styles['article']} mt-5`}>
            <div className="container">
                <div>
                    <div className=" d-flex justify-content-center fade-away p-3">وبلاگ ما</div>
                    <h3 className="h-3 d-flex justify-content-center text-highlight pb-4">جدیدترین مقالات ما را بخوانید</h3>
                </div>

                <Swiper
                    modules={[Navigation, Pagination, Autoplay]} // فعال‌سازی ماژول‌ها
                    navigation={{
                        nextEl: ".latest-styles-next",
                        prevEl: ".latest-styles-prev",
                    }}
                    slidesPerView={1} // تنظیم پیش‌فرض برای موبایل
                    spaceBetween={10} // فاصله بین اسلایدها
                    loop={true}
                    breakpoints={{
                        768: {
                            slidesPerView: 2, // tablet

                        },
                        992: {
                            slidesPerView: 3, // desktop
                        },
                        1200: {
                            slidesPerView: 3, // large
                        },
                    }}
                    className="special-ceasonal-clothes-slider"
                >



                    {posts &&
                        posts.map((post, index) => (
                            <SwiperSlide key={index} className="p-4">
                                <div className={`${styles['box-article']} p-4`}>
                                    <Link href={`articels/${post.id}`} >
                                        <div className={`${styles['img-article']}`}>
                                            <img src="/image/article.jpg" alt="" />
                                            <div className={`${styles['title-img']}`}>
                                                <span href="#">مقاله</span>
                                            </div>
                                        </div>
                                        <div className="content-article">
                                            <h3 className={`${styles['title-article']} h-3 fs-5 pt-3`}>
                                                <div>{post.title}</div>
                                            </h3>
                                            <p className="text-lin-sm fade-away lh-lg pt-2">{post.content}</p>
                                            <div className={`${styles['footer-article']} pt-4`}>
                                                <span className={`${styles['btn-article']} d-flex justify-content-center align-items-center`}>
                                                    <span href="#">
                                                        <FontAwesomeIcon icon={faArrowLeft} />
                                                    </span>
                                                </span>
                                                <div className="fade-away">
                                                    <FontAwesomeIcon icon={faCalendar} />
                                                    <span className="ps-2">{post.date}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </SwiperSlide>
                        ))
                    }

                </Swiper>
            </div>
        </section>
    )
}

export default Articels