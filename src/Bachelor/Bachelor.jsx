import React from 'react'
import Form from "../Form/Form";
import NEUCoE from "../images/NEUCoE.png";
import neusea from "../images/neusea.png";
import applyImage from "../images/apply.jpg"

const Home = () => {
    return (
        <body class="whole-page">
            <header>
                <div class="top-university-name-bar">
                    <div class="top-university-name">
                        <span>XXXXXX University</span>
                    </div>
                </div>
                <div class="logo-navbar">
                    <div class="logo">
                        <div class="logo2">
                            <div class="logo-picture">
                                <a href="/">
                                    <img src={NEUCoE} alt="XXXXXX University College of Engineering" class="logo-picture2"/>
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
                                    <a href="/about" class="item">About</a>
                                </li>
                                <li class="navbar-item">
                                    <a href="/admissions" class="item">Admissions</a>
                                </li>
                                <li class="navbar-item">
                                    <a href="/people" class="item">People</a>
                                </li>
                                <li class="navbar-item">
                                    <a href="/academics" class="item">Academics</a>
                                </li>
                                <li class="navbar-item">
                                    <a href="/studentlife" class="item">Student Life</a>
                                </li>
                                <li class="navbar-item">
                                    <a href="/research" class="item">Research</a>
                                </li>
                                <li class="navbar-item">
                                    <a href="/newsandevents" class="item">News and Events</a>
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
                                <h2>
                                    Bachelor's
                                </h2>
                                <p>
                                    In XXXXXX University, Bachelor of Science, your will ......
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
