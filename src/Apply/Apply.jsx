import React, {useState} from 'react'
import Form from "../Form/Form";
import NEUCoE from "../images/NEUCoE.png";
import neusea from "../images/neusea.png";
import applyImage from "../images/apply.jpg"
import { Route, Link } from 'react-router-dom';

import Success from "../Success/Success.jsx"


const Home = (props) => {
    const [submittedForm, setSubmittedForm] = useState();
    function onSubmit(e) {
        e.preventDefault();
        const data = new FormData(e.target);
        setSubmittedForm(data);
    };

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
                                <h2>
                                    Apply for Bachelor's
                                </h2>
                                
                                {
                                    submittedForm ? (
                                        <div>
                                            <h3>Please confirm your information for this application: </h3>
                                            First Name: {submittedForm.get("firstName")} Last Name: {submittedForm.get("lastName")}
                                            <br />
                                            Gender: {submittedForm.get("myDropdown")}
                                            <br />
                                            Toefl: {submittedForm.get("toeflScore")} GRE Score: {submittedForm.get("GREScore")}
                                            <br />
                                            Your Email Address: {submittedForm.get("emailAddress")}
                                            <br />
                                            
                                            <Link to="/success" class="apply-button-frame">Submit</Link>
                                            <Route path="/success" exact component={Success} />
                                            
                                            
                                        </div>
                                    ) : (
                                        <form onSubmit={onSubmit}>
                                            <p>
                                                <label htmlFor="myTextId">You are now applying for <b>{props.degree}</b> degree:</label>
                                            </p>
                                            
                                            <label htmlFor="myTextId">First Name</label>
                                            <input type="text" name="firstName" id="myTextId"/>
                                            <label htmlFor="myTextId">Last Name</label>
                                            <input type="text" name="lastName" id="myTextId"/>
                                            
                                            <br />
                                            <label htmlFor="myDropdownId">Gender</label>
                                            <select name="myDropdown" id="myDropdownId">
                                                <option>Please select</option>
                                                <option>Female</option>
                                                <option>Male</option>
                                                <option>Do not want to provide</option>
                                            </select>
                                            <br />
                                            <label htmlFor="myTextId">Toefl Score</label>
                                            <input type="text" name="toeflScore" id="myTextId"/>
                                            <label htmlFor="myTextId">GRE Score</label>
                                            <input type="text" name="GREScore" id="myTextId"/>
                                            <br/>
                                            <label htmlFor="myTextId">Your Email Address</label>
                                            <input type="text" name="emailAddress" id="myTextId"/>
                                            <br />
                                            <input type="submit" value="Next" />
                                        </form>
                                        
                                    )
                                }
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
