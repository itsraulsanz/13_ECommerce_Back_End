# E-Commerce Back End

## Table of contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)


## Description

This repository contains the back end for an e-commerce site. I have configured a working Express.js API to use Sequelize to interact with a MySQL database. It allows the user to:

- To add your database name, MySQL username, and MySQL password to an environment variable file
- To connect to a database using Sequelize
- To enter schema and seed commands
- You are able to search, create, update, and delete data in my database

## Installation

After copying the repository please run “npm install” to install the inquirer package.
The app uses:

- [MySQL2](https://www.npmjs.com/package/mysql)

- [Sequelize](https://www.npmjs.com/package/sequelize) packages.

- [dotenv](https://www.npmjs.com/package/dotenv) package to store sensitive data (MySQL username, password, and database name) using environment variables through.


## Usage

Run `npm run seed` to seed data to your database so that you can test your routes. Then run the server `npm run start`.

VIDEO DEMO: <a href="https://drive.google.com/file/d/1EzxpPfvKKG6JadiWCaKN-VRDmy44KGuZ/view">https://drive.google.com/file/d/1EzxpPfvKKG6JadiWCaKN-VRDmy44KGuZ/view</a>

## License

![Github license](https://img.shields.io/badge/license-MIT-blue.svg)
This project is licensed under MIT license.

---

## Contributing

Contributions, issues and feature requests are welcome.

## Questions

Github: <a href="https://github.com/itsraulsanz/">https://github.com/itsraulsanz/</a><br />


---


* The walkthrough video must show all of the technical acceptance criteria being met.

* The walkthrough video must demonstrate how to create the schema from the MySQL shell.

* The walkthrough video must demonstrate how to seed the database from the command line.

* The walkthrough video must demonstrate how to start the application’s server.

* The walkthrough video must demonstrate GET routes for all categories, all products, and all tags being tested in Insomnia Core.

* The walkthrough video must demonstrate GET routes for a single category, a single product, and a single tag being tested in Insomnia Core.

* The walkthrough video must demonstrate POST, PUT, and DELETE routes for categories, products, and tags being tested in Insomnia Core.

### Technical Acceptance Criteria: 40%

* Satisfies all of the preceding acceptance criteria plus the following:

  

  * Syncs Sequelize models to a MySQL database on the server start.

  * Includes column definitions for all four models outlined in the homework instructions.

  * Includes model associations outlined in the homework instructions.

### Repository Quality: 13%

* Repository has a unique name.

* Repository follows best practices for file structure and naming conventions.

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains quality readme with description and a link to a walkthrough video.

## Review

You are required to submit BOTH of the following for review:

* A walkthrough video demonstrating the functionality of the application and all of the acceptance criteria being met.

* The URL of the GitHub repository. Give the repository a unique name and include a readme describing the project.

---
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
