export default function TechStack(props) {
    return (
        <>
            <h2>skills & expertise</h2>
            <div className="tech-stack">
                <div className='shadow tech-stack-card' id='languages'>
                    <h3>programming languages</h3>
                    <p>JavaScript (ES6), TypeScript, JSX, Python, HTML, CSS</p>
                </div>
                <div className='shadow tech-stack-card' id='frameworks-databases'>
                    <h3>frameworks/libraries/databases</h3>
                    <p>Express, React.js, Next.js, Node.js, Django, Sequelize, Mongoose, Bootstrap</p>
                    <p>SQL, PostgreSQL, MongoDB, NoSQL</p>
                </div>
                <div className='shadow tech-stack-card' id='other-skills'>
                    <h3>other skills</h3>
                    <p>Algorithms, Data Structures, Git/GitHub, RESTful APIs, Heroku, MongoDB Atlas, Postman, Responsive Web Design, Model View Controller (MVC) Design Pattern, Visual Studio Code, Airtable, Agile, Scrum</p>
                </div>
            </div>
        </>
    )
}