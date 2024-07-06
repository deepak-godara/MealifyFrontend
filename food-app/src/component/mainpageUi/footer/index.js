import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIconName } from '@fortawesome/free-solid-svg-icons'; 

const Footer = () => {
  return (
    <>
        <div className='footer-box'>
            <div className='first-row'>
                <div className='Name'> ZOMATO </div>
                <div className='first-row-left-side'>
                <div className='india'>INDIA &nbsp;<FontAwesomeIcon icon="fa-solid fa-caret-down" /></div>
                <div className='english'>ENGLISH &nbsp;<FontAwesomeIcon icon="fa-solid fa-caret-down" /></div>
                </div>
            </div>

            <div className='second-Row'>
              <div className='col'>
                  <div className='heading'>ABOUT ZOMATO</div>
                  <ul>
                    <li>Who We Are </li>
                    <li>Blog</li>
                    <li>Work With Us</li>
                    <li>Investor Relations</li>
                    <li>Report Fraud</li>
                    <li>Report Fraud</li>
                    <li>Contact Us</li>
                  </ul>
              </div>
              <div className='col'>
              <div className='heading'>ZOMAVERSE</div>
              <ul>
                    <li> Zomato</li>
                    <li>Blinkit</li>
                    <li>Feeding India</li>
                    <li>  Hyperpure</li>
                    <li>Zomaland</li>
                  </ul>
              </div>
              <div className='col'>
              <div className='heading'>LEARN MORE</div>
              <ul>
                    <li> Privacy</li>
                    <li>Security</li>
                    <li>Terms</li>
                    <li> Sitemap</li>
                  </ul>

              </div>
              
              <div className='col'>
              <div className='heading'>SOCIAL LINKS</div>
                <div className='social_logos'>
                  <div className='logo'>
                    <img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsDYsSPykBD6_25Fs1eHnlqTsqFg5NIA3s4A&usqp=CAU'/>
                  </div>
                  <div className='logo'>
                  <img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ-WnNJYnTo9KxO4_z8Sqx5oS7MZBD5mCf8Q&usqp=CAU'/>
                  </div>
                  <div className='logo'>
                  <img  src='https://cdn3.iconfinder.com/data/icons/picons-social/57/06-facebook-512.png'/>
                  </div>
                  <div className='logo'>
                  <img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYf6rKsf8wOb5ar1OAgRxFufPpijWl7tCh3A&usqp=CAU'/>
                  </div>
                  <div className='logo'>
                  <img  src='https://static.vecteezy.com/system/resources/previews/023/986/739/non_2x/youtube-logo-youtube-logo-transparent-youtube-icon-transparent-free-free-png.png'/>
                  </div>
                </div>
                <div className='googleplay_logo'>
                <img src='https://static.vecteezy.com/system/resources/previews/016/290/534/original/google-play-apple-store-logo-icon-button-free-vector.jpg'  alt='google paly store '/>
                </div>
              </div>
            </div>

            <div className='third-row'>
              <div className='box'>
                <p>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2024 © Zomato™ Ltd. All rights reserved.</p>
              </div>
            </div>
        </div>
    </>
  )
}

export default Footer;