/**
 * Created by luiz on 26/11/16.
 */

var app = angular.module("agendaDeTarefas", []);

app.controller("agendaDetarefasCtrl", function ($scope) {

    $scope.app = "Agenda de Tarefas";

    $scope.tarefas = [
        {nome: "Fazer o café da manhã", data: "12/05/1997-12:30", concluida: false, deletar: false},
        {nome: "Ir para a Universidade", data: "30/05/2000-13:30", concluida: false, deletar: false}
    ];

    $scope.tableFilter = [
        {filtro: "Todas"},
        {filtro: "Concluidas"},
        {filtro: "Não concluidas"}
    ];

    $scope.adicionaTarefa = function (tarefa) {

        tarefa.concluida = false;
        tarefa.deletar = false;
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

        var porcent = 0;

        if (tarefas.length > 0) {
            porcent = (sum/tarefas.length) * 100;
        }

        return Math.floor(porcent);
    }

    $scope.filtroFunc = function (select) {

        if (select == null || select.filtro == "Todos") return '';

        if (select.filtro == "Concluidas") return true;
        else if (select.filtro == "Não concluidas") return false;
    }

    $scope.isTarefaADeletar = function (tarefas) {

        return tarefas.some(function (tarefa) {
            return tarefa.deletar;
        })
    }

});
