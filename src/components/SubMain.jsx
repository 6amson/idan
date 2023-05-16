import { useEffect, useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import './submain.scss'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import hoverEffect from 'hover-effect';
import doctor from '../assets/doctor.mp4'
import splitting from "splitting";
import lab from '../assets/lab.mp4';
import SplitType from 'split-type';



export default function SubMain() {

    const navigate = useNavigate();

    let [countdown, setCountdown] = useState(0);

    const vid = useRef(null);
    const vid2 = useRef(null);
    const para1 = useRef(null);
    const para2 = useRef(null);
    const para3 = useRef(null);
    const para4 = useRef(null);

    const tl = gsap.timeline();
    const tl2 = gsap.timeline();
    const tl3 = gsap.timeline();
    tl3.pause();
    tl2.pause();



    useEffect(() => {

        vid.current.play();
        vid2.current.play();

        const result1 = splitting({
            target: para1.current,
            by: 'chars',
            whitespace: true,
            key: 'para1',
        })

        const result2 = splitting({
            target: para2.current,
            by: 'chars',
            whitespace: true,
            key: 'para1',
        })

        const idanText = new SplitType('.subMainReplayPara4', { types: 'words, chars' });


        // gsap.set(idanText.chars, {
        //     y: 100,
        // })

        // gsap.set(result1[0].chars[result1[0].chars.length], {
        //     color: 'red',
        // })

        // gsap.set(result2[0].chars[0], {
        //     color: 'red',
        // })

        // console.log(result1[0].chars[0].style[1]);


        tl.add(
            gsap.to('.subMainReplayPara1', {
                opacity: 1,
                delay: 0.2,
                duration: 1,
                y: 0,
                ease: 'easeIn',
            }),
        )
        tl.add(
            gsap.to('.video1', {
                duration: 1,
                opacity: 1,
                ease: 'power1.inOut',
                display: 'block',
                // filter: 'blur(2px)',
            }),

        )
        tl.add(
            gsap.to('.subMainReplayVidBlock1', {
                duration: 1.5,
                opacity: 1,
                ease: 'power1.inOut',
                keyframes: [
                    {
                        left: '0%',
                        width: '15%'
                    },
                    {
                        left: '5%',
                        width: '10%'
                    },
                    {
                        left: 0,
                        width: '100%'
                    },
                    {
                        left: '100%',
                        width: 0
                    },
                    {
                        left: '0%',
                        width: '0%'
                    }
                ],
                stagger: 0.5,
                delay: 0.5
            }),
            1
        );
        tl.add(
            gsap.to(result1[0].chars, {
                opacity: 1,
                stagger: 0.02,
                delay: 0.1,
                duration: 1.5,
                y: 0,

                keyframes: [
                    { fontWeight: 100, },
                    { fontWeight: 500, },
                    { fontWeight: 100, }
                ]
            }),
            0.5
        )

        // tl2 timeline

        tl2.add(
            gsap.to('.subMainReplayPara2', {
                opacity: 1,
                delay: 0.2,
                duration: 1,
                y: 50,
                ease: 'easeIn',
            }),
        )
        tl2.add(
            gsap.to('.video2', {
                duration: .5,
                opacity: 1,
                ease: 'power1.inOut',
                display: 'block',
                // filter: 'blur(2px)',
            }),
            0
        )
        tl2.add(
            gsap.to('.subMainReplayVidBlock2', {
                duration: 1.5,
                opacity: 1,
                ease: 'power1.inOut',
                keyframes: [
                    {
                        left: 0,
                        width: '15%'
                    },
                    {
                        left: '5%',
                        width: '10%'
                    },
                    {
                        left: 0,
                        width: '100%'
                    },
                    {
                        left: '100%',
                        width: 0
                    },
                    {
                        left: '0%',
                        width: '0%'
                    }
                ],
                stagger: 0.5,
                delay: 0.5
            }),
            1
        );
        tl2.add(
            gsap.to(result2[0].chars, {
                opacity: 1,
                stagger: 0.02,
                delay: 0.1,
                duration: 1.5,
                y: 0,

                keyframes: [
                    { fontWeight: 100, },
                    { fontWeight: 500, },
                    { fontWeight: 100, }
                ]
            }),
            0.5
        )

        // tl3 timeline

        tl3.add(
            gsap.to('.subMainReplayPara3', {
                y: 0,
                duration: 1,
                ease: 'easeOut',
                opacity: 1,
            })
        )
        tl3.add(
            gsap.from(idanText.chars, {
                opacity: 0,
                y: 50,
                duration: 0.8,
                stagger: { amount: 0.2 },
            }),

            0.5
        )

        setTimeout(() => {
            tl.reverse();
        }, 2500);

        setTimeout(() => {
            tl2.play();
            gsap.to('.subMainReplay1', {
                display: 'none',
            })
        }, 4500);

        setTimeout(() => {
            tl2.reverse();
        }, 7000);

        setTimeout(() => {
            tl3.play();
        }, 9000);

        setTimeout(() => {
            tl3.reverse();
        }, 11000);

        setTimeout(() => {
            gsap.to('.subMainReplay', {
                display: 'none',
                width: '0vw',
                duration: .5,
                delay: .5,
            })
        }, 12500);

        setTimeout(() => {
            gsap.to('.subMainLoading', {
                display: 'block',

            })
            const timerLoader = setInterval(() => {
                setCountdown(countdown++)
                if (countdown >= 100) {
                    clearInterval(timerLoader);
                }
            }, 100)
        }, 13500);

        setTimeout(() => {

            gsap.to('.subMainLoading1', {
                display: 'none',
                opacity: 0,
            })

            gsap.to('.subMainLoading2', {
                display: 'none',
                opacity: 0,
            })
        }, 23000);

        setTimeout(() => {


            gsap.to('.subMainLoading', {
                height: '0vh',
                duration: .8,
                ease: 'easeOut',
                onComplete: function () {
                   navigate('/main')
                }

            })
        }, 25000);




    }, [])

    return (
        <div className="subContainer">
            <div className="subMainReplay">
                <div className="subMainReplay1">
                    <p data-splitting='chars' ref={para1} className="subMainReplayPara1">
                        They tested my DNA,
                    </p>
                    <div className="subMainReplayVid1">
                        <video className="video1" loop ref={vid} autoplay muted>
                            <source src="https://res.cloudinary.com/dis6jfj29/video/upload/br_1500k,vc_h264/v1684160387/doctor_zxbcu5.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className="subMainReplayVidBlock1"></div>
                    </div>
                </div>

                <div className="subMainReplay2">
                    <p data-splitting='chars' ref={para2} className="subMainReplayPara2">
                        But it isn't DNA,
                    </p>
                    <div className="subMainReplayVid2">
                        <video className="video2" loop ref={vid2} autoplay muted>
                            <source src="https://res.cloudinary.com/dis6jfj29/video/upload/br_1500k,vc_h264/v1684160377/lab_mc9zts.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className="subMainReplayVidBlock2"></div>
                    </div>
                </div>

                <div className="subMainReplay3">
                    <div className="subMainReplayPara3" ref={para3}>it is</div>
                    <div className="subMainReplayPara4" ref={para4}>IDAN</div>
                </div>
            </div>

            <div className="subMainLoading">
                <div className="subMainLoading1">LOADING THIS MAGIC</div>
                <div className="subMainLoading2">{countdown}%</div>
            </div>
        </div>

    )
}