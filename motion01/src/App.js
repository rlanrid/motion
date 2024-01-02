import React, { useState } from 'react'
import Project from './components/project/Project'
import Modal from './components/modal/Modal'

const App = () => {

  const texts = [
    {
      title: "Quiz Game site",
      subTitle: "project1",
      src: "quizmoviesite.png",
      date: "2024",
    },
    {
      title: "Vite Site",
      subTitle: "project2",
      src: "vitesite.png",
      date: "2024",
    },
    {
      title: "Web Standard site",
      subTitle: "project3",
      src: "webstandardsite.png",
      date: "2024",
    },
    {
      title: "Academy site",
      subTitle: "project4",
      src: "academysite.png",
      date: "2024",
    },

  ]

  const [modal, setModal] = useState({ active: false, index: 0 })

  return (

    <main>
      <section id='section1'>
        <h1>Gallery Hover Animation</h1>
      </section>

      <section id='section2' className='contents'>
        <div className='project__wrap'>
          {texts.map((text, index) => {
            return <Project key={index} index={index} text={text} setModal={setModal} />
          })}
        </div>
        <Modal modal={modal} texts={texts} />
      </section>

      <section id='section3'></section>
    </main>
  )
}

export default App
