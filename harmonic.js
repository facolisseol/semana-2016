/* exported Harmonic */
/* global __HARMONIC */

// Note: `__HARMONIC` is not an actual identifer,
// it is the prefix of `harmonic build`'s substitution patterns.
// The substitution patterns look like a property access so that
// we can just whitelist `__HARMONIC` as a global identifier
// instead of having to whitelist every single substitution.

// TODO ESLint's `exported` directive seems to not be working correctly
// with the current version.
// We should probably `export` Harmonic using ES2015 module syntax and
// trash the `exported` directive.
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Harmonic = (function () {
    // eslint-disable-line no-unused-vars

    function Harmonic(name) {
        _classCallCheck(this, Harmonic);

        this.name = name;
    }

    _createClass(Harmonic, [{
        key: "getConfig",
        value: function getConfig() {
            return {"index_posts":10,"name":"Facol","title":"Semana da Informática - 2016","domain":"http://awesome.com","subtitle":"OHC","author":"Emerson Mellado","description":"Essa semana vai ser legal, entre 15 e 19 de Agosto","bio":"Apaixonado por café e tecnologia :)","theme":"harmonic-theme-conf-boilerplate","preprocessor":false,"posts_permalink":":language/:year/:month/:title","pages_permalink":":language/pages/:title","header_tokens":["<!--","-->"],"i18n":{"default":"en","languages":["en","pt-br"]},"conf":{"name":"Semana da Informática - 2016","description":"Facol / Iseol","date":"de 15 a 19 de Agosto","venue":"Facol","latlong":"-22.6183492,-48.8215084","address":"Rod. Osny Mateus, km 110","city":"Lençóis Paulista","state":"São Paulo","url":"http://www.facol.br/","ga":"","sections":["Sobre","Localização","Palestrantes","Programação","Patrocinadores","Parceiros","Contato"],"schedule":[{"name":"Abertura ","time":"19h00"},{"name":"Linus Torvalds","photo":"/images/speaker.jpg","bio":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo","company":"Linux Foundation","link":{"href":"http://twitter.com/linus","text":"@linus"},"presentation":{"title":"Digging into a Linux Kernel","description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo","time":"10h00"}},{"name":"Bill Gates","photo":"/images/speaker.jpg","bio":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo","company":"Microsoft","link":{"href":"http://github.com/billy95","text":"@billy95"},"presentation":{"title":"Introducing Windows 12","description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo","time":"11h00"}},{"name":"Lunch","time":"12h00"},{"name":"Chuck Norris","photo":"/images/speaker.jpg","bio":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo","company":"Delta Command","link":{"href":"http://twitter.com/littlechuck","text":"@littlechuck"},"presentation":{"title":"How to kill a elephant with one finger","description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo","time":"13h00"}},{"name":"Steve Jobs","photo":"/images/speaker.jpg","bio":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo","company":"Apple, Inc.","link":{"href":"http://github.com/stevie","text":"@stevie"},"presentation":{"title":"Presenting iPad","description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo","time":"14h00"}},{"name":"Coffee-break","time":"15h00"},{"name":"Mark Zuckerberg","photo":"/images/speaker.jpg","bio":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo","company":"Facebook","link":{"href":"http://twitter.com/zuck","text":"@zuck"},"presentation":{"title":"Revealing Facebook Secrets","description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo","time":"16h00"}},{"name":"Steve Wozniak","photo":"/images/speaker.jpg","bio":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo","company":"Apple, Inc.","link":{"href":"http://twitter.com/woz","text":"@woz"},"presentation":{"title":"Why do I prefer Android over iPhone","description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo","time":"17h00"}}],"sponsors":[{"name":"Eventick","logo":"/images/sponsor.png","url":"http://eventick.com.br"}],"partners":[{"name":"BrazilJS","logo":"/images/partner.png","url":"http://braziljs.org"}],"forkButton":{"repository":"https://github.com/facolisseol/semana-2016"}}};
        }
    }, {
        key: "getPosts",
        value: function getPosts() {
            return {"en":[{"layout":"post","title":"hello world","date":"2014-05-17T08:18:47.847Z","comments":"true","published":"true","keywords":"JavaScript, ES6","description":"Hello world post","categories":["JavaScript"," ES6"],"authorName":"Jaydson","content":"<p>Hello World!</p>\n","file":"src\\posts\\hello-world.md","filename":"hello-world","link":"2014/05/hello-world","lang":"en","default_lang":false}],"pt-br":[{"layout":"post","title":"ola mundo","date":"2014-05-17T08:18:47.847Z","comments":"true","published":"true","keywords":"JavaScript, ES6","description":"Hello world post","categories":["JavaScript"," ES6"],"authorName":"Jaydson","content":"<p>Olá mundo!</p>\n","file":"src\\posts\\hello-world.md","filename":"hello-world","link":"pt-br/2014/05/hello-world","lang":"pt-br","default_lang":true}]};
        }
    }, {
        key: "getPages",
        value: function getPages() {
            return {"en":[{"layout":"page","title":"About","date":"2014-05-27T07:18:47.847Z","comments":"false","published":"true","keywords":"JavaScript, ES6","description":"About page","categories":"","authorName":"Jaydson","content":"<!doctype html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <title>About - Semana da Informática - 2016</title>\n    <meta name=\"viewport\" content=\"width=device-width\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n    <link rel=\"stylesheet\" href=\"/css/main.css\">\n</head>\n<body>\n<nav id=\"nav\">\n\t<ul class=\"wrapper\">\n\t\t\n\t\t\t<li class=\"nav-item\">\n\t\t\t\t<a href=\"#Sobre\" title=\"Sobre\" class=\"nav-link\">Sobre\t</a>\n\t\t\t</li>\n\t\t\n\t\t\t<li class=\"nav-item\">\n\t\t\t\t<a href=\"#Localização\" title=\"Localização\" class=\"nav-link\">Localização\t</a>\n\t\t\t</li>\n\t\t\n\t\t\t<li class=\"nav-item\">\n\t\t\t\t<a href=\"#Palestrantes\" title=\"Palestrantes\" class=\"nav-link\">Palestrantes\t</a>\n\t\t\t</li>\n\t\t\n\t\t\t<li class=\"nav-item\">\n\t\t\t\t<a href=\"#Programação\" title=\"Programação\" class=\"nav-link\">Programação\t</a>\n\t\t\t</li>\n\t\t\n\t\t\t<li class=\"nav-item\">\n\t\t\t\t<a href=\"#Patrocinadores\" title=\"Patrocinadores\" class=\"nav-link\">Patrocinadores\t</a>\n\t\t\t</li>\n\t\t\n\t\t\t<li class=\"nav-item\">\n\t\t\t\t<a href=\"#Parceiros\" title=\"Parceiros\" class=\"nav-link\">Parceiros\t</a>\n\t\t\t</li>\n\t\t\n\t\t\t<li class=\"nav-item\">\n\t\t\t\t<a href=\"#Contato\" title=\"Contato\" class=\"nav-link\">Contato\t</a>\n\t\t\t</li>\n\t\t\n\t</ul>\n</nav>\n<hr>\n<body>\n\t<header>\n\t    <h2>\n\t      About\n\t    </h2>\n\t</header>\n\n\t<article>\n\t\t<h1 id=\"hello-page\">Hello page</h1>\n\n\t</article>\n\n\t<footer class=\"bottom\" class=\"footer\">\n          <p>Made with ♥ by <a href=\"https://github.com/braziljs/harmonic-theme-conf-boilerplate\">Conf Boilerplate</a> :)</p>\n    <span class=\"licenses\">\n        Content licensed under <a href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/deed.en_US\">Creative Commons</a><br />\n        Code licensed under <a href=\"https://github.com/es6rocks/harmonic/blob/master/LICENSE\">MIT</a><br />\n        Static website proudly powered by <a href=\"https://github.com/JSRocksHQ/harmonic/\">Harmonic</a>\n    </span>\n</footer>\n<script type=\"text/javascript\" src=\"/harmonic.js\"></script>\n<script src=\"http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js\"></script>\n<script>window.jQuery || document.write('<script src=\"/js/jquery.js\"><\\/script>')</script>\n\n<script src=\"http://maps.google.com/maps/api/js?sensor=false\"></script>\n<script src=\"/js/main.js\"></script>\n\n\n<script type=\"text/javascript\">\n  var _gaq = _gaq || [];\n  _gaq.push(['_setAccount', '']);\n  _gaq.push(['_trackPageview']);\n\n  (function() {\n  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;\n  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';\n  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);\n  })();\n</script>\n\n\n</body>\n</html>\n","file":"src\\posts\\about.md","filename":"about","link":"pages/about","lang":"en"}],"pt-br":[{"layout":"page","title":"About","date":"2014-05-27T07:18:47.847Z","comments":"false","published":"true","keywords":"JavaScript, ES6","description":"About page","categories":"","authorName":"Jaydson","content":"<!doctype html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <title>About - Semana da Informática - 2016</title>\n    <meta name=\"viewport\" content=\"width=device-width\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n    <link rel=\"stylesheet\" href=\"/css/main.css\">\n</head>\n<body>\n<nav id=\"nav\">\n\t<ul class=\"wrapper\">\n\t\t\n\t\t\t<li class=\"nav-item\">\n\t\t\t\t<a href=\"#Sobre\" title=\"Sobre\" class=\"nav-link\">Sobre\t</a>\n\t\t\t</li>\n\t\t\n\t\t\t<li class=\"nav-item\">\n\t\t\t\t<a href=\"#Localização\" title=\"Localização\" class=\"nav-link\">Localização\t</a>\n\t\t\t</li>\n\t\t\n\t\t\t<li class=\"nav-item\">\n\t\t\t\t<a href=\"#Palestrantes\" title=\"Palestrantes\" class=\"nav-link\">Palestrantes\t</a>\n\t\t\t</li>\n\t\t\n\t\t\t<li class=\"nav-item\">\n\t\t\t\t<a href=\"#Programação\" title=\"Programação\" class=\"nav-link\">Programação\t</a>\n\t\t\t</li>\n\t\t\n\t\t\t<li class=\"nav-item\">\n\t\t\t\t<a href=\"#Patrocinadores\" title=\"Patrocinadores\" class=\"nav-link\">Patrocinadores\t</a>\n\t\t\t</li>\n\t\t\n\t\t\t<li class=\"nav-item\">\n\t\t\t\t<a href=\"#Parceiros\" title=\"Parceiros\" class=\"nav-link\">Parceiros\t</a>\n\t\t\t</li>\n\t\t\n\t\t\t<li class=\"nav-item\">\n\t\t\t\t<a href=\"#Contato\" title=\"Contato\" class=\"nav-link\">Contato\t</a>\n\t\t\t</li>\n\t\t\n\t</ul>\n</nav>\n<hr>\n<body>\n\t<header>\n\t    <h2>\n\t      About\n\t    </h2>\n\t</header>\n\n\t<article>\n\t\t<h1 id=\"ol-p-gina\">Olá página</h1>\n\n\t</article>\n\n\t<footer class=\"bottom\" class=\"footer\">\n          <p>Made with ♥ by <a href=\"https://github.com/braziljs/harmonic-theme-conf-boilerplate\">Conf Boilerplate</a> :)</p>\n    <span class=\"licenses\">\n        Content licensed under <a href=\"http://creativecommons.org/licenses/by-nc-sa/3.0/deed.en_US\">Creative Commons</a><br />\n        Code licensed under <a href=\"https://github.com/es6rocks/harmonic/blob/master/LICENSE\">MIT</a><br />\n        Static website proudly powered by <a href=\"https://github.com/JSRocksHQ/harmonic/\">Harmonic</a>\n    </span>\n</footer>\n<script type=\"text/javascript\" src=\"/harmonic.js\"></script>\n<script src=\"http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js\"></script>\n<script>window.jQuery || document.write('<script src=\"/js/jquery.js\"><\\/script>')</script>\n\n<script src=\"http://maps.google.com/maps/api/js?sensor=false\"></script>\n<script src=\"/js/main.js\"></script>\n\n\n<script type=\"text/javascript\">\n  var _gaq = _gaq || [];\n  _gaq.push(['_setAccount', '']);\n  _gaq.push(['_trackPageview']);\n\n  (function() {\n  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;\n  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';\n  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);\n  })();\n</script>\n\n\n</body>\n</html>\n","file":"src\\posts\\about.md","filename":"about","link":"pt-br/pages/about","lang":"pt-br"}]};
        }
    }]);

    return Harmonic;
})();