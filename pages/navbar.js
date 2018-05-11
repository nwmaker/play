import React from 'react'

export default () => (
  <div className="navbar">
    <h1 className="logo"><a href="#">NWMaker</a></h1>
    <ul className="main-nav">
      <li><a href="#">Home</a></li>
      <li><a href="#">Products</a></li>
      <li><a href="#">About</a></li>
    </ul>
    <style jsx>{`
      * {
        box-sizing: border-box;
      }
      .navbar {
        font-family: sans-serif;
	line-height: 1.6;
	margin: 0;
	min-height: 100vh;
        padding-top: .5em;
	padding-bottom: .5em;
	border: 1px solid #a2a2a2;
	background-color: #f4f4f4;
	-webkit-box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);
	-moz-box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);
	box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);
	-webkit-border-radius: 5px;
	-moz-border-radius: 5px;
	border-radius: 5px;
      }
      ul {
        margin: 0;
        padding: 0;
        list-style: none;
      }
      h2, h3, a {
	color: #34495e;
      }
      a {
	text-decoration: none;
      }
      .logo {
	margin: 0;
	font-size: 1.45em;
      } 
      .main-nav {
	margin-top: 5px;
      }
      .logo a, .main-nav a {
	padding: 10px 15px;
	text-transform: uppercase;
	text-align: center;
	display: block;
      }
      .main-nav a {
	color: #34495e;
	font-size: .99em;
      }
      .main-nav a:hover {
	color: #718daa;
      }
      .navbar, .main-nav {
        display: flex;
      }
      .navbar {
        flex-direction: row;
        justify-content: space-between;
      }
    `}</style>
  </div> 
)
