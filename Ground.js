class Ground{
    constructor(x,y,width,height)
    {
        var ground_option={
        isStatic : true
        }
        this.body = Bodies.rectangle(x,y,width,height,ground_option);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);
        fill("red");
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        pop();
    }
}