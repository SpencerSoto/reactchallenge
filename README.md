# React Challenge: Working with API calls and styling components

This challenge allows us to verify your knowledge of react using a semi realworld application. Here we will dive into ReactJS, Function Components, component state, side effects and styling techniques. You will demonstrate proficiency by creating an application that uses ReactJS to consume live data retrieved from the World Wide Web and style that data nicely on the page using packages such as styled-components or CSS Modules. You also have the option to use a third-party library for fetching or sticking with the native fetch API

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Challenge.**

You are not allowed to collaborate during the Challenge. However, you are encouraged to seek support from your lead developer if you need more direction.

You have three hours to complete this challenge. Plan your time accordingly. Time starts from the point of your `init` commit.

## Commits

Commit your code regularly and meaningfully. This helps both you --in case you ever need to return to old code for any number of reasons.

## Description

In this challenge, create a web page that presents a styled list of **characters obtained from an API**. Being able to render out data to a web page is a large part of what JavaScript developers do, this challenge assesses your ability to achieve such task.

## Self-Study/Essay Questions

Demonstrate your understanding of Reacts concepts by answering four questions. Edit the `Answers.md` file at the root of the project to include your answer after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read.

## Project Set Up

Follow these steps to set up and work on your project:

- [ ] Create a forked copy of this project.
- [ ] Add `@AmericasEngineer` as collaborator on Github.
- [ ] Clone your OWN version of this Repo.
- [ ] Create a new Branch locally: `git checkout -b <firstName-lastName>`.
- [ ] Change directories into `./starwars` (`cd starwars`) and run `npm install` or `yarn install` to retrieve dependencies based on what package manager you like better. Personally i love Yarn 😊
- [ ] Once you have installed the _node_modules_, run `npm start` or `yarn start` to get your server up and running.
- [ ] With the server up and running, open Chrome and head over to `localhost:3000` and view your beautiful app. Maybe it's not _that_ pretty right now... _yet_, your goal is to ensure this project becomes a thing of beauty!
Follow these steps for completing your project.
- [ ] Implement the project on this Branch, **committing progress & changes often.**
- [ ] Push commits: `git push origin <firstName-lastName>`.

## Minimum Viable Product

Your finished project must include all of the following requirements:

- [ ] Use ONE of the following APIs:
  - [Star Wars API on swapi.dev](https://swapi.dev/)
  - [Fallback Star Wars API](https://swapi.py4e.com/) (in case swapi.dev is down)
  - [The Rick and Morty API](https://rickandmortyapi.com/)
  - [The RESTful Pokémon API](https://pokeapi.co/) **(harder)**
- [ ] Use the documentation and Google to learn how to fetch characters from your API.
- [ ] Obtain a list of characters. One or several requests might be needed, depending on the API.
- [ ] Set the list of characters into state.
- [ ] Render your characters to the screen:
  - Build a React component named 'Character' to render an individual character.
  - Map over the list in state, and for each character render a Character to the page.
  - You must display at least one element for each character in the data set.
  - Style your app with either Reactstrap or styled-components - don't rely on browser default styles.

### Required best practices

- [ ] Consistent naming. Examples: variables, functions, Components, and file/folder organization.
- [ ] Consistent spacing. Examples: line breaks, around arguments and before/after functions.
- [ ] Consistent quotation usage.
- [ ] Spell-check.
- [ ] Schedule time to review, refine and reassess your work.

It is better to submit a challenge that meets [MVP](https://en.wikipedia.org/wiki/Minimum_viable_product) than one that attempts too much and fails.

### Tips and Gotchas

- [ ] Test your API and inspect the data in Chrome, _before_ writing the code for the request(s). See screenshots at the root of the project.
- [ ] Try not to hammer your API while developing. Infinite loops in your code might trigger hundreds of requests!
- [ ] The Pokemon API is a slightly harder challenge because a single network request might not be enough to get all the data you want.
- [ ] Running `npm` commands in the wrong folder will not work. **Be aware of what folder you're in** when working in the command line.
- [ ] The `start` process can sometimes choke after adding new dependencies and may need to be restarted.
