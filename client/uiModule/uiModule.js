var angular = require('angular')

angular.module('app').directive('uiModule', function($timeout) {
    return {
        restrict: 'E',
        template: require('./uiModule.html'),
        scope: {},
        link: function($scope, elem, attrs, ctrl) {
            // $timeout(function() {
            //     $scope.isOpen = true
            // }, 1000)

            $timeout(function() {
                elem.find('.ui-module__content-section-container').eq(0)
                .animate({
                    height: elem.find('.ui-module__content-section')[0]
                            .getBoundingClientRect().height
                }, 1000)
            }, 1000)
        }
    }
})
