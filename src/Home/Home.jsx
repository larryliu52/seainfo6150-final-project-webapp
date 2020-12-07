import React from 'react'
import Form from "../Form/Form";
import NEUCoE from "../images/NEUCoE.png";
import neusea from "../images/neusea.png";
import sea1 from "../images/sea1.jpg"
import sea2 from "../images/sea2.jpg"
import sea3 from "../images/sea3.jpg"
import sea4 from "../images/sea4.jpg"

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
                                </div>
                            </section>
                            <section class="new-event">
                                <div class="new-event-padding">
                                    <div class="new-evemt-block">
                                        <div class="new-event-title">
                                            <h2>
                                                Upcoming Events
                                            </h2>
                                        </div>
                                        
                                        <div class="new-event-boxes">
                                            <div class="new-event-boxes">
                                                <div class="new-event-box">
                                                    <div class="new-event-picture">
                                                        <img src={sea1} alt="event1" class="new-event-picture2"/>
                                                    </div>
                                                    <div class="new-event-text1">
                                                        <div class="fill-color">
                                                            <div class="month">December</div>
                                                            <div class="day">19</div>
                                                        </div>
                                                        <div class="event-text">
                                                            Meet Your Graduate Student Ambassadors!
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="new-event-box">
                                                    <div class="new-event-picture">
                                                        <img src={sea2} alt="event2" class="new-event-picture2"/>
                                                    </div>
                                                    <div class="new-event-text1">
                                                        <div class="fill-color">
                                                            <div class="month">December</div>
                                                            <div class="day">20</div>
                                                        </div>
                                                        <div class="event-text">
                                                            Happy Hours!
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="new-event-box">
                                                    <div class="new-event-picture">
                                                        <img src={sea3} alt="event3" class="new-event-picture2"/>
                                                    </div>
                                                    <div class="new-event-text1">
                                                        <div class="fill-color">
                                                            <div class="month">December</div>
                                                            <div class="day">21</div>
                                                        </div>
                                                        <div class="event-text">
                                                            Prepare For The Next Semester!
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="new-event-box">
                                                    <div class="new-event-picture">
                                                        <img src={sea4} alt="event4" class="new-event-picture2"/>
                                                    </div>
                                                    <div class="new-event-text1">
                                                        <div class="fill-color">
                                                            <div class="month">December</div>
                                                            <div class="day">22</div>
                                                        </div>
                                                        <div class="event-text">
                                                            Work From Home!
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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
