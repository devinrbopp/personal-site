export default function Project(props) {
    const githubLinkStyle = {
        'height': '30px',
        'display': 'inline',
        'margin': '0 10px 0 0'
    }
    return(
        <div className='project-card shadow'>
            <h4>{props.title}</h4>
            <p className='project-tech-stack'>{props.techStack}</p>
            <p className='project-description'>{props.description}</p>
            <div className='project-links'>
                <a className='deploy-link' href={props.url} target='_blank'>Deployed App</a>
                <a href={props.githubUrl} target='_blank'>
                    <img style={githubLinkStyle} src='./GitHub-Mark-64px.png' alt='Visit my GitHub profile' />
                </a>
            </div>
        </div>
    )
}