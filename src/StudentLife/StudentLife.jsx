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
            <header>
                <div class="top-university-name-bar">
                    <div class="top-university-name">
                        <span>Northeastern University</span>
                    </div>
                </div>
                <div class="logo-navbar">
                    <div class="logo">
                        <div class="logo2">
                            <div class="logo-picture">
                                <a href="/">
                                    <img src={NEUCoE} alt="Northeastern University College of Engineering" class="logo-picture2"/>
                                </a>
                            </div>
                            <div class="logo-word">
                                <div class="college-name">
                                    College of Engineering
                                </div>
                                <div class="program-name">
                                    Information Systems
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="navbar">
                        <div class="navbar2">
                            <ul class="navbar-items">
                                <li class="navbar-item">
                                    <a href="#" class="item">About</a>
                                </li>
                                <li class="navbar-item">
                                    <a href="#" class="item">Admissions</a>
                                </li>
                                <li class="navbar-item">
                                    <a href="#" class="item">People</a>
                                </li>
                                <li class="navbar-item">
                                    <a href="#" class="item">Academics</a>
                                </li>
                                <li class="navbar-item">
                                    <a href="#" class="item">Student Life</a>
                                </li>
                                <li class="navbar-item">
                                    <a href="#" class="item">Research</a>
                                </li>
                                <li class="navbar-item">
                                    <a href="#" class="item">News and Events</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
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
                                Northeastern University College of Engineering
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
