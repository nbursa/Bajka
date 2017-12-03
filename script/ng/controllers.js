(function() {
    'use strict';

    angular.module('opb')
        .controller('InfoController',['$scope','$http',function ($scope, $http) {
            $http.get('data/config.json').success(function (data) {

                $scope.author = data.author;
                $scope.description = data.description;
                $scope.about = data.about;
                $scope.twitter = data.twitter;
                $scope.linkedin = data.linkedin;
                $scope.github = data.github;
                $scope.imageurl = data.imageurl;
                // $scope.rss = data.rss;
            });
        }])
        .controller('HomeController',['$scope','$log','dataService',function ($scope, $log, dataService) {
            dataService.getArticleList(
                function (data) {
                    $scope.articles = data;
                });
        }])
        .controller('ArticleController',['$scope','$stateParams','$log','dataService',function ($scope, $stateParams, $log, dataService) {
            dataService.getArticle($stateParams.filename,
                function (data) {
                    var mkconverter = new Markdown.Converter();
                    var result = mkconverter.makeHtml(data);

                    $scope.articleText = result;
                });
        }]);
})();
