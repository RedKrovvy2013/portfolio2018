var angular = require('angular')

angular.module('app').filter("trustUrl", function ($sce) {
    return function (recordingUrl) {
        return $sce.trustAsResourceUrl(recordingUrl)
    }
})

angular.module('app').directive('videoModule', function($timeout) {
    return {
        restrict: 'E',
        template: require('./videoModule.html'),
        scope: {
            videoName: '@'
        },
        transclude: true,
        link: function($scope, elem, attrs, ctrl, $transclude) {

            $scope.videoUrl = `/images/${$scope.videoName}.mp4`

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
