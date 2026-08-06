const prompt = require("prompt-sync")({ sigint: true });


// =====================================
// CLASSES DO SISTEMA
// =====================================


class Conteudo {

    constructor(id, titulo, tipo, generos, duracaoMinutos) {

        this.id = id;
        this.titulo = titulo;
        this.tipo = tipo;
        this.generos = generos;
        this.duracaoMinutos = duracaoMinutos;

    }


    exibirResumo() {

        return `${this.titulo} (${this.tipo}) - ${this.duracaoMinutos} minutos`;

    }

}



class Serie extends Conteudo {

    constructor(id, titulo, generos, duracaoMinutos, temporadas) {

        super(
            id,
            titulo,
            "Série",
            generos,
            duracaoMinutos
        );

        this.temporadas = temporadas;

    }


    exibirTemporadas() {

        return `${this.titulo} possui ${this.temporadas} temporada(s)`;

    }

}



// =====================================
// CATÁLOGO DE FILMES E SÉRIES
// =====================================


const catalogo = [

    new Serie(
        1,
        "Fronteira Digital",
        ["Ação", "Ficção Científica"],
        45,
        2
    ),


    new Conteudo(
        2,
        "Risadas de Sábado",
        "Filme",
        ["Comédia", "Romance"],
        98
    ),


    new Conteudo(
        3,
        "Sombras do Porão",
        "Filme",
        ["Terror", "Suspense"],
        110
    ),


    new Conteudo(
        4,
        "Universo Perdido",
        "Filme",
        ["Ficção Científica", "Aventura"],
        125
    )

];// =====================================
// CADASTRO DO USUÁRIO
// =====================================


console.log("=================================");
console.log("🎬 BEM-VINDO AO CINEMATCH JS 🎬");
console.log("=================================");



const nome = prompt(
    "Qual é o seu nome? "
);



const idade = Number(
    prompt(
        "Qual é a sua idade? "
    )
);



const generosInput = prompt(
    "Quais gêneros você mais gosta? (separe por vírgula): "
);



const usuario = {

    nome: nome,

    idade: idade,

    generosFavoritos: generosInput
        .split(",")
        .map((genero) => genero.trim())

};



console.log("\n✅ Perfil criado com sucesso!");





// =====================================
// CÁLCULO DE COMPATIBILIDADE
// =====================================



function calcularCompatibilidade(usuario, conteudo) {


    const generosComuns = conteudo.generos.filter(
        (genero) => {

            return usuario.generosFavoritos.includes(genero);

        }
    );



    const generosFaltantes = conteudo.generos.filter(
        (genero) => {

            return !usuario.generosFavoritos.includes(genero);

        }
    );



    const percentual = 
        (generosComuns.length / conteudo.generos.length) * 100;



    return {


        titulo: conteudo.titulo,


        tipo: conteudo.tipo,


        percentual: percentual,


        generosComuns: generosComuns,


        generosFaltantes: generosFaltantes


    };


}





// =====================================
// CLASSIFICAÇÃO
// =====================================



function classificarCompatibilidade(percentual) {


    if(percentual >= 80) {


        return "Alta afinidade";


    } else if(percentual >= 50) {


        return "Média afinidade";


    } else {


        return "Baixa afinidade";


    }


}// =====================================
// MOSTRAR COMPATIBILIDADES
// =====================================


function mostrarCompatibilidades() {


    console.log("\n=================================");
    console.log("🎯 COMPATIBILIDADE DOS CONTEÚDOS");
    console.log("=================================");



    const resultados = catalogo.map(
        (conteudo) => {


            return calcularCompatibilidade(
                usuario,
                conteudo
            );


        }
    );



    resultados.forEach(
        (resultado) => {


            console.log("\n-----------------------------");


            console.log(
                "Título:",
                resultado.titulo
            );


            console.log(
                "Tipo:",
                resultado.tipo
            );


            console.log(
                "Compatibilidade:",
                resultado.percentual.toFixed(0) + "%"
            );


            console.log(
                "Gêneros em comum:",
                resultado.generosComuns.length > 0
                ? resultado.generosComuns.join(", ")
                : "Nenhum"
            );


            console.log(
                "Gêneros não explorados:",
                resultado.generosFaltantes.length > 0
                ? resultado.generosFaltantes.join(", ")
                : "Nenhum"
            );


            console.log(
                "Classificação:",
                classificarCompatibilidade(
                    resultado.percentual
                )
            );


        }
    );


}





