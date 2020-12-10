import React from 'react'
import Form from "../Form/Form";
import NEUCoE from "../images/NEUCoE.png";
import neusea from "../images/neusea.png";

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
