'use strict';

/**
 * trivia-game router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::trivia-game.trivia-game');
