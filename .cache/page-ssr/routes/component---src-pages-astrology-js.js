exports.id = 73;
exports.ids = [73];
exports.modules = {

/***/ 6785:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7688);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2031);
function Navigation(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav",{id:"menu"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul",{className:"flex"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li",{className:"pr-3 menu-item"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link,{to:"/"},"Home")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li",{className:"pr-3 menu-item"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link,{to:"/contacts"},"Contacts")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li",{className:"pr-3 menu-item"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link,{to:"/quiz"},"Quiz"))));}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navigation);

/***/ }),

/***/ 2411:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_astrology)
});

// EXTERNAL MODULE: external "/Users/ivaylonikolov/Desktop/Gifts/gifts-sanity-react/node_modules/react/index.js"
var index_js_ = __webpack_require__(7688);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
;// CONCATENATED MODULE: ./src/Components/Stars.js
function Stars(){let stars=addStars();return/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement("div",{id:"stars"},stars));function addStars(){let stars=[];for(let i=0;i<20;i++){let starDOM=/*#__PURE__*/index_js_default().createElement("div",{className:"star",style:{position:'absolute',top:80*Math.random()+'%',left:100*Math.random()+'%',animationDelay:3*Math.random()+'s'},key:`star${i}`});stars.push(starDOM);}return stars;}}/* harmony default export */ const Components_Stars = (Stars);
// EXTERNAL MODULE: ./src/svg/astrology/virgo.inline.svg
var virgo_inline = __webpack_require__(3930);
var virgo_inline_default = /*#__PURE__*/__webpack_require__.n(virgo_inline);
// EXTERNAL MODULE: ./src/svg/astrology/aquarius.inline.svg
var aquarius_inline = __webpack_require__(4643);
var aquarius_inline_default = /*#__PURE__*/__webpack_require__.n(aquarius_inline);
// EXTERNAL MODULE: ./src/svg/astrology/aries.inline.svg
var aries_inline = __webpack_require__(3285);
var aries_inline_default = /*#__PURE__*/__webpack_require__.n(aries_inline);
// EXTERNAL MODULE: ./src/svg/astrology/cancer.inline.svg
var cancer_inline = __webpack_require__(5261);
var cancer_inline_default = /*#__PURE__*/__webpack_require__.n(cancer_inline);
// EXTERNAL MODULE: ./src/svg/astrology/capricorn.inline.svg
var capricorn_inline = __webpack_require__(6995);
var capricorn_inline_default = /*#__PURE__*/__webpack_require__.n(capricorn_inline);
// EXTERNAL MODULE: ./src/svg/astrology/gemini.inline.svg
var gemini_inline = __webpack_require__(8851);
var gemini_inline_default = /*#__PURE__*/__webpack_require__.n(gemini_inline);
// EXTERNAL MODULE: ./src/svg/astrology/leo.inline.svg
var leo_inline = __webpack_require__(836);
var leo_inline_default = /*#__PURE__*/__webpack_require__.n(leo_inline);
// EXTERNAL MODULE: ./src/svg/astrology/libra.inline.svg
var libra_inline = __webpack_require__(1425);
var libra_inline_default = /*#__PURE__*/__webpack_require__.n(libra_inline);
// EXTERNAL MODULE: ./src/svg/astrology/pisces.inline.svg
var pisces_inline = __webpack_require__(7902);
var pisces_inline_default = /*#__PURE__*/__webpack_require__.n(pisces_inline);
// EXTERNAL MODULE: ./src/svg/astrology/sagittarius.inline.svg
var sagittarius_inline = __webpack_require__(3926);
var sagittarius_inline_default = /*#__PURE__*/__webpack_require__.n(sagittarius_inline);
// EXTERNAL MODULE: ./src/svg/astrology/scorpio.inline.svg
var scorpio_inline = __webpack_require__(4873);
var scorpio_inline_default = /*#__PURE__*/__webpack_require__.n(scorpio_inline);
// EXTERNAL MODULE: ./src/svg/astrology/taurus.inline.svg
var taurus_inline = __webpack_require__(8333);
var taurus_inline_default = /*#__PURE__*/__webpack_require__.n(taurus_inline);
// EXTERNAL MODULE: ./node_modules/react-responsive/dist/react-responsive.js
var react_responsive = __webpack_require__(1852);
;// CONCATENATED MODULE: ./src/Components/Zodiacs.js
function getWindowDimensions(){const{innerWidth:width,innerHeight:height}=window;return{width,height};}function Zodiacs(){const ZodiacComponentsSVG=[(virgo_inline_default()),(aquarius_inline_default()),(aries_inline_default()),(cancer_inline_default()),(capricorn_inline_default()),(gemini_inline_default()),(leo_inline_default()),(libra_inline_default()),(pisces_inline_default()),(sagittarius_inline_default()),(scorpio_inline_default()),(taurus_inline_default())];let ZodiacComponents=[];let mobileScreen=(0,react_responsive.useMediaQuery)({query:'(max-width:600px)'});console.log(mobileScreen);ZodiacComponentsSVG.map((ZodiacComponent,index)=>{let radius=0;let signSize=0;if(mobileScreen){radius=125;signSize=15;}else{radius=250;signSize=25;}ZodiacComponents.push(/*#__PURE__*/index_js_default().createElement(ZodiacComponent,{onMouseEnter:pauseState,onMouseLeave:keepState,id:ZodiacComponent.name,key:ZodiacComponent.name,fill:"white",width:`${signSize}px`,height:`${signSize}px`,style:{position:'absolute',left:radius+Math.cos(Math.PI/6*index)*radius,top:radius+Math.sin(Math.PI/6*index)*radius}}));});function pauseState(){let signsDOM=document.querySelector('#wheel');signsDOM.style.animationPlayState='paused';}function keepState(){let signsDOM=document.querySelector('#wheel');signsDOM.style.animationPlayState='running';}return/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement("div",{id:"signs"},ZodiacComponents));}/* harmony default export */ const Components_Zodiacs = (Zodiacs);
;// CONCATENATED MODULE: ./src/Components/Slider.js
function Slider(){return/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement("div",{id:"wheel"},/*#__PURE__*/index_js_default().createElement(Components_Zodiacs,null)));}/* harmony default export */ const Components_Slider = (Slider);
// EXTERNAL MODULE: ./src/Components/Navigation.js
var Navigation = __webpack_require__(6785);
// EXTERNAL MODULE: ./node_modules/react-helmet/es/Helmet.js
var Helmet = __webpack_require__(4593);
;// CONCATENATED MODULE: ./src/pages/astrology.js
function astrology(){return/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement(Helmet.Helmet,null,/*#__PURE__*/index_js_default().createElement("style",null,`
                    body{
                        background: linear-gradient(180deg, rgba(29,43,75,1) 0%, rgba(25,69,159,1) 100%) no-repeat;
                        background-size: cover;
                        background-attachment: fixed;
                    }
                    html{
                        height: 100%;
                    }`)),/*#__PURE__*/index_js_default().createElement("div",{id:"astrology",style:{paddingTop:'50px'}},/*#__PURE__*/index_js_default().createElement(Navigation/* default */.Z,null),/*#__PURE__*/index_js_default().createElement("div",{id:"moon"}),/*#__PURE__*/index_js_default().createElement(Components_Stars,null),/*#__PURE__*/index_js_default().createElement(Components_Slider,null),/*#__PURE__*/index_js_default().createElement("div",{id:"sign"},"Hover over a zodiac sign to pick the recipient of the gifts.")));}/* harmony default export */ const pages_astrology = (astrology);

/***/ }),

