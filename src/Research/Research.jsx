import React from 'react'
import NEUCoE from "../images/NEUCoE.png";
import neusea from "../images/neusea.png";
import sea1 from "../images/sea1.jpg"
import sea2 from "../images/sea2.jpg"
import sea3 from "../images/sea3.jpg"
import sea4 from "../images/sea4.jpg"

const Research = () => {
    return (
        <body class="whole-page">
            
            <div>
                <main>
                    <div class="page-cf">
                        <div class="page-tl">
                            <section class="post">
                                <img src={neusea} alt="Seattle campus" class="highlightpost"/>
                            </section>
                            <section>
                                <div>
                                    <h2 class="people-font-color">
                                        Boldly innovating to impact society and transform the world.
                                    </h2>
                                    <p>The College of Engineering at Northeastern has over 180 faculty and they are innovators and inventors and ......</p>
                                </div>
                            </section>
                            <section class="about-rank-box">
                                <div class="about-rank-single-box">
                                    <p class="about-rank-text">
                                        $60+M
                                    </p>
                                    <p class="about-rank-text-down">
                                        Funding
                                    </p>
                                </div>
                                <div class="about-rank-single-box">
                                    <p class="about-rank-text">
                                        15+
                                    </p>
                                    <p class="about-rank-text-down">
                                        Research Centers
                                    </p>
                                </div>
                                <div class="about-rank-single-box">
                                    <p class="about-rank-text">
                                        80+
                                    </p>
                                    <p class="about-rank-text-down">
                                        Awards
                                    </p>
                                </div>
                                <div class="about-rank-single-box">
                                    <p class="about-rank-text">
                                        100+
                                    </p>
                                    <p class="about-rank-text-down">
                                        Patents
                                    </p>
                                </div>
                            </section>




                        </div>
                    </div>
                </main>
            </div>
            <footer class="footer">
                <div class="footer-top">
                    <div class="footer-container">
                        <div class="footer-text">
                            <h3 class="footer-text-detail">
                                XXXXXX University College of Engineering
                            </h3>
                            <h3 class="footer-copyright-color">Address here, City, State Postcode | Phone number here</h3>
                            <h3 class="footer-copyright-color">© Copyright here</h3>
                        </div>
                    </div>
                </div>
            </footer>
        </body>
    )
}

export default Research
