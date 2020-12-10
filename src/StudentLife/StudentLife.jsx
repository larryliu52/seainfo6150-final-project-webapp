import React from 'react'
import NEUCoE from "../images/NEUCoE.png";
import neusea from "../images/neusea.png";
import sea1 from "../images/sea1.jpg"
import sea2 from "../images/sea2.jpg"
import sea3 from "../images/sea3.jpg"
import sea4 from "../images/sea4.jpg"

const StudentLife = () => {
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
                                        Student Organizations
                                    </h2>
                                    <p>Department, College, and Campus level student organizations provide many great activities and experiences for each student to explore. Opportunities include gaining leadership and professional development experience, volunteering to participate in various service projects and social activities to meet new friends and have fun. Also, ......</p>
                                    <h2 class="people-font-color">
                                        Student Resources
                                    </h2>
                                    <p>
                                        There are a variety of campus and community resources available to keep students healthy and happy during university!
                                    </p>
                                    <h2 class="people-font-color">
                                        Career Services
                                    </h2>
                                    <p>
                                        University can help you explore many career opportunities in industry.
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

export default StudentLife
