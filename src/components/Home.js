import Projects from "./Projects"
import Contact from "./Contact"
import TechStack from "./TechStack"

export default function Home(props) {
    return(
        <div className="page-content">
            <h1>hello, i'm devin!</h1>
            <p>I am a <b>full-stack software engineer</b> with a past life in nonprofit fundraising. I thrive on creative, collaborative teams working to maximize resources with inventive software solutions.</p>
            <Projects />
            <TechStack />
            <Contact />
        </div>
    )
}