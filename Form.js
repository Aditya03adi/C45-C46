class Form {

    constructor() {
     
      this.button = createButton('Lets GO!');
      this.greeting = createElement('h2');
      this.title = createElement('game');
      this.input= createInput('Enter Name')
      
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.title.hide();
      this.input.hide();
    }
  
    display(){
      this.title.html("Match IT");
      this.title.position(displayWidth/2 - 50, 0);
  
      
      this.button.position(displayWidth/2 + 30, displayHeight/2);
      this.input.position(displayWidth/2+30,displayHeight-200)
  
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
      
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Hello " + player.name)
        this.greeting.position(displayWidth/2 - 70, displayHeight/4);
      });
  
      
  
    }
  }
  