/**
 * Created by luiz on 26/11/16.
 */

var app = angular.module("agendaDeTarefas", []);

app.controller("agendaDetarefasCtrl", function ($scope) {

    $scope.app = "Agenda de Tarefas";

    $scope.tarefas = [
        {nome: "Fazer o café da manhã", concluida: false},
        {nome: "Ir para a Universidade", concluida: false}
    ];

    $scope.tableFilter = [
        {filtro: "Todas"},
        {filtro: "Concluidas"},
        {filtro: "Não concluidas"}
    ];

    $scope.MAXIMO_PERCENTUAL = 100;

    $scope.adicionaTarefa = function (tarefa) {

        tarefa.concluida = false;

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

    $scope.filtroTarefas = function (select) {

        if (select == null || select.filtro == "Todos") return '';

        if (select.filtro == "Concluidas") return true;
        else if (select.filtro == "Não concluidas") return false;
    }

    $scope.concluir = function (tarefa) {

        if (tarefa.concluida) {
            tarefa.concluida = false;
        } else {
            tarefa.concluida = true;
        }
    }

    var getIndexTarefa = function (tarefa) {

        for (var i = 0; i < $scope.tarefas.length; i++) {

            if ($scope.tarefas[i] == tarefa) {
                return i;
            }
        }
    }

    $scope.remove = function (tarefa) {

        var index = getIndexTarefa(tarefa);

        $scope.tarefas.splice(index, 1);
    }

    $scope.limparTarefas = function () {

        $scope.tarefas = [];
    }
});
