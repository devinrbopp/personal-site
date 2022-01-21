import Projects from "./Projects"
import Contact from "./Contact"
import TechStack from "./TechStack"

export default function Home(props) {
    return(
        <div className="page-content">
            <h1>hello, i'm devin!</h1>
            <p>I am a full-stack software engineer with a past life in nonprofit fundraising. With experience in fast-paced, passionate workplaces, I thrive on creative, collaborative teams working to maximize resources with inventive software solutions. A passionate autodidact, I am eager to further my knowledge across programming stacks to better serve my colleagues, my clients, and my own vision.</p>
            <Projects />
            <TechStack />
            <Contact />
        </div>
    )
}