import { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css"

export default function Home() {
  const [posts, setPosts] = useState([]); // مقدار اولیه خالی برای جلوگیری از undefined

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
      })
      .catch((error) => console.error("خطا:", error));
  }, []);

  return (
    <>

      {/* mnu */}
      <nav className={`${styles['menu']} `}>
        <div className="container pt-3">
          <div className="row">
            <div className="col-3">
              <div>
                <div>
                  <img src="img/LOGO.svg" alt />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="item-mnu">
                <ul className="d-flex justify-content-center align-items-center d-none d-lg-flex gap-5 mt-2">
                  <li className="position-relative">
                    <a href="#" className="dropdown-toggle">خدمات</a>
                    <div className="dropdown-menu">
                      <a className="dropdown-item " href="#">خدمات 1</a>
                      <a className="dropdown-item" href="#">خدمات 2</a>
                      <a className="dropdown-item" href="#">خدمات 3</a>
                    </div>
                  </li>
                  <li className="position-relative">
                    <a href="#" className="dropdown-toggle">خدمات</a>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">خدمات 1</a>
                      <a className="dropdown-item" href="#">خدمات 2</a>
                      <a className="dropdown-item" href="#">خدمات 3</a>
                    </div>
                  </li>
                  <li className="position-relative">
                    <a href="#" className="dropdown-toggle">خدمات</a>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">خدمات 1</a>
                      <a className="dropdown-item" href="#">خدمات 2</a>
                      <a className="dropdown-item" href="#">خدمات 3</a>
                    </div>
                  </li>
                  <li className="position-relative">
                    <a href="#" className="dropdown-toggle">خدمات</a>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">خدمات 1</a>
                      <a className="dropdown-item" href="#">خدمات 2</a>
                      <a className="dropdown-item" href="#">خدمات 3</a>
                    </div>
                  </li>
                  <li className="position-relative">
                    <a href="#" className="dropdown-toggle">خدمات</a>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">خدمات 1</a>
                      <a className="dropdown-item" href="#">خدمات 2</a>
                      <a className="dropdown-item" href="#">خدمات 3</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-3">
              <div className="d-flex align-items-center">
                <div className={`${styles['mnu-button']}  d-none d-md-block`}>
                  <a href="#">
                    <span className="arow-btn">
                      <i className="fa-solid fa-arrow-left" />
                    </span>
                    <span>بیشتر بدانید</span>
                  </a>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="icon-Sidebar d-flex justify-content-center align-items-center">
                    <a href="#"><i className="fa-solid fa-bars" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* section-header */}
      <header className={`${styles['header']} container mt-5`}>
        <div>
          <div className="row">
            <div className="col-lg-6 d-none d-lg-block mt-5 wow animate__animated animate__fadeIn animate__fadeInRight">
              <div>
                <div className={`${styles['img-header']} `}>
                  <img src="img/image.png" alt />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 mt-5 wow animate__animated animate__fadeIn animate__fadeInLeft">
              <div className="swiper header-Swiper pt-4 pb-4">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="container-header">
                      <div className={`${styles['imge-shado']} `}>
                        <img src="img/rectangle-light.png" alt />
                      </div>
                      <div className="content-header p-3">
                        <div className="p-5">
                          <span className="fs-6">بیمه بازنشستگی</span>
                          <h3 className=" h-3 text-highlight p-2 fs-3 fw-bold"> مشاغل آزاد پلتفرم های
                            اینترنتی
                          </h3>
                          <p className="fade-away lh-lg p-2 text-lin-lg">به عنوان شخصی که رانندگی را به
                            عنوان حرفه اصلی خود انتخاب کرده اید، پیشنهاد می کنیم که یک بیمه نامه
                            بازنشستگی خریداری کنید. در این صفحه چند سوال کلیدی را پاسخ می دهیم.</p>
                        </div>
                        <div className="button-header d-flex align-items-center">
                          <div> <a className="btn-free fs-6" href="#">مشاهده بیمه</a></div>
                          <div> <a className="btn-see fs-6" href="#">سوالات متداول</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="container-header">
                      <div className="imge-shado">
                        <img src="img/rectangle-light.png" alt />
                      </div>
                      <div className="content-header p-3">
                        <div className="p-5">
                          <span className="fs-6">بیمه بازنشستگی</span>
                          <h3 className="h-3 text-highlight p-2 fs-3 fw-bold"> طرح ویژه برای تمام اعضای
                            خانواده
                          </h3>
                          <p className="fade-away lh-lg p-2 text-lin-lg">به عنوان شخصی که رانندگی را به
                            عنوان حرفه اصلی خود انتخاب کرده اید، پیشنهاد می کنیم که یک بیمه نامه
                            بازنشستگی خریداری کنید. در این صفحه چند سوال کلیدی را پاسخ می دهیم.</p>
                        </div>
                        <div className="button-header d-flex align-items-center">
                          <div> <a className="btn-free fs-6" href="#">مشاهده بیمه</a></div>
                          <div> <a className="btn-see fs-6" href="#">سوالات متداول</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="container-header">
                      <div className="imge-shado">
                        <img src="img/rectangle-light.png" alt />
                      </div>
                      <div className="content-header p-3">
                        <div className="p-5">
                          <span className="fs-6">بیمه بازنشستگی</span>
                          <h3 className="h-3 text-highlight p-2 fs-3 fw-bold"> بانوان گرامی و سرپرست
                            خانوار
                          </h3>
                          <p className="fade-away lh-lg p-2 text-lin-lg">واقعا چه چیزی می تواند آرامش خاطر
                            یک زن، مادر یا همسر را ایجاد کند به جز اطمینان به آینده. ولی برای ایجاد
                            این اطمینان چه کاری باید انجام دهیم و بهترین مشاوره چیست. </p>
                        </div>
                        <div className="button-header d-flex align-items-center">
                          <div> <a className="btn-free" href="#">مشاهده بیمه</a></div>
                          <div> <a className="btn-see" href="#">سوالات متداول</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-pagination" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* section-info-company */}
      <section id="section-company" className="container mt-5 mb-5 wow animate__animated animate__fadeIn">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div>
              <span className="text-highlight pe-2">درباره بیمه</span>
              <h3 className="h-3 p-2 fw-bold">آسودگی خاطر برای آینده فرزندان</h3>
              <p className="text-lin-lg fade-away lh-sm p-3">یکی از مهم ترین دغدغه های ذهنی والدین، اطمینان از
                تأمین شرایط مساعد برای آینده کودکان است که معمولاً به برنامه ریزی برای سرمایه گذاری بلند مدت
                منجر می شود. چگونه می توانیم بهترین نتیجه را از این سرمایه گذاری ها بگیریم. </p>
              <div className="button-phone">
                <div className="arow-button">
                  <a href="#">
                    <span className="arow">
                      <i className="fa-solid fa-arrow-left" />
                    </span>
                    <span>بیشتر بدانید</span>
                  </a>
                </div>
                <div className="content-phone d-none d-md-block">
                  <span>
                    <i className="fa-solid fa-phone" />
                  </span>
                  <div className="number-phone">
                    <span className="fade-away">شماره تلفن</span>
                    <span>098-9333362552</span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="card-company wow animate__animated animate__bounceInDown ">
                    <i className="fa-regular fa-building" />
                    <h4 className=" h-4 p-2 f-4">بهترین تجربه بیمه</h4>
                    <p className="p-0">در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                      راهکارها و
                      شرایط سخت تایپ
                      به
                      پایان
                      رسد.</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card-company wow animate__animated animate__bounceInUp">
                    <i className="fa-solid fa-map-location-dot" />
                    <h4 className="h-4 p-2">نقشه راه پروژه ها</h4>
                    <p className=" fade-away p-0">در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                      راهکارها و
                      شرایط سخت تایپ
                      به
                      پایان
                      رسد.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-flex justify-content-center align-items-center wow animate__animated animate__fadeInTopLeft">
            <div className=" img-company m-4">
              <img src="img/image-third-section.png" alt />
            </div>
          </div>
        </div>
      </section>

      {/* section-Achievement */}
      <section id="Achievement" className="container-fluid">
        <div className="title-Achievement mt-5 mb-5 pt-5 ">
          <div className=" d-flex justify-content-center fade-away p-3">پروژه های ما</div>
          <h3 className="h-3 d-flex justify-content-center text-highlight fs-3 fw-bold">بهترین کار های ما در چند سال گذشته
          </h3>
        </div>
        <div className="container-Winner mb-5">
          <div className="container container-video p-5 wow animate__animated animate__fadeIn">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className>
                  <h3 className="h-3 pe-3 f-3 fw-bold">آمـــوزش <span className="text-highlight">خــرید</span> بیمه
                    نــامه
                  </h3>
                  <p className="lh-sm fade-away text-lin-sm p-3">مراحل صدور بیمه نامه بازنشستگی به صورت آنلاین
                    و با سه کلیک بسیار ساده انجام می شود ولی خواهشمند است پیش از خریداری بیمه نامه
                    بازنشستگی، تمامی مطالب سایت را به دقت مطالعه نمایید</p>
                  <div className="interest p-2">
                    <span><i className="fa-regular fa-square-check" /></span>
                    <span className=" fw-bold f-6">مشاهده فیلم آموزشی</span>
                  </div>
                  <div className="interest p-2">
                    <span><i className="fa-regular fa-square-check" /></span>
                    <span className=" fw-bold">مطالعه سه مرحله صدور بیمه نامه در همین صفحه</span>
                  </div>
                  <div className="arow-button p-4">
                    <a href="#">
                      <span className="arow">
                        <i className="fa-solid fa-arrow-left" />
                      </span>
                      <span>بیشتر بدانید</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center pe-lg-5">
                <div className="box-video">
                  <img src="img/video-cover.png" alt />
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="box-Winner p-2">
                  <div className="icon-winner d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-trophy" />
                  </div>
                  <div className="content-box">
                    <span className="color-white fs-6">معرف طرح ویژه</span>
                    <h3 className="h-3 font-weight-bold fs-4">بیمه بازنشستگی بیمه کارآفرین</h3>
                    <p className="text-lin-sm fade-away lh-lg pt-1"> به عنوان برترین شرکت بیمه ارائه کننده
                      خدمات و محصولات در رشته عمر، زندگی و بازنشستگی، بیمه امید بازنشستگی نام دارد</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="box-Winner p-2">
                  <div className="icon-winner d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-box-open" />
                  </div>
                  <div className="content-box">
                    <span className="color-white fs-6">در طرح ویژه بازنشستگی</span>
                    <h3 className="h-3 font-weight-bold fs-4">نحوه محاسبه حق بیمه پرداختی</h3>
                    <p className="text-lin-sm fade-away lh-lg pt-1"> بر اساس محاسبات ما، برای اینکه فرد
                      بازنشسته در ۵۰ سالگی، حقوق بازنشستگی بیش از یک بیمه دولتی مانند تامین اجتماعی دریافت
                      نماید</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="box-Winner p-2">
                  <div className="icon-winner d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-cloud" />
                  </div>
                  <div className="content-box">
                    <span className="color-white fs-6">در طرح ویژه بازنشستگی</span>
                    <h3 className="h-3 font-weight-bold fs-4">نحوه محاسبه حقوق بازنشستگی</h3>
                    <p className="text-lin-sm fade-away lh-lg pt-1"> پرداخت حقوق بازنشستگی شروع می شود و
                      ارزش پول در همان زمان سنجیده می شود و برای اینکه از میزان ارزش حقوق دریافتی اطمینان
                      حاصل شود</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="box-Winner p-2">
                  <div className="icon-winner d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-comments" />
                  </div>
                  <div className="content-box">
                    <span className="color-white fs-6">تعاریف پایه</span>
                    <h3 className="h-3 font-weight-bold fs-4">بیمه بازنشستگی</h3>
                    <p className="text-lin-sm fade-away lh-lg pt-1"> با یک مثال ساده، لغات مهم بیمه نامه
                      بازنشستگی را توضیح می دهیم.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="box-Winner p-2">
                  <div className="icon-winner d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-book-open" />
                  </div>
                  <div className="content-box">
                    <span className="color-white fs-6">توصیه های مهم</span>
                    <h3 className="h-3 font-weight-bold fs-4">پس از خرید بیمه نامه</h3>
                    <p className="text-lin-sm fade-away lh-lg pt-1"> شرایط بیمه نامه را به دقت مطالعه کنید.
                      شرایط سنی بیمه گزار و بیمه شده بسیار مهم است.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="box-Winner p-2">
                  <div className="icon-winner d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-brush" />
                  </div>
                  <div className="content-box">
                    <span className="color-white fs-6">توصیه های مهم</span>
                    <h3 className="h-3 font-weight-bold fs-4">پیش از خرید بیمه نامه</h3>
                    <p className="text-lin-sm fade-away lh-lg pt-1"> شما تصمیم گرفته اید یک بیمه نامه
                      بــازنشستگی ۱۰ ساله خــریداری کنید که موضوع بسیار مهمی است و با یک بیمه نامه یکساله
                      اتــومبیل، آتش سوزی، درمــان و … بسیار متفاوت است.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Winner-cover" />
        </div>
        <div className="Achievement-cover" />
      </section>


      {/* section-Status-board */}
      <section id="status-board">
        <div className="container p-2 wow animate__animated animate__fadeIn">
          <div className="row">
            <div className="col-lg-4 col-md-12 ">
              <div className="text-status p-lg-5 p-md-4 p-sm-2">
                <div className="p-2">
                  <span className="color-white">وضعیت شرکت بیمه کارافرین</span>
                  <h3 className="h-3 color-white fw-bold ">درباره وضعیت شرکت ما بیشتر بدانید</h3>
                </div>
                <div className="arow-button-Status p-3">
                  <a href="#">
                    <span className="arow-Status">
                      <i className="fa-solid fa-arrow-left" />
                    </span>
                    <span>بیشتر بدانید</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-12">
              <div className="statistics row p-5">
                <div className="col-lg-3 col-md-3 col-sm-6 col-6 d-flex flex-column align-items-center mb-3">
                  <div className="icon-status d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-book" />
                  </div>
                  <div className="color-white text-center">
                    <div className="fs-2 fw-bold pt-3">
                      <span className="number count" data-number={1000}>0</span>
                      <span>+</span>
                    </div>
                    <span className="fs-5">مقاله ها</span>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-6 d-flex flex-column align-items-center mb-3">
                  <div className="icon-status d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-folder" />
                  </div>
                  <div className="color-white text-center">
                    <div className="fs-2 fw-bold pt-3">
                      <span className="number count" data-number={49}>0</span>
                      <span>+</span>
                    </div>
                    <span className="fs-5">پرونده ها</span>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-6 d-flex flex-column align-items-center mb-3">
                  <div className="icon-status d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-user" />
                  </div>
                  <div className="color-white text-center">
                    <div className="fs-2 fw-bold pt-3">
                      <span className="number count" data-number={2756}>0</span>
                      <span>+</span>
                    </div>
                    <span className="fs-5">کاربر فعال</span>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-6 d-flex flex-column align-items-center mb-3">
                  <div className="icon-status d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-bag-shopping" />
                  </div>
                  <div className="color-white text-center">
                    <div className="fs-2 fw-bold pt-3">
                      <span className="number count" data-number={1900}>0</span>
                      <span>+</span>
                    </div>
                    <span className="fs-5">یمه های موجود</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section-comments */}
      <section id="Comments" className="mt-5">
        <div className="container wow animate__animated animate__fadeIn">
          <div className="row">
            <div className="col-lg-6 d-flex align-items-center ">
              <div className="swiper Comment-Swiper">
                <div className="pb-4">
                  <span className="text-highlight">از زیان مشتری</span>
                  <h3 className="h-3">آنچه مشتریان درباره ما می گویند</h3>
                </div>
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="box-Comment p-5">
                      <div className="pb-4">
                        <img className="rounded-circle" src="img/avatar-1.png" alt />
                      </div>
                      <div className=" d-flex justify-content-between justify-content-center align-items-center">
                        <div>
                          <span className="fs-5 fw-bold">:: کارتون بی نظیره</span>
                        </div>
                        <div>
                          <span className="text-highlight fs-6">
                            <i className="fa-regular fa-star" />
                            <i className="fa-regular fa-star" />
                            <i className="fa-regular fa-star" />
                            <i className="fa-regular fa-star" />
                            <i className="fa-regular fa-star" />
                          </span>
                        </div>
                      </div>
                      <p className="fade-away lh-lg pt-3"> در این صورت می توان امید داشت که تمام و
                        دشواری
                        موجود در ارائه
                        راهکارها و شرایط سخت تایپ به
                        پایان رسد در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                        راهکارها
                        و شرایط سخت
                        تایپ به پایان رسد.
                        سارا محمدی
                        مدیر بازاریابی
                        :: عالی هستین!</p>
                      <div>
                        <div className="fs-5 fw-bold">امیر کمالی</div>
                        <div className="fade-away">مدیر بازاریابی</div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="box-Comment p-5">
                      <div className="pb-4">
                        <img className="rounded-circle" src="img/avatar-2.png" alt />
                      </div>
                      <div className=" d-flex justify-content-between justify-content-center align-items-center">
                        <div>
                          <span className="fs-5 fw-bold">:: کارتون بی نظیره</span>
                        </div>
                        <div>
                          <span className="text-highlight fs-6">
                            <i className="fa-regular fa-star" />
                            <i className="fa-regular fa-star" />
                            <i className="fa-regular fa-star" />
                          </span>
                        </div>
                      </div>
                      <p className="fade-away lh-lg pt-3"> در این صورت می توان امید داشت که تمام و
                        دشواری
                        موجود در ارائه
                        راهکارها و شرایط سخت تایپ به
                        پایان رسد در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                        راهکارها
                        و شرایط سخت
                        تایپ به پایان رسد.
                        سارا محمدی
                        مدیر بازاریابی
                        :: عالی هستین!</p>
                      <div>
                        <div className="fs-5 fw-bold">امیر کمالی</div>
                        <div className="fade-away">مدیر بازاریابی</div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="box-Comment p-5">
                      <div className="pb-4">
                        <img className="rounded-circle" src="img/avatar-1.png" alt />
                      </div>
                      <div className=" d-flex justify-content-between justify-content-center align-items-center">
                        <div>
                          <span className="fs-5 fw-bold">:: کارتون بی نظیره</span>
                        </div>
                        <div>
                          <span className="text-highlight fs-6">
                            <i className="fa-regular fa-star" />
                            <i className="fa-regular fa-star" />
                            <i className="fa-regular fa-star" />
                            <i className="fa-regular fa-star" />
                          </span>
                        </div>
                      </div>
                      <p className="fade-away lh-lg pt-3"> در این صورت می توان امید داشت که تمام و
                        دشواری
                        موجود در ارائه
                        راهکارها و شرایط سخت تایپ به
                        پایان رسد در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                        راهکارها
                        و شرایط سخت
                        تایپ به پایان رسد.
                        سارا محمدی
                        مدیر بازاریابی
                        :: عالی هستین!</p>
                      <div>
                        <div className="fs-5 fw-bold">امیر کمالی</div>
                        <div className="fade-away">مدیر بازاریابی</div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="box-Comment p-5">
                      <div className="pb-4">
                        <img className="rounded-circle" src="img/avatar-2.png" alt />
                      </div>
                      <div className=" d-flex justify-content-between justify-content-center align-items-center">
                        <div>
                          <span className="fs-5 fw-bold ">:: کارتون بی نظیره</span>
                        </div>
                        <div>
                          <span className="text-highlight fs-6">
                            <i className="fa-regular fa-star" />
                          </span>
                        </div>
                      </div>
                      <p className="fade-away lh-lg pt-3"> در این صورت می توان امید داشت که تمام و
                        دشواری
                        موجود در ارائه
                        راهکارها و شرایط سخت تایپ به
                        پایان رسد در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                        راهکارها
                        و شرایط سخت
                        تایپ به پایان رسد.
                        سارا محمدی
                        مدیر بازاریابی
                        :: عالی هستین!</p>
                      <div>
                        <div className="fs-5 fw-bold">امیر کمالی</div>
                        <div className="fade-away">مدیر بازاریابی</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div> */}
              </div>
            </div>
            <div className="col-lg-6 d-none d-lg-flex d-flex justify-content-center align-items-center">
              <div className="img-Comment">
                <img src="img/testimonials-image.png" alt />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section-Article */}
      <section id="article" className="mt-5">
        <div className="container">
          <div>
            <div className=" d-flex justify-content-center fade-away p-3">وبلاگ ما</div>
            <h3 className="h-3 d-flex justify-content-center text-highlight pb-4">جدیدترین مقالات ما را بخوانید</h3>
          </div>
          <div className="swiper articleSwiper pt-4 pb-4 p-2 wow animate__animated animate__fadeIn">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="box-article p-4">
                  <div className="img-article">
                    <img src="img/article.jpg" alt />
                    <div className="title-img">
                      <a href>مقاله</a>
                    </div>
                  </div>
                  <div className="content-article">
                    <h3 className="h-3 title-article fs-5 pt-3"><a href="#">پیشنهاد یک سبد سرمایه‌گذاری مناسب
                      برای
                      خانواده‌های با درآمد متوسط چه می تواند باشد</a></h3>
                    <p className="text-lin-sm fade-away lh-lg pt-2">خانواده‌های با درآمد متوسط و کم اغلب با
                      چالش‌هایی در زمینه سرمایه‌گذاری روبرو هستند.</p>
                    <div className="footer-article pt-4">
                      <span className="btn-article d-flex justify-content-center align-items-center">
                        <a href="#">
                          <i className="fa-solid fa-arrow-left" />
                        </a>
                      </span>
                      <div className="fade-away">
                        <span className="ps-3">
                          <i className="fa-regular fa-calendar" />
                          <span>5 بهمن 1403</span>
                        </span>
                        <span>
                          <i className="fa-regular fa-message" />
                          <span>1 دیدگاه</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="box-article p-4">
                  <div className="img-article">
                    <img src="img/article-1.jpg" alt />
                    <div className="title-img">
                      <a href>مقاله</a>
                    </div>
                  </div>
                  <div className="content-article">
                    <h3 className="h-3 title-article fs-5 pt-3"><a href="#">چرا خرید بیمه بازنشستگی برای کودکان
                      از
                      شرکت بیمه کارآفرین یک فرصت طلایی است؟</a></h3>
                    <p className="text-lin-sm fade-away lh-lg pt-2">خرید بیمه بازنشستگی برای کودک، فراتر از
                      یک هدیه است؛ این یک سرمایه‌گذاری استراتژیک برای تضمین آینده مالی فرزند شماست. </p>
                    <div className="footer-article pt-4">
                      <span className="btn-article d-flex justify-content-center align-items-center">
                        <a href="#">
                          <i className="fa-solid fa-arrow-left" />
                        </a>
                      </span>
                      <div className="fade-away">
                        <span className="ps-3">
                          <i className="fa-regular fa-calendar" />
                          <span>5 بهمن 1403</span>
                        </span>
                        <span>
                          <i className="fa-regular fa-message" />
                          <span>1 دیدگاه</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="box-article p-4">
                  <div className="img-article">
                    <img src="img/article-2.png" alt />
                    <div className="title-img">
                      <a href>مقاله</a>
                    </div>
                  </div>
                  <div className="content-article">
                    <h3 className="h-3 title-article fs-5 pt-3"><a href="#">تأثیر کیفیت کادوهای تولد بر روحیه
                      جستجوگری کودکان</a></h3>
                    <p className="text-lin-sm fade-away lh-lg pt-2">کادوهای تولد، تنها هدایایی مادی نیستند؛
                      آن‌ها می‌توانند پل ارتباطی بین والدین و فرزندان باشند و بر رشد و توسعه شخصیت آن‌ها
                      تأثیرگذار باشند.</p>
                    <div className="footer-article pt-4">
                      <span className="btn-article d-flex justify-content-center align-items-center">
                        <a href="#">
                          <i className="fa-solid fa-arrow-left" />
                        </a>
                      </span>
                      <div className="fade-away">
                        <span className="ps-3">
                          <i className="fa-regular fa-calendar" />
                          <span>5 بهمن 1403</span>
                        </span>
                        <span>
                          <i className="fa-regular fa-message" />
                          <span>1 دیدگاه</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="box-article p-4">
                  <div className="img-article">
                    <img src="img/article-1.jpg" alt />
                    <div className="title-img">
                      <a href>مقاله</a>
                    </div>
                  </div>
                  <div className="content-article">
                    <h3 className="h-3 title-article fs-5 pt-3"><a href="#">بیمه بازنشستگی برای زنان خانه‌دار:
                      یک
                      سرمایه‌گذاری ارزشمند برای آینده</a></h3>
                    <p className="text-lin-sm fade-away lh-lg pt-2">زنان خانه‌دار سهم بسیار مهمی در خانواده
                      و جامعه دارند و نقش آن‌ها در تربیت نسل آینده و حفظ کانون خانواده غیرقابل انکار است.
                    </p>
                    <div className="footer-article pt-4">
                      <span className="btn-article d-flex justify-content-center align-items-center">
                        <a href="#">
                          <i className="fa-solid fa-arrow-left" />
                        </a>
                      </span>
                      <div className="fade-away">
                        <span className="ps-3">
                          <i className="fa-regular fa-calendar" />
                          <span>5 بهمن 1403</span>
                        </span>
                        <span>
                          <i className="fa-regular fa-message" />
                          <span>1 دیدگاه</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="box-article p-4">
                  <div className="img-article">
                    <img src="img/article.jpg" alt />
                    <div className="title-img">
                      <a href>مقاله</a>
                    </div>
                  </div>
                  <div className="content-article">
                    <h3 className="h-3 title-article fs-5 pt-3"><a href="#">بیمه بازنشستگی: تکمیل‌کننده‌ای ضروری
                      برای سبد سرمایه‌گذاری خانواده</a></h3>
                    <p className="text-lin-sm fade-away lh-lg pt-2">در دنیای پرشتاب امروز، برنامه‌ریزی برای
                      آینده به ویژه دوران بازنشستگی، از اهمیت ویژه‌ای برخوردار است. </p>
                    <div className="footer-article pt-4">
                      <span className="btn-article d-flex justify-content-center align-items-center">
                        <a href="#">
                          <i className="fa-solid fa-arrow-left" />
                        </a>
                      </span>
                      <div className="fade-away">
                        <span className="ps-3">
                          <i className="fa-regular fa-calendar" />
                          <span>5 بهمن 1403</span>
                        </span>
                        <span>
                          <i className="fa-regular fa-message" />
                          <span>1 دیدگاه</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="box-article p-4">
                  <div className="img-article">
                    <img src="img/article-2.png" alt />
                    <div className="title-img">
                      <a href>مقاله</a>
                    </div>
                  </div>
                  <div className="content-article">
                    <h3 className="h-3 title-article fs-5 pt-3"><a href="#">داشتن بیمه بازنشستگی در نوجوانی و
                      جوانی:
                      کلیدی برای روحیه و اعتماد به نفس</a></h3>
                    <p className="text-lin-sm fade-away lh-lg pt-2">در دنیای امروز، داشتن بیمه بازنشستگی به
                      یک ضرورت تبدیل شده است. با افزایش هزینه‌های زندگی و کاهش قدرت خرید، داشتن یک منبع
                      درآمد پایدار در دوران بازنشستگی می‌تواند به شما کمک کند </p>
                    <div className="footer-article pt-4">
                      <span className="btn-article d-flex justify-content-center align-items-center">
                        <a href="#">
                          <i className="fa-solid fa-arrow-left" />
                        </a>
                      </span>
                      <div className="fade-away">
                        <span className="ps-3">
                          <i className="fa-regular fa-calendar" />
                          <span>5 بهمن 1403</span>
                        </span>
                        <span>
                          <i className="fa-regular fa-message" />
                          <span>1 دیدگاه</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="box-article p-4">
                  <div className="img-article">
                    <img src="img/article-2.png" alt />
                    <div className="title-img">
                      <a href>مقاله</a>
                    </div>
                  </div>
                  <div className="content-article">
                    <h3 className="h-3 title-article fs-5 pt-3"><a href="#">چرا برای آینده فرزندانمان سرمایه
                      گذاری
                      کنیم؟ اهمیت بیمه بازنشستگی در سبد سرمایه گذاری</a></h3>
                    <p className="text-lin-sm fade-away lh-lg pt-2">آینده ای روشن برای فرزندانمان، هدفی است
                      که همه والدین به دنبال آن هستند.</p>
                    <div className="footer-article pt-4">
                      <span className="btn-article d-flex justify-content-center align-items-center">
                        <a href="#">
                          <i className="fa-solid fa-arrow-left" />
                        </a>
                      </span>
                      <div className="fade-away">
                        <span className="ps-3">
                          <i className="fa-regular fa-calendar" />
                          <span>5 بهمن 1403</span>
                        </span>
                        <span>
                          <i className="fa-regular fa-message" />
                          <span>1 دیدگاه</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div> */}
          </div>
        </div>
      </section>

      {/* footer */}
      <footer className={`${styles['footer']} container-fluid mt-5 pt-3`}>
        <div className={`${styles['container']} container p-4`}>
          <div className="row">
            <div className="col-lg-4 col-md-12">
              <div className="box-footer p-5 mt-3">
                <div className="logo-footer">
                  <img src="img/logo-footer.jpg" alt />
                </div>
                <p className="fade-away lh-lg">سامانه صدور برخط بیمه های عمر، زندگی و بازنشستگی که با افتخار به
                  عنوان نماینده <span className="text-highlight">شرکت بیمه معظم کارآفرین</span> فعالیت می کند. هدف
                  کارآفرین من، ارائه طرح های شفاف و موثر در بیمه های عمر، زندگی و بازنشستگی است، به گونه ای
                  نیاز های بخش های مختلف جامعه را شناسایی کرده و محصولاتی برای همان جامعه طراحی کنیم و در
                  نتیجه مشتریان گرامی بتوانند فقط با چند کلیک بیمه نامه خوب و مناسبی را خریداری نمایند.</p>
                <div className="d-flex img-trust justify-content-between">
                  <div className="d-none d-sm-block">
                    <img src="img/footer-logo1-1.png" alt />
                  </div>
                  <div className="d-none d-sm-block">
                    <img src="img/footer-logo-2.png" alt />
                  </div>
                </div>
              </div>
            </div>
            {/* md lg */}
            <div className="col-lg-8 col-md-12 d-none d-md-block">
              <div className={`${styles['mnu-footer']} d-flex justify-content-center align-content-center mt-3`}>
                <div className="row">
                  <div className="col-6 d-flex align-items-center justify-content-center">
                    <div className="lh-lg p-4">
                      <h4 className="h-4 fs-5 pb-2">دسترسی سریع</h4>
                      <li><a href="pages/About-us/About.html">درباره ما</a></li>
                      <li><a href="pages/Contact-us/Contact.html">تماس با ما</a></li>
                      <li><a href="pages/Articles-page/articles.html">مقالات</a></li>
                      <li><a href="#">آموزش خرید بیمه نامه بازنشستگی</a></li>
                      <li><a href="#">خرید آنلاین بیمه نامه بازنشستگی</a></li>
                    </div>
                  </div>
                  <div className="col-6 d-flex align-items-center justify-content-center">
                    <div className="lh-lg p-4">
                      <h4 className="h-4 fs-5 pb-2">پــــاسخگویی</h4>
                      <li className="fade-away" href="#">تلفن: ۰۲۶۳۳۲۱۱۹۰۷ </li>
                      <li className="fade-away" href="#">موبایل: ۸۲۵۹ ۷۲۴ ۰۹۳۶</li>
                      <li className="fade-away" href="#">واتس آپ: ۸۲۵۹ ۷۲۴ ۰۹۳۶</li>
                      <li className="fade-away" href="#">روزهای شنبه الی چهارشنبه ساعت ۹ صبح الی ۱۶</li>
                    </div>
                  </div>
                  <div className="col-12 d-flex justify-content-center">
                    <div className="lh-lg p-4">
                      <h4 className="h-4 fs-5 pb-2 d-flex justify-content-center">آدرس مـــا</h4>
                      <li className="fade-away" href="#">دفتر تهران: تهران، پاسداران، خیابان نازک، خیابان شهید
                        کاظم موسوی (گلستان ۵)،</li>
                      <li className="fade-away" href="#">، پلاک ۶۳.۰، طبقه ۱، واحد : ۱۰۲ ( در حال راه اندازی )
                      </li>
                      <li className="fade-away" href="#">دفتر کرج: کرج، مهرشهر، انتهای کیانمهر، بلوار امام
                        رضا، نبش کوچه پنجم غدیر</li>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* sm */}
            <div className="col-12 d-md-none pt-3">
              <div className="accordion mnu-footer" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="h-2 accordion-header" id="headingOne">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                      دسترسی سریع
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <li><a href="pages/About-us/About.html">درباره ما</a></li>
                      <li><a href="pages/Contact-us/Contact.html">تماس با ما</a></li>
                      <li><a href="pages/Articles-page/articles.html">مقالات</a></li>
                      <li><a href="#">آموزش خرید بیمه نامه بازنشستگی</a></li>
                      <li><a href="#">خرید آنلاین بیمه نامه بازنشستگی</a></li>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="h-2 accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      پــــاسخگویی
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse " aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <li className="fade-away" href="#">تلفن: ۰۲۶۳۳۲۱۱۹۰۷ </li>
                      <li className="fade-away" href="#">موبایل: ۸۲۵۹ ۷۲۴ ۰۹۳۶</li>
                      <li className="fade-away" href="#">واتس آپ: ۸۲۵۹ ۷۲۴ ۰۹۳۶</li>
                      <li className="fade-away" href="#">روزهای شنبه الی چهارشنبه ساعت ۹ صبح الی ۱۶</li>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className=" h-2 accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      آدرس مـــا
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <h4 className="h-4 fs-5 pb-2 d-flex justify-content-center">آدرس مـــا</h4>
                      <li className="fade-away" href="#">دفتر تهران: تهران، پاسداران، خیابان نازک، خیابان شهید
                        کاظم موسوی (گلستان ۵)،</li>
                      <li className="fade-away" href="#">، پلاک ۶۳.۰، طبقه ۱، واحد : ۱۰۲ ( در حال راه اندازی )
                      </li>
                      <li className="fade-away" href="#">دفتر کرج: کرج، مهرشهر، انتهای کیانمهر، بلوار امام
                        رضا، نبش کوچه پنجم غدیر</li>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 d-block d-sm-none pt-3 ">
              <div className="d-flex justify-content-center align-items-center img-trust row">
                <div className="col-6 d-flex justify-content-center align-items-center">
                  <img src="img/footer-logo1-1.png" alt />
                </div>
                <div className="col-6 d-flex justify-content-center align-items-center">
                  <img src="img/footer-logo-2.png" alt />
                </div>
              </div>
            </div>
            <div className="communication mt-3">
              <div className="logo-communication d-flex justify-content-center pt-2">
                <div className="d-none d-md-block">
                  <span><i className="fa-brands fa-whatsapp" /></span>
                  <span><i className="fa-brands fa-instagram" /></span>
                  <span><i className="fa-brands fa-twitter" /></span>
                  <span><i className="fa-solid fa-paper-plane" /></span>
                  <span><i className="fa-brands fa-facebook" /></span>
                </div>
              </div>
              <div className="communication-address d-flex justify-content-center pt-1">
                <div className="p-2 fs-6">
                  <span><i className="fa-solid fa-phone-flip" /></span>
                  <span className="fade-away ">تلفن: <span className="text-highlight ">09333362552</span></span>
                </div>
                <div className="p-2 fs-6">
                  <span><i className="fa-regular fa-message" /></span>
                  <span className="fade-away">تایمیل شرکت : <span className="text-highlight ">amirkamali@gmail.com</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="d-none d-lg-block">
        <a href="#" id="button-top" className="d-flex">
          <i className="fa-solid fa-arrow-up" />
        </a>
      </div>

    </>
  );
}