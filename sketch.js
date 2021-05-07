var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player, game;
var allPlayers;


function setup(){
    canvas = createCanvas(400,400);
    database = firebase.database();
    form=new Form();
  }
  
  
  function draw(){
  console.log("hi");
  form.display();
  }