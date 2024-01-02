import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap/all'

const scaleAnimation = {
    initial: { scale: 0, x: "-50%", y: "-50%" },
    enter: { scale: 1, x: "-50%", y: "-50%", transition: { duration: 0.4 }, ease: [0.33, 1, 0.68, 1] },
    closed: { scale: 0, x: "-50%", y: "-50%", transition: { duration: 0.4 }, ease: [0.13, 1, 0.92, 1] }
}

const Modal = ({ modal, texts }) => {

    const { active, index } = modal;
    const container = useRef(null);
    const cursor = useRef(null);
    const cursorText = useRef(null);

    useEffect(() => {
        let moveContainerX = gsap.quickTo(container.current, "left", { duration: 0.8, ease: "power3" });
        let moveContainerY = gsap.quickTo(container.current, "top", { duration: 0.8, ease: "power3" });

        let mouseCursorX = gsap.quickTo(cursor.current, "left", { duration: 0.5, ease: "power3" });
        let mouseCursorY = gsap.quickTo(cursor.current, "top", { duration: 0.5, ease: "power3" });

        let mouseCursorTextX = gsap.quickTo(cursorText.current, "left", { duration: 0.45, ease: "power3" });
        let mouseCursorTextY = gsap.quickTo(cursorText.current, "top", { duration: 0.45, ease: "power3" });

        window.addEventListener("mousemove", (e) => {
            const { pageX, pageY } = e;

            moveContainerX(pageX);
            moveContainerY(pageY);
            mouseCursorX(pageX);
            mouseCursorY(pageY);
            mouseCursorTextX(pageX);
            mouseCursorTextY(pageY)
        })
    }, [])

    return (
        <>
            <motion.div ref={container} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"} className='modal__wrap'>
                <div style={{ top: index * -100 + "%" }} className='modal__slider'>
                    {texts.map((text, index) => {
                        const { src, title } = text

                        return (
                            <div className='modal' key={index}>
                                <img src={`images/${src}`} alt={title} />
                            </div>
                        )
                    })}
                </div>
            </motion.div>
            <motion.div ref={cursor} className='cursor' variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}></motion.div>
            <motion.div ref={cursorText} className='cursorText' variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}>View</motion.div>
        </>

    )
}

export default Modal
