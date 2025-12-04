import React, { useState } from 'react';
import BlogSidebar from '../blog-sidebar/blog-sidebar';
import Pagination from '../blog/pagination';
import blogData from '../../../data/blog-data';
import Link from 'next/link';

const BlogGridMain = () => {
    // Component logic for grid layout, similar pagination setup
    const blogItemShow = 6;
    const [currentPage, setCurrentPage] = useState(0);
    const totalPages = Math.ceil(blogData.length / blogItemShow);
    const startIndex = currentPage * blogItemShow;
    const endIndex = startIndex + blogItemShow;
    const currentBlogItems = blogData.slice(startIndex, endIndex);

    const handleNextPage = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage(currentPage + 1);
        }
    };
    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    // The layout is changed to a grid (col-lg-6)
    return (
        <div className="blog__grid section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-8 lg-mb-50">
                        <div className="row">
                            {/* Map through the currently visible blog items in a grid */}
                            {currentBlogItems?.map((data, id) => (
                                <div className="col-lg-6" key={id}>
                                    <div className="news__standard-left-item mb-50">
                                        <div className="news__standard-left-item-image">
                                            <Link href={`/blog/${data.id}`}><img src={data.image.src} alt="image" /></Link>
                                        </div>
                                        <div className="news__standard-left-item-content">
                                            <div className="news__standard-left-item-content-meta">
                                                <ul>
                                                    {/* Localized Author */}
                                                    <li><a href="#"><i className="fal fa-user"></i>Nairobi Team</a></li>
                                                    <li><a href="#"><i className="fal fa-calendar-alt"></i>{data.date}, March 2024</a></li>
                                                    <li><a href="#"><i className="fal fa-comment-dots"></i>{data.comment} Comment</a></li>
                                                </ul>
                                            </div>
                                            <h3 className="mb-10"><Link href={`/blog/${data.id}`}>{data.title}</Link></h3>
                                            {/* Localized Description */}
                                            <p>{data.des}. Insights from our Nairobi headquarters, impacting communities across Kenya.</p>
                                            <Link className="btn-one" href={`/blog/${data.id}`}>Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Pagination Component */}
                        <Pagination
                            currentPage={currentPage}
                            handlePrevPage={handlePrevPage}
                            totalPages={totalPages}
                            handleNextPage={handleNextPage}
                            setCurrentPage={setCurrentPage}
                        />
                    </div>
                    {/* Blog Sidebar Area */}
                    <div className="col-xl-4 col-lg-4">
                        <BlogSidebar />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogGridMain;