'use strict';

/**
 * mirrors-seo service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::mirrors-seo.mirrors-seo');
