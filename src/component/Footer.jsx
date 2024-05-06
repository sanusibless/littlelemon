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
                <a>Privacy & Policy</a> | <a>Help</a> | <a>FQAs </a>
            </div>
            <h3>All right reserved &copy;{ new Date().getFullYear() } Little Lemon </h3>
        </footer>
    </>
}