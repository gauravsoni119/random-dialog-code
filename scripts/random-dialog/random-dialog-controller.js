(function() {
    "use strict";
    angular
        .module('app')
        .controller('RandomDialogCtrl', RandomDialogCtrl);

    RandomDialogCtrl.$inject = ['$scope', '$log', '$mdDialog', '$timeout'];

    function RandomDialogCtrl($scope, $log, $mdDialog, $timeout) {
        $log.info('From inside dialog');
        function showRandomDialog() {
            var num = Math.random().toString();
            var timer = num.split('.')[1].substr(0, 4);
            $timeout(function() {
            $mdDialog.show(
                $mdDialog
                    .alert()
                    .clickOutsideToClose(true)
                    .title('Success')
                    .textContent('Showing dialog box after '+ timer + ' seconds')
                    .ok('Ok'));
                showRandomDialog();
            }, timer);
        }
        showRandomDialog();
    }
})();