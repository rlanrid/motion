import React, { useRef, useState } from 'react'
import useMouse from './utils/useMouse'
import { motion } from 'framer-motion'

const App = () => {
  const [isHovered, setIsHovered] = useState(false);
  const section2Ref = useRef(null);
  const { x, y } = useMouse(section2Ref);
  const size = isHovered ? 500 : 50;

  return (
    <main>
      <section id='section1'>
        <h1>Mask Cursor Effect</h1>
      </section>

      <section id='section2' ref={section2Ref}>
        <div className='project__wrap'>
          <motion.div
            className='project__mask'
            animate={{
              WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
              WebkitMaskSize: `${size}px`
            }}
            transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
          >
            <p
              onMouseEnter={() => { setIsHovered(true) }}
              onMouseLeave={() => { setIsHovered(false) }}
            >
              개발용 빌드는 최적화되어 있지 않습니다. 프로덕션용 빌드를 생성하려면 생성하려면 생성하려면
            </p>
          </motion.div>
          <div className='project__test'>
            <p>Note that <span>the development build</span> is not optimized. To create a production build</p>
          </div>
        </div>
      </section>

      <section id='section3'></section>
    </main>
  )
}

export default App
