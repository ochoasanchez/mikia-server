'use strict';

/**
 * memory-game service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::memory-game.memory-game');
