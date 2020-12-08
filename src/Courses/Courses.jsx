import React from 'react'
import Form from "../Form/Form";
import NEUCoE from "../images/NEUCoE.png";
import neusea from "../images/neusea.png";

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
                                <div class="courses-list">
                                    <h2>Courses:</h2>
                                    <table class="courses-list-table">
                                        <thead>
                                            <tr>
                                                <th>Number</th>
                                                <th class="courses-padding">Title</th>
                                                <th class="courses-padding">Prerequisites</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>INFO 5100</td>
                                                <td class="courses-padding">Application Engineering and Development</td>
                                                <td class="courses-padding"></td>
                                            </tr>
                                            <tr>
                                                <td>INFO 6150</td>
                                                <td class="courses-padding">Web Design and User Experience Engineering</td>
                                                <td class="courses-padding"></td>
                                            </tr>
                                            <tr>
                                                <td>INFO 7250</td>
                                                <td class="courses-padding">Engineering of Big-Data Systems</td>
                                                <td class="courses-padding">INFO 5100</td>
                                            </tr>
                                            <tr>
                                                <td>INFO 6210</td>
                                                <td class="courses-padding">DATA MANAGEMENT and DATABASE DESIGN</td>
                                                <td class="courses-padding"></td>
                                            </tr>
                                        </tbody>
                                    </table>
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
