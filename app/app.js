//Visita este site para entender despues.
//https://tableless.com.br/criando-uma-aplicacao-single-page-com-angularjs/
/**
 * É aqui que o show acontece, no arquivo app.js, primeiro, carregamos o 
 * módulo ngRoute que é usado para deep-linking URLs para controllers e views. 
 * Este módulo observa qual é url ($location.url()) e tenta mapear o caminho 
 * de acordo com alguma rota pré-definida, assim ele consegue executar o controller e a view 
 * correspondente para cada url.
 * Para setarmos uma configuração no AngularJS, precisamos usar a função config, que 
 * pode receber diversas propriedades já existentes do angular.
 */

var app = angular.module('app',['ngRoute']);

app.config(function($routeProvider, $locationProvider)
{
   // remove o # da url
   $locationProvider.html5Mode(true);

   $routeProvider

   // para a rota '/', carregaremos o template home.html e o controller 'HomeCtrl'
   .when('/', {
      templateUrl : 'app/views/home.html',
      controller     : 'HomeCtrl',
   })

   // para a rota '/sobre', carregaremos o template sobre.html e o controller 'SobreCtrl'
   .when('/sobre', {
      templateUrl : 'app/views/sobre.html',
      controller  : 'SobreCtrl',
   })

   // para a rota '/contato', carregaremos o template contato.html e o controller 'ContatoCtrl'
   .when('/contato', {
      templateUrl : 'app/views/contato.html',
      controller  : 'ContatoCtrl',
   })

   // caso não seja nenhum desses, redirecione para a rota '/'
   .otherwise ({ redirectTo: '/' });
});
  