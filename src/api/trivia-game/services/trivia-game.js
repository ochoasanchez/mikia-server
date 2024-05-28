'use strict';

/**
 * trivia-game service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::trivia-game.trivia-game');
