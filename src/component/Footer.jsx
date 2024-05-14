import Company from "./footer/Company"
import Contact from "./footer/Contact"
import Newsletter from "./footer/Newsletter"
import Opening from "./footer/Opening"

export default function Footer() {
    return <>
        <footer>
            <div className="footer-info">
                <Company />
                <Contact />
                <Opening />
                <Newsletter />
            </div>
            <div>
                    <ul className="terms">
                        <li>Privacy & Policy </li>
                        <li>Terms &amp; Conditions</li>
                        <li>Help</li>
                        <li>FAQs</li>
                    </ul>
            </div>
            <p>All right reserved &copy;{ new Date().getFullYear() } Little Lemon </p>
        </footer>
    </>
}