
// Creation of classes in javascript

class Person {
    
    constructor(name, age, number) {
        this.name = name;
        this.age = age;
        this.number = number;
    }
}

let object= new Person('Rakesh',23,8448) // invoking the class to create object

  //   Creating binary tree using classes 

class Node{

    constructor(value){
        this.value= value;
        this.right = null;
        this.left = null;
         }
}

class binaryTree{
    constructor(){
        this.Root = null
    }
    
    AddNode(value){
       let node= new Node(value)

       if(!this.Root){
            this.Root= node
             }
    else {
        let current= this.Root

    while(true){
if(value<current.value){
       if(current.left== null){
            current.left= node
        break;}
     else{
         current= current.left }}
            
else{ if(current.right== null){
             current.right= node
        break;}
    else{
         current= current.right }   
       
    }  }
       
    }
}}

let b= new binaryTree()
b.AddNode(50)
b.AddNode(40)
b.AddNode(60)
b.AddNode(20)
b.AddNode(70)
console.log(b)


// Creation of LinkedList

class NodeL {
    constructor(value) {
        this.next = null;
        this.value = value;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    add(value) {
        let node = new NodeL(value);

        if(!this.head) {
            this.head = node;
        } else {
            let curr = this.head;
            while(curr.next) {
                curr = curr.next;
            }
            curr.next = node;
        }
        this.length++;
        
    }
}





