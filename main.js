// Dog Constructor & Prototype
function Dog (name, status, color, hungry, owner) {
  this.name = name;
  this.status = status;
  this.color = color;
  this.hungry = true;
  this.feed = false;
  this.owner = owner;
};
const sadie = new Dog("sadie", "normal", "black");
const moonshine = new Dog();
const atticus = new Dog();

sadie.hungry = false;

// Human Constructor & Prototype
function Human (name, cool) {
  this.name = name;
  this.cool = cool;
  this.feed = function(dog) {
    dog.hungry = false;
  }
  this.pet = function(dog) {
    dog.status = "happy";
  }
}

const mason = new Human();
const julia = new Human();

mason.cool = false;
julia.cool = true;
