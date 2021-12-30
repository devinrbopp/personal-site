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
                    description='Enim et in esse duis duis. Est anim non id mollit voluptate enim Lorem aliqua aliquip. Nostrud sint labore aliquip enim aliqua.'
                />
                <Project
                    title="Present-ly Shopping Planner"
                    techStack='PostgreSQL, Express, Node'
                    url='https://present-ly-gift-planner.herokuapp.com/'
                    description='Nisi qui esse non fugiat non cillum amet fugiat esse sint et. Ipsum sint ad occaecat tempor in. Aute culpa excepteur sint minim amet dolore. Consequat reprehenderit quis est aliquip nostrud sit consequat ullamco amet sunt.'
                />
                <Project
                    title="MinMax Job Hunter"
                    techStack='MongoDB, Express, React, Node'
                    url='https://minmax-job-hunter.herokuapp.com/'
                    description='Lorem labore culpa reprehenderit magna fugiat reprehenderit reprehenderit reprehenderit eiusmod cillum Lorem nulla. Ad nisi deserunt deserunt nostrud pariatur id laboris ea commodo nisi. Amet enim sunt officia id adipisicing veniam nisi aliquip labore reprehenderit.'
                />        
            </div>
        </>
    )
}