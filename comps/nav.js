import React from 'react'

export default () => (
  <div className='nav'>
    <div className="container">
      <div className="grid">
        <div className="column-xs-12 column-md-10">
          <p id="highlight">NWMaker</p>
        </div>
        <div className="column-xs-12 column-md-2">
          <ul>
            <li><a href="#" className="active">Work</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </div>
      </div>
    </div>
    <style jsx>{`
      .container {
        margin: auto;
        padding: 0 1rem;
        max-width: 71.25rem;
        width: 100%;
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
      ul li {
        margin: 0 1.5rem 0 0;
      }
      a {
        color: #787878;
        text-decoration: none;
        -webkit-transition: all 0.2s ease;
        transition: all 0.2s ease;
      }
      a:hover {
        color: #2e2e2e;
      }
      a.active {
        color: #2e2e2e;
      }
      .nav {
        padding: 2.5rem 0 2.5rem 0;
      }
      .nav ul {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: left;
        -ms-flex-pack: left;
        justify-content: left;
        list-style: none;
      }
      .nav li {
        font-size: 1.25rem;
      }
      #highlight {
        color: #0102fc;
        font-size: 1.25rem;
      }
    `}</style>
  </div>
)
