angular.module('18f').controller('18fMainPageController', function($scope, SignInService) {
    'use strict';

    var initialize = function() {
        $scope.SignInService = SignInService;
    };
    initialize();
});
