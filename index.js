// Add your Circle class here
class Circle {
    constructor(radius){
        this.radius = radius
    }

    get diameter(){
        return this.radius * 2
    }
    
    get circumference(){
        return 2 * Math.PI * this.radius
    }

    get area(){
        return Math.PI * (this.radius * this.radius)
    }
   
    set diameter(newDiameter){
        this.radius = newDiameter/2;
         
    }
    
    set circumference(newCircum){
        this.radius = (newCircum/Math.PI)/2;
    }

    set area(newArea){
        this.radius = Math.sqrt(newArea/Math.PI)
    }
}