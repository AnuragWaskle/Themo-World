import React from "react";
import QuadrantCircle from "./QuadrantCircle";

const Section3 = () => {
    return (
        <section className="section3">
            <div className="form-container">
                <h3>Fill the form to register:</h3>
                <form className="form">
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Reg No." />
                    <input type="email" placeholder="Email" />
                    <textarea placeholder="Bank, Acc No., IFSC Code"></textarea>
                    <input type="file" />
                    <button className="register-button">Register Now</button>
                </form>
            </div>
            <QuadrantCircle />
        </section>
    );
};

export default Section3;
