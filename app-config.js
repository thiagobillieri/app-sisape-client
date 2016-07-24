﻿(function () {
	'use strict';

	angular
		.module('app')
		.config(config);

	config.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];
	function config($locationProvider, $stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/404');

		$stateProvider
			.state('login', {
				url: "/login",
				views: {
					"viewMain": {
						controller: 'LoginController',
						templateUrl: 'views/login/login.view.html'
					}
				}
			})
			.state('naoEncontrado', {
				url: "/404",
				views: {
					"viewMain": {
						template: '<h3>404</h3>'
					}
				}
			})
			.state('paciente', {
				url: "/paciente/novo",
				views: {
					"viewMain": {
						controller: 'PacienteController',
						templateUrl: 'views/paciente/paciente.view.html'
					},
					"viewMenu": {
						templateUrl: 'views/menu/menu.view.html'
					}
				}
			})
			.state('pacienteListagem', {
				url: "/paciente/listagem",
				views: {
					"viewMain": {
						controller: 'PacienteListagemController',
						templateUrl: 'views/paciente/paciente.lista.html'
					},
					"viewMenu": {
						templateUrl: 'views/menu/menu.view.html'
					}
				}
			})
	}
})();