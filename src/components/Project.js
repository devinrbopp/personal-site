export default function Project(props) {
    return(
        <div className='project-card'>
            <h4>{props.title}</h4>
            <p className='project-tech-stack'>{props.techStack}</p>
            <p className='project-description'>{props.description}</p>
        </div>
    )
}