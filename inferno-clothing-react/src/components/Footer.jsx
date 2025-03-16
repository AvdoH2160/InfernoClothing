import React, { useEffect } from 'react'
import Home from '../pages/Home'


function Footer() {
  return (
    <div>
        <footer id="footer-container" className="hidden footer">
            <div id="footer-vector">
                <svg width="inherit" height="inherit" viewBox="0 0 1206 426" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ marginBottom: "-4px" }}>
                    <path d="M0.852791 478.442C82.7277 398.748 324.79 184.082 638.038 362.97C951.287 541.859 1146.12 454.628 1204.39 388.652M109.887 467.079C101.829 421.836 151.309 339.684 413.695 373.021C741.678 414.691 875.283 416.16 867.649 267.494C861.542 148.56 480.603 -144.84 290.897 -276.673M814.929 720.754C533.461 445.986 293.733 277.005 395.617 99.6555C497.501 -81.694 1209.12 258.719 1300.48 207.715" stroke="url(#paint0_linear_37_276)" stroke-opacity="0.95" stroke-width="2"/>
                    <defs>
                    <linearGradient id="paint0_linear_37_276" x1="250.728" y1="-274.933" x2="853.496" y2="936.363" gradientUnits="userSpaceOnUse">
                    <stop offset="0.368526" stop-color="#03EDD5"/>
                    <stop offset="0.8977" stop-color="#00B9C5"/>
                    </linearGradient>
                    </defs>
                </svg>  
            </div>  
        </footer>
    </div>
  )
}

export default Footer