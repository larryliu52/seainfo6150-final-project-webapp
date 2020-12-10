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
                            <h2>Thank you! Your application has been successfully submitted! :)</h2>
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
