import React from 'react'
import './Footer.scss'
import LandingSection from './LandingSection';
import {
    Link
  } from "react-router-dom";

function Footer() {
    return (
        <div className="section footerSection">
            <p>This website provides farmers with an essential decision support in choosing the most suitable fertilizer for their soil based on the data provided.</p>
            {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum quisquam fuga laudantium at tempore temporibus magni voluptatem quos ipsa dicta veritatis officiis quas ullam ratione quae nihil possimus, aliquam distinctio?</p> */}

            <div className="footerLinksDiv"> 
                <a href="/#section1">Home</a>
                <a href="/About.html">About</a>
            </div>
        </div>
    )
}

export default Footer
