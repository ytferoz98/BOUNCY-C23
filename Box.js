class Box{
constructor(x,y,width,height){
  this.body=Bodies.rectangle(x,y,width,height)
  this.width=50
  this.height=50
 World.add(world,this.body)
}
  display(){
   var pos=this.body.position
   var angle=this.body.angle
   push();
   translate(pos.x,pos.y);
   rotate(angle)
   rectMode(CENTER)
   fill(255)
   rect(0,0,this.width,this.height)
   pop();
  }
  

  

}


