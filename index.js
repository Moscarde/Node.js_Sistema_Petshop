//          ---Classes---
let codigoItem = 0
class Item {
    constructor(nome) {
        this.nome = nome;
        this.codigoItem = ++codigoItem; //incrementação do código a cada novo Item
    }
}

class Racao extends Item {
    constructor(nome, especie, valorKg, valorSaco, estoqueSaco) {
        super(nome)
        this.especie = especie;
        this.valorKg = valorKg;
        this.valorSaco = valorSaco;
        this.estoqueSaco = estoqueSaco;
    }
}
class Brinquedo extends Item {
    constructor(nome, especie, valor, estoque) {
        super(nome)
        this.especie = especie;
        this.valor = valor;
        this.estoque = estoque;
    }
}
class Acessorio extends Item {
    constructor(nome, especie, valor, estoque) {
        super(nome)
        this.especie = especie;
        this.valor = valor;
        this.estoque = estoque;
    }
}


//          ---Objetos---
const racaoFoster = new Racao("Ração Foster", "Cachorros", 8, 55, 10) //ração
const racaoPedigri = new Racao("Ração Pedigri", "Cachorros", 10, 60, 10)
const racaoGolden = new Racao("Ração Golden", "Gatos", 16, 65, 15)
const ratinhoBorracha = new Brinquedo("Ratinho de borracha", "Gatos", 5, 30) //brinquedo
const ossoBorracha = new Brinquedo("Osso de borracha", "Cachorros", 8, 20)
const coleiraCachorro = new Acessorio("Coleira de cachorros", "Cachorros", 15, 10) //acessorios
const coleiraGato = new Acessorio("Coleira de gatos", "Gatos", 7, 10)

const listaItens = [racaoFoster, racaoPedigri, racaoGolden, ratinhoBorracha, ossoBorracha, coleiraCachorro, coleiraGato] //lista com todos os objetos


//          ---Lista carrinho--
let carrinho = {
    itens: [],
    valorTotal: 0
}


//          ---Funçoes---
function adicionarCarrinho(quantidade, kgSaco = "") {
    //removendo a quantidade do estoque
    let item = []
    //calculando valor caso item único, quilo ou saco fechado
    //salvando item 
    if (kgSaco.toUpperCase() === "KG") {
        carrinho.valorTotal += quantidade * this.valorKg;
        item = [this.nome, (quantidade + " kg(s)")]
    }
    else if (kgSaco.toUpperCase() === "SACO") {
        carrinho.valorTotal += quantidade * this.valorSaco;
        item = [this.nome, (quantidade + " saco(s)")]
        this.estoqueSaco -= quantidade;
    }
    else {
        carrinho.valorTotal += this.valor * quantidade
        item = [this.nome, (quantidade + "un.")]
        this.estoque -= quantidade;
    }
    carrinho.itens.push(item)
}

function mostrarEstoque() {
    console.table(listaItens);
}

function mostrarCarrinho() {
    console.table(carrinho);
}


//          ---teste de uso---
mostrarEstoque()
//adicionando itens ao carrinho
adicionarCarrinho.call(racaoFoster, 3, "Saco")//(nome obj, quantidade, se ração ==> "saco" ou "kg")
adicionarCarrinho.call(ossoBorracha, 3)
adicionarCarrinho.call(coleiraCachorro, 3)
adicionarCarrinho.call(racaoGolden, 1, "kg")
mostrarCarrinho()
console.log("==> estoque com os itens removidos");
mostrarEstoque()