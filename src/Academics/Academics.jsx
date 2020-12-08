import React from 'react'
import Form from "../Form/Form";
import NEUCoE from "../images/NEUCoE.png";
import neusea from "../images/neusea.png";
import lanzeliu from "../images/Lanze-Liu.jpg"

const Home = () => {
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
                                    <a href="/about" class="item">About</a>
                                </li>
                                <li class="navbar-item">
                                    <a href="/admissions" class="item">Admissions</a>
                                </li>
                                <li class="navbar-item">
                                    <a href="/people" class="item">People</a>
                                </li>
                                <li class="navbar-item">
                                    <a href="#" class="item">Academics</a>
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
                            <section class="degree-bar">
                                <div class="degree-bar-2">
                                    <a href="/" class="degree-bar-box">
                                        Bachelor's
                                    </a>
                                    <a href="/" class="degree-bar-box">
                                        Master's
                                    </a>
                                    <a href="/" class="degree-bar-box">
                                        Doctoral
                                    </a>
                                    <a href="/courses" class="degree-bar-box">
                                        Courses
                                    </a>
                                </div>
                            </section>

                            <section class="academics-student-life-frame">
                                <div class="academics-student-life-box">
                                    <div class="academics-student-life-box-internal">
                                        <div class="academics-student-life-box-internal-left">
                                            <h2 class="academics-student-life-box-internal-left-text">
                                                Student Life
                                            </h2>
                                            <p class="academics-student-life-box-internal-left-text">
                                                Today, we are highlighting Lanze (he/him), an international student in the College of Engineering program. He shares, "As an international student, I feel there are many ways to get involved on the NU Seattle campus. We have so many great activities on campus that students from Seattle and across the network can take advantage of. These activities provide us with opportunities to expand our social circles and network with our peers. The Seattle campus is beautiful. I enjoy studying with my classmates and interacting with my professors."
                                            </p>
                                        </div>
                                        <div class="academics-student-life-box-internal-right">
                                            <p class="academics-student-life-box-internal-right-internal">
                                                <img src={lanzeliu} alt="Student Lanze Liu" class="academics-student-life-box-internal-right-internal-image"/>
                                            </p>
                                        </div>
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
                            Northeastern University College of Engineering
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
