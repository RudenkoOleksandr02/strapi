'use strict';

/**
 * mirror router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::mirror.mirror');
