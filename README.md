# GameOverTournamentAssessment
Year3 - Contemporary Web Applications Assessment

European Tournament – Game Over 2025

An interactive web application for university students to search, register and manage participation in gaming tournaments. Built with Next.js, React, SQLite, and Firebase Authentication.

Getting Started!

Prerequisites

Node.js installed
SQLite Studio (optional for viewing database)
Firebase account (for Auth)

Clone this repository

https://github.com/joel-dll/GameOverTournamentAssessment.git

Installation

npm install

Run the Project

npm run dev

The application will start at:
http://localhost:3000

🔐 Test Login Credentials

👤 Regular User

Email: joel_dll@hotmail.com
Password: 123456

🛠️ Admin User

Email: admin@gameover.com
Password: 123456

Project Structure
/app/ – App routes and pages
/components/ – All reusable React components
/api/ – Next.js API routes (for interacting with SQLite database)
/lib/firebase.js – Firebase configuration
/public/GameOverTournament.db – SQLite database file
/styles/ – Global styles


Technologies Used

Next.js 14 
React
SQLite (GameOverTournament.db)
Firebase Authentication
Leaflet.js (interactive tournament map)
CSS Modules

Database
SQLite database located at:
public/GameOverTournament.db

Can be opened using SQLite Studio

Features

Search for tournaments by game, date, or location
View tournaments on a live Leaflet map
Register or cancel participation
Secure login via Firebase (with admin/user role distinction)
Admin dashboard for managing tournaments and viewing registrations



