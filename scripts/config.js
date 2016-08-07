(function() {
    "use strict";
    angular
        .module("app")
        .config(['$routeProvider', function($routeProvider) {
            console.info('inside config');
            $routeProvider.when('/', {
                templateUrl: 'scripts/random-dialog/random_dialog.html',
                controller: 'RandomDialogCtrl',
                controllerAs: 'randomDialog'
            });
            $routeProvider.otherwise({redirectTo: '/'});
        }]);
})();