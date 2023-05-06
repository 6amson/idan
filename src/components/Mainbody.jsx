import { useEffect, useState, useRef } from "react";
import './mainbody.scss'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import hoverEffect from 'hover-effect';
import SplitType from 'split-type';
import burna from '../assets/burna.mp4';
import wizkid from '../assets/wizkid.mp4';

export default function Mainbody () {
    return(
        <div className="mainContainer">
            <div className="mainbody">
                <header>
                    <p>idan</p>
                </header>

                <div className="priDiv">
                    <div className="firstDiv">
                       <div><p>EXPLORING THE DIMENSIONS OF IDAN</p></div>
                       <div>Diving into the the innards of what constitutes idan. </div>
                    </div>
                </div>
            </div>
        </div>
    )
}