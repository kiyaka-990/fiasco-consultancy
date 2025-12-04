import React, { useState } from 'react';
import BlogSidebar from '../blog-sidebar/blog-sidebar';
import Pagination from '../blog/pagination';
import blogData from '../../../data/blog-data';
import Link from 'next/link';


const BlogStandardMain = () => {
    // Number of blog items to show per page
    const blogItemShow = 3;
    // State to track the current page index (0-based)
    const [currentPage, setCurrentPage] = useState(0);
    
    // Calculate total pages
    const totalPages = Math.ceil(blogData.length / blogItemShow);
    
    // Calculate start and end index for slicing the data array
    const startIndex = currentPage * blogItemShow;
    const endIndex = startIndex + blogItemShow;
    
    // Get the blog items for the current page
    const currentBlogItems = blogData.slice(startIndex, endIndex);
    
    // Handler for navigating to the next page
    const handleNextPage = () => {
        if (currentPage < totalPages - 1) {
        setCurrentPage(currentPage + 1);
        }
    };
    
    // Handler for navigating to the previous page
    const handlePrevPage = () => {
        if (currentPage > 0) {
        setCurrentPage(currentPage - 1);
        }
    };
    
    return (
        <div className="blog__standard section-padding">
            <div className="container">
                <div className="row">
                    {/* Main Blog Content Area (8/12 grid column) */}
                    <div className="col-xl-8 col-lg-8 lg-mb-50">
                        <div className="blog__standard-left">
                            {/* Map through the currently visible blog items */}
                            {currentBlogItems?.map((data, id) => (
                                <div className="news__standard-left-item mb-50" key={id}>
                                    {/* Blog Post Image */}
                                    <div className="news__standard-left-item-image">
                                        <Link href={`/blog/${data.id}`}><img src={data.image.src} alt="image" /></Link>
                                    </div>
                                    <div className="news__standard-left-item-content">
                                        {/* Post Metadata */}
                                        <div className="news__standard-left-item-content-meta">
                                            <ul>
                                                {/* Updated author name to reflect Nairobi team */}
                                                <li><a href="#"><i className="fal fa-user"></i>Nairobi Team</a></li>
                                                <li><a href="#"><i className="fal fa-calendar-alt"></i>{data.date}, March 2024</a></li>
                                                <li><a href="#"><i className="fal fa-comment-dots"></i>{data.comment} Comment</a></li>
                                            </ul>
                                        </div>
                                        {/* Post Title and Description */}
                                        <h3 className="mb-10"><Link href={`/blog/${data.id}`}>{data.title}</Link></h3>
                                        {/* Localized the placeholder description */}
                                        <p>{data.des}. Enjoy a view of the Nairobi skyline from the lush gardens below, showcasing the heart of Kenya.</p>                        
                                        {/* Read More Button */}
                                        <Link className="btn-one" href={`/blog/${data.id}`}>Read Details</Link>
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
                    {/* Blog Sidebar Area (4/12 grid column) */}
                    <div className="col-xl-4 col-lg-4">
                        <BlogSidebar />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogStandardMain;