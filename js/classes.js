class Game {
    constructor(){
        this.currentTime = 0;
        this.car = null;
        this.obstacleArr = [];
    }

    startGame(){
        this.car = new Car();
        this.car.create();
        this.addEventListeners();

        setInterval( () => {
            //update timer
            this.currentTime++;

            //update obstacle positions
            this.obstacleArr.forEach( (obstacle) => {
                obstacle.moveDown();
                obstacle.draw();
            });

            //create new obstacles
            if(this.currentTime % 8 === 0){
                const newObstacle = new Obstacle();
                newObstacle.create();
                this.obstacleArr.push(newObstacle);
            }
        }, 200);

    }

    addEventListeners(){
        document.addEventListener("keydown", (event) => {
            if(event.key === "ArrowLeft"){
                this.car.moveLeft();
                this.car.draw(); //@todo
            } else if (event.key === "ArrowRight") {
                this.car.moveRight();
                this.car.draw(); //@todo
            }
        });
    }
}




class Thing {
    constructor(){
        this.domElm = null;
    }
    create(){
        this.domElm = document.createElement("div");
        this.domElm.className = this.className;
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

class Car extends Thing {
    constructor(){
        super();
        this.x = 50;
        this.y = 100;
        this.width = 10;
        this.height = 20;
        this.className = "car";
    }
    moveLeft(){
        this.x--;
    }
    moveRight(){
        this.x++;
    }
}


class Obstacle extends Thing {
    constructor(){
        super();
        this.x = 50;
        this.y = 0;
        this.width = 20;
        this.height = 5;
        this.className = "obstacle";
    }
    moveDown(){
        this.y = this.y + 5 ;
    }
}

