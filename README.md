# Objective  
The goal of this assignment is to develop a Next.js application using advanced styling techniques, specifically Sass with the 7-1 architecture, SCSS Modules, and BEM methodology. You will create a user profile page that showcases dynamic styling and user interaction.   Additionally, deploying your application to Netlify will be part of this assignment, enabling you to practice deploying Next.js applications.  
  
  
  
## Instructions Part 1:  
### Setup and Styling Initialize a New Next.js Project:  
- Use create-next-app to start a new project. Ensure Node.js is installed on your machine.
  
### Install Sass in your project by running npm install sass. Implement the 7-1 Sass Architecture:  
- Organize your Sass files following the 7-1 architecture pattern within a styles/ directory.
- Set up a main Sass file (styles.scss) to import all Sass partials, and include this file in layout.js for global styles.  
![image](https://github.com/rja87sd/l3-w3-d1-assignment/assets/145504216/5cfbeee7-139b-4e5c-b57a-067ec62c8678)  
  
### Apply SCSS Modules with BEM: 
- For each component (e.g., Header, UserProfile), create a SCSS module file.  
- Utilize the BEM methodology for class naming within these files.  
![image](https://github.com/rja87sd/l3-w3-d1-assignment/assets/145504216/019e228e-d51d-47d0-9292-79ab5d2300bf)  
  
## Part 2: User Profile Page Development  
### Create User Profile Component:  
- Design a UserProfile component to display user information such as name, biography, and hobbies, passed as props.  
![image](https://github.com/rja87sd/l3-w3-d1-assignment/assets/145504216/770a1606-9c32-4ff1-9796-e94a12b3fb31)  
  
### Dynamic Content and Conditional Rendering:  
- Use conditional rendering to display "No biography available" if the biography prop is empty.  
- Render hobbies dynamically with the map function, showing "No hobbies listed" when the list is empty.  
![image](https://github.com/rja87sd/l3-w3-d1-assignment/assets/145504216/f4d68e94-dbea-4410-aed8-5bec89caf7ac)  
  
### Implement Client-Side Navigation:  
- Set up client-side navigation using the Next.js Link component for navigating between the Home page and the User Profile page.  
![image](https://github.com/rja87sd/l3-w3-d1-assignment/assets/145504216/8d89fe4f-78f8-4609-98b7-b85b5dbbc9b2)  
  
## Part 3: Deploying Your Application to Netlify  
### Prepare Your Application for Deployment:  
- Ensure your application builds successfully by running npm run build.
  
### Deploy to Netlify:  
- Follow Netlify's documentation to deploy your Next.js application. This involves connecting your GitHub repository to Netlify and configuring it for deployment.
  
## Part 4: Documentation and Reflection  
### Document Your Process:  
- Update the README.md file to document the steps taken during the assignment, focusing on styling and deployment.
  
### Include Deployment URL:  
- Add the URL of your deployed application on Netlify to the README.md.

