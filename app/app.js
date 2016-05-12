(function (angular) {
    
    var app = angular.module('portfolio', ['pascalprecht.translate'])

    .config(['$translateProvider', function ($translateProvider, $http) {

        $translateProvider.useSanitizeValueStrategy(null);
        $translateProvider.useStaticFilesLoader({
            prefix: 'app/',
            suffix: '.json'
        });
        
        $translateProvider.preferredLanguage('pt_BR');
        
    }])

    .controller('mainCtrl', ['$scope', '$translate', function ($scope, $translate) {
        
        $scope.changeLanguage = function (key) {
            $translate.use(key);
        };

    }]);

})(window.angular);