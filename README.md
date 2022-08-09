# Free to play Game Store

## Table of contents

* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Notes](#notes)

## General info

This SPA is a training project of simple FTP game store, created with help of Create React App environment. 

## Technologies

Project is created with:
* React version: 17.0.2.
* Redux version: 4.1.1.
* Material ui library version: 4.12.3.
* React Responsive Carousel version: 3.2.23.

## Setup

To run this project:

1. install it locally using npm:

```
$ cd ../gam-games
$ npm install

```
2. add apy key into the project:

- get your API key from [Giant Bomb API](https://www.giantbomb.com/api/);
- create `.env` file in root directory with content `REACT_APP_GIANT_BOMB_API_KEY=your API key`

3. start project with command:

```
$ npm start

```

## Notes

Project powered with [GIANT BOMB API](https://www.giantbomb.com/api/), [Free-To-Play Games Database API](https://www.freetogame.com/api-doc) and [thingproxy](https://github.com/Freeboard/thingproxy). You can use any third proxy or proxy server for correct processing of API calls and avoiding CORS errors.

Project created for Non-commercial and Demonstration use only!
