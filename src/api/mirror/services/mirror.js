'use strict';

/**
 * mirror service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::mirror.mirror');
