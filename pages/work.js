import React from 'react'
import Nav from '../comps/nav'
import Gallery from '../comps/gallery'
import Footer from '../comps/footer'

export default () => (
  <div className='work'>
    <Nav />
    <Gallery />
    <Footer />
    <style jsx>{`
      .work {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        font-family: 'Barlow', sans-serif;
        font-size: 1.125rem;
        line-height: 1.5;
        color: #787878;
        background: #fff;
        text-rendering: optimizeLegibility;
      }
    `}</style>
  </div>
)
