import React from 'react'
import "./Home.css"
import { FaCode, FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaReact, FaTwitter } from "react-icons/fa";
function Home() {




    return (
        <>
            <div className="home" >
                <div className="container">
                    <div className="social-icons">
                        <span><FaLinkedin /></span>
                        <span><FaGithub /></span>
                        <span><FaInstagram /></span>
                        <span><FaTwitter /></span>
                    </div>
                    <div className="textbox">
                        <h1>I'm <span className='name'>Aravindh</span></h1>
                        <p>A passionate web developer for creating visually stunning <br /> and user-friendly websites and web apps.</p>
                        <button className='downbtn'><div>
                            Download CV</div>
                        </button>
                    </div>
                    <div className="profilebox">


                        <div className="circle">
                            <div className="one">
                                <FaCode />
                                Developer
                            </div>
                            <div className="two">
                                FreeLauncer
                            </div>
                            <div className="three">
                                <FaReact />
                                React Developer
                            </div>
                            <div className="four">
                                Web Designer
                            </div>
                        </div>
                        <div className="profile z1">
                            <img src="../public/ProfileImage.png" alt="" loading='lazy' />
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Home