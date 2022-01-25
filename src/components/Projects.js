import Project from "./Project"

export default function Projects() {
    return(
        <>
            <h2>check out my projects:</h2>
            <div id='projects'>
                <Project
                    title="You Get One"
                    techStack='Socket.io, MongoDB, Express, React, Node'
                    url='https://you-get-one.herokuapp.com/'
                    githubUrl='https://github.com/devinrbopp/client-you-get-one'
                    description='Lorem labore culpa reprehenderit magna fugiat reprehenderit reprehenderit reprehenderit eiusmod cillum Lorem nulla. Ad nisi deserunt deserunt nostrud pariatur id laboris ea commodo nisi. Amet enim sunt officia id adipisicing veniam nisi aliquip labore reprehenderit.'
                />         
                <Project
                    title="Present-ly Gift Planner"
                    techStack='Etsy API, PostgreSQL, Express, Node'
                    url='https://present-ly-gift-planner.herokuapp.com/'
                    githubUrl='https://github.com/devinrbopp/present-ly_gift_planner'
                    description="Present-ly is integrated with the Etsy API to allow users to collect gift ideas for family and friends. Integrating the Materialize CSS framework, the app has a sleek, simple design with a full CRUD API of it's own."
                />
                <Project
                    title="MinMax Job Hunter"
                    techStack='MongoDB, Express, React, Node'
                    url='https://minmax-job-hunter.herokuapp.com/'
                    githubUrl='https://github.com/devinrbopp/client-job-hunting-journal'
                    description="I led a team of four software engineers to develop MinMax Job Hunter, a tracking application for job seekers."
                />
                <Project
                    title="It's Getting Colder"
                    techStack='HTML, CSS, JavaScript'
                    url='https://devinrbopp.github.io/its-getting-colder-game/'
                    githubUrl='https://github.com/devinrbopp/its-getting-colder-game'
                    description="It's Getting Colder is a front-end game built using vanilla JavaScript, HTML, and CSS. This is one of my first projects, and I enjoyed the process of creating a scalable framework for the event notifications. I'm looking forward to rebuilding this in React to allow for greater interactivity and more effective scaling."
                />
            </div>
        </>
    )
}