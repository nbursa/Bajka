(function(){
    'use strict';

    angular.module('opb', ['ui.router','ngSanitize'])
        .constant("appConfig",
        {
            dataPath: 'data'
        })
        .config(['$logProvider','$stateProvider','$urlRouterProvider', function($logProvider,$stateProvider,$urlRouterProvider)
        {
            $logProvider.debugEnabled(false);

            $urlRouterProvider.otherwise("/home");

            $stateProvider
                .state('home', {
                    url: '/home',
                    templateUrl: './partials/views/home-view.html',
                    controller: 'HomeController'
                })
                .state('article', {
                    url: '/article/:filename',
                    templateUrl: 'partials/views/article-view.html',
                    controller: 'ArticleController'
                });
        }]);
})();