/***/ 1852:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(root, factory) {
     true ? module.exports = factory(__webpack_require__(7688)) : 0;
}("undefined" != typeof self ? self : this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
    return function(modules) {
        function __nested_webpack_require_451__(moduleId) {
            if (installedModules[moduleId]) return installedModules[moduleId].exports;
            var module = installedModules[moduleId] = {
                i: moduleId,
                l: !1,
                exports: {}
            };
            return modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_451__), 
            module.l = !0, module.exports;
        }
        var installedModules = {};
        return __nested_webpack_require_451__.m = modules, __nested_webpack_require_451__.c = installedModules, 
        __nested_webpack_require_451__.d = function(exports, name, getter) {
            __nested_webpack_require_451__.o(exports, name) || Object.defineProperty(exports, name, {
                configurable: !1,
                enumerable: !0,
                get: getter
            });
        }, __nested_webpack_require_451__.n = function(module) {
            var getter = module && module.__esModule ? function() {
                return module.default;
            } : function() {
                return module;
            };
            return __nested_webpack_require_451__.d(getter, "a", getter), getter;
        }, __nested_webpack_require_451__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        }, __nested_webpack_require_451__.p = "", __nested_webpack_require_451__(__nested_webpack_require_451__.s = 7);
    }([ function(module, exports, __nested_webpack_require_1848__) {
        "use strict";
        var __importDefault = this && this.__importDefault || function(mod) {
            return mod && mod.__esModule ? mod : {
                default: mod
            };
        };
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var react_1 = __importDefault(__nested_webpack_require_1848__(1)), matchmediaquery_1 = __importDefault(__nested_webpack_require_1848__(8)), hyphenate_style_name_1 = __importDefault(__nested_webpack_require_1848__(2)), shallow_equal_1 = __nested_webpack_require_1848__(10), toQuery_1 = __importDefault(__nested_webpack_require_1848__(3)), Context_1 = __importDefault(__nested_webpack_require_1848__(6)), makeQuery = function(settings) {
            return settings.query || (0, toQuery_1.default)(settings);
        }, hyphenateKeys = function(obj) {
            if (!obj) return null;
            var keys = Object.keys(obj);
            return 0 === keys.length ? null : keys.reduce(function(result, key) {
                return result[(0, hyphenate_style_name_1.default)(key)] = obj[key], result;
            }, {});
        }, useIsUpdate = function() {
            var ref = react_1.default.useRef(!1);
            return react_1.default.useEffect(function() {
                ref.current = !0;
            }, []), ref.current;
        }, useDevice = function(deviceFromProps) {
            var deviceFromContext = react_1.default.useContext(Context_1.default), getDevice = function() {
                return hyphenateKeys(deviceFromProps) || hyphenateKeys(deviceFromContext) || {};
            }, _a = react_1.default.useState(getDevice), device = _a[0], setDevice = _a[1];
            return react_1.default.useEffect(function() {
                var newDevice = getDevice();
                (0, shallow_equal_1.shallowEqualObjects)(device, newDevice) || setDevice(newDevice);
            }, [ deviceFromProps, deviceFromContext ]), device;
        }, useQuery = function(settings) {
            var getQuery = function() {
                return makeQuery(settings);
            }, _a = react_1.default.useState(getQuery), query = _a[0], setQuery = _a[1];
            return react_1.default.useEffect(function() {
                var newQuery = getQuery();
                query !== newQuery && setQuery(newQuery);
            }, [ settings ]), query;
        }, useMatchMedia = function(query, device) {
            var getMatchMedia = function() {
                return (0, matchmediaquery_1.default)(query, device);
            }, _a = react_1.default.useState(getMatchMedia), mq = _a[0], setMq = _a[1], isUpdate = useIsUpdate();
            return react_1.default.useEffect(function() {
                if (isUpdate) {
                    var newMq_1 = getMatchMedia();
                    return setMq(newMq_1), function() {
                        newMq_1 && newMq_1.dispose();
                    };
                }
            }, [ query, device ]), mq;
        }, useMatches = function(mediaQuery) {
            var _a = react_1.default.useState(mediaQuery.matches), matches = _a[0], setMatches = _a[1];
            return react_1.default.useEffect(function() {
                var updateMatches = function() {
                    setMatches(mediaQuery.matches);
                };
                return mediaQuery.addListener(updateMatches), updateMatches(), function() {
                    mediaQuery.removeListener(updateMatches);
                };
            }, [ mediaQuery ]), matches;
        }, useMediaQuery = function(settings, device, onChange) {
            var deviceSettings = useDevice(device), query = useQuery(settings);
            if (!query) throw new Error("Invalid or missing MediaQuery!");
            var mq = useMatchMedia(query, deviceSettings), matches = useMatches(mq), isUpdate = useIsUpdate();
            return react_1.default.useEffect(function() {
                isUpdate && onChange && onChange(matches);
            }, [ matches ]), react_1.default.useEffect(function() {
                return function() {
                    mq && mq.dispose();
                };
            }, []), matches;
        };
        exports.default = useMediaQuery;
    }, function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE_1__;
    }, function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        function toHyphenLower(match) {
            return "-" + match.toLowerCase();
        }
        function hyphenateStyleName(name) {
            if (cache.hasOwnProperty(name)) return cache[name];
            var hName = name.replace(uppercasePattern, toHyphenLower);
            return cache[name] = msPattern.test(hName) ? "-" + hName : hName;
        }
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: !0
        });
        var uppercasePattern = /[A-Z]/g, msPattern = /^ms-/, cache = {};
        __webpack_exports__.default = hyphenateStyleName;
    }, function(module, exports, __nested_webpack_require_6821__) {
        "use strict";
        var __importDefault = this && this.__importDefault || function(mod) {
            return mod && mod.__esModule ? mod : {
                default: mod
            };
        };
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var hyphenate_style_name_1 = __importDefault(__nested_webpack_require_6821__(2)), mediaQuery_1 = __importDefault(__nested_webpack_require_6821__(11)), negate = function(cond) {
            return "not " + cond;
        }, keyVal = function(k, v) {
            var realKey = (0, hyphenate_style_name_1.default)(k);
            return "number" == typeof v && (v += "px"), !0 === v ? realKey : !1 === v ? negate(realKey) : "(" + realKey + ": " + v + ")";
        }, join = function(conds) {
            return conds.join(" and ");
        }, toQuery = function(obj) {
            var rules = [];
            return Object.keys(mediaQuery_1.default.all).forEach(function(k) {
                var v = obj[k];
                null != v && rules.push(keyVal(k, v));
            }), join(rules);
        };
        exports.default = toQuery;
    }, function(module, exports, __nested_webpack_require_7990__) {
        "use strict";
        module.exports = __nested_webpack_require_7990__(13);
    }, function(module, exports, __webpack_require__) {
        "use strict";
        module.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    }, function(module, exports, __nested_webpack_require_8269__) {
        "use strict";
        var __importDefault = this && this.__importDefault || function(mod) {
            return mod && mod.__esModule ? mod : {
                default: mod
            };
        };
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var react_1 = __importDefault(__nested_webpack_require_8269__(1)), Context = react_1.default.createContext({});
        exports.default = Context;
    }, function(module, exports, __nested_webpack_require_8763__) {
        "use strict";
        var __importDefault = this && this.__importDefault || function(mod) {
            return mod && mod.__esModule ? mod : {
                default: mod
            };
        };
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.Context = exports.toQuery = exports.useMediaQuery = exports.default = void 0;
        var useMediaQuery_1 = __importDefault(__nested_webpack_require_8763__(0));
        exports.useMediaQuery = useMediaQuery_1.default;
        var Component_1 = __importDefault(__nested_webpack_require_8763__(17));
        exports.default = Component_1.default;
        var toQuery_1 = __importDefault(__nested_webpack_require_8763__(3));
        exports.toQuery = toQuery_1.default;
        var Context_1 = __importDefault(__nested_webpack_require_8763__(6));
        exports.Context = Context_1.default;
    }, function(module, exports, __nested_webpack_require_9663__) {
        "use strict";
        function Mql(query, values, forceStatic) {
            function addListener(listener) {
                mql && mql.addListener(listener);
            }
            function removeListener(listener) {
                mql && mql.removeListener(listener);
            }
            function update(evt) {
                self.matches = evt.matches, self.media = evt.media;
            }
            function dispose() {
                mql && mql.removeListener(update);
            }
            var self = this;
            if (dynamicMatch && !forceStatic) {
                var mql = dynamicMatch.call(window, query);
                this.matches = mql.matches, this.media = mql.media, mql.addListener(update);
            } else this.matches = staticMatch(query, values), this.media = query;
            this.addListener = addListener, this.removeListener = removeListener, this.dispose = dispose;
        }
        function matchMedia(query, values, forceStatic) {
            return new Mql(query, values, forceStatic);
        }
        var staticMatch = __nested_webpack_require_9663__(9).match, dynamicMatch = "undefined" != typeof window ? window.matchMedia : null;
        module.exports = matchMedia;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        function matchQuery(mediaQuery, values) {
            return parseQuery(mediaQuery).some(function(query) {
                var inverse = query.inverse, typeMatch = "all" === query.type || values.type === query.type;
                if (typeMatch && inverse || !typeMatch && !inverse) return !1;
                var expressionsMatch = query.expressions.every(function(expression) {
                    var feature = expression.feature, modifier = expression.modifier, expValue = expression.value, value = values[feature];
                    if (!value) return !1;
                    switch (feature) {
                      case "orientation":
                      case "scan":
                        return value.toLowerCase() === expValue.toLowerCase();

                      case "width":
                      case "height":
                      case "device-width":
                      case "device-height":
                        expValue = toPx(expValue), value = toPx(value);
                        break;

                      case "resolution":
                        expValue = toDpi(expValue), value = toDpi(value);
                        break;

                      case "aspect-ratio":
                      case "device-aspect-ratio":
                      case "device-pixel-ratio":
                        expValue = toDecimal(expValue), value = toDecimal(value);
                        break;

                      case "grid":
                      case "color":
                      case "color-index":
                      case "monochrome":
                        expValue = parseInt(expValue, 10) || 1, value = parseInt(value, 10) || 0;
                    }
                    switch (modifier) {
                      case "min":
                        return value >= expValue;

                      case "max":
                        return value <= expValue;

                      default:
                        return value === expValue;
                    }
                });
                return expressionsMatch && !inverse || !expressionsMatch && inverse;
            });
        }
        function parseQuery(mediaQuery) {
            return mediaQuery.split(",").map(function(query) {
                query = query.trim();
                var captures = query.match(RE_MEDIA_QUERY), modifier = captures[1], type = captures[2], expressions = captures[3] || "", parsed = {};
                return parsed.inverse = !!modifier && "not" === modifier.toLowerCase(), parsed.type = type ? type.toLowerCase() : "all", 
                expressions = expressions.match(/\([^\)]+\)/g) || [], parsed.expressions = expressions.map(function(expression) {
                    var captures = expression.match(RE_MQ_EXPRESSION), feature = captures[1].toLowerCase().match(RE_MQ_FEATURE);
                    return {
                        modifier: feature[1],
                        feature: feature[2],
                        value: captures[2]
                    };
                }), parsed;
            });
        }
        function toDecimal(ratio) {
            var numbers, decimal = Number(ratio);
            return decimal || (numbers = ratio.match(/^(\d+)\s*\/\s*(\d+)$/), decimal = numbers[1] / numbers[2]), 
            decimal;
        }
        function toDpi(resolution) {
            var value = parseFloat(resolution);
            switch (String(resolution).match(RE_RESOLUTION_UNIT)[1]) {
              case "dpcm":
                return value / 2.54;

              case "dppx":
                return 96 * value;

              default:
                return value;
            }
        }
        function toPx(length) {
            var value = parseFloat(length);
            switch (String(length).match(RE_LENGTH_UNIT)[1]) {
              case "em":
              case "rem":
                return 16 * value;

              case "cm":
                return 96 * value / 2.54;

              case "mm":
                return 96 * value / 2.54 / 10;

              case "in":
                return 96 * value;

              case "pt":
                return 72 * value;

              case "pc":
                return 72 * value / 12;

              default:
                return value;
            }
        }
        exports.match = matchQuery, exports.parse = parseQuery;
        var RE_MEDIA_QUERY = /(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i, RE_MQ_EXPRESSION = /\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/, RE_MQ_FEATURE = /^(?:(min|max)-)?(.+)/, RE_LENGTH_UNIT = /(em|rem|px|cm|mm|in|pt|pc)?$/, RE_RESOLUTION_UNIT = /(dpi|dpcm|dppx)?$/;
    }, function(module, __webpack_exports__, __nested_webpack_require_15694__) {
        "use strict";
        function shallowEqualObjects(objA, objB) {
            if (objA === objB) return !0;
            if (!objA || !objB) return !1;
            var aKeys = Object.keys(objA), bKeys = Object.keys(objB), len = aKeys.length;
            if (bKeys.length !== len) return !1;
            for (var i = 0; i < len; i++) {
                var key = aKeys[i];
                if (objA[key] !== objB[key] || !Object.prototype.hasOwnProperty.call(objB, key)) return !1;
            }
            return !0;
        }
        function shallowEqualArrays(arrA, arrB) {
            if (arrA === arrB) return !0;
            if (!arrA || !arrB) return !1;
            var len = arrA.length;
            if (arrB.length !== len) return !1;
            for (var i = 0; i < len; i++) if (arrA[i] !== arrB[i]) return !1;
            return !0;
        }
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: !0
        }), __nested_webpack_require_15694__.d(__webpack_exports__, "shallowEqualArrays", function() {
            return shallowEqualArrays;
        }), __nested_webpack_require_15694__.d(__webpack_exports__, "shallowEqualObjects", function() {
            return shallowEqualObjects;
        });
    }, function(module, exports, __nested_webpack_require_16972__) {
        "use strict";
        var __assign = this && this.__assign || function() {
            return __assign = Object.assign || function(t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                    s = arguments[i];
                    for (var p in s) Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
                }
                return t;
            }, __assign.apply(this, arguments);
        }, __rest = this && this.__rest || function(s, e) {
            var t = {};
            for (var p in s) Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0 && (t[p] = s[p]);
            if (null != s && "function" == typeof Object.getOwnPropertySymbols) for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]) && (t[p[i]] = s[p[i]]);
            return t;
        }, __importDefault = this && this.__importDefault || function(mod) {
            return mod && mod.__esModule ? mod : {
                default: mod
            };
        };
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var prop_types_1 = __importDefault(__nested_webpack_require_16972__(12)), stringOrNumber = prop_types_1.default.oneOfType([ prop_types_1.default.string, prop_types_1.default.number ]), types = {
            all: prop_types_1.default.bool,
            grid: prop_types_1.default.bool,
            aural: prop_types_1.default.bool,
            braille: prop_types_1.default.bool,
            handheld: prop_types_1.default.bool,
            print: prop_types_1.default.bool,
            projection: prop_types_1.default.bool,
            screen: prop_types_1.default.bool,
            tty: prop_types_1.default.bool,
            tv: prop_types_1.default.bool,
            embossed: prop_types_1.default.bool
        }, matchers = {
            orientation: prop_types_1.default.oneOf([ "portrait", "landscape" ]),
            scan: prop_types_1.default.oneOf([ "progressive", "interlace" ]),
            aspectRatio: prop_types_1.default.string,
            deviceAspectRatio: prop_types_1.default.string,
            height: stringOrNumber,
            deviceHeight: stringOrNumber,
            width: stringOrNumber,
            deviceWidth: stringOrNumber,
            color: prop_types_1.default.bool,
            colorIndex: prop_types_1.default.bool,
            monochrome: prop_types_1.default.bool,
            resolution: stringOrNumber,
            type: Object.keys(types)
        }, featureMatchers = __rest(matchers, [ "type" ]), features = __assign({
            minAspectRatio: prop_types_1.default.string,
            maxAspectRatio: prop_types_1.default.string,
            minDeviceAspectRatio: prop_types_1.default.string,
            maxDeviceAspectRatio: prop_types_1.default.string,
            minHeight: stringOrNumber,
            maxHeight: stringOrNumber,
            minDeviceHeight: stringOrNumber,
            maxDeviceHeight: stringOrNumber,
            minWidth: stringOrNumber,
            maxWidth: stringOrNumber,
            minDeviceWidth: stringOrNumber,
            maxDeviceWidth: stringOrNumber,
            minColor: prop_types_1.default.number,
            maxColor: prop_types_1.default.number,
            minColorIndex: prop_types_1.default.number,
            maxColorIndex: prop_types_1.default.number,
            minMonochrome: prop_types_1.default.number,
            maxMonochrome: prop_types_1.default.number,
            minResolution: stringOrNumber,
            maxResolution: stringOrNumber
        }, featureMatchers), all = __assign(__assign({}, types), features);
        exports.default = {
            all: all,
            types: types,
            matchers: matchers,
            features: features
        };
    }, function(module, exports, __nested_webpack_require_20878__) {
        var ReactIs = __nested_webpack_require_20878__(4);
        module.exports = __nested_webpack_require_20878__(14)(ReactIs.isElement, !0);
    }, function(module, exports, __webpack_require__) {
        "use strict";
        !function() {
            function isValidElementType(type) {
                return "string" == typeof type || "function" == typeof type || type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || "object" == typeof type && null !== type && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
            }
            function typeOf(object) {
                if ("object" == typeof object && null !== object) {
                    var $$typeof = object.$$typeof;
                    switch ($$typeof) {
                      case REACT_ELEMENT_TYPE:
                        var type = object.type;
                        switch (type) {
                          case REACT_ASYNC_MODE_TYPE:
                          case REACT_CONCURRENT_MODE_TYPE:
                          case REACT_FRAGMENT_TYPE:
                          case REACT_PROFILER_TYPE:
                          case REACT_STRICT_MODE_TYPE:
                          case REACT_SUSPENSE_TYPE:
                            return type;

                          default:
                            var $$typeofType = type && type.$$typeof;
                            switch ($$typeofType) {
                              case REACT_CONTEXT_TYPE:
                              case REACT_FORWARD_REF_TYPE:
                              case REACT_LAZY_TYPE:
                              case REACT_MEMO_TYPE:
                              case REACT_PROVIDER_TYPE:
                                return $$typeofType;

                              default:
                                return $$typeof;
                            }
                        }

                      case REACT_PORTAL_TYPE:
                        return $$typeof;
                    }
                }
            }
            function isAsyncMode(object) {
                return hasWarnedAboutDeprecatedIsAsyncMode || (hasWarnedAboutDeprecatedIsAsyncMode = !0, 
                console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), 
                isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
            }
            function isConcurrentMode(object) {
                return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
            }
            function isContextConsumer(object) {
                return typeOf(object) === REACT_CONTEXT_TYPE;
            }
            function isContextProvider(object) {
                return typeOf(object) === REACT_PROVIDER_TYPE;
            }
            function isElement(object) {
                return "object" == typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
            }
            function isForwardRef(object) {
                return typeOf(object) === REACT_FORWARD_REF_TYPE;
            }
            function isFragment(object) {
                return typeOf(object) === REACT_FRAGMENT_TYPE;
            }
            function isLazy(object) {
                return typeOf(object) === REACT_LAZY_TYPE;
            }
            function isMemo(object) {
                return typeOf(object) === REACT_MEMO_TYPE;
            }
            function isPortal(object) {
                return typeOf(object) === REACT_PORTAL_TYPE;
            }
            function isProfiler(object) {
                return typeOf(object) === REACT_PROFILER_TYPE;
            }
            function isStrictMode(object) {
                return typeOf(object) === REACT_STRICT_MODE_TYPE;
            }
            function isSuspense(object) {
                return typeOf(object) === REACT_SUSPENSE_TYPE;
            }
            var hasSymbol = "function" == typeof Symbol && Symbol.for, REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103, REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106, REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107, REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108, REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114, REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109, REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110, REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111, REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111, REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112, REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113, REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120, REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115, REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116, REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121, REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117, REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118, REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119, AsyncMode = REACT_ASYNC_MODE_TYPE, ConcurrentMode = REACT_CONCURRENT_MODE_TYPE, ContextConsumer = REACT_CONTEXT_TYPE, ContextProvider = REACT_PROVIDER_TYPE, Element = REACT_ELEMENT_TYPE, ForwardRef = REACT_FORWARD_REF_TYPE, Fragment = REACT_FRAGMENT_TYPE, Lazy = REACT_LAZY_TYPE, Memo = REACT_MEMO_TYPE, Portal = REACT_PORTAL_TYPE, Profiler = REACT_PROFILER_TYPE, StrictMode = REACT_STRICT_MODE_TYPE, Suspense = REACT_SUSPENSE_TYPE, hasWarnedAboutDeprecatedIsAsyncMode = !1;
            exports.AsyncMode = AsyncMode, exports.ConcurrentMode = ConcurrentMode, exports.ContextConsumer = ContextConsumer, 
            exports.ContextProvider = ContextProvider, exports.Element = Element, exports.ForwardRef = ForwardRef, 
            exports.Fragment = Fragment, exports.Lazy = Lazy, exports.Memo = Memo, exports.Portal = Portal, 
            exports.Profiler = Profiler, exports.StrictMode = StrictMode, exports.Suspense = Suspense, 
            exports.isAsyncMode = isAsyncMode, exports.isConcurrentMode = isConcurrentMode, 
            exports.isContextConsumer = isContextConsumer, exports.isContextProvider = isContextProvider, 
            exports.isElement = isElement, exports.isForwardRef = isForwardRef, exports.isFragment = isFragment, 
            exports.isLazy = isLazy, exports.isMemo = isMemo, exports.isPortal = isPortal, exports.isProfiler = isProfiler, 
            exports.isStrictMode = isStrictMode, exports.isSuspense = isSuspense, exports.isValidElementType = isValidElementType, 
            exports.typeOf = typeOf;
        }();
    }, function(module, exports, __nested_webpack_require_28257__) {
        "use strict";
        function emptyFunctionThatReturnsNull() {
            return null;
        }
        var ReactIs = __nested_webpack_require_28257__(4), assign = __nested_webpack_require_28257__(15), ReactPropTypesSecret = __nested_webpack_require_28257__(5), checkPropTypes = __nested_webpack_require_28257__(16), has = Function.call.bind(Object.prototype.hasOwnProperty), printWarning = function() {};
        printWarning = function(text) {
            var message = "Warning: " + text;
            "undefined" != typeof console && console.error(message);
            try {
                throw new Error(message);
            } catch (x) {}
        }, module.exports = function(isValidElement, throwOnDirectAccess) {
            function getIteratorFn(maybeIterable) {
                var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
                if ("function" == typeof iteratorFn) return iteratorFn;
            }
            function is(x, y) {
                return x === y ? 0 !== x || 1 / x == 1 / y : x !== x && y !== y;
            }
            function PropTypeError(message) {
                this.message = message, this.stack = "";
            }
            function createChainableTypeChecker(validate) {
                function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
                    if (componentName = componentName || ANONYMOUS, propFullName = propFullName || propName, 
                    secret !== ReactPropTypesSecret) {
                        if (throwOnDirectAccess) {
                            var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
                            throw err.name = "Invariant Violation", err;
                        }
                        if ("undefined" != typeof console) {
                            var cacheKey = componentName + ":" + propName;
                            !manualPropTypeCallCache[cacheKey] && manualPropTypeWarningCount < 3 && (printWarning("You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."), 
                            manualPropTypeCallCache[cacheKey] = !0, manualPropTypeWarningCount++);
                        }
                    }
                    return null == props[propName] ? isRequired ? new PropTypeError(null === props[propName] ? "The " + location + " `" + propFullName + "` is marked as required in `" + componentName + "`, but its value is `null`." : "The " + location + " `" + propFullName + "` is marked as required in `" + componentName + "`, but its value is `undefined`.") : null : validate(props, propName, componentName, location, propFullName);
                }
                var manualPropTypeCallCache = {}, manualPropTypeWarningCount = 0, chainedCheckType = checkType.bind(null, !1);
                return chainedCheckType.isRequired = checkType.bind(null, !0), chainedCheckType;
            }
            function createPrimitiveTypeChecker(expectedType) {
                function validate(props, propName, componentName, location, propFullName, secret) {
                    var propValue = props[propName];
                    if (getPropType(propValue) !== expectedType) return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + getPreciseType(propValue) + "` supplied to `" + componentName + "`, expected `" + expectedType + "`.");
                    return null;
                }
                return createChainableTypeChecker(validate);
            }
            function createArrayOfTypeChecker(typeChecker) {
                function validate(props, propName, componentName, location, propFullName) {
                    if ("function" != typeof typeChecker) return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
                    var propValue = props[propName];
                    if (!Array.isArray(propValue)) {
                        return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + getPropType(propValue) + "` supplied to `" + componentName + "`, expected an array.");
                    }
                    for (var i = 0; i < propValue.length; i++) {
                        var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
                        if (error instanceof Error) return error;
                    }
                    return null;
                }
                return createChainableTypeChecker(validate);
            }
            function createInstanceTypeChecker(expectedClass) {
                function validate(props, propName, componentName, location, propFullName) {
                    if (!(props[propName] instanceof expectedClass)) {
                        var expectedClassName = expectedClass.name || ANONYMOUS;
                        return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + getClassName(props[propName]) + "` supplied to `" + componentName + "`, expected instance of `" + expectedClassName + "`.");
                    }
                    return null;
                }
                return createChainableTypeChecker(validate);
            }
            function createEnumTypeChecker(expectedValues) {
                function validate(props, propName, componentName, location, propFullName) {
                    for (var propValue = props[propName], i = 0; i < expectedValues.length; i++) if (is(propValue, expectedValues[i])) return null;
                    var valuesString = JSON.stringify(expectedValues, function(key, value) {
                        return "symbol" === getPreciseType(value) ? String(value) : value;
                    });
                    return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` supplied to `" + componentName + "`, expected one of " + valuesString + ".");
                }
                return Array.isArray(expectedValues) ? createChainableTypeChecker(validate) : (printWarning(arguments.length > 1 ? "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])." : "Invalid argument supplied to oneOf, expected an array."), 
                emptyFunctionThatReturnsNull);
            }
            function createObjectOfTypeChecker(typeChecker) {
                function validate(props, propName, componentName, location, propFullName) {
                    if ("function" != typeof typeChecker) return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
                    var propValue = props[propName], propType = getPropType(propValue);
                    if ("object" !== propType) return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` supplied to `" + componentName + "`, expected an object.");
                    for (var key in propValue) if (has(propValue, key)) {
                        var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
                        if (error instanceof Error) return error;
                    }
                    return null;
                }
                return createChainableTypeChecker(validate);
            }
            function createUnionTypeChecker(arrayOfTypeCheckers) {
                function validate(props, propName, componentName, location, propFullName) {
                    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
                        if (null == (0, arrayOfTypeCheckers[i])(props, propName, componentName, location, propFullName, ReactPropTypesSecret)) return null;
                    }
                    return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to `" + componentName + "`.");
                }
                if (!Array.isArray(arrayOfTypeCheckers)) return printWarning("Invalid argument supplied to oneOfType, expected an instance of array."), 
                emptyFunctionThatReturnsNull;
                for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
                    var checker = arrayOfTypeCheckers[i];
                    if ("function" != typeof checker) return printWarning("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + "."), 
                    emptyFunctionThatReturnsNull;
                }
                return createChainableTypeChecker(validate);
            }
            function createShapeTypeChecker(shapeTypes) {
                function validate(props, propName, componentName, location, propFullName) {
                    var propValue = props[propName], propType = getPropType(propValue);
                    if ("object" !== propType) return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` supplied to `" + componentName + "`, expected `object`.");
                    for (var key in shapeTypes) {
                        var checker = shapeTypes[key];
                        if (checker) {
                            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
                            if (error) return error;
                        }
                    }
                    return null;
                }
                return createChainableTypeChecker(validate);
            }
            function createStrictShapeTypeChecker(shapeTypes) {
                function validate(props, propName, componentName, location, propFullName) {
                    var propValue = props[propName], propType = getPropType(propValue);
                    if ("object" !== propType) return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` supplied to `" + componentName + "`, expected `object`.");
                    var allKeys = assign({}, props[propName], shapeTypes);
                    for (var key in allKeys) {
                        var checker = shapeTypes[key];
                        if (!checker) return new PropTypeError("Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  "));
                        var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
                        if (error) return error;
                    }
                    return null;
                }
                return createChainableTypeChecker(validate);
            }
            function isNode(propValue) {
                switch (typeof propValue) {
                  case "number":
                  case "string":
                  case "undefined":
                    return !0;

                  case "boolean":
                    return !propValue;

                  case "object":
                    if (Array.isArray(propValue)) return propValue.every(isNode);
                    if (null === propValue || isValidElement(propValue)) return !0;
                    var iteratorFn = getIteratorFn(propValue);
                    if (!iteratorFn) return !1;
                    var step, iterator = iteratorFn.call(propValue);
                    if (iteratorFn !== propValue.entries) {
                        for (;!(step = iterator.next()).done; ) if (!isNode(step.value)) return !1;
                    } else for (;!(step = iterator.next()).done; ) {
                        var entry = step.value;
                        if (entry && !isNode(entry[1])) return !1;
                    }
                    return !0;

                  default:
                    return !1;
                }
            }
            function isSymbol(propType, propValue) {
                return "symbol" === propType || !!propValue && ("Symbol" === propValue["@@toStringTag"] || "function" == typeof Symbol && propValue instanceof Symbol);
            }
            function getPropType(propValue) {
                var propType = typeof propValue;
                return Array.isArray(propValue) ? "array" : propValue instanceof RegExp ? "object" : isSymbol(propType, propValue) ? "symbol" : propType;
            }
            function getPreciseType(propValue) {
                if (void 0 === propValue || null === propValue) return "" + propValue;
                var propType = getPropType(propValue);
                if ("object" === propType) {
                    if (propValue instanceof Date) return "date";
                    if (propValue instanceof RegExp) return "regexp";
                }
                return propType;
            }
            function getPostfixForTypeWarning(value) {
                var type = getPreciseType(value);
                switch (type) {
                  case "array":
                  case "object":
                    return "an " + type;

                  case "boolean":
                  case "date":
                  case "regexp":
                    return "a " + type;

                  default:
                    return type;
                }
            }
            function getClassName(propValue) {
                return propValue.constructor && propValue.constructor.name ? propValue.constructor.name : ANONYMOUS;
            }
            var ITERATOR_SYMBOL = "function" == typeof Symbol && Symbol.iterator, FAUX_ITERATOR_SYMBOL = "@@iterator", ANONYMOUS = "<<anonymous>>", ReactPropTypes = {
                array: createPrimitiveTypeChecker("array"),
                bool: createPrimitiveTypeChecker("boolean"),
                func: createPrimitiveTypeChecker("function"),
                number: createPrimitiveTypeChecker("number"),
                object: createPrimitiveTypeChecker("object"),
                string: createPrimitiveTypeChecker("string"),
                symbol: createPrimitiveTypeChecker("symbol"),
                any: function() {
                    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
                }(),
                arrayOf: createArrayOfTypeChecker,
                element: function() {
                    function validate(props, propName, componentName, location, propFullName) {
                        var propValue = props[propName];
                        if (!isValidElement(propValue)) {
                            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + getPropType(propValue) + "` supplied to `" + componentName + "`, expected a single ReactElement.");
                        }
                        return null;
                    }
                    return createChainableTypeChecker(validate);
                }(),
                elementType: function() {
                    function validate(props, propName, componentName, location, propFullName) {
                        var propValue = props[propName];
                        if (!ReactIs.isValidElementType(propValue)) {
                            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + getPropType(propValue) + "` supplied to `" + componentName + "`, expected a single ReactElement type.");
                        }
                        return null;
                    }
                    return createChainableTypeChecker(validate);
                }(),
                instanceOf: createInstanceTypeChecker,
                node: function() {
                    function validate(props, propName, componentName, location, propFullName) {
                        return isNode(props[propName]) ? null : new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to `" + componentName + "`, expected a ReactNode.");
                    }
                    return createChainableTypeChecker(validate);
                }(),
                objectOf: createObjectOfTypeChecker,
                oneOf: createEnumTypeChecker,
                oneOfType: createUnionTypeChecker,
                shape: createShapeTypeChecker,
                exact: createStrictShapeTypeChecker
            };
            return PropTypeError.prototype = Error.prototype, ReactPropTypes.checkPropTypes = checkPropTypes, 
            ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache, ReactPropTypes.PropTypes = ReactPropTypes, 
            ReactPropTypes;
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        function toObject(val) {
            if (null === val || void 0 === val) throw new TypeError("Object.assign cannot be called with null or undefined");
            return Object(val);
        }
        /*
object-assign
(c) Sindre Sorhus
@license MIT
*/
        var getOwnPropertySymbols = Object.getOwnPropertySymbols, hasOwnProperty = Object.prototype.hasOwnProperty, propIsEnumerable = Object.prototype.propertyIsEnumerable;
        module.exports = function() {
            try {
                if (!Object.assign) return !1;
                var test1 = new String("abc");
                if (test1[5] = "de", "5" === Object.getOwnPropertyNames(test1)[0]) return !1;
                for (var test2 = {}, i = 0; i < 10; i++) test2["_" + String.fromCharCode(i)] = i;
                if ("0123456789" !== Object.getOwnPropertyNames(test2).map(function(n) {
                    return test2[n];
                }).join("")) return !1;
                var test3 = {};
                return "abcdefghijklmnopqrst".split("").forEach(function(letter) {
                    test3[letter] = letter;
                }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, test3)).join("");
            } catch (err) {
                return !1;
            }
        }() ? Object.assign : function(target, source) {
            for (var from, symbols, to = toObject(target), s = 1; s < arguments.length; s++) {
                from = Object(arguments[s]);
                for (var key in from) hasOwnProperty.call(from, key) && (to[key] = from[key]);
                if (getOwnPropertySymbols) {
                    symbols = getOwnPropertySymbols(from);
                    for (var i = 0; i < symbols.length; i++) propIsEnumerable.call(from, symbols[i]) && (to[symbols[i]] = from[symbols[i]]);
                }
            }
            return to;
        };
    }, function(module, exports, __nested_webpack_require_47583__) {
        "use strict";
        function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
            for (var typeSpecName in typeSpecs) if (has(typeSpecs, typeSpecName)) {
                var error;
                try {
                    if ("function" != typeof typeSpecs[typeSpecName]) {
                        var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.");
                        throw err.name = "Invariant Violation", err;
                    }
                    error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
                } catch (ex) {
                    error = ex;
                }
                if (!error || error instanceof Error || printWarning((componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."), 
                error instanceof Error && !(error.message in loggedTypeFailures)) {
                    loggedTypeFailures[error.message] = !0;
                    var stack = getStack ? getStack() : "";
                    printWarning("Failed " + location + " type: " + error.message + (null != stack ? stack : ""));
                }
            }
        }
        var printWarning = function() {}, ReactPropTypesSecret = __nested_webpack_require_47583__(5), loggedTypeFailures = {}, has = Function.call.bind(Object.prototype.hasOwnProperty);
        printWarning = function(text) {
            var message = "Warning: " + text;
            "undefined" != typeof console && console.error(message);
            try {
                throw new Error(message);
            } catch (x) {}
        }, checkPropTypes.resetWarningCache = function() {
            loggedTypeFailures = {};
        }, module.exports = checkPropTypes;
    }, function(module, exports, __nested_webpack_require_49863__) {
        "use strict";
        var __rest = this && this.__rest || function(s, e) {
            var t = {};
            for (var p in s) Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0 && (t[p] = s[p]);
            if (null != s && "function" == typeof Object.getOwnPropertySymbols) for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]) && (t[p[i]] = s[p[i]]);
            return t;
        }, __importDefault = this && this.__importDefault || function(mod) {
            return mod && mod.__esModule ? mod : {
                default: mod
            };
        };
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var useMediaQuery_1 = __importDefault(__nested_webpack_require_49863__(0)), MediaQuery = function(_a) {
            var children = _a.children, device = _a.device, onChange = _a.onChange, settings = __rest(_a, [ "children", "device", "onChange" ]), matches = (0, 
            useMediaQuery_1.default)(settings, device, onChange);
            return "function" == typeof children ? children(matches) : matches ? children : null;
        };
        exports.default = MediaQuery;
    } ]);
});
//# sourceMappingURL=react-responsive.js.map

