toastr.options.positionClass = "toast-bottom-right";

var trust = angular.module('trust', ['ui.router']);
trust.config(['$stateProvider', '$urlRouterProvider', '$locationProvider','$httpProvider', 
        function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

    $urlRouterProvider.otherwise("/index");

    $stateProvider
    //用户相关路由
     .state('index', {//主页
        url: '/',
        templateUrl: 'templates/index.html',
        controller: 'IndexCtrl'
    })
    .state('main', {// 管理主页
	    url: '/main',
	    templateUrl: 'templates/main.html',
	    controller: 'MainCtrl'
    })
    .state('main.flash', {
        url: '/flash',
        templateUrl: 'templates/flash.html',
        controller: 'FlashCtrl'
    })
    .state('main.article', {
        url: '/article',
        templateUrl: 'templates/article.html',
        controller: 'ArticleCtrl'
    })
    .state('main.member', {
        url: '/member',
        templateUrl: 'templates/member.html',
        controller: 'MemberCtrl'
    })
    .state('main.setting', {
        url: '/setting',
        templateUrl: 'templates/setting.html',
        controller: 'SettingCtrl'
    })
    ;
    
}]);

