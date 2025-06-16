import { React } from 'react'
import './App.css';
import '../App.css';

function Banner() {


    return (
        <>
            {/* desktop */}
            <div className="footer">
                <div className="proton">
                    <h1>PROTON<sup>@</sup></h1>
                </div>
                <div className="pages">
                    <div className="pages_link">
                        <div>
                            <h3>Company</h3>
                            <p>About Proton</p>
                            <p>Stores</p>
                            <p>Careers</p>
                            <p>Affiliate Program</p>
                            <p>Give and Get $50</p>
                            <p>Policies</p>
                            <p>Fraud Warning</p>
                        </div>
                        <div>
                            <h3>Customer Service</h3>
                            <p>Contact Us</p>
                            <p>My Account</p>
                            <p>Track My Order</p>
                            <p>Shipping & Returns</p>
                            <p>FAQs</p>
                            <p>Subscription Terms</p>
                        </div>
                        <div>
                            <h3>Connection with Proton</h3>
                            <p>Apple Podcast</p>
                            <p>Facebook</p>
                            <p>Instagram</p>
                            <p>YouTube</p>
                        </div>
                        <div>
                            <h3>Explore More</h3>
                            <p>Good Kitchen</p>
                            <p>Good clean Proton</p>
                            <p>Proton x CB2</p>
                            <p>Proton Ruggable</p>
                            <p>In Proton Health</p>
                        </div>
                    </div>
                    <div className="email">
                        <div>
                            <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>
                        </div>
                        <div>
                            <div>
                                <input type="email" placeholder="Email Address" />
                                <button>SIGN UP</button>
                            </div>
                            <p>By clicking submit , you agree to our receive emails from proton</p>
                        </div>
                    </div>
                </div>

            </div>
            {/* mobile */}

            <div className="mobile_view">
                <div className="proton">
                    <h1>PROTON<sup>@</sup></h1>
                </div>
                <div>
                    <div>
                        <h2>Company</h2>
                        <p>About Proton</p>
                        <p>Stores</p>
                        <p>Stores</p>
                        <p>Careers</p>
                        <p>Affiliate Program</p>
                        <p>Give and Get $50</p>
                        <p>Policies</p>
                        <p className="fraud">Fraud Warning</p>
                    </div>
                    <div>
                        <h2>Customer Service</h2>
                        <p>Contact Us</p>
                        <p>My Account</p>
                        <p>Track My Order</p>
                        <p>Shipping & Return</p>
                        <p>FAQs</p>
                        <p className="fraud">Subscription Terms</p>
                    </div>
                    <div>
                        <h2>Connection with Proton</h2>
                        <p>Apple Podcast</p>
                        <p>Facebook</p>
                        <p>Instagram</p>
                        <p className="fraud">YouTube</p>
                    </div>
                    <div>
                        <h2>Explore More</h2>
                        <p>Good Kitchen</p>
                        <p>Good clean Proton</p>
                        <p>Proton x CB2</p>
                        <p>Proten Ruggable</p>
                        <p className="fraud">In proton Health</p>
                    </div>
                </div>
            </div>
            <div className="down">
                <p>©2008-2025 Proton, Inc. All Rights Reserved. Proton® is a registered trademark of Proton, Inc. and is registered with the U.S. Patent and Trademark Office</p>
            </div>

        </>
    )
}

export default Banner