/***/ }),

/***/ 4643:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(7688);

function AquariusInline (props) {
    return React.createElement("svg",props,React.createElement("path",{"d":"m333.925 384.37-78.67-73.639-78.67 73.639-78.588-73.562-70.487 66.773-27.51-29.039 97.832-92.677 78.752 73.716 78.67-73.639 78.67 73.639 78.752-73.716 97.832 92.677-27.508 29.039-70.487-66.773zm78.588-203.287 70.487 66.772 27.509-29.039-97.832-92.677-78.752 73.716-78.67-73.64-78.67 73.64-78.752-73.716-97.833 92.677 27.509 29.039 70.487-66.773 78.588 73.563 78.67-73.639 78.67 73.639z"}));
}

AquariusInline.defaultProps = {"id":"Layer_1","enableBackground":"new 0 0 510.509 510.509","height":"512","viewBox":"0 0 510.509 510.509","width":"512"};

module.exports = AquariusInline;

AquariusInline.default = AquariusInline;


/***/ }),

/***/ 3285:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(7688);

function AriesInline (props) {
    return React.createElement("svg",props,React.createElement("path",{"d":"m374 0c-49.941 0-93.771 26.666-118 66.508-24.229-39.842-68.059-66.508-118-66.508-76.094 0-138 61.907-138 138s61.906 138 138 138v-40c-54.037 0-98-43.963-98-98s43.963-98 98-98 98 43.963 98 98v374h40v-374c0-54.037 43.963-98 98-98s98 43.963 98 98-43.963 98-98 98v40c76.094 0 138-61.907 138-138s-61.906-138-138-138z"}));
}

