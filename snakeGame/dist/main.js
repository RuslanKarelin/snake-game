/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./snakeGame/src/coords.js":
/*!*********************************!*\
  !*** ./snakeGame/src/coords.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Coords)\n/* harmony export */ });\nclass Coords {\n  constructor(y, x, changeDirectionInfo) {\n    this.y = y;\n    this.x = x;\n    this.prevCoordsFromChain;\n    this.changeDirectionInfo = changeDirectionInfo;\n  }\n  static create(y, x, changeDirectionInfo) {\n    return new Coords(y, x, changeDirectionInfo);\n  }\n  getY() {\n    return this.y;\n  }\n  getX() {\n    return this.x;\n  }\n  setY(y) {\n    this.y = y;\n  }\n  setX(x) {\n    this.x = x;\n  }\n  getString() {\n    return this.getY() + '-' + this.getX();\n  }\n  setPrevCoordsFromChain(coords) {\n    this.prevCoordsFromChain = Coords.create(coords.getY(), coords.getX(), coords.getChangeDirectionInfo());\n  }\n  getPrevCoordsFromChain() {\n    return this.prevCoordsFromChain;\n  }\n  setFromPrev() {\n    if (this.prevCoordsFromChain) {\n      this.setX(this.prevCoordsFromChain.getX());\n      this.setY(this.prevCoordsFromChain.getY());\n      this.setChangeDirectionInfo(this.prevCoordsFromChain.getChangeDirectionInfo());\n    }\n  }\n  getChangeDirectionInfo() {\n    return this.changeDirectionInfo;\n  }\n  setChangeDirectionInfo(changeDirectionInfo) {\n    return this.changeDirectionInfo = changeDirectionInfo;\n  }\n}\n\n//# sourceURL=webpack://snakegame/./snakeGame/src/coords.js?");

/***/ }),

/***/ "./snakeGame/src/food.js":
/*!*******************************!*\
  !*** ./snakeGame/src/food.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Food)\n/* harmony export */ });\nclass Food {\n  constructor(y, x, type) {\n    this.y = y;\n    this.x = x;\n    this.type = type;\n  }\n  static create(y, x, type) {\n    return new Food(y, x, type);\n  }\n  getY() {\n    return this.y;\n  }\n  getX() {\n    return this.x;\n  }\n  setY(y) {\n    this.y = y;\n  }\n  setX(x) {\n    this.x = x;\n  }\n  getType() {\n    return this.type;\n  }\n  getString() {\n    return this.getY() + '-' + this.getX();\n  }\n}\n\n//# sourceURL=webpack://snakegame/./snakeGame/src/food.js?");

/***/ }),

