Netflix Clone – React + Firebase + TMDB
A Netflix-inspired web application built with React, featuring Firebase Authentication, Firestore Database, and movie data powered by The Movie Database (TMDB) API.

Features
User Authentication
Register and log in using email/password or Google Firebase Authentication.
User information securely stored in Firebase Firestore.

Home Page
Displays movie recommendations fetched from TMDB API.
Each movie shows its title and poster image.
Clicking a movie navigates to its dedicated player page.

Player Page
Streams movie trailers or content preview (demo implementation).

Responsive UI
Works on desktop and mobile devices.
Styled to replicate the look and feel of Netflix.

Tech Stack
Frontend: React.js, CSS
Authentication & Database: Firebase Authentication, Firestore
API: TMDB API for movie data
Routing: React Router DOM

How It Works
Login/Register
Users can sign up or sign in using Firebase Auth.
New user data is stored in Firestore.

Fetch Movies
Movie recommendations are retrieved from TMDB using their API.

Navigation
Home page → Movie detail → Player page.



Setup Instructions
Clone the repository

bash
Copy
Edit
git clone https://github.com/yourusername/netflix-clone.git
cd netflix-clone
Install dependencies

bash
Copy
Edit
npm install
Create a .env file and add your Firebase and TMDB credentials:

env
Copy
Edit
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_TMDB_API_KEY=your_tmdb_api_key
Start the development server

bash
Copy
Edit
npm start
Credits
Firebase – Authentication & Database

TMDB – Movie data API

Netflix – Original design inspiration