AriesInline.defaultProps = {"id":"Layer_1","enableBackground":"new 0 0 512 512","height":"512","viewBox":"0 0 512 512","width":"512"};

module.exports = AriesInline;

AriesInline.default = AriesInline;


/***/ }),

/***/ 5261:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(7688);

function CancerInline (props) {
    return React.createElement("svg",props,React.createElement("path",{"d":"m84.296 76.069c33.404-16.38 86.947-35.906 152.331-35.906 44.695 0 87.791 10.698 128.474 31.826-57.391 10.84-100.938 61.346-100.938 121.841 0 33.114 12.921 64.158 36.382 87.411 23.372 23.166 54.489 35.923 87.618 35.923s64.246-12.757 87.618-35.923c23.461-23.253 36.382-54.296 36.382-87.411 0-33.5-13.359-63.935-35.023-86.271l.007-.006c-.943-1.116-23.565-27.647-64.336-54.032-53.938-34.907-114.862-53.358-176.185-53.358-73.702 0-133.834 22.111-171.301 40.661-40.828 20.214-64.344 40.593-65.325 41.45l26.295 30.143c.21-.182 21.427-18.414 58.001-36.348zm303.867 201.094c-46.318 0-84-37.383-84-83.333 0-46.318 37.682-84 84-84s84 37.682 84 84c0 45.95-37.682 83.333-84 83.333zm97.868 122.746c-.21.182-21.427 18.414-58.001 36.348-33.404 16.38-86.947 35.906-152.331 35.906-44.423 0-87.412-10.717-128.167-31.885 57.239-10.962 100.63-61.395 100.63-121.781 0-33.114-12.921-64.158-36.382-87.411-23.372-23.166-54.489-35.923-87.618-35.923s-64.246 12.757-87.618 35.923c-23.461 23.253-36.382 54.296-36.382 87.411 0 32.844 12.841 62.742 33.759 84.951l-.023.02c.956 1.129 23.874 27.955 64.933 54.654 54.37 35.354 115.53 54.042 176.868 54.042 73.702 0 133.834-22.112 171.301-40.661 40.829-20.214 64.345-40.593 65.326-41.451zm-361.868-164.746c46.318 0 84 37.383 84 83.333 0 46.318-37.682 84-84 84s-84-37.682-84-84c0-45.95 37.682-83.333 84-83.333z"}));
}

