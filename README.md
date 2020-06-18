# bootstrap-todo

a project to create the classic todo list app, bootstrapped from scratch without using create-react-app

The deployment can be found [here](https://bootstrap-todo.netlify.app/)

## Project purpose

This purpose of this project was as a learning exercise, as well as a way to showcase my abilities.

The main learning exercises were:

- Create a full stack web app from scratch and deploy (I've done this before but it was a great refresher)

- Create a React app from scratch without using create-react-app, by manually setting up webpack and babel

- Learn React hooks (the project uses no class components)

- Create styling from scratch using styled-components, without using bootstrap templates

- Learn Node/Express, by setting up a REST API connected to a Postgres database

- Set up a log in/auth system from scratch, using bcrypt and jsonwebtoken

- Set up a CI/CD pipeline, with pre-push git hooks (which run the linter and unit tests before allowing push to github), and automatic deployments from any merge to development or master.

Note: the backend repo can be found [here](https://github.com/Andrew-CC-Martin/bootstrap-todo-server)

## Dependencies

- node v12.16.3

## How to use

Install packages

- `$npm i`

To run dev server

- `$ npm run start`

To make a local build (non-minified and points to local backend)

- `$npm run build:local`

To make a staging build (non-minified and points to staging backend)

- `$npm run build:staging`

To make a prod build

- `$npm run build:prod`

Run tests in watch mode

- `$npm run test:watch`

Run linter

- `$npm run lint`

## Netlify config

Note: the `_redirects` file is used for Netlify config, so that Netlify deployments will work as a single page app with React-Router
