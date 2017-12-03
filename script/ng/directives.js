(function() {
    'use strict';

    angular.module('opb')
           .directive("articlepanel",function () {
            return {
                restrict: 'E',
                templateUrl: "partials/templates/article-summary-template.html",
                //replace: true,
                scope: {
                    article: '=data'
                }
            };
    });

    angular.module('opb')
           .directive("articleacord",function () {
            return {
                restrict: 'E',
                templateUrl: "partials/templates/article-acord-template.html",
                //replace: true,
                scope: {
                    article: '=data'
                }
            };
    });

})();
