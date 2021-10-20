class Form

{
    constructor()
    {
        this.input=createInput("").attribute("placeholder","Enter Your Name");
        this.playButton=createButton("play");
        this.titleImg=createImg("assets/title.png","game title");
        this.greeting=createElement("h2");

    }
    setElementsposition(){
        this.input.position(width/2-110,height/2-80);
        this.playButton.position(width/2-90,height/2-20);
        this.titleImg.position(120,50);
        this.greeting.position(width/2-300,height/2-100);

    }

    setElementsStyle(){
        this.titleImg.class("gameTitle");
        this.input.class("customInput");
        this.playButton.class("customButton");
        this.greeting.class("greeting");
    }

    hide(){
        this.greeting.hide();
        this.playButton.hide();
        this.input.hide();
    }

    handleMousePreesed(){
        this.playButton.mousePressed(()=>{
            this.input.hide();
            this.playButton.hide();
            var message=`Hello $ {this.input.value()}
            </br> Wait for another player to join`;
            this.greeting.html(message)
        })
    }

    display(){
        this.setElementsposition();
        this.setElementsStyle();
        this.handleMousePreesed();
        
    }
}






