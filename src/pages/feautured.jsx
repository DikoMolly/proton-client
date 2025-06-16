import { React } from 'react'
import featured01 from "../assets/feautured-01.jpg"
import featured02 from "../assets/feautured-02.jpg"
import featured03 from "../assets/feautured-03.jpg"
import featured04 from "../assets/feautured-04.jpg"
import '../App.css';

function Featured() {


    return (
        <>

            <div className="bgdrop">
                <div>
                    <h1>Featured Shops</h1>
                </div>

                <div className="featured_container">
                    <div className="featured_product">
                        <div>
                            <div className="imgContainer">
                                <img src={featured01} />
                            </div>
                            <div className="featured_description">
                                <h2>GWYNETH'S PICKS</h2>
                                <p>A peek inside GP's shopping cart.</p>
                                <a href="#">SHOP NOW</a>
                            </div>
                        </div>
                    </div>

                    <div className="featured_product">
                        <div>
                            <div className="featured_description">
                                <h2>GWYNETH'S PICKS</h2>
                                <p>A peek inside GP's shopping cart.</p>
                                <a href="#">SHOP NOW</a>
                            </div>
                            <div className="imgContainer">
                                <img src={featured02} />
                            </div>

                        </div>
                    </div>

                    <div className="featured_product">
                        <div>
                            <div className="imgContainer">
                                <img src={featured03} />
                            </div>
                            <div className="featured_description">
                                <h2>GWYNETH'S PICKS</h2>
                                <p>A peek inside GP's shopping cart.</p>
                                <a href="#">SHOP NOW</a>
                            </div>
                        </div>
                    </div>

                    <div className="featured_product">
                        <div>
                            <div className="featured_description">
                                <h2>GWYNETH'S PICKS</h2>
                                <p>A peek inside GP's shopping cart.</p>
                                <a href="#">SHOP NOW</a>
                            </div>
                            <div className="imgContainer">
                                <img src={featured04} />
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Featured
