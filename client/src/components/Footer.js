import React from 'react';

function Footer() {
    return (
        <div className="footer">
            <div className="footer-left">       
                <p>Contact : Arnaud Chevallier :</p>
            <p><i class="fas fa-map-marker-alt"> </i> Antibes, France</p>
                
            <p> <i class="fas fa-phone-square"></i> +33 07 49 48 62 03</p>
            <a href="mailto:chevallier.a06@gmail.com"><p><i class="far fa-envelope"></i> chevallier.a06@gmail.com</p></a>                
            </div>
            <div className="footer-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="bi icon" width="32" height="32" fill="currentColor" role="img" viewBox="0 0 24 24"><title>AdBlock</title><path d="M7.775 0a1.8 1.8 0 0 0-1.273.527L.528 6.503A1.8 1.8 0 0 0 0 7.775v8.45c0 .478.19.936.528 1.274l5.974 5.974A1.8 1.8 0 0 0 7.775 24h8.45a1.8 1.8 0 0 0 1.273-.527l5.975-5.974A1.8 1.8 0 0 0 24 16.225v-8.45a1.8 1.8 0 0 0-.527-1.272L17.498.527A1.8 1.8 0 0 0 16.225 0zm4.427 3c1.02 0 .958 1.108.958 1.108v6.784s-.009.218.16.218c.188 0 .175-.226.175-.226l-.002-5.63s-.05-.986.959-.986c1.01 0 .97.983.97.983v7.621s.014.158.141.158c.127 0 .944-2.122.944-2.122s.451-1.497 2.576-1.1c.038.008-.167.688-.167.688l-2.283 6.556S15.69 20.7 11.714 20.7c-5.044 0-4.808-5.407-4.814-5.405V7.562s-.016-.99.897-.99c.858 0 .849.99.849.99l.007 3.583s-.004.172.167.172c.16 0 .141-.172.141-.172l.01-5.926s-.055-1.162.966-1.162c1.04 0 .983 1.142.983 1.142v5.611s-.005.204.152.204c.168 0 .154-.206.154-.206l.01-6.693S11.18 3 12.202 3Z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16"><path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                </svg>
                
                <p>Copyright© 2021 | All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer
