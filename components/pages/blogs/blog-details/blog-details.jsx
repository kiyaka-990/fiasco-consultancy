import BlogSidebar from '../blog-sidebar/blog-sidebar';
import blogData from '../../../data/blog-data';
import Link from 'next/link';

// Assuming this component receives the blog ID via props or router query (e.g., /blog/[id])
const BlogSingleMain = ({ blogId = 1 }) => { 
    // Find the specific blog post data
    const blogPost = blogData.find(post => post.id === blogId) || blogData[0]; // Fallback to first item

    if (!blogPost) {
        return <div className="section-padding">Blog post not found.</div>;
    }

    return (
        <div className="blog__single section-padding">
            <div className="container">
                <div className="row">
                    {/* Main Single Blog Content Area (8/12 grid column) */}
                    <div className="col-xl-8 col-lg-8 lg-mb-50">
                        <div className="blog__single-left">
                            <div className="blog__single-left-image">
                                <img src={blogPost.image.src} alt={blogPost.title} />
                            </div>
                            <div className="blog__single-left-content">
                                <div className="blog__single-left-content-meta">
                                    <ul>
                                        {/* Localized Author */}
                                        <li><a href="#"><i className="fal fa-user"></i>Nairobi Team</a></li>
                                        <li><a href="#"><i className="fal fa-calendar-alt"></i>{blogPost.date}, March 2024</a></li>
                                        <li><a href="#"><i className="fal fa-comment-dots"></i>{blogPost.comment} Comment</a></li>
                                    </ul>
                                </div>
                                <h3 className="mb-20">{blogPost.title}</h3>

                                {/* Main Body Content - Localized Placeholder Text */}
                                <p className="mb-40">
                                    This blog post explores the challenges and opportunities for sustainable development right here in Nairobi, Kenya. Our focus is always on local impact, leveraging innovation developed at our headquarters in the capital. 
                                </p>
                                <p className="mb-40">
                                    {blogPost.des}. From the vibrant markets to the growing tech scene, Kenya offers a unique perspective. We delve deep into this topic, offering analysis relevant to the East African context.
                                </p>
                                
                                <blockquote className="blog__single-left-content-blockquote">
                                    <p>Our commitment remains rooted in Kenya, ensuring that every project reflects the drive and ingenuity of the Nairobi community. Hapa kazi tu!</p>
                                    <span>- CEO's Message from Nairobi HQ</span>
                                </blockquote>

                                <p className="mb-40">
                                    The entire team, located in Nairobi, contributes to these articles. If you have any questions, feel free to drop a comment below or reach out to our local support line.
                                </p>
                                
                                {/* Placeholder for tags/social sharing */}
                                <div className="blog__single-left-content-tag">
                                    <h6>Tags:</h6>
                                    <div className="tag-list">
                                        <Link href="#">Kenya</Link>
                                        <Link href="#">Nairobi</Link>
                                        <Link href="#">Africa Tech</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Blog Sidebar Area (4/12 grid column) */}
                    <div className="col-xl-4 col-lg-4">
                        {/* Assuming BlogSidebar is adapted for single view if necessary */}
                        <BlogSidebar />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogSingleMain;