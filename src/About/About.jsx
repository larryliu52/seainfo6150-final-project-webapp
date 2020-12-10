import React from 'react'
import NEUCoE from "../images/NEUCoE.png";
import neusea from "../images/neusea.png";
import sea1 from "../images/sea1.jpg"
import sea2 from "../images/sea2.jpg"
import sea3 from "../images/sea3.jpg"
import sea4 from "../images/sea4.jpg"

const About = () => {
    return (
        <body class="whole-page">
            
            <div>
                <main>
                    <div class="page-cf">
                        <div class="page-tl">
                            <section class="post">
                                <img src={neusea} alt="Seattle campus" class="highlightpost"/>
                            </section>
                            <section class="about-box">
                                <div class="about-text">
                                    <p>
                                        We are a leader in experiential education and interdisciplinary research, focused on engineering for society.
                                        <br />
                                        Started in 1909 and built on a tradition of engagement with the world, the mission of the College of Engineering at XXXXXX University is to:
                                    </p>
                                    <ul>
                                        <li>
                                            Educate students for a lifetime of continued growth, fulfillment, and accomplishment.
                                        </li>
                                        <li>
                                            Create and translate knowledge through transformative research to address the Engineering Grand Challenges to meet global and societal needs through innovation.
                                        </li>
                                    </ul>
                                </div>
                            </section>
                            <section class="about-rank-box">
                                <div class="about-rank-single-box">
                                    <p class="about-rank-text">
                                        3999+
                                    </p>
                                    <p class="about-rank-text-down">
                                        Undergraduate Students
                                    </p>
                                </div>
                                <div class="about-rank-single-box">
                                    <p class="about-rank-text">
                                        4500+
                                    </p>
                                    <p class="about-rank-text-down">
                                        Graduate Students
                                    </p>
                                </div>
                                <div class="about-rank-single-box">
                                    <p class="about-rank-text">
                                        3000+
                                    </p>
                                    <p class="about-rank-text-down">
                                        Co-op Placements
                                    </p>
                                </div>
                                <div class="about-rank-single-box">
                                    <p class="about-rank-text">
                                        55+
                                    </p>
                                    <p class="about-rank-text-down">
                                        Student Clubs
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

export default About
