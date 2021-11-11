const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var martelo, solo;
var pedra, borracha, ferro;

/*
Em arquivos diferentes:
- modifique a classe borracha (já em Borracha.js) para que ela tenha densidade baixa e atrito alto e seja circular
- crie a classe Pedra e dê alta densidade a ela
- crie a classe Ferro e dê densidade muito alta a ela

**Lembre-se de adicionar todos os arquivos que criar ao index.html**
*/

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    solo = new Solo(600,height,1200,40);
    martelo = new Martelo(10,100);
    pedra = new Pedra(200,200)
    ferro = new Ferro(250,100)
    borracha = new Borracha(400,200,60)
    //crie objetos das classes Ferro, Pedra e Borracha
    

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    solo.display();
    martelo.display();
    pedra.display();
    ferro.display();
    borracha.display();
    //exiba os objetos criados aqui    
 
}