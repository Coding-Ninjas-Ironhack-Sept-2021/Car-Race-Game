class Game {
    constructor(){
        this.currentTime = 0;
        this.car = null;
    }
    startGame(){
        this.car = new Car();
        this.car.create();
        this.addEventListeners();
    }
    addEventListeners(){
        document.addEventListener("keydown", (event) => {
            if(event.key === "ArrowLeft"){
                this.car.moveLeft();
                this.car.draw();
            } else if (event.key === "ArrowRight") {
                this.car.moveRight();
                this.car.draw();
            }
        });
    }
}

class Car {
    constructor(){
        this.x = 50;
        this.y = 100;
        this.width = 10;
        this.height = 20;
        this.domElm = null;
    }
    moveLeft(){
        this.x--;
    }
    moveRight(){
        this.x++;
    }
    create(){
        this.domElm = document.createElement("div");
        this.domElm.className = "car";
        const gameElm = document.getElementById("game");        
        gameElm.appendChild(this.domElm);
    }
    draw(){
        this.domElm.style.width = this.width + "%";
        this.domElm.style.height = this.height + "%";
        this.domElm.style.left = this.x + "%";
        this.domElm.style.top = this.y + "%";
    }
}



