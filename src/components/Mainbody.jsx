import { useEffect, useState, useRef } from "react";
import './mainbody.scss'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import hoverEffect from 'hover-effect';
import SplitType from 'split-type';
import burna from '../assets/burna.mp4';
import wizkid from '../assets/wizkid.mp4';

export default function Mainbody() {

    const vid3 = useRef(null);
    const spinningDivPara = useRef(null);

    const spinningText = new SplitType('.spinningDivPara', { types: 'words, chars' });


    useEffect(() => {
        vid3.current.play();

        spinningDivPara.current.innerHTML = spinningDivPara.current.innerText.split('').map(
            (char, i) =>
                `<span style=transform:rotate(${i * 4.8}deg)>${char}</span>`

        ).join("");

        // spinningDivPara.current.innerHTML = spinningDivPara.current.innerText.split('').map(
        //     (char, i) =>
        //         `<span style=transform:rotate(${i * 6.4}deg)>${char}</span>`

        // ).join("");

    }, [])





    return (
        <div className="mainContainer">
            <div className="mainbody">
                <header>
                    <p>idan</p>
                </header>

                <div className="priDiv">
                    <div className="magicDiv">MAGIC</div>
                    <div className="firstDiv">
                        <div className="firstDiv1">
                            <p>EXPLORING THE</p>
                            <p>DIMENSIONS</p>
                            <p>OF IDAN.</p></div>
                        <div className="firstDiv2">
                            <p>Diving into the the innards of what constitutes magic.</p>
                        </div>
                        <div className="burnaText">
                            <p>Burna Boy</p>
                            <p>&#169; 2021</p>
                        </div>
                    </div>
                    <div className="videoDiv">
                        <video className="video3" ref={vid3} loop autoplay muted>
                            <source src={burna} type="video/mp4" />
                            Sorry, your web browser doesn't support video.
                        </video>
                    </div>

                    <div className="spinningDiv">
                        <div className="spinningDivv">
                            <div ref={spinningDivPara} className="spinningDivPara">
                                Living As Magic * The Inner Workings Of Idan *
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}