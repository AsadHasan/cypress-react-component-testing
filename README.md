# Cypress React Component Tests

Basic component tests using the currently experimental `Cypress Component Testing` library, to test individual `React` components of a very basic app (which calls the NASA 'picture of the day' API, and displays image title as heading and the image itself, and offers a button to toggle the detailed description of the image) created using the `Create-React-App` tool and deployed on Heroku (https://simple-react-app-123456.herokuapp.com/). Heroku deployed is managed via Terraform.

## Run the app locally

**Prerequisites**: Environment variables `REACT_APP_URL` (API base url) and `REACT_APP_API_KEY` (API key for the API) need to be defined.

App can be run by either of following methods:

- Via npm: Run `npm start`
- Via `docker-compose`: Run `docker-compose up`

## Running component tests

Run `npm test`
