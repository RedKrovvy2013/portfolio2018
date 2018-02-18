var angular = require('angular')

require('./base.scss')
require('./detailsItem/detailsItem.scss')

var app = angular.module('app', [
    require('angular-ui-router')
])

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
            url: '/:id',
            views: {
                'detailsItem@': {
                    template: require('./detailsItem/detailsItem.html'),
                    controller: function($scope, $stateParams) {
                        $scope.id = $stateParams.id
                    }
                }
            }
        })
    }
)