/***/ "./snakeGame/src/snake-game.js":
/*!*************************************!*\
  !*** ./snakeGame/src/snake-game.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SnakeGame)\n/* harmony export */ });\n/* harmony import */ var _viewer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewer.js */ \"./snakeGame/src/viewer.js\");\n/* harmony import */ var _coords_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coords.js */ \"./snakeGame/src/coords.js\");\n/* harmony import */ var _food_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./food.js */ \"./snakeGame/src/food.js\");\n\n\n\nclass SnakeGame {\n  constructor(app, greed, speed) {\n    this.app = app;\n    this.greed = greed;\n    this.viewer = new _viewer_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](app, greed);\n    this.zone = [];\n    this.directions = ['right', 'left', 'up', 'down'];\n    this.direction = 0;\n    this.speed = speed;\n    this.intervalId;\n    this.occupiedPoints = [];\n    let firstCoords = _coords_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create(0, 1, [0, 0, this.directions[this.direction]]);\n    let secondCoords = _coords_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create(0, 0, [0, 1, this.directions[this.direction]]);\n    this.coordsList = [firstCoords, secondCoords];\n    this.addInOccupiedPoints(firstCoords);\n    this.addInOccupiedPoints(secondCoords);\n    this.food = null;\n    this.cutFood = null;\n    this.foodIntervalId;\n    this.foodCutIntervalId;\n    this.foodCutTimerId;\n    this.score = 0;\n    this.isPlay = false;\n    this.isPause = false;\n    this.isStepOver = true;\n    this.timeShowCutFood = 8000;\n    this.showCutFoodTimerId;\n    this.startDate;\n  }\n  static init(app, greed, speed) {\n    return new SnakeGame(app, greed, speed);\n  }\n  createZone() {\n    for (let i = 0; i < this.greed; i++) {\n      let tr = [];\n      for (let y = 0; y < this.greed; y++) {\n        tr.push(0);\n      }\n      this.zone.push(tr);\n    }\n  }\n  renderZone() {\n    this.viewer.renderZone(this.zone, this.score);\n  }\n  getHeadSnakeCoords() {\n    return this.coordsList[0];\n  }\n  getSnakeEnd() {\n    return this.coordsList[this.coordsList.length - 1];\n  }\n  doStep(direction) {\n    direction = direction || 'right';\n    this.viewer.drawSnake(this.coordsList, direction);\n  }\n  removePoint() {\n    this.viewer.removePoints();\n  }\n  move() {\n    this.isStepOver = false;\n    this.removePoint();\n    if (this.IsSheBitHerself()) {\n      this.doStep(this.directions[this.direction]);\n      return;\n    }\n    this.ifEatFood();\n    this.ifEatCutFood();\n    this.coordsList = this.recalculateCoords();\n    switch (this.directions[this.direction]) {\n      case 'right':\n        this.moveRight();\n        break;\n      case 'left':\n        this.moveLeft();\n        break;\n      case 'up':\n        this.moveUp();\n        break;\n      case 'down':\n        this.moveDown();\n        break;\n    }\n    this.doStep(this.directions[this.direction]);\n    this.isStepOver = true;\n  }\n  recalculateCoords() {\n    let coordsListLenght = this.coordsList.length;\n    let prevIndex;\n    let currentCoords;\n    for (let i = 0; i < coordsListLenght; i++) {\n      try {\n        prevIndex = i - 1;\n        let prevCoords = this.coordsList[prevIndex];\n        currentCoords = this.coordsList[i];\n        currentCoords.setPrevCoordsFromChain(prevCoords);\n      } catch (e) {}\n    }\n    this.coordsList.forEach(coords => {\n      this.removeFromOccupiedPoints(coords);\n      coords.setFromPrev();\n      this.addInOccupiedPoints(coords);\n    });\n    return this.coordsList;\n  }\n  moveRight() {\n    let headSnakeCoords = this.getHeadSnakeCoords();\n    headSnakeCoords.setX(headSnakeCoords.getX() + 1);\n    if (headSnakeCoords.getX() >= this.zone[headSnakeCoords.getY()].length) {\n      headSnakeCoords.setX(0);\n    }\n    this.setChangeDirectionInfo(headSnakeCoords);\n    this.addInOccupiedPoints(headSnakeCoords);\n  }\n  moveLeft() {\n    let headSnakeCoords = this.getHeadSnakeCoords();\n    if (headSnakeCoords.getX() <= 0) {\n      headSnakeCoords.setX(this.zone[headSnakeCoords.getY()].length - 1);\n    } else {\n      headSnakeCoords.setX(headSnakeCoords.getX() - 1);\n    }\n    this.setChangeDirectionInfo(headSnakeCoords);\n    this.addInOccupiedPoints(headSnakeCoords);\n  }\n  moveUp() {\n    let headSnakeCoords = this.getHeadSnakeCoords();\n    if (headSnakeCoords.getY() <= 0) {\n      headSnakeCoords.setY(this.zone.length - 1);\n    } else {\n      headSnakeCoords.setY(headSnakeCoords.getY() - 1);\n    }\n    this.setChangeDirectionInfo(headSnakeCoords);\n    this.addInOccupiedPoints(headSnakeCoords);\n  }\n  moveDown() {\n    let headSnakeCoords = this.getHeadSnakeCoords();\n    headSnakeCoords.setY(headSnakeCoords.getY() + 1);\n    if (headSnakeCoords.getY() >= this.zone.length) {\n      headSnakeCoords.setY(0);\n    }\n    this.setChangeDirectionInfo(headSnakeCoords);\n    this.addInOccupiedPoints(headSnakeCoords);\n  }\n  setChangeDirectionInfo(headSnakeCoords) {\n    let changeDirectionInfo = [headSnakeCoords.getY(), headSnakeCoords.getX(), this.directions[this.direction]];\n    headSnakeCoords.setChangeDirectionInfo(changeDirectionInfo);\n  }\n  showFood(type) {\n    let isStop = false;\n    this.clearShowFoodInterval();\n    while (!isStop) {\n      let y = this.random(0, this.greed - 1);\n      let x = this.random(0, this.greed - 1);\n      if (this.isInOccupiedPoints(y, x)) {\n        continue;\n      }\n      this.food = _food_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].create(y, x, type);\n      this.addInOccupiedPoints(this.food);\n      this.viewer.showFood(this.food);\n      isStop = true;\n      break;\n    }\n  }\n  showCutFood(type) {\n    if (this.coordsList.length < 10) {\n      return;\n    }\n    let isStop = false;\n    this.clearShowCutFoodInterval();\n    while (!isStop) {\n      let y = this.random(0, this.greed - 1);\n      let x = this.random(0, this.greed - 1);\n      if (this.isInOccupiedPoints(y, x)) {\n        continue;\n      }\n      this.cutFood = _food_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].create(y, x, type);\n      this.addInOccupiedPoints(this.cutFood);\n      this.viewer.showFood(this.cutFood);\n      this.startDate = new Date();\n      this.foodCutTimerId = setTimeout(function () {\n        this.viewer.eatCutFood();\n        this.viewer.removeFoodBlink();\n        this.removeFromOccupiedPoints(this.cutFood);\n        this.cutFood = null;\n        this.setShowCutFoodInterval();\n        clearInterval(this.showCutFoodTimerId);\n      }.bind(this), this.timeShowCutFood);\n      this.showCutFoodTimerId = setInterval(function () {\n        let currentDate = new Date();\n        if (Math.floor(currentDate.getTime() / 1000 - this.startDate.getTime() / 1000) === this.timeShowCutFood / 1000 - Math.floor(this.timeShowCutFood / 1000 / 3)) {\n          this.viewer.addFoodBlink();\n        }\n      }.bind(this), 1000);\n      isStop = true;\n      break;\n    }\n  }\n  random(min, max) {\n    return Math.floor(Math.random() * (max - min + 1)) + min;\n  }\n  setShowFoodInterval() {\n    this.foodIntervalId = setInterval(this.showFood.bind(this, 'cherry'), this.random(2000, 6000));\n  }\n  setShowCutFoodInterval() {\n    this.foodCutIntervalId = setInterval(this.showCutFood.bind(this, 'cut'), this.random(20000, 40000));\n  }\n  clearShowFoodInterval() {\n    clearInterval(this.foodIntervalId);\n  }\n  clearShowCutFoodInterval() {\n    clearInterval(this.foodCutIntervalId);\n  }\n  ifEatFood() {\n    let headSnakeCoords = this.getHeadSnakeCoords();\n    let food = this.food;\n    if (food && headSnakeCoords.getX() === food.getX() && headSnakeCoords.getY() === food.getY()) {\n      this.viewer.eatFood();\n      this.removeFromOccupiedPoints(food);\n      this.food = null;\n      this.coordsList.push(_coords_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create(-1, -1));\n      this.setShowFoodInterval();\n      this.viewer.setScore(++this.score);\n    }\n  }\n  ifEatCutFood() {\n    let headSnakeCoords = this.getHeadSnakeCoords();\n    let food = this.cutFood;\n    if (food && headSnakeCoords.getX() === food.getX() && headSnakeCoords.getY() === food.getY()) {\n      this.viewer.eatCutFood();\n      this.viewer.removeFoodBlink();\n      this.removeFromOccupiedPoints(food);\n      this.cutFood = null;\n      this.coordsList.pop();\n      clearTimeout(this.foodCutTimerId);\n      this.setShowCutFoodInterval();\n    }\n  }\n  IsSheBitHerself() {\n    let headSnakeCoords = this.getHeadSnakeCoords();\n    for (let i = 0; i < this.coordsList.length; i++) {\n      if (i === 0) {\n        continue;\n      }\n      let coords = this.coordsList[i];\n      if (headSnakeCoords.getX() === coords.getX() && headSnakeCoords.getY() === coords.getY()) {\n        clearInterval(this.intervalId);\n        this.clearShowFoodInterval();\n        this.clearShowCutFoodInterval();\n        this.viewer.eatFood();\n        this.viewer.showGameOverMessage();\n        this.viewer.eatCutFood();\n        this.viewer.setPlayBtnStart();\n        this.cutFood = null;\n        clearTimeout(this.foodCutTimerId);\n        this.isPlay = false;\n        return true;\n      }\n    }\n    return false;\n  }\n  runGame() {\n    this.createZone();\n    this.renderZone();\n    this.addEvents();\n    this.doStep();\n  }\n  startGame() {\n    clearInterval(this.intervalId);\n    this.isPause = false;\n    this.intervalId = setInterval(this.move.bind(this), this.speed);\n    this.viewer.setPlayBtnPause();\n  }\n  newGame() {\n    this.viewer.setPlayBtnPause();\n    this.isPlay = true;\n    this.score = 0;\n    this.startGame();\n    this.setShowFoodInterval();\n    this.setShowCutFoodInterval();\n    this.direction = 0;\n    let firstCoords = _coords_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create(0, 1, [0, 0, this.directions[this.direction]]);\n    let secondCoords = _coords_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create(0, 0, [0, 1, this.directions[this.direction]]);\n    this.coordsList = [firstCoords, secondCoords];\n    this.occupiedPoints = [];\n    this.addInOccupiedPoints(firstCoords);\n    this.addInOccupiedPoints(secondCoords);\n    this.viewer.setScore(this.score);\n    this.viewer.clearGameOverMessage();\n  }\n  addEvents() {\n    document.addEventListener('keyup', function (event) {\n      if (!this.isStepOver) {\n        return false;\n      }\n      if (event.code === 'ArrowRight') {\n        if (this.direction === 1) {\n          return false;\n        }\n        this.direction = 0;\n        this.isStepOver = false;\n      }\n      if (event.code === 'ArrowLeft') {\n        if (this.direction === 0) {\n          return false;\n        }\n        this.direction = 1;\n        this.isStepOver = false;\n      }\n      if (event.code === 'ArrowUp') {\n        if (this.direction === 3) {\n          return false;\n        }\n        this.direction = 2;\n        this.isStepOver = false;\n      }\n      if (event.code === 'ArrowDown') {\n        if (this.direction === 2) {\n          return false;\n        }\n        this.direction = 3;\n        this.isStepOver = false;\n      }\n\n      /*if (event.code === 'Space') {\r\n          this.move();\r\n          this.isStepOver = false;\r\n      }*/\n    }.bind(this));\n    document.querySelector('.snake-game__play-btn').addEventListener('click', function () {\n      if (!this.isPlay && !this.isPause) {\n        this.newGame();\n      } else if (this.isPause) {\n        this.startGame();\n      } else {\n        this.pause();\n      }\n    }.bind(this));\n  }\n  pause() {\n    this.isPause = true;\n    clearInterval(this.intervalId);\n    this.viewer.setPlayBtnStart();\n  }\n  addInOccupiedPoints(coords) {\n    let value = coords.getString();\n    let index = this.occupiedPoints.indexOf(value);\n    if (index === -1) {\n      this.occupiedPoints.push(value);\n    }\n  }\n  removeFromOccupiedPoints(coords) {\n    let index = this.occupiedPoints.indexOf(coords.getString());\n    if (index !== -1) {\n      this.occupiedPoints.splice(index, 1);\n    }\n  }\n  isInOccupiedPoints(y, x) {\n    let index = this.occupiedPoints.indexOf(y + '-' + x);\n    if (index !== -1) {\n      return true;\n    }\n    return false;\n  }\n  isInOccupiedPointsByCoords(coords) {\n    let index = this.occupiedPoints.indexOf(coords.getString());\n    if (index !== -1) {\n      return true;\n    }\n    return false;\n  }\n}\n\n//# sourceURL=webpack://snakegame/./snakeGame/src/snake-game.js?");

