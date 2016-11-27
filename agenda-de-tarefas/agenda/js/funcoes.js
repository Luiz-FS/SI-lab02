/**
 * Created by luiz on 26/11/16.
 */

var app = angular.module("agendaDeTarefas", []);

app.controller("agendaDetarefasCtrl", function ($scope) {

    $scope.app = "Agenda de Tarefas";

    $scope.tarefas = [
        {tarefa: "Fazer o café da manhã", data: "12/05/1997-12:30"},
        {tarefa: "Ir para a Universidade", data: "30/05/2000-13:30"}
    ];
});
