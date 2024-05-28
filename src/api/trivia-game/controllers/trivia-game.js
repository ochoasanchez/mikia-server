'use strict';

/**
 * trivia-game controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::trivia-game.trivia-game');
