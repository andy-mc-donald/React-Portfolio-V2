import UpSkillMePic from "./Assets/project-images/UpSkillMe";
import FoodMilesPic from "./Assets/project-images/FoodMiles.png";
import BugBearsPic from "./Assets/project-images/BugBears.png";
import ProjectFearPic from "./Assets/project-images/ProjectFear.png";
import WikipediaLookupPic from "./Assets/project-images/WikipediaCountryLookup.png";
import TrainspirationPic from "./Assets/project-images/Trainspiration.png";

const data = [
    {
        id: 5, 
        name: "UpSkillMe",
        image: UpSkillMePic, 
        description: "The UpSkillMe project was part of Founders and Coders’ Tech for Better scheme, which connects junior developers with small businesses and charities. The prototype is targeted at school-age children and acts a digital record of extra-curricular achievements. The project has since been developed further by the product owners, who have raised seed funding.", 
        techStack: "React, Styled Components, Airtable",
        deployment: "Netlify",
        gitHubLink: "https://github.com/andy-mc-donald/UpSkillMe",
        liveLink: "https://upskillme.io/",
    },
    {
        id: 4, 
        name: "Food Miles",
        image: FoodMilesPic, 
        description: "Food Miles is designed to help shoppers discover how locally-sourced their food is by comparing the origins of fresh produce across different supermarket chains. The app was created as a proof-of-concept using mock data retrieved from a Postgres database.", 
        techStack: "Handlebars, Node, Express, Sass, PostgreSQL, Tape, SuperTest",
        deployment: "Heroku",
        gitHubLink: "https://github.com/andy-mc-donald/Food-Miles",
        liveLink: "https://food-miles-fac17.herokuapp.com/",
    },
    {
        id: 3, 
        name: "Bugbears",
        image: BugBearsPic, 
        description: "Bugbears is a dynamic web app that lets users log-in and add their grievances to a list of ‘pet peeves’. The project uses a PostgreSQL database that is connected to a Node.js server and was built using HTML, CSS and JavaScript.", 
        techStack: "HTML, CSS, JavaScript, Node, PostgreSQL, Bcrypt, Tape",
        deployment: "Heroku",
        gitHubLink: "https://github.com/andy-mc-donald/Bugbears",
        liveLink: "https://bugbear.herokuapp.com/login-page",
    },
    {
        id: 2, 
        name: "Project Fear",
        image: ProjectFearPic, 
        description: "Project Fear was built to provide a live countdown to the October 31st Brexit deadline. The site also includes a currency exchange rate converter, with a comparative value marker set to summer 2015,  using a call to the Foreign Exchange Rates API.", 
        techStack: "HTML, CSS, JavaScript, Node, SuperTest, Nock",
        deployment: "Heroku",
        gitHubLink: "https://github.com/andy-mc-donald/Project-Fear",
        liveLink: "https://week-5-dgjm.herokuapp.com/",
    },
    {
        id: 1, 
        name: "Wikipedia Country Lookup",
        image: WikipediaLookupPic, 
        description: "This website’s autocomplete functionality lets users easily find and select country names while typing a query into the search box. Pressing the button takes you to the corresponding county’s Wikipedia page.", 
        techStack: "HTML, CSS, JavaScript, Node, Tape",
        deployment: "Heroku",
        gitHubLink: "https://github.com/andy-mc-donald/Wikipedia-Country-Lookup",
        liveLink: "https://meia-fac17.herokuapp.com",
    },
    {
        id: 0, 
        name: "Trainspiration",
        image: TrainspirationPic, 
        description: "This web app makes three API calls and updates the DOM with the results. The XMLHttpRequest object is used to query the TFL, Picsum and ‘Corporate B.S Generator’ APIs. The results are rendered on a dashboard-style display along with the time and date.", 
        techStack: "HTML, CSS, JavaScript",
        deployment: "GitHub Pages",
        gitHubLink: "https://github.com/andy-mc-donald/Trainspiration",
        liveLink: "https://fac-17.github.io/week-3-MEIA/",
    }
];

export default data;