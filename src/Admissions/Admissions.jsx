import React from 'react'
import NEUCoE from "../images/NEUCoE.png";
import neusea from "../images/neusea.png";
import sea1 from "../images/sea1.jpg"
import sea2 from "../images/sea2.jpg"
import sea3 from "../images/sea3.jpg"
import sea4 from "../images/sea4.jpg"

const Admissions = () => {
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
                                    <h2>
                                        What is this degree?
                                    </h2>
                                    <h3>
                                        Master of Science in Information Systems
                                    </h3>
                                    <p>
                                        The MSIS Degree Focuses on the Intersection of Business, IT Management, and Engineering......
                                    </p>
                                    <h2>Deadline</h2>
                                    <p>Application Deadline: February 15th, 2021</p>
                                    <h2>Admissions Requirements</h2>
                                    <p>Applicants must have:</p>
                                    <ul>
                                        <li>A eligible bachelor's degree</li>
                                        <li>3.0 GPA</li>
                                        <li>Toefl</li>
                                        <li>GRE</li>
                                        <li>CV</li>
                                        <li>PS</li>
                                    </ul>
                                    <h2>Tuition</h2>
                                    <p><b>Tuition</b>: $999 per credit hour</p>
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

export default Admissions
