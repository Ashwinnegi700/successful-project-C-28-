class Launcher{
constructor(body,point){
    var Option = {
        bodyA:body,
        pointB:point,
        stiffness:0.004,
        length:1
    }
   this.launcher=Constraint.create(Option);
   World.add(world,this.launcher);
}
fly(){
    this.launcher.bodyA=null
}
attach(body){
    this.launcher.bodyA=body;
}
   display(){
       if(this.launcher.bodyA){
        strokeWeight(4)
        line(this.launcher.bodyA.position.x,this.launcher.bodyA.position.y,
         this.launcher.pointB.x,this.launcher.pointB.y);
       }
      
   }

}