import { useEffect, useState, useRef } from "react";
import './scss/main.scss'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import hoverEffect from 'hover-effect';
import SubMain from '../components/SubMain'
import Mainbody from "../components/Mainbody";



export default function Main() {

    return (
        <div className="section1">
            <section>
                < SubMain />
            </section>
            <section>
                <Mainbody />
            </section>
        </div>

    )
}