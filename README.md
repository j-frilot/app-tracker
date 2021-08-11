# Application Tracker

![](https://img.shields.io/badge/license-MIT%20License-blue?style=flat-square)

## Description

Application Tracter is a simple person app that can be used to keep track of job applications. It made with react, express, and postgreql serving as the database. The configuration is setup so that it can easily used with mysql. The core functions of the app is to be able to add details about job applications, store applications, update applications, and delete applications.

![screenshot](https://res.cloudinary.com/dsip2gx3i/image/upload/c_scale,q_auto,w_800/v1628213237/misc/app-tracker-screenshot.jpg)

## Table of Contents

-   [Installation](#installation)
-   [Usage](#usage)
-   [Questions](#questions)
-   [License](#license)

## Installation

### Database Setup (Optional)

1. vim server/.env
    - input database credentials into env file.

### Without Database (Optional)

2.  cd client/src/data/joblist.js
    -   edit this object in order to keep track with data. remove/comment code related to server.

### App Setup

3.  cd server
4.  npm install -> npm start
5.  cd ../client
6.  npm install -> npm start

## Usage

Storing unencrypted credentials is unsecure.. It is not recommended to use this for public use without modification for security.

https://reactjs.org/
https://react-bootstrap.github.io/
https://react-icons.github.io/react-icons
https://expressjs.com/
https://github.com/sidorares/node-mysql2#readme

## Questions

For questions about this project, please see my GitHub at [j-frilot](https://github.com/j-frilot), or reach out by email at frilotdr@gmail.com.

## License

This project is covered under the MIT License.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
