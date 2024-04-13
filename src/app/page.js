import NavBar from "./components/NavBar";
import Card from "./components/card/Card";

export default function Home() {
  return (
    <main className="header-grid min-h-screen p-24">
      <NavBar />
      <div className="g-main">
        <Card 
          heading="Level 3 Week 3 Day 1 Assignment"
          body={<><h1>Objective</h1>
        <p>
          The goal of this assignment is to develop a Next.js application using
          advanced styling techniques, specifically Sass with the 7-1
          architecture, SCSS Modules, and BEM methodology. You will create a
          user profile page that showcases dynamic styling and user interaction.
          Additionally, deploying your application to Netlify will be part of
          this assignment, enabling you to practice deploying Next.js
          applications.
        </p>
        <br></br>
        <hr></hr>
        <br></br>
        <h2>Instructions Part 1: </h2>
        <h3>Setup and Styling Initialize a New Next.js Project:</h3>
        <p>
          Use create-next-app to start a new project. Ensure Node.js is
          installed on your machine.
        </p>
        <h3>
          Install Sass in your project by running npm install sass. Implement
          the 7-1 Sass Architecture:
        </h3>
        <p>
          Organize your Sass files following the 7-1 architecture pattern within
          a styles/ directory. Set up a main Sass file (styles.scss) to import
          all Sass partials, and include this file in layout.js for global
          styles. Apply SCSS Modules with BEM: For each component (e.g., Header,
          UserProfile), create a SCSS module file. Utilize the BEM methodology
          for class naming within these files.
        </p>
        <br></br>
        <hr></hr>
        <br></br>
        <h2> Part 2: User Profile Page Development</h2>
        <h3>Create User Profile Component:</h3>
        <p>
          Design a UserProfile component to display user information such as
          name, biography, and hobbies, passed as props.
        </p>
        <h3>Dynamic Content and Conditional Rendering:</h3>
        <p>
          Use conditional rendering to display "No biography available" if the
          biography prop is empty. Render hobbies dynamically with the map
          function, showing "No hobbies listed" when the list is empty.
        </p>
        <h3>Implement Client-Side Navigation:</h3>
        <p>
          Set up client-side navigation using the Next.js Link component for
          navigating between the Home page and the User Profile page.
        </p>
        <br></br>
        <hr></hr>
        <br></br>
        <h2>Part 3: Deploying Your Application to Netlify</h2>
        <h3>Prepare Your Application for Deployment:</h3>
        <p>
          Ensure your application builds successfully by running npm run build.
        </p>
        <h3>Deploy to Netlify:</h3>
        <p>
          Follow Netlify's documentation to deploy your Next.js application.
          This involves connecting your GitHub repository to Netlify and
          configuring it for deployment.
        </p>
        <br></br>
        <hr></hr>
        <br></br>
        <h2>Part 4: Documentation and Reflection</h2>
        <h3>Document Your Process:</h3>
        <p>
          Update the README.md file to document the steps taken during the
          assignment, focusing on styling and deployment.
        </p>
        <h3>Include Deployment URL:</h3>
        <p>
          Add the URL of your deployed application on Netlify to the README.md.
        </p></>}
        footer="Submitted 4/13/2024 by Ryan Arnold"
        />
      </div>
    </main>
  );
}
