import React from 'react'

export default ({url, title, category}) => (
  <div className="item column-xs-12">
    <figure className="img-container">
      <img src={url} />
      <figcaption className="img-content">
        <h2 className="title">{title}</h2>
        <h3 className="category">{category}</h3>
      </figcaption>
      <span className="img-content-hover">
        <h2 className="title">{title}</h2>
        <h3 className="category">{category}</h3>
      </span>
    </figure>
    <style jsx>{`
      .column-xs-12 {
        grid-column-start: span 12;
        grid-column-end: span 12;
      }
    `}</style>
  </div>
)
