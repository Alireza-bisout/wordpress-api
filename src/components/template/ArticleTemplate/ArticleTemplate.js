import styles from "./ArticleTemplate.module.css"

function ArticleTemplate() {
    return (
        <section id="content-articles">
            <div className="container mt-3">
                <div className="row">
                    <div className="col-lg-9 col-md-12 pt-3">
                        <div className="box-content">
                            <div className="d-flex justify-content-between pb-3">
                                <h5 className="h-5">برگزاری مسابقات برنامه نویسی هوش مصنوعی در پارک علم و فناوری دانشگاه تهران</h5>
                                <span className="Subject"><a href>اخبار</a></span>
                            </div>
                            <div className="img-title">
                                <img src="../../img/article.jpg" alt />
                            </div>
                            <div className="tex-content d-flex justify-content-between align-items-center pt-3 pb-3 fade-away">
                                <div className="Status-articles d-sm-flex justify-content-center align-items-center gap-4">
                                    <div className="User">
                                        <img src="../../img/logo.png" alt />
                                        <span> توسط: </span>
                                        <span>amir kamali</span>
                                    </div>
                                    <div className="history">
                                        <i className="fa-regular fa-calendar-days" />
                                        <span> تاریخ انتشار: 24 شهریور 1403</span>
                                    </div>
                                </div>
                                <div className="d-sm-flex justify-content-center align-items-center gap-4">
                                    <div className="Opinion">
                                        <i className="fa-regular fa-message" />
                                        <span> 0 دیدگاه</span>
                                    </div>
                                    <span className="arrow-up d-flex justify-content-center">
                                        <i className="fa-solid fa-arrow-up-from-bracket" />
                                    </span>
                                </div>
                            </div>
                            <div className="text-article">
                                <p className="fade-away lh-1 pt-3 pb-3">
                                    حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را
                                    برای
                                    طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
                                    صورت
                                    می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان
                                    رسد.
                                    حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد
                                    استفاده
                                    قرار گیرد. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
                                    طراحان
                                    گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون می باشد.</p>
                                <p className="tex-pictures-left fade-away lh-1 pt-4 pb-4">
                                    <img src="../../img/single-iamge-1.jpg" alt />
                                    حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را
                                    برای
                                    طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
                                    صورت
                                    می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان
                                    رسد.
                                    حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد
                                    استفاده
                                    قرار گیرد. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
                                    طراحان
                                    گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون می باشد.
                                </p>
                                <p className="tex-pictures-right fade-away lh-1 pt-4 pb-4">
                                    <img src="../../img/single-iamge-1.jpg" alt />
                                    حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را
                                    برای
                                    طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
                                    صورت
                                    می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان
                                    رسد.
                                    حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد
                                    استفاده
                                    قرار گیرد. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
                                    طراحان
                                    گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون می باشد.
                                </p>
                            </div>
                            <div className="tage">
                                <span className="fade-away">برچسب ها :</span>
                                <span className="tages">
                                    <a href>ایران</a>
                                    <a href>سئو</a>
                                    <a href>طراحی سایت</a>
                                </span>
                            </div>
                        </div>
                        <div className="box-Comment mt-4">
                            <h4>دیدگاهتان را بنویسید </h4>
                            <form action>
                                <p className="box-text">
                                    <textarea name="comment" id="comment" placeholder="دیدگاه شما" rows={8} maxLength={65525} cols={45} defaultValue={""} />
                                </p>
                                <div className="btn-Comment">
                                    <div className="input mt-3"><input type="text" placeholder="نام " /></div>
                                    <div className="input mt-3"><input type="number" placeholder="شماره " /></div>
                                    <div className="input mt-3"><input type="email" placeholder="ایمیل" /></div>
                                </div>
                                <div className="remember pt-4">
                                    <input type="checkbox" />
                                    <label htmlFor>ذخیره نام، ایمیل و شماره من در مرورگر برای زمانی که دوباره دیدگاهی
                                        می‌نویسم.</label>
                                </div>
                                <div className="btn-submit pt-4">
                                    <a href="#">ارسال دیدگاه</a>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-3 d-block">
                        <div className="search mt-3">
                            <h6 className="h-6 fw-bold">دنبال چیزی میگردی؟</h6>
                            <input className="input-serach" type="search" placeholder="جستجو..." />
                            <button className="btn-search"><i className="fa-solid fa-magnifying-glass" /></button>
                        </div>
                        <div className="Categories  mt-3">
                            <h6 className="fw-bold">دسته بندی ها</h6>
                            <div className="lh-1">
                                <li><a href>اخبار</a></li>
                                <li><a href>تکنوروژی</a></li>
                                <li><a href>سئو</a></li>
                                <li><a href>سرگرمی</a></li>
                                <li><a href>طراحی سایت</a></li>
                                <li><a href>هوش مصنوعی</a></li>
                            </div>
                        </div>
                        <div className="latest-articles mt-3">
                            <h6 className="fw-bold">آخرین مقالات</h6>
                            <div className="box-latest-articles d-flex pt-2">
                                <div className="logo-articles pt-2">
                                    <img src="../../img/article-2.png" alt />
                                </div>
                                <div className="d-grid">
                                    <span className="title">برگزاری مسابقات برنامه نویسی هوش مصنوعی در پارک علم و
                                        فناوری دانشگاه تهران</span>
                                    <span className="fade-away lh-1">تاریخ انتشار: 24 شهریور 1403</span>
                                </div>
                            </div>
                            <div className="box-latest-articles d-flex pt-2">
                                <div className="logo-articles pt-2">
                                    <img src="../../img/article-2.png" alt />
                                </div>
                                <div className="d-grid">
                                    <span className="title">برگزاری مسابقات برنامه نویسی هوش مصنوعی در پارک علم و
                                        فناوری دانشگاه تهران</span>
                                    <span className="fade-away lh-1">تاریخ انتشار: 24 شهریور 1403</span>
                                </div>
                            </div>
                            <div className="box-latest-articles d-flex pt-2">
                                <div className="logo-articles pt-2">
                                    <img src="../../img/article-2.png" alt />
                                </div>
                                <div className="d-grid">
                                    <span className="title">برگزاری مسابقات برنامه نویسی هوش مصنوعی در پارک علم و
                                        فناوری دانشگاه تهران</span>
                                    <span className="fade-away lh-1">تاریخ انتشار: 24 شهریور 1403</span>
                                </div>
                            </div>
                            <div className="box-latest-articles d-flex pt-2">
                                <div className="logo-articles pt-2">
                                    <img src="../../img/article-2.png" alt />
                                </div>
                                <div className="d-grid">
                                    <span className="title">برگزاری مسابقات برنامه نویسی هوش مصنوعی در پارک علم و
                                        فناوری دانشگاه تهران</span>
                                    <span className="fade-away lh-1">تاریخ انتشار: 24 شهریور 1403</span>
                                </div>
                            </div>
                            <div className="box-latest-articles d-flex pt-2">
                                <div className="logo-articles pt-2">
                                    <img src="../../img/article-2.png" alt />
                                </div>
                                <div className="d-grid">
                                    <span className="title">برگزاری مسابقات برنامه نویسی هوش مصنوعی در پارک علم و
                                        فناوری دانشگاه تهران</span>
                                    <span className="fade-away lh-1">تاریخ انتشار: 24 شهریور 1403</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ArticleTemplate