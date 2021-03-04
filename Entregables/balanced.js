function Stack(){
    this.items = [];
    this.elements = 0;
    this.push = push;
    this.pop = pop;
    this.isEmpty = isEmpty;
    this.peek = peek;
    this.size = size;

    function push( item ){
        this.items.push( item );
        this.elements++;
    }

    function pop(){
      if ( this.elements > 0 )
      {
        this.elements--;
        return this.items.pop();
      }
    }

    function peek(){
      return this.items[ this.elements - 1 ];
    }

    function isEmpty(){
      return this.elements == 0;
    }

    function size(){
      return this.elements;
    }
}

exports.balancedFunc = function balanced(sequence) {
/*     Escribir una pila que lea un string lleno de parentesis, brackets, corchetes y determinar
     si está balanceado o no. Decimo que esta balanceado cuando para cada parentesisi, bracket,
     corchete existe su par que lo cierra.
     Ejemplo:
     {} -- true
     [[]] -- true
     [()]{}{[()()]()} -- true
     [(())] -- true
     [(] -- false
     ][] -- false
     [[[[)]]]] -- false */
  var open="{[(", close="}])";
  var balance = [0,0,0];
  var eval=new Stack();
  
  for ( var i = 0; i < sequence.length; i++ ){
    eval.push( sequence[i] );
  }
  
  for (var j = 0; j < eval.size(); j++) {
    if (open.indexOf(eval.items[j])!=-1) {
      balance[open.indexOf(eval.items[j])]++;
    }
    else {
      balance[close.indexOf(eval.items[j])]--;
    }
      if (balance[0] < 0 || balance[1]<0 || balance[2]<0){
        return false;
      }
  }
  if (balance[0]==0 && balance[1]==0 && balance[2]==0) {
    return  true ;
  }
  return false;
}

//balanced("[()]{}{[()()]()}");
//balanced("[[[[)]]]]");
//balanced("]()[");