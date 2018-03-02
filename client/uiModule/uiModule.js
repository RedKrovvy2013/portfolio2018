var angular = require('angular')

angular.module('app').filter("trustUrl", function ($sce) {
    return function (recordingUrl) {
        return $sce.trustAsResourceUrl(recordingUrl)
    }
})

angular.module('app').directive('uiModule', function($timeout) {
    return {
        restrict: 'E',
        template: require('./uiModule.html'),
        scope: {
            videoName: '@',
            title: '@'
        },
        transclude: true,
        link: function($scope, elem, attrs, ctrl, $transclude) {

            $transclude(function(clone){
                if(clone.length){
                    $scope.isTranscluding = true
                }
            })

            $scope.videoUrl = `images/${$scope.videoName}.mp4`

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

            $scope.videoId = `${$scope.videoName}-video`

            $scope.isPlaying = false
            $scope.toggleVideo = function() {
                $scope.isPlaying = !$scope.isPlaying
                if($scope.isPlaying)
                    document.querySelector(`#${$scope.videoId}`).play()
                else
                    document.querySelector(`#${$scope.videoId}`).pause()
            }
        }
    }
})
