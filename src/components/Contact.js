export default function Contact(props) {
    const socialLinkStyle = {
        'height': '30px',
        'display': 'inline',
        'margin': '0 10px 0 0'
    }
    return(
        <div id='contact'>
            <h3>let's connect!</h3>
            <p>devinrbopp (at) gmail (dot) com</p>
            <a href='https://github.com/devinrbopp' target='_blank'>
                <img style={socialLinkStyle} src='./GitHub-Mark-64px.png' alt='Visit my GitHub profile' />
            </a>
            <a href='https://www.linkedin.com/in/devinrbopp/' target='_blank'>
                <img style={socialLinkStyle} src='./LI-In-Bug.png' alt='Visit my LinkedIn profile' />
            </a>
        </div>
    )
}