CancerInline.defaultProps = {"id":"Layer_1","enableBackground":"new 0 0 512.326 512.326","height":"512","viewBox":"0 0 512.326 512.326","width":"512"};

module.exports = CancerInline;

CancerInline.default = CancerInline;


/***/ }),

/***/ 6995:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(7688);

function CapricornInline (props) {
    return React.createElement("svg",props,React.createElement("path",{"d":"m422 262c-34.334 0-65.938 6.872-94 20.198v-164.198c0-65.065-52.935-118-118-118-33.395 0-63.591 13.948-85.078 36.32-10.886-21.522-33.201-36.32-58.922-36.32-36.393 0-66 29.607-66 66v40h40v-40c0-14.336 11.664-26 26-26s26 11.664 26 26v289h40v-237c0-43.009 34.991-78 78-78s78 34.991 78 78v189c0 .176.006.35.006.526-10.466 8.561-20.194 18.286-29.108 29.16-36.691 44.756-56.898 107.017-56.898 175.314h40c0-58.413 17.389-117.113 54.425-157.544 6.577 17.797 16.884 34.105 30.531 47.918 25.246 25.553 59 39.626 95.044 39.626 49.626 0 90-40.374 90-90s-40.374-90-90-90zm0 140c-45.206 0-83.057-32.419-91.997-75.46 24.98-15.459 55.531-24.54 91.997-24.54 27.57 0 50 22.43 50 50s-22.43 50-50 50z"}));
}

