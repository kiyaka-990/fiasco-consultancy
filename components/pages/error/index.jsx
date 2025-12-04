"use client";
import SEO from '@/components/data/seo';
import BreadCrumb from '../common/breadcrumb';
import Error from './error';
import ScrollToTop from '../common/scroll/scroll-to-top';

const ErrorPage = () => {
    return (
        <>
            <SEO pageTitle='Not Found' />
            <BreadCrumb title='Not Found' innerTitle='404' />
            <Error />
            <ScrollToTop />
        </>
    );
};

export default ErrorPage;