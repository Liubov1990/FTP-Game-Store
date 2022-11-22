# Free to play Game Store

## Table of contents

* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [See on Git Hub Pages](#see-on-Git-Hub-Pages)
* [Notes](#notes)

## General info

This SPA is a training project of simple FTP game store, created with help of Create React App environment. 

## Technologies

Project is created with:
* React version: 17.0.2.
* Redux version: 4.1.1.
* Material UI library version: 4.12.3.
* React Responsive Carousel version: 3.2.23.

## Setup

To run this project:

1. install it locally using npm:

```
$ cd ../gam-games
$ npm install

```
2. add api keys into the project:

- get your API key from [Giant Bomb API](https://www.giantbomb.com/api/);
- get your API key from [Rapid API](https://rapidapi.com/);
- create `.env` file in root directory with content `REACT_APP_GIANT_BOMB_API_KEY=your API key` and `REACT_APP_RAPID_API_KEY=your API key`

3. start project with command:

```
$ npm start

```
## See on Git Hub Pages

Open [https://liubov1990.github.io/FTP-Game-Store/](https://liubov1990.github.io/FTP-Game-Store/) to view it in the browser.

In case you see network error, it means, that you do not have permission to use demo proxy server (in this case follow the link [https://cors-anywhere.herokuapp.com/corsdemo](https://cors-anywhere.herokuapp.com/corsdemo) and press button `Request temporary access to the demo server`) or that limit number of requests on demo proxy server was reached (try again later). 

## Notes

At the moment game data API is using with [Rob--W/cors-anywhere](https://github.com/Rob--W/cors-anywhere) and [Rapid API](https://rapidapi.com/hub) proxy servers. But you can use any third-party proxy or your own proxy server for correct processing of API calls without CORS errors.

Project powered with [GIANT BOMB API](https://www.giantbomb.com/api/), [Free-To-Play Games Database API](https://www.freetogame.com/api-doc).

Created for Non-commercial and Demonstration use only!