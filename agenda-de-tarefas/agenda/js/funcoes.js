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

    $scope.adicionaTarefa = function (tarefa) {
        $scope.tarefas.push(angular.copy(tarefa));
        delete $scope.tarefa;
    }

    $scope.removerTarefa = function (tarefas) {

        $scope.tarefas = tarefas.filter(function (tarefa) {

            if(!tarefa.deletar) return tarefa;
        });
    }

    $scope.calculaPorcentagem = function (tarefas) {

        var sum = 0;

        tarefas.forEach(function (tarefa) {

            if(tarefa.concluida) {
                sum += 1;
            }
        });

        var porcent = (sum/tarefas.length) * 100;

        return Math.floor(porcent);
    }
});
