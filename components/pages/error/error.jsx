import Link from 'next/link';
import React from 'react';

const Error = () => {
    return (
        <div className="error section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="error-page">
                            <h1>4<span>0</span>4</h1>
                            <h2>Page Not Found at Fiasco Consultancy.</h2>
                            <p>
                                It looks like the page you were looking for is unavailable. 
                                We apologize for the inconvenience. Please navigate back to our homepage for consultancy services.
                            </p>                     
                            <Link className="btn-one" href="/">
                                Return to Fiasco Homepage
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Error;