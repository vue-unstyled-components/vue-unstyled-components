/*!
 * vue-unstyled-components v0.0.0
 * (c) 2018-present Guilherme Lico Barscevicius <guilbrs@gmail.com> (https://guibarscevicius.com.br)
 * Released under the MIT License.
 */
'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var take = _interopDefault(require('object-take'));

/**
 * Set "$ComponentOptions" on Vue's prototype.
 * @param {Vue} Vue
 * @param {Object.<string, *>} options
 */
var setOptions = function setOptions(Vue, options) {
  var $options = Vue.prototype.$ComponentOptions || {};
  Vue.prototype.$ComponentOptions = Object.assign({}, $options, options);
};

/**
 * Environment type. It's releated to router/link
 * @typedef {'nuxt'|'router'|'none'} Environment
 */

/**
 * Default environment.
 * @type {Environment}
 */

var DEFAULT_ENVIRONMENT = 'none';
/**
 * Environment options.
 * @type {Array.<Environment>}
 */

var ENVIRONMENTS = ['nuxt', 'router', 'none'];
/**
 * Check if value is a valid environment.
 * @param {*} value
 * @returns {boolean}
 */

var isEnvironment = function isEnvironment(value) {
  return !!value && ENVIRONMENTS.includes(value);
};
/**
 * Resolve environment considering component scope and "$ComponentOptions".
 * @param {Vue} Vue
 * @returns {Environment}
 */

var resolveEnvironment = function resolveEnvironment(Vue) {
  var option = take(Vue, '$ComponentOptions.environment');
  var environment = Vue.environment || option || DEFAULT_ENVIRONMENT;
  return environment;
};

/**
 * Link component element.
 * @typedef {'a'|'router-link'|'nuxt-link'} LinkComponentElement
 */

var Link = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c(_vm.element, _vm._g(_vm._b({
      tag: "component",
      staticClass: "component-link",
      attrs: {
        "to": !_vm.isAnchor ? _vm.to : null,
        "tag": !_vm.isAnchor ? 'a' : null,
        "href": _vm.isAnchor ? _vm.to : null,
        "target": _vm.isExternal ? '_blank' : null,
        "active-class": !_vm.isAnchor ? '-active' : null,
        "exact-active-class": !_vm.isAnchor ? '-active' : null
      }
    }, 'component', _vm.$attrs, false), _vm.$listeners), [_vm._t("default")], 2);
  },
  staticRenderFns: [],
  props: {
    to: {
      type: [String, Object],
      default: function _default() {
        return null;
      }
    },
    environment: {
      type: String,
      default: DEFAULT_ENVIRONMENT,
      validator: isEnvironment
    },
    isExternal: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    /**
     * Check if component is anchor.
     * @returns {boolean}
     */
    isAnchor: function isAnchor() {
      var environment = resolveEnvironment(this);
      var isAnchor = !!(this.isExternal || environment === 'none');
      return isAnchor;
    },

    /**
     * It resolves and return Link component.
     * @returns {LinkComponentElement}
     */
    element: function element() {
      var environment = resolveEnvironment(this);
      var element = this.isAnchor ? 'a' : environment === 'router' ? 'router-link' : environment === 'nuxt' ? 'nuxt-link' : null;
      return element;
    }
  },

  /**
   * Install Link component and set it's options.
   * @param {Vue} Vue
   * @param {{ environment: Environment, name: string }} [options]
   */
  install: function install(Vue, options) {
    var _ref = options || {},
        environment = _ref.environment,
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'ComponentLink' : _ref$name;

    Vue.component(name, this);
    setOptions(Vue, {
      environment: environment
    });
  }
};

module.exports = Link;