CapricornInline.defaultProps = {"id":"Layer_1","enableBackground":"new 0 0 512 512","height":"512","viewBox":"0 0 512 512","width":"512"};

module.exports = CapricornInline;

CapricornInline.default = CapricornInline;


/***/ }),

/***/ 8851:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(7688);

function GeminiInline (props) {
    return React.createElement("svg",props,React.createElement("path",{"d":"m441.114 428.928c-26.207-16.243-53.505-29.024-81.262-38.181v-269.008c27.777-9.225 55.093-22.105 81.317-38.474 43.833-27.36 69.318-54.75 70.382-55.903l-29.376-27.148c-.231.25-23.624 25.229-63.233 49.771-35.942 22.269-93.16 48.815-161.634 48.815-68.562 0-126.616-26.604-163.244-48.922-40.368-24.596-64.497-49.628-64.735-49.878l-28.974 27.578c1.092 1.149 27.265 28.462 71.767 55.769 25.831 15.85 52.601 28.434 79.73 37.582v270.623c-27.11 9.08-53.861 21.568-79.676 37.296-44.503 27.113-70.68 54.236-71.772 55.378l28.875 27.681c.239-.248 24.367-25.101 64.735-49.522 36.636-22.165 94.706-48.585 163.294-48.585 68.5 0 125.733 26.363 161.683 48.479 39.609 24.367 63 49.167 63.21 49.392l29.302-27.229c-1.064-1.146-26.554-28.347-70.389-55.514zm-249.262-48.232v-248.839c21.867 4.593 43.784 6.942 65.456 6.942 20.766 0 41.7-2.16 62.544-6.38v247.717c-20.845-4.192-41.778-6.338-62.544-6.338-21.671.002-43.588 2.335-65.456 6.898z"}));
}

