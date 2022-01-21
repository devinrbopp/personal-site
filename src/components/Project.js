export default function Project(props) {
    return(
        <div className='project-card shadow'>
            <h4>{props.title}</h4>
            <p className='project-tech-stack'>{props.techStack}</p>
            <p className='project-description'>{props.description}</p>
            <a className='deploy-link' href={props.url} target='_blank'>Deployed App</a>
        </div>
    )
}