// =====================================
// ENCONTRAR MELHOR CONTEÚDO
// =====================================


function encontrarMelhorConteudo() {



    const resultados = catalogo.map(
        (conteudo) => {


            return calcularCompatibilidade(
                usuario,
                conteudo
            );


        }
    );



    const melhor = resultados.reduce(
        (maior, atual) => {


            if(atual.percentual > maior.percentual) {


                return atual;


            } else {


                return maior;


            }


        }
    );



    return melhor;


}





// =====================================
// RECOMENDAÇÃO PERSONALIZADA
// =====================================



function mostrarRecomendacao() {


    const recomendacao = encontrarMelhorConteudo();



    console.log("\n=================================");
    console.log("⭐ RECOMENDAÇÃO PRINCIPAL");
    console.log("=================================");



    console.log(
        usuario.nome + ", recomendamos:"
    );


    console.log(
        "🎬",
        recomendacao.titulo
    );


    console.log(
        "Compatibilidade:",
        recomendacao.percentual.toFixed(0) + "%"
    );



    if(recomendacao.generosFaltantes.length > 0) {


        console.log(
            "Que tal experimentar:",
            recomendacao.generosFaltantes.join(", ")
        );


    }


}// =====================================
// CALLBACK
// =====================================


function finalizarOnboarding(nomeUsuario, callback) {


    console.log("\n✅ Onboarding finalizado com sucesso!");



    callback(nomeUsuario);


}



function mensagemFinal(nome) {


    console.log(
        nome + ", aproveite sua maratona de filmes! 🍿"
    );


}





// =====================================
// CLOSURE
// =====================================



function criarContadorDeAnalises() {


    let total = 0;



    return function() {


        total++;


        return total;


    };


}



const contadorAnalises = criarContadorDeAnalises();





// =====================================
// PROMISE - SIMULAÇÃO DE SERVIDOR
// =====================================



function buscarCatalogoSimulado() {


    return new Promise(
        (resolve) => {


            setTimeout(
                () => {


                    resolve(catalogo);


                },
                1000
            );


        }
    );


}





// =====================================
// ASYNC / AWAIT
// =====================================



async function carregarCatalogo() {


    console.log(
        "\n⏳ Carregando catálogo do servidor..."
    );



    const catalogoCarregado = await buscarCatalogoSimulado();



    console.log(
        "✅ Catálogo carregado com sucesso!"
    );



    return catalogoCarregado;


}// =====================================
// FUNÇÕES DO MENU
// =====================================



function exibirPerfil() {


    console.log("\n=================================");
    console.log("👤 MEU PERFIL");
    console.log("=================================");



    console.log(
        "Nome:",
        usuario.nome
    );


    console.log(
        "Idade:",
        usuario.idade
    );


    console.log(
        "Gêneros favoritos:",
        usuario.generosFavoritos.join(", ")
    );


}





function exibirCatalogo() {


    console.log("\n=================================");
    console.log("🎬 CATÁLOGO COMPLETO");
    console.log("=================================");



    catalogo.forEach(
        (conteudo) => {


            console.log(
                conteudo.exibirResumo()
            );


            if(conteudo instanceof Serie) {


                console.log(
                    conteudo.exibirTemporadas()
                );


            }


        }
    );


}






// =====================================
// INICIAR SISTEMA
// =====================================



async function iniciarSistema() {



    await carregarCatalogo();



    finalizarOnboarding(
        usuario.nome,
        mensagemFinal
    );



    let opcao;



    do {



        console.log("\n=================================");
        console.log("🎬 CINEMATCH JS");
        console.log("=================================");


        console.log("1 - Ver meu perfil");

        console.log("2 - Ver catálogo completo");

        console.log("3 - Calcular compatibilidade");

        console.log("4 - Ver recomendação principal");

        console.log("5 - Sair");



        opcao = prompt(
            "Escolha uma opção: "
        );




        switch(opcao) {



            case "1":


                exibirPerfil();


                break;





            case "2":


                exibirCatalogo();


                break;





            case "3":


                mostrarCompatibilidades();



                console.log(
                    "\nAnálises realizadas:",
                    contadorAnalises()
                );


                break;





            case "4":


                mostrarRecomendacao();


                break;





            case "5":


                console.log(
                    "\n👋 Até a próxima maratona!"
                );


                break;





            default:


                console.log(
                    "❌ Opção inválida!"
                );


        }



    } while(opcao !== "5");



}





// =====================================
// EXECUTAR PROGRAMA
// =====================================


iniciarSistema();