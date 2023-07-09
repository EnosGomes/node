const os = require('os') //um módulo nativo do Node

const { freemem, totalmem } = os; //Conceito de desconstrução de um ojeto

function retornaInformacoesGerenciadorTarefas() {
    const totalMemoria = parseInt(totalmem() / 1024 / 1024);
    const memoria = parseInt(freemem() / 1024 / 1024);
    const percentualLivre = parseInt((memoria / totalMemoria) * 100);

    const stats = {
        livre: `${memoria} MB`,
        total: `${totalMemoria} MB`,
        uso: `${percentualLivre} %`
    }

    console.clear();
    console.log("");
    console.log("-Gerenciador de Tarefas-");
    console.table(stats);

}

setInterval(() => {
    retornaInformacoesGerenciadorTarefas();
}, 1000)