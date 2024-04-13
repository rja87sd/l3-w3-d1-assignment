// Credit to ChatGPT for comments and organization.
import React from "react";
import userprofile from "@/app/styles/UserProfile.module.scss";
// Define the UserProfile component
export default function UserProfile({ name, biography, hobbies }) {
  return (
    <div className={` ${userprofile.userprofile}`}>
      {/* Display the user's name */}
      <h2>{name}</h2>
      <br></br>
      {/* Conditional rendering to display the user's biography or a message if it's not provided */}
      <h3>Bio: </h3>
      {biography ? (
        <p>{biography}</p>
      ) : (
        <p>No biography available.</p>
      )}
      <br></br>
      {/* Conditional rendering to display the user's hobbies or a message if it's not provided */}
      <h3>Hobbies:</h3>
      {hobbies && hobbies.length > 0 ? (
        <ul className={userprofile.userprofile__hobbies}>
          {hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      ) : (
        <p>No hobbies available.</p>
      )}
    </div>
  );
}