'use strict';

/**
 * memory-game controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::memory-game.memory-game');
