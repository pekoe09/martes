/*
 * This utility class that configures rest.js, is lifted from spring-react tutorial code:
 * https://github.com/spring-guides/tut-react-and-spring-data-rest
 */

var rest = require('rest');
var defaultRequest = require('rest/interceptor/defaultRequest');
var mime = require('rest/interceptor/mime');
var uriTemplateInterceptor = require('./uriTemplateInterceptor');
var errorCode = require('rest/interceptor/errorCode');
var baseRegistry = require('rest/mime/registry');

var registry = baseRegistry.child();

registry.register('text/uri-list', require('./uriListConverter'));
registry.register('application/hal+json', require('rest/mime/type/application/hal'));

module.exports = rest
		.wrap(mime, { registry: registry })
		.wrap(uriTemplateInterceptor)
		.wrap(errorCode)
		.wrap(defaultRequest, { headers: { 'Accept': 'application/hal+json' }});