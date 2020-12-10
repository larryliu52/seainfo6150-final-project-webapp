import React from 'react'
import Form from "../Form/Form";
import NEUCoE from "../images/NEUCoE.png";
import neusea from "../images/neusea.png";
import lanzeliu from "../images/Lanze-Liu.jpg"

import Bachelor from "../Bachelor/Bachelor.jsx";
import Master from "../Master/Master.jsx";
import Doctoral from "../Doctoral/Doctoral.jsx";
import Courses from "../Courses/Courses.jsx";

import { Switch, Route, Link } from "react-router-dom";

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
                            <section class="degree-bar">
                                <div class="degree-bar-2">
                                    <Link to="/bachelor" class="degree-bar-box">Bachelor's</Link>
                                    <Route path="/bachelor" exact component={Bachelor} />
                                    <Link to="/master" class="degree-bar-box">Master's</Link>
                                    <Route path="/master" exact component={Master} />
                                    <Link to="/doctoral" class="degree-bar-box">Doctoral</Link>
                                    <Route path="/doctoral" exact component={Doctoral} />
                                    <Link to="/courses" class="degree-bar-box">Courses</Link>
                                    <Route path="/courses" exact component={Courses} />
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
