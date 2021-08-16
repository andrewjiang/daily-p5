import React, { Component } from 'react';
import Link from 'next/link';

const Main = ({ children }) => (
  <div className="main">
    <div className="logo">
      <Link href="/"><a>dailies</a></Link>
      <p className="smalltext">base page forked from <Link href="https://github.com/aunnnn/daily-p5">https://github.com/aunnnn/daily-p5</Link></p>
    </div>
    <div className="subtitle">
      <p>Learning generative art by making something each day</p>
      
    </div>

    { children }

    <footer className="footer">
      <p>made by <Link href="https://twitter.com/GenerativeLife">@GenerativeLife</Link></p>
    </footer>

    { /* local styles */ }
    <style jsx>{`
      .main {
        padding: 25px 50px;
      }

      .logo {
        padding-bottom: 20px;
      }

      .logo a:hover {
        color: black;
      }

      .logo a {
        text-decoration: none;
        font-size: 2em;
      }

      .logo a:active {
        color: black;
      }

      .subtitle {
        padding-bottom: 20px;
        font-size: 1.2em;
        font-weight: 700;
      }

      .smalltext {
        font-size: 0.8em;
      }

      footer{
        padding-top: 60px;
      }

      @media (max-width: 500px) {
        .main {
          padding: 25px 15px;
        }

        .logo {
          padding-bottom: 20px;
        }
      }
    `}</style>
  </div>
)
export default Main;