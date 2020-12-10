import React from 'react'
import Form from "../Form/Form";
import NEUCoE from "../images/NEUCoE.png";
import neusea from "../images/neusea.png";
import applyImage from "../images/apply.jpg"

const Home = () => {
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
                                <h2>
                                    Master of Science in Information Systems
                                </h2>
                                <p>
                                    The MSIS Degree Focuses on the Intersection of Business, IT Management, and Engineering. Also, ......
                                </p>
                                <h3>
                                    Admission Requirement:
                                </h3>
                                <p>
                                    Applicants must have:
                                </p>
                                <ul>
                                    <li>A eligible bachelor's degree</li>
                                    <li>3.0 GPA</li>
                                    <li>Toefl</li>
                                    <li>GRE</li>
                                    <li>CV</li>
                                    <li>PS</li>
                                </ul>
                                <h3>Program Requirement:</h3>
                                <p>32 credits with grade B above to graduate.</p>
                            </section>
                            <section class="apply-box">
                                <div class="apply-box-left">
                                    <img src={applyImage} alt="Apply now!" class="apply-image"/>
                                </div>
                                <div class="apply-button">
                                    <h2>Apply now!</h2>
                                    <div>
                                        <a class="apply-button-frame" href="/">Apply</a>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </main>
            </div>
            <footer class="footer">
                <div class="footer-top">
                    <div class="footer-container">
                        <h3 class="footer-text-detail">
                            XXXXXX University College of Engineering
                        </h3>
                        <h3 class="footer-copyright-color">Address here, City, State Postcode | Phone number here</h3>
                        <h3 class="footer-copyright-color">© Copyright here</h3>
                    </div>
                </div>
            </footer>
        </body>
    )
}

export default Home
