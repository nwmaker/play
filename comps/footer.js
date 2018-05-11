import React from 'react'

export default () => (
  <div className="footer">
    <div className="container">
      <div className="grid">
        <div className="column-xs-12">
          <ul className="social">
            <li><a href="https://twitter.com/nwmaker" target="_blank" rel="noopener noreferrer"><span className="fa fa-twitter"></span></a></li>
            <li><a href="https://github.com/nwmaker" target="_blank" rel="noopener noreferrer"><span className="fa fa-github"></span></a></li>
          </ul>
          <p className="copyright">&copy; Copyright 2018 NWMaker Ltd.</p>
        </div>
      </div>
    </div>
    <style jsx>{`
      .footer {
        padding: 1rem 0;
        background: $footer;
        text-align: center;
      }
      .social, .copyright {
        margin: 1rem;
      }
      .social li {
        display: inline-block;
      }
    `}</style>
  </div>
)
