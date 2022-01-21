import Project from "./Project"

export default function Projects() {
    return(
        <>
            <h3>Take a look at my personal projects:</h3>
            <div id='projects'>
                <Project
                    title="it's getting colder"
                    techStack='HTML, CSS, JavaScript'
                    url='https://devinrbopp.github.io/its-getting-colder-game/'
                    description="It's Getting Colder is a front-end game built using vanilla JavaScript, HTML, and CSS. This is one of my first projects, and I enjoyed the process of creating a scalable framework for the event notifications. I'm looking forward to rebuilding this in React to allow for greater interactivity and more effective scaling."
                />
                <Project
                    title="Present-ly Gift Planner"
                    techStack='Etsy API, PostgreSQL, Express, Node'
                    url='https://present-ly-gift-planner.herokuapp.com/'
                    description="Present-ly is integrated with the Etsy API to allow users to collect gift ideas for family and friends. Integrating the Materialize CSS framework, the app has a sleek, simple design with a full CRUD API of it's own."
                />
                <Project
                    title="MinMax Job Hunter"
                    techStack='MongoDB, Express, React, Node'
                    url='https://minmax-job-hunter.herokuapp.com/'
                    description="I led a team of four software engineers to develop MinMax Job Hunter, a tracking application for job seekers."
                />
                <Project
                    title="You Get One"
                    techStack='Socket.io, MongoDB, Express, React, Node'
                    url='https://you-get-one.herokuapp.com/'
                    description='Lorem labore culpa reprehenderit magna fugiat reprehenderit reprehenderit reprehenderit eiusmod cillum Lorem nulla. Ad nisi deserunt deserunt nostrud pariatur id laboris ea commodo nisi. Amet enim sunt officia id adipisicing veniam nisi aliquip labore reprehenderit.'
                />         
            </div>
        </>
    )
}