GeminiInline.defaultProps = {"id":"Layer_1","enableBackground":"new 0 0 511.906 511.906","height":"512","viewBox":"0 0 511.906 511.906","width":"512"};

module.exports = GeminiInline;

GeminiInline.default = GeminiInline;


/***/ }),

/***/ 836:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(7688);

function LeoInline (props) {
    return React.createElement("svg",props,React.createElement("path",{"d":"m472 430c0 11.322-4.438 21.938-12.497 29.893-8.056 7.952-18.716 12.207-30.067 12.104-22.848-.297-41.436-19.551-41.436-42.921v-339.076c0-49.626-40.374-90-90-90s-90 40.374-90 90v206.874c-22.108-20.395-51.622-32.874-84-32.874-68.374 0-124 55.626-124 124s55.626 124 124 124 124-55.626 124-124v-298c0-27.57 22.43-50 50-50s50 22.43 50 50v339.076c0 45.142 36.299 82.338 80.917 82.917.367.005.731.007 1.098.007 21.705-.001 42.12-8.371 57.589-23.641 15.732-15.529 24.396-36.255 24.396-58.359zm-348 42c-46.318 0-84-37.682-84-84s37.682-84 84-84 84 37.682 84 84-37.682 84-84 84z"}));
}

LeoInline.defaultProps = {"id":"Layer_1","enableBackground":"new 0 0 512 512","height":"512","viewBox":"0 0 512 512","width":"512"};

module.exports = LeoInline;

LeoInline.default = LeoInline;


/***/ }),

/***/ 1425:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(7688);

function LibraInline (props) {
    return React.createElement("svg",props,React.createElement("path",{"d":"m0 472h512v40h-512zm512-97v40h-512v-40h135.71c-52.176-37.62-86.21-98.907-86.21-168 0-114.14 92.859-207 207-207s207 92.86 207 207c0 69.093-34.034 130.38-86.21 168zm-255.5-1c92.084 0 167-74.916 167-167s-74.916-167-167-167-167 74.916-167 167 74.916 167 167 167z"}));
}

LibraInline.defaultProps = {"id":"Layer_1","enableBackground":"new 0 0 512 512","height":"512","viewBox":"0 0 512 512","width":"512"};

module.exports = LibraInline;

LibraInline.default = LibraInline;


/***/ }),

/***/ 7902:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(7688);

