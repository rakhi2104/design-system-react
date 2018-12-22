"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _deprecatedProperty = require("../../utilities/warning/deprecated-property");

var _deprecatedProperty2 = _interopRequireDefault(_deprecatedProperty);

var _getComponentDoc = require("../../utilities/get-component-doc");

var _getComponentDoc2 = _interopRequireDefault(_getComponentDoc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */

/* eslint-disable import/no-mutable-exports */
var checkProps = function checkProps() {};

if (process.env.NODE_ENV !== 'production') {
  checkProps = function checkProps(COMPONENT, props, jsonDoc) {
    var createDocUrl = (0, _getComponentDoc2.default)(jsonDoc);
    (0, _deprecatedProperty2.default)(COMPONENT, props.skipToContentAssistiveText, 'skipToContentAssistiveText', "assistiveText['skipToContent']", createDocUrl('assistiveText'));
    (0, _deprecatedProperty2.default)(COMPONENT, props.skipToNavAssistiveText, 'skipToNavAssistiveText', "assistiveText['skipToNav']", createDocUrl('assistiveText'));
  };
}

exports.default = checkProps;