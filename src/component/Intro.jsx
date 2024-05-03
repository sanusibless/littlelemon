import IntroImage from "./IntroImage";
import IntroMsg from "./IntroMsg";


export default function Intro() {
    return <div className="overlay">
                <section className="intro-section">
                    <IntroMsg />
                    <IntroImage />
                </section>
            </div>
}