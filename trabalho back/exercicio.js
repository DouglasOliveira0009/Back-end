/*let nome = "Douglas";
let dataNasc = prompt("Qual ano você nasceu?");
let idade = prompt("Qual sua idade");

dataNasc = parseInt(dataNasc);  
idade = parseInt(idade);  

let resultado = "";
if (idade >= 18) {
    resultado = "Você é maior de idade.";
} else {
    resultado = "Você é menor de idade.";
}

console.log(`${nome}, você nasceu em ${dataNasc} e tem ${idade} anos. ${resultado}`);

let nome = "Douglas"
let idade = 15
let corFavorito = "Azul"
let frase1 = "Meu nome é " + nome + " e tenho " + idade + "e minha cor favorita é " + corFavorito
let frase2 = `Meu nome é ${nome} e tenho ${idade} anos, e minha cor favorita é ${corFavorito}`

console.log(frase1)
console.log(frase2)

let frase = "Meu nome é Douglas"

frase.includes("Douglas") // true
frase.includes("Gabriel") // false

console.log(frase.includes("Douglas"))
console.log(frase.includes("Gabriel"))

let raças = ["Pitbull", "Pug" , "pincher" , "Buldog"]

console.log(raças [0])
console.log(raças.length)
 
let guardaRoupa = ["boné" , "colar" , "camiseta" , "cueca" , "calça" , "tênis"]
let roupaEsc = []
roupaEsc.push(guardaRoupa[1] , guardaRoupa[2] , guardaRoupa [3] , guardaRoupa[4] , guardaRoupa [5])

console.log(roupaEsc)*/



/*  A JORNADA DO HEROI TALENTOSO DO REINO DOS TALENTOS

Em um reino distante, um jovem aldeão descobre uma espada mágica que revela seu destino como herói. Com coragem e poucos recursos, ele parte em uma jornada para proteger o reino de uma ameaça sombria. A história do herói está apenas começando, 
e o futuro do reino depende de sua bravura e determinação. */



/* O Cenário:
"O jogador é um herói que embarca em uma jornada épica. Ao longo do caminho, ele encontrará inimigos, coletará itens e enfrentará desafios. Vamos criar essa aventura usando JavaScript!"

2. Criando o Inventário do Herói:
"O herói começa sua aventura com alguns itens básicos. Vamos armazenar esses itens em um array."*/

// Inventário inicial do herói
let inventario = ["Espada de diamante", "Escudo enferrujado", "Poção de cura"]

// Exibindo o inventário inicial
console.log("Seu kit inicial:", inventario)


/*3. Encontrando um Tesouro:
"O herói encontra um baú de tesouro e ganha um novo item!"*/

// Herói encontra um novo item
let novoItem = "Elmo de Ferro"
inventario.push(novoItem)

// Exibindo o inventário atualizado
console.log("Você encontrou um baú! Novo item adicionado ao seu inventário:", inventario)

/*4. Enfrentando um Inimigo:
"O herói enfrenta um goblin! Ele pode usar a espada ou o escudo do seu inventário para lutar."*/
// Herói enfrenta um goblin
console.log("Um goblin surgiu na sua frente! Prepare-se para a batalha.")

// Usando itens do inventário para lutar
let itemUsado1 = inventario[0]; // Usando a espada (primeiro item)
console.log(`Você ataca o goblin com sua ${itemUsado1}!`)



/* 5. Usando uma Poção:
"Durante a batalha, o herói perde vida e decide usar uma poção." */

let itemUsado2 = inventario[0]; // Usando a poçãoo de vida
console.log(`Você ataca o goblin com sua ${itemUsado2}!`)

/* 6. Finalizando o inimigo
"Em um golpe o goblin sentiu o impacto, é a sua hora de finaliza-lo"
*/
let itemUsado3 = inventario[0]; // Usando a poçãoo de vida
console.log(`Você ataca o goblin com sua ${itemUsado3}!`)

/* Concluindo a Aventura:
"O herói derrotou o goblin e continua sua jornada. Ele pode coletar mais itens e enfrentar outros desafios."*/

// Finalizando a batalha
console.log("Você matou o goblin continue sua jornada.")


