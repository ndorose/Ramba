/**
 * Created by adrien on 19/10/2016.
 */
angular.module('starter.bmtController', ['ionic'])

.controller('AppCtrl', function () {

})

.controller('JobListCtrl', function($scope) {
    $scope.jobs = [
        { title: 'Dev Web', id: 1},
        { title: 'Admin system', id: 2}
    ];
});