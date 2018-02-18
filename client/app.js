var angular = require('angular')

require('./base.scss')

var app = angular.module('app', [
    require('angular-ui-router')
])

app.directive('exampleSection', function() {
    return {
        restrict: 'E',
        template: '<p>Lorem ipsum dolorum.</p>'
    }
})

app.config(
    function($urlRouterProvider, $stateProvider, $locationProvider){
        $stateProvider
            .state('exampleSection', {
                url: '/main',
                views: {
                    content: {
                        template: require('./content.html')
                    }
                }
            })
    $urlRouterProvider.otherwise('/main')
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    })
})

app.controller("main", function($scope, $state) {
    $scope.$state = $state
})
