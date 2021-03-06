var angular = require('angular')

var app = angular.module('app', [
    require('angular-ui-router')
])

require('./uiModule/uiModule')

app.config(
    function($urlRouterProvider, $stateProvider, $locationProvider){

        $urlRouterProvider.otherwise('/')
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        })

        $stateProvider
        .state('app', {
            url: '/',
            views: {
                header: {
                    template: require('./header/header.html')
                }
            }
        })
        .state('app.details', {
            url: 'details'
        })
        .state('app.details.detailsItem', {
            url: '/:name',
            views: {
                'detailsItem@': {
                    template: require('./detailsModule/detailsModule.html'),
                    controller: function($scope, $stateParams) {
                        $scope.name = $stateParams.name
                    }
                }
            }
        })
    }
)
