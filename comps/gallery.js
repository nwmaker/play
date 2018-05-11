import React from 'react'
import Item from './item'

/*
 * item array has the url, title, and category 
 */
const gallerys = [
  ["https://source.unsplash.com/8b1cWDyvT7Y", "Smart Watch", "Showcase"],
  ["https://source.unsplash.com/5VXH4RG88gc", "Camera Film", "Showcase"],
  ["https://source.unsplash.com/XtUd5SiX464", "Coffee", "Showcase"],
  ["https://source.unsplash.com/JYGnB9gTCls", "Phone", "Showcase"],
  ["https://source.unsplash.com/-RBuQ2PK_L8", "Keyboard", "Showcase"],
  ["https://source.unsplash.com/P44RIGl9V54", "Wrist Watch", "Showcase"],
]

export default () => (
  <div className="gallery">
    <div className="container">
      <div className="grid">
        {gallerys.map((x, i) => (
          <Item key={i} url={x[0]} title={x[1]} category={x[2]} />
        ))}
      </div>
    </div>
    <style jsx global>{`
      .gallery {
        padding: 0 0 4rem 0;
      }
      .grid {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -ms-flex-flow: row wrap;
        flex-flow: row wrap;
      }
      .img-container {
        width: 100%;
        height: 500px;
        cursor: pointer;
        overflow: hidden;
      }
      .img-container:hover .img-content-hover {
        display: block;
      }
      img {
        width: 100%;
        height: 500px;
        -o-object-fit: cover;
        object-fit: cover;
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
        -webkit-transition: all 0.3s ease-in-out;
        -o-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
      }
      img:hover {
        -webkit-transform: scale(1.05);
        -ms-transform: scale(1.05);
        transform: scale(1.05);
      }
      .img-content-hover {
        position: absolute;
        z-index: 1;
        white-space: nowrap;
        display: none;
        padding: 1rem;
        background: #fff;
        font-weight: 400;
        margin-top: 1.25rem;
        margin-left: -2rem;
      }
      .title {
        color: #2e2e2e;
        font-size: 1.5rem;
        font-weight: 700;
      }

      .category {
        font-size: 1rem;
        color: #787878;
      }
    `}</style>
  </div>
)