function PiscesInline (props) {
    return React.createElement("svg",props,React.createElement("path",{"d":"m451.4 418.587c-19.977-32.474-43.414-82.316-47.761-142.139h70.282v-40h-70.21c4.519-59.645 27.87-109.904 47.794-142.838 24.421-40.368 49.274-64.496 49.522-64.735l-13.851-14.427-13.829-14.448c-1.142 1.092-28.265 27.269-55.378 71.772-32.065 52.631-50.657 109.15-54.351 164.676h-216.138c-3.694-55.525-22.286-112.045-54.351-164.676-27.113-44.503-54.236-70.68-55.378-71.772l-27.68 28.875c.248.239 25.101 24.367 49.522 64.735 19.924 32.934 43.275 83.193 47.794 142.838h-69.465v40h69.538c-4.347 59.823-27.784 109.665-47.761 142.139-24.367 39.609-49.167 63-49.392 63.21l27.229 29.302c1.145-1.064 28.345-26.554 55.513-70.389 32.287-52.094 50.935-108.491 54.49-164.262h216.02c3.555 55.771 22.203 112.168 54.49 164.262 27.167 43.834 54.368 69.325 55.513 70.389l27.253-29.28c-.248-.232-25.048-23.623-49.415-63.232z"}));
}

PiscesInline.defaultProps = {"id":"Layer_1","enableBackground":"new 0 0 511.099 511.099","height":"512","viewBox":"0 0 511.099 511.099","width":"512"};

module.exports = PiscesInline;

PiscesInline.default = PiscesInline;


/***/ }),

/***/ 3926:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(7688);

function SagittariusInline (props) {
    return React.createElement("svg",props,React.createElement("path",{"d":"m264.642 0v40h178.787l-210.031 210.471-75.613-75.613-28.285 28.284 75.643 75.643-204.658 205.088 28.315 28.254 204.628-205.057 76.072 76.072 28.285-28.284-76.102-76.102 209.959-210.4v188.644h40v-257z"}));
}

SagittariusInline.defaultProps = {"id":"Layer_1","enableBackground":"new 0 0 512.127 512.127","height":"512","viewBox":"0 0 512.127 512.127","width":"512"};

module.exports = SagittariusInline;

SagittariusInline.default = SagittariusInline;


/***/ }),

/***/ 4873:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(7688);

function ScorpioInline (props) {
    return React.createElement("svg",props,React.createElement("path",{"d":"m472.051 372.102v78.377c-10.927-5.328-20.692-13.132-29.431-23.493-17.03-20.191-30.441-50.539-39.86-90.197-18.709-78.772-18.709-180.093-18.709-254.075 0-22.296-8.739-43.203-24.608-58.867-15.867-15.663-36.9-24.11-59.198-23.84-24.728.321-46.923 11.652-62.004 29.265-15.237-17.892-37.903-29.272-63.19-29.272-22.652 0-43.204 9.146-58.186 23.931-12.116-14.609-30.396-23.931-50.814-23.931-36.393 0-66 29.607-66 66v40h40v-40c0-14.336 11.664-26 26-26s26 11.664 26 26v330h40v-313h.072c0-23.71 19.257-43 42.928-43 23.71 0 43 19.29 43 43v313h40v-312.351c0-23.76 19.161-43.339 42.713-43.645.19-.003.38-.004.571-.004 11.313 0 21.95 4.36 30.007 12.314 8.195 8.09 12.709 18.886 12.709 30.4 0 75.958 0 179.987 19.791 263.318 11.033 46.453 26.8 81.369 48.202 106.744 6.159 7.302 12.757 13.739 19.77 19.327h-59.763v40h140v-12.96-40-87.04h-40z"}));
}

ScorpioInline.defaultProps = {"id":"Layer_1","enableBackground":"new 0 0 512.102 512.102","height":"512","viewBox":"0 0 512.102 512.102","width":"512"};

module.exports = ScorpioInline;

ScorpioInline.default = ScorpioInline;


/***/ }),

/***/ 8333:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(7688);

function TaurusInline (props) {
    return React.createElement("svg",props,React.createElement("path",{"d":"m511.582 27.466-29.28-27.253c-.231.248-23.622 25.048-63.232 49.415-35.783 22.013-94.059 48.437-162.139 48.437-69 0-126.634-26.641-162.838-48.543-40.368-24.421-64.496-49.274-64.735-49.522l-28.875 27.681c1.093 1.142 27.27 28.265 71.772 55.378 27.9 16.998 56.894 30.208 86.251 39.425-65.139 34.907-109.55 103.651-109.55 182.581 0 114.14 92.859 207 207 207s207-92.86 207-207c0-78.565-43.997-147.045-108.645-182.102 29.692-9.25 58.909-22.646 86.883-39.984 43.834-27.168 69.324-54.369 70.388-55.513zm-88.626 277.599c0 92.084-74.916 167-167 167s-167-74.916-167-167c0-91.667 76.462-167 167.976-167 91.999 0 166.024 75.745 166.024 167z"}));
}

TaurusInline.defaultProps = {"id":"Layer_1","enableBackground":"new 0 0 512.065 512.065","height":"512","viewBox":"0 0 512.065 512.065","width":"512"};

module.exports = TaurusInline;

TaurusInline.default = TaurusInline;


/***/ }),

/***/ 3930:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(7688);

function VirgoInline (props) {
    return React.createElement("svg",props,React.createElement("path",{"d":"m442.868 438.198c-7.103-8.836-13.581-19.5-19.409-31.919 10.615-11.938 20.462-24.471 29.462-37.563 38.098-55.416 59.079-117.922 59.079-176.002 0-22.296-8.739-43.203-24.608-58.867-15.867-15.663-36.891-24.15-59.198-23.839-16.203.21-31.319 5.111-44.089 13.363-.103-14.451-.105-28.127-.105-40.657 0-22.296-8.739-43.203-24.608-58.867-15.867-15.663-36.863-24.11-59.198-23.84-24.743.321-46.95 11.666-62.031 29.297-15.224-17.91-37.883-29.304-63.163-29.304-22.652 0-43.204 9.146-58.186 23.932-12.116-14.61-30.396-23.932-50.814-23.932-36.393 0-66 29.607-66 66v40h40v-40c0-14.336 11.664-26 26-26s26 11.664 26 26v330h40v-313h.072c0-23.71 19.257-43 42.928-43s42.928 19.29 42.928 43.009l.144 312.928 40-.019-.144-312.27h.072c0-23.76 19.161-43.339 42.712-43.645 11.538-.165 22.386 4.222 30.579 12.31 8.195 8.091 12.709 18.887 12.709 30.401v110.286c2.105 53.082 8.569 110.29 19.751 159.289 3.73 16.346 7.999 31.316 12.837 45.001-30.819 30.33-69.393 57.364-116.179 77.76l15.985 36.667c43.966-19.167 83.569-44.712 117.388-75.454 5.47 9.955 11.43 18.939 17.911 26.999 26.002 32.34 59.75 48.738 100.307 48.738v-40c-28.232 0-50.845-11.057-69.132-33.802zm-14.156-288.194c11.541-.196 22.385 4.222 30.579 12.31 8.195 8.09 12.709 18.886 12.709 30.4 0 51.207-20.723 113.628-64.416 169.79-1.712-6.124-3.325-12.496-4.835-19.115-10.493-45.981-15.112-99.877-17.146-150.89.636-22.856 20.111-42.197 43.109-42.495z"}));
}

VirgoInline.defaultProps = {"id":"Layer_1","enableBackground":"new 0 0 512 512","height":"512","viewBox":"0 0 512 512","width":"512"};

module.exports = VirgoInline;

VirgoInline.default = VirgoInline;


/***/ })

};
;
//# sourceMappingURL=component---src-pages-astrology-js.js.map