import WebLogo from "../Navigation/WebLogo";
import "../../assets/styles/footer.modulemin.css";
import fbIcon from "../../assets/images/icon-facebook.svg";
import twitterIcon from "../../assets/images/icon-twitter.svg";
import pinterestIcon from "../../assets/images/icon-pinterest.svg";
import instagramIcon from "../../assets/images/icon-instagram.svg";

export default function Footer() {
    return (
        <footer className="b-footer">
            <div className="b-footer__content">
                {/* Logo */}
                <WebLogo />

                {/* Navigation Links */}
                <ul className="b-footer__links">
                    <li><a href="/about" className="b-footer__link">About</a></li>
                    <li><a href="/careers" className="b-footer__link">Careers</a></li>
                    <li><a href="/events" className="b-footer__link">Events</a></li>
                    <li><a href="/products" className="b-footer__link">Products</a></li>
                    <li><a href="/support" className="b-footer__link">Support</a></li>
                </ul>

                {/* Social Media Icons */}
                <div className="b-footer__social">
                    <a href="https://facebook.com" className="b-footer__icon" aria-label="Facebook">
                        <img src={fbIcon} alt="Facebook" />
                    </a>
                    <a href="https://twitter.com" className="b-footer__icon" aria-label="Twitter">
                        <img src={twitterIcon} alt="Twitter" />
                    </a>
                    <a href="https://pinterest.com" className="b-footer__icon" aria-label="Pinterest">
                        <img src={pinterestIcon} alt="Pinterest" />
                    </a>
                    <a href="https://instagram.com" className="b-footer__icon" aria-label="Instagram">
                        <img src={instagramIcon} alt="Instagram" />
                    </a>
                </div>

                {/* Copyright */}
                <p className="b-footer__copyright">
                    &copy; 2021 Loopstudios. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