/***/ }),

/***/ "./snakeGame/src/snake-init.js":
/*!*************************************!*\
  !*** ./snakeGame/src/snake-init.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _snake_game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./snake-game.js */ \"./snakeGame/src/snake-game.js\");\n\nwindow.SnakeGame = _snake_game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\n//# sourceURL=webpack://snakegame/./snakeGame/src/snake-init.js?");

/***/ }),

/***/ "./snakeGame/src/viewer.js":
/*!*********************************!*\
  !*** ./snakeGame/src/viewer.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Viewer)\n/* harmony export */ });\nclass Viewer {\n  constructor(app, greed) {\n    this.app = app;\n    this.greed = greed;\n    this.playBtn;\n  }\n  renderZone(zone, score) {\n    let zoneWrapper = document.createElement('div');\n    zoneWrapper.classList.add('snake-game__zone-wrapper');\n    for (let i = 0; i < zone.length; i++) {\n      let tr = document.createElement('div');\n      tr.classList.add('snake-game__tr');\n      tr.classList.add('snake-game__tr-' + i);\n      for (let y = 0; y < zone[i].length; y++) {\n        let td = document.createElement('div');\n        td.classList.add('snake-game__td');\n        td.classList.add('snake-game__td-' + y);\n        tr.appendChild(td);\n      }\n      zoneWrapper.appendChild(tr);\n    }\n    let boardWrapper = document.createElement('div');\n    boardWrapper.classList.add('snake-game__board');\n    let scoreNode = document.createElement('div');\n    scoreNode.classList.add('snake-game__score');\n    scoreNode.textContent = 'Score: ' + score;\n    this.playBtn = document.createElement('div');\n    this.playBtn.classList.add('snake-game__play-btn');\n    this.playBtn.textContent = 'Start';\n    let message = document.createElement('div');\n    message.classList.add('snake-game__message');\n    this.app.appendChild(zoneWrapper);\n    boardWrapper.appendChild(scoreNode);\n    boardWrapper.appendChild(this.playBtn);\n    boardWrapper.appendChild(message);\n    this.app.appendChild(boardWrapper);\n  }\n  setScore(score) {\n    document.querySelector('.snake-game__score').textContent = 'Score: ' + score;\n  }\n  addPoint(coords, partIndex, length, direction, coordList) {\n    let point = document.querySelector('.snake-game__tr-' + coords.getY() + ' > .snake-game__td-' + coords.getX());\n    point.classList.add('snake-game__chain');\n    let changeDirectionInfo = coords.getChangeDirectionInfo();\n    if (partIndex === 0) {\n      point.classList.add('snake-game__chain-head');\n      if (length > 1) {\n        let next = coordList[partIndex + 1];\n        let nextChangeDirectionInfo = next.getChangeDirectionInfo();\n        next.setChangeDirectionInfo([nextChangeDirectionInfo[0], nextChangeDirectionInfo[1], changeDirectionInfo[2]]);\n      }\n    }\n    if (partIndex === length - 1) {\n      point.classList.add('snake-game__chain-end');\n    }\n    if (changeDirectionInfo && coords.getY() === changeDirectionInfo[0] && coords.getX() === changeDirectionInfo[1]) {\n      point.classList.add('snake-game__chain-' + changeDirectionInfo[2]);\n    } else {\n      point.classList.add('snake-game__chain-' + direction);\n    }\n  }\n  removePoints() {\n    document.querySelectorAll('.snake-game__td').forEach(item => {\n      item.classList.remove('snake-game__chain');\n      item.classList.remove('snake-game__chain-head');\n      item.classList.remove('snake-game__chain-end');\n      item.classList.remove('snake-game__chain-right');\n      item.classList.remove('snake-game__chain-left');\n      item.classList.remove('snake-game__chain-up');\n      item.classList.remove('snake-game__chain-down');\n    });\n  }\n  drawSnake(coordList, direction) {\n    let snakeLength = coordList.length;\n    coordList.forEach((coords, index) => {\n      this.addPoint(coords, index, snakeLength, direction, coordList);\n    });\n  }\n  addSnakeDirection(direction) {\n    document.querySelector('.snake-game__chain-head').classList.add('snake-game__chain-head-' + direction);\n  }\n  showFood(food) {\n    let point = document.querySelector('.snake-game__tr-' + food.getY() + ' > .snake-game__td-' + food.getX());\n    point.classList.add('snake-game__food-' + food.getType());\n  }\n  eatFood() {\n    document.querySelectorAll('.snake-game__food-cherry').forEach(item => {\n      item.classList.remove('snake-game__food-cherry');\n    });\n  }\n  eatCutFood() {\n    document.querySelectorAll('.snake-game__food-cut').forEach(item => {\n      item.classList.remove('snake-game__food-cut');\n    });\n  }\n  addFoodBlink() {\n    let foodCut = document.querySelector('.snake-game__food-cut');\n    if (foodCut) {\n      foodCut.classList.add('snake-game__food-blink');\n    }\n  }\n  removeFoodBlink() {\n    document.querySelectorAll('.snake-game__food-blink').forEach(item => {\n      item.classList.remove('snake-game__food-blink');\n    });\n  }\n  showGameOverMessage() {\n    document.querySelector('.snake-game__message').textContent = 'Game over!';\n  }\n  clearGameOverMessage() {\n    document.querySelector('.snake-game__message').textContent = '';\n  }\n  setPlayBtnPause() {\n    this.playBtn.textContent = 'Pause';\n  }\n  setPlayBtnStart() {\n    this.playBtn.textContent = 'Start';\n  }\n}\n\n//# sourceURL=webpack://snakegame/./snakeGame/src/viewer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./snakeGame/src/snake-init.js");
/******/ 	
/******/ })()
;