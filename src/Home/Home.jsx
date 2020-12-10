import React from 'react'
import Form from "../Form/Form";
import NEUCoE from "../images/NEUCoE.png";
import neusea from "../images/neusea.png";
import sea1 from "../images/sea1.jpg";
import sea2 from "../images/sea2.jpg";
import sea3 from "../images/sea3.jpg";
import sea4 from "../images/sea4.jpg";
import treefrog from "../images/treefrog.jpg";

import Bachelor from "../Bachelor/Bachelor.jsx";
import Master from "../Master/Master.jsx";
import Doctoral from "../Doctoral/Doctoral.jsx";

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
