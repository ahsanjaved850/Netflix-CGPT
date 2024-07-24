# Netflix-GPT

  Netflix-GPT is a dynamic web application that integrates GPT-based search capabilities with a movie streaming platform. Built with React and Vite, styled using TailwindCSS, and powered by Firebase for authentication and data storage, this app offers users a seamless experience for browsing and discovering movies.

# Table of Contents

  - Getting Started
  - Features
  - Project Structure
  - Dependencies
  - Contributing
  - License
  - Getting Started

# Getting Started

  - Prerequisites
    - Firebase Account
    - TMBD account
  
  - Installation
    - Set up Firebase:
      - Go to the Firebase console and create a new project.
      - Set up authentication with Email/Password.
      - Copy your Firebase config and add it to a .env file in the root of your project.

    - Set up TMDB:
      -Register an account at TMDB.
      - Generate an API key and token.
      - Add the API key and token to the .env file.

# Features

- Login/SignUp Page
  - Sign In / Sign Up Form
  - Redirect to Main page after login

- Main Page
  - Header

  - Main Movie
    - Trailer in Background
    - Title & Overview

  - Movie Suggestions
    - MovieList * N

  - Netflix GPT
    - Search Bar
    - Suggestions

# Implementation Details

 - React App Creation: Created using Vite.
 - Styling: TailwindCSS for easy and efficient styling.
 - Routing: Implemented routing for Login, Sign Up, and Main pages.
 - Forms: Login and Sign Up forms with validation.
 - Hooks: Utilized useRef hook for managing input references.
 - Firebase: Set up Firebase for user authentication, including creating user     accounts and signing in users.
 - Redux: Created a Redux store with slices for user and movie data and gptMovies.
 - Movie Data: Registered in TMDB, obtained API key and token, and linked them. Created custom hooks for fetching now playing, popular, and top-rated movies.
 - Containers: Planned and built MainContainer and SecondaryContainer components.
 - Trailers: Created a custom hook for fetching trailers and embedded YouTube videos.
 - Movie Components: Built MovieList and MovieCard components.
 - GPT Integration: Created a GPT search page and search bar. Integrated GPT APIs for enhanced search capabilities.
 - Multi-language: Implemented multi-language features.

# Contributing
 - Contributions are welcome! Please open an issue or submit a pull request for any improvements or suggestions.
