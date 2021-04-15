class Ball{
    constructor(x,y,radius){
        var options={
            restitiution:0.8,
            friction:1.0,
            density:1.0
        }
        this.body=Bodies.circle(x,y,radius,options)
        this.radius=radius
      //  this.image=loadImage("polygon.png")
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
      // imageMode (CENTER)
      // image(pos.x,pos.y,this.r,this.r)
      ellipseMode (CENTER)
      ellipse(pos.x,pos.y,this.radius)
    }
}