# CollegePro

Welcome to CollegePro! It is a web application that is designed to help students in college. It is a platform where students can share notes, ask questions, and help each other out. It is a great way to collaborate with other students and learn from each other.

## Table of Content

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Development Server](#running-the-development-server)
- [Building the Project](#building-the-project)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/en/download/): Version 22 or later
- [Git](https://www.git-scm.com/downloads): Version control system to clone the repository
- [Java 21](https://www.oracle.com/java/technologies/downloads/#java21): Java Development Kit to run the backend server
- [Gradle 8.9](https://gradle.org/install/): Build automation tool to build the backend server
- [MySQL](https://dev.mysql.com/downloads/mysql/): Database management system to store data

## Installation

1. **Install Node.js**: Download and install from [nodejs.org](https://nodejs.org/en/download/).

2. **Clone the repository**:
   ```sh
   git clone https://github.com/blank-09/CollegePro.git
   cd CollegePro
   ```
3. **Install dependencies**:
   ```sh
   npm install
   ```
4. **Copy the `.env.example` file to `.env.local`**:

   ```sh
   cp .env.example .env.local
   ```

   Update the `.env.local` file with the necessary environment variables.

5. **Or set environment variables to**:

   ```sh
   VITE_DEV_SERVER_URL=<development-server-url>
   VITE_PRODUCTION_SERVER_URL=<production-server-url>
   ```

## Running the Development Server

To start the development server, run:

```sh
npm run dev
```

The app will be available at `http://localhost:5173/`.

## Building the Project

To build the project for production, run:

```sh
npm run build
```

The output files will be in the `dist` directory.
