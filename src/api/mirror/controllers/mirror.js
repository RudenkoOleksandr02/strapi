'use strict';

/**
 * mirror controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::mirror.mirror');
