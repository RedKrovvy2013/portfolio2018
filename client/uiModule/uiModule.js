var angular = require('angular')

require('./../videoModule/videoModule')

angular.module('app').directive('uiModule', function($timeout) {
    return {
        restrict: 'E',
        template: require('./uiModule.html'),
        scope: {
            title: '@'
        },
        transclude: true,
        link: function($scope, elem, attrs, ctrl, $transclude) {

            /* NOTE: going with older way to do multi slot transclusion,
                     as some modules need transclusion scope to be
                     from this module (for expandable content)
            */

            $transclude($scope, function(clone) {
                angular.forEach(clone, function(cloneEl) {
                    if(cloneEl.attributes && cloneEl.attributes["transclude-to"]) {
                        var destinationId = cloneEl.attributes["transclude-to"].value
                        var destination = elem.find('[transclude-id="'+destinationId+'"]')
                        destination.append(cloneEl)
                    }
                })
            })

            function toggleContentInner(cmd) {
                var $content = elem.find('.ui-module__content-section')
                var height = $content[0]
                             .getBoundingClientRect().height

                if(cmd === 'open') {
                    var startHeight = 0
                    var endHeight = height
                }
                if(cmd === 'close') {
                    var startHeight = height
                    var endHeight = 0
                }

                $content.eq(0).css(
                    "top", -endHeight
                )

                elem.find('.ui-module__content-section-container').eq(0)
                    .animate({height: endHeight}, 1000)
                $content.eq(0)
                    .animate({top: -startHeight}, 1000)
            }

            $scope.isOpen = false
            $scope.toggleContent = function() {
                $scope.isOpen = !$scope.isOpen
                $scope.isOpen ? toggleContentInner("open") :
                                toggleContentInner("close")
            }

        }
    }
})
