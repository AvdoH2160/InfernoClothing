import React from 'react'
import {klikNaMenu, klikNaSearch, izgubljenFocus} from '../JS/script'


function Header() {
  return (
    <div>
        <header id="header-container">
            <div id="menu-options">
                <div id="menu-option" className="menu-options" onClick={klikNaMenu.bind(this, 'header-container')}>
                    <div id="rectangle-1"></div>  
                    <div id="rectangle-2"></div>
                    <div id="rectangle-3"></div>     
                </div>
                <div id="search-option" /*onClick={klikNaSearch('search-field')}*/>
                    <svg width="35" height="35" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="menu-options">
                        <path d="M26.25 26.25L20.8125 20.8125M13.75 7.5C17.2018 7.5 20 10.2982 20 13.75M23.75 13.75C23.75 19.2728 19.2728 23.75 13.75 23.75C8.22715 23.75 3.75 19.2728 3.75 13.75C3.75 8.22715 8.22715 3.75 13.75 3.75C19.2728 3.75 23.75 8.22715 23.75 13.75Z" stroke="url(#paint0_linear_364_250)" stroke-opacity="0.95" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <defs>
                        <linearGradient id="paint0_linear_364_250" x1="4.02565" y1="4.20044" x2="30.3105" y2="21.0633" gradientUnits="userSpaceOnUse">
                        <stop offset="0.368526" stop-color="#03EDD5"/>
                        <stop offset="0.8977" stop-color="#00B9C5"/>
                        </linearGradient>
                        </defs>
                    </svg>                    
                </div>
                <div id="search-field">
                    <input type="text" id="searchBar" /*onBlur={izgubljenFocus('search-field')} */placeholder="Search..."/>
                </div>
                <div id="logo-option">
                    <svg width="40" height="55" viewBox="0 0 63 87" fill="none" xmlns="http://www.w3.org/2000/svg" className="menu-options">
                        <path d="M38.6799 0.703231C39.6215 -0.545845 42.2066 -0.0144032 41.9868 1.38281L34.3316 50.0203C34.2367 50.6344 33.5498 51.1278 32.7006 51.195L1.90225 53.6283C0.498574 53.7392 -0.458011 52.6818 0.226341 51.774L38.6799 0.703231Z" fill="url(#paint0_linear_0_1)" fill-opacity="0.95"/>
                        <path d="M24.2863 85.6652C23.3458 86.9137 20.7866 86.3698 21.0143 84.9697L28.9616 36.2274C29.0631 35.6124 29.7437 35.121 30.5852 35.057L61.1224 32.7346C62.5158 32.6287 63.4563 33.693 62.7707 34.6004L24.2863 85.6652Z" fill="url(#paint1_linear_0_1)" fill-opacity="0.95"/>
                        <defs>
                        <linearGradient id="paint0_linear_0_1" x1="0.514548" y1="1.07377" x2="55.8172" y2="28.8556" gradientUnits="userSpaceOnUse">
                        <stop offset="0.368526" stop-color="#03EDD5"/>
                        <stop offset="0.8977" stop-color="#00B9C5"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear_0_1" x1="21.5145" y1="33.8011" x2="76.8172" y2="61.5829" gradientUnits="userSpaceOnUse">
                        <stop offset="0.368526" stop-color="#03EDD5"/>
                        <stop offset="0.8977" stop-color="#00B9C5"/>
                        </linearGradient>
                        </defs>
                    </svg>        
                </div>
                <div id="user-option">
                    <svg width="35" height="35" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="menu-options">
                        <path d="M39.5834 20.8333V8.33325M33.3334 14.5833H45.8334M33.3334 43.7499V41.2499C33.3334 37.7496 33.3334 35.9994 32.6522 34.6625C32.053 33.4865 31.0969 32.5303 29.9209 31.9311C28.5839 31.2499 26.8337 31.2499 23.3334 31.2499H14.1667C10.6664 31.2499 8.91626 31.2499 7.57931 31.9311C6.40329 32.5303 5.44717 33.4865 4.84796 34.6625C4.16675 35.9994 4.16675 37.7496 4.16675 41.2499V43.7499M26.0417 15.6249C26.0417 19.652 22.7772 22.9166 18.7501 22.9166C14.723 22.9166 11.4584 19.652 11.4584 15.6249C11.4584 11.5978 14.723 8.33325 18.7501 8.33325C22.7772 8.33325 26.0417 11.5978 26.0417 15.6249Z" stroke="url(#paint0_linear_19_414)" stroke-opacity="0.95" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <defs>
                        <linearGradient id="paint0_linear_19_414" x1="4.67721" y1="9.04228" x2="48.4508" y2="42.0806" gradientUnits="userSpaceOnUse">
                        <stop offset="0.368526" stop-color="#03EDD5"/>
                        <stop offset="0.8977" stop-color="#00B9C5"/>
                        </linearGradient>
                        </defs>
                    </svg>   
                </div>
                <div id="favorites-option">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="menu-options">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.9914 6.41977C12.4922 3.498 8.32468 2.71205 5.19337 5.38752C2.06205 8.06298 1.62121 12.5362 4.08025 15.7005C6.12477 18.3314 12.3122 23.8801 14.3401 25.676C14.567 25.877 14.6804 25.9774 14.8128 26.0169C14.9283 26.0514 15.0546 26.0514 15.1701 26.0169C15.3024 25.9774 15.4159 25.877 15.6428 25.676C17.6707 23.8801 23.8581 18.3314 25.9026 15.7005C28.3617 12.5362 27.9746 8.03484 24.7895 5.38752C21.6044 2.7402 17.4906 3.498 14.9914 6.41977Z" stroke="url(#paint0_linear_364_254)" stroke-opacity="0.95" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <defs>
                        <linearGradient id="paint0_linear_364_254" x1="2.80628" y1="4.19629" x2="29.9711" y2="23.7401" gradientUnits="userSpaceOnUse">
                        <stop offset="0.368526" stop-color="#03EDD5"/>
                        <stop offset="0.8977" stop-color="#00B9C5"/>
                        </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div id="cart-option">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="menu-options">
                        <path d="M20.0005 11.25V7.5C20.0005 4.73858 17.7619 2.5 15.0005 2.5C12.239 2.5 10.0005 4.73858 10.0005 7.5V11.25M4.49047 12.94L3.74047 20.94C3.52722 23.2146 3.4206 24.3519 3.79802 25.2303C4.12958 26.002 4.71061 26.6401 5.44799 27.0422C6.28737 27.5 7.42967 27.5 9.71427 27.5H20.2867C22.5713 27.5 23.7136 27.5 24.5529 27.0422C25.2903 26.6401 25.8713 26.002 26.2029 25.2303C26.5803 24.3519 26.4737 23.2146 26.2605 20.94L25.5105 12.94C25.3304 11.0192 25.2403 10.0588 24.8084 9.3327C24.428 8.69323 23.8659 8.18139 23.1937 7.86231C22.4304 7.5 21.4658 7.5 19.5367 7.5L10.4643 7.5C8.53507 7.5 7.57048 7.5 6.80723 7.8623C6.13504 8.18139 5.57297 8.69323 5.19254 9.3327C4.76057 10.0588 4.67054 11.0192 4.49047 12.94Z" stroke="url(#paint0_linear_364_248)" stroke-opacity="0.95" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <defs>
                        <linearGradient id="paint0_linear_364_248" x1="3.82799" y1="3.00049" x2="31.901" y2="19.5022" gradientUnits="userSpaceOnUse">
                        <stop offset="0.368526" stop-color="#03EDD5"/>
                        <stop offset="0.8977" stop-color="#00B9C5"/>
                        </linearGradient>
                        </defs>
                    </svg>                 
                </div>
            </div>
        </header>
    </div>
  )
}

export default Header