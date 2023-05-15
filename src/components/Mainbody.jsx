import { useEffect, useState, useRef } from "react";
import './mainbody.scss'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import hoverEffect from 'hover-effect';
import SplitType from 'split-type';
import burna from '../assets/burna.mp4';
import wizkid from '../assets/wizkid.mp4';
import star from '../assets/star.svg';

export default function Mainbody() {

    const vid3 = useRef(null);
    const firstDiv3 = useRef(null);
    const spinningDivPara = useRef(null);

    const spinningText = new SplitType('.spinningDivPara', { types: 'words, chars' });


    useEffect(() => {
        vid3.current.play();

        spinningDivPara.current.innerHTML = spinningDivPara.current.innerText.split('').map(
            (char, i) =>
                `<span style=transform:rotate(${i * 6.7}deg)>${char}</span>`

        ).join("");

        // spinningDivPara.current.innerHTML = spinningDivPara.current.innerText.split('').map(
        //     (char, i) =>
        //         `<span style=transform:rotate(${i * 4.8}deg)>${char}</span>`

        // ).join("");

    }, [])





    return (
        <div className="mainContainer">
            <div className="mainbody">
                <header>
                    <div className="headerDiv">
                        <p>idan</p>
                        <div className="lineDiv"></div>
                        <div className="stars">
                            <img className="star" src={star} />
                        </div>
                    </div>
                </header>

                <div className="priDiv">
                    <div className="magicDiv">MAGIC</div>
                    <div className="firstDiv">
                        <div className="firstDiv1">
                            <p>EXPLORING THE DIMENSIONS OF IDAN.</p>
                        </div>
                        <div className="firstDiv2">
                            <p>Diving into the the innards of what constitutes magic. Simplifying the idanification process.</p>
                            <div className="ronaldoDiv"></div>
                        </div>

                        <div ref={firstDiv3} className="firstDiv3">
                            <p className="firstDiv3Para">Be nothing less than magic. Beyond that, probe into the exploits of an idan.</p>
                            <img src='' />
                        </div>

                        <div className="videoDiv">

                            <div className="burnaText">
                                <p>An idan in his element.</p>
                                <p>Burna Boy</p>
                                <p>&#169; 2021</p>
                            </div>
                            <video className="video3" src="https://res.cloudinary.com/dis6jfj29/video/upload/v1684160234/burna_iddrr9.mp4" type="video/mp4" ref={vid3} loop="loop" autoplay="autoplay" preload="auto" playsinline muted="muted">
                                Sorry, your web browser doesn't support video.
                            </video>
                        </div>
                    </div>



                    <div className="spinningDiv">
                        <div className="spinningDivv">
                            <div ref={spinningDivPara} className="spinningDivPara">
                                IDAN * MAGIC * IDAN * MAGIC * IDAN *
                            </div>
                        </div>

                        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
                            <title>Circular Text Path</title>
                            <defs>
                                <path id="textcircle" d="M250,400
                       a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z" transform="rotate(12,250,250)" />
                            </defs>
                            <g class="textcircle">
                                <text textLength="940">
                                    <textPath
                                        aria-label="CSS & SVG are awesome"
                                        textLength="940">
                                        Living As Magic * The Inner Workings Of Idan *
                                    </textPath>
                                </text>
                            </g>
                        </svg> */}

                    </div>
                </div>



            </div>




            <div className="subMainbody">
                lets get this shit
            </div>
        </div>
    )
}