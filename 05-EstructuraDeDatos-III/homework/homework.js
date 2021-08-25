// resolve estos ejercicios usando recursión

// Binary Seach Tree
// 'tiene metodos llamados `insert`, `contains`, `depthFirstForEach`, 'breadthFirstForEach' y 'size'
// corre depth-first (en recorrido "in-order") cuando depthFirstForEach() es ejecutado sin ninguna opcion o con la opcion "in-order
// corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() es ejecutado con la opcion "pre-order"
// corre depth-first (en recorrido "post-order" cuando depthFirstForEach() es ejecutado con la opcion "post-order"
// corre breadth-first cuando breadthFirstForEach() es ejecutado
// Observar imagen de la carpeta "homework" llamada "bst.png". Allí encontraran dibujado el arbol utilizado para los tests
function BinarySearchTree(argumento) {
  this.value = argumento;
  this.left = null;
  this.right = null;
  this.insert = function(parainsertar) {
    let nuevoarbol = new BinarySearchTree(parainsertar);
    //if (!this.valor) {
    //  this.valor = parainsertar;
    //  return;
    //}
    if (parainsertar >= this.value) {
      if (!this.right) {
        this.right = nuevoarbol;
      } else {
        this.right.insert(parainsertar);
      }
    } else {
      if (!this.left) {
        this.left = nuevoarbol;
      } else {
        this.left.insert(parainsertar)
      }
    }
  }

  this.contains = function(parabuscar) {
    //if (!this.valor) return null;
    if (parabuscar === this.value) return true;
    if (parabuscar > this.value) {
      if (this.right) {
        return this.right.contains(parabuscar);
      } else {
          return false;
        }
    } else {
      if (this.left) {
        return this.left.contains(parabuscar);
      } else {
          return false;
      }
    }
  }


  this.depthFirstForEach = function(resultado, tiporecorrido) {
    //if (!this.valor) return null;

    if (tiporecorrido === 'post-order') {
      if (this.left) this.left.depthFirstForEach(resultado, tiporecorrido);
      if (this.right) this.right.depthFirstForEach(resultado, tiporecorrido);
      resultado(this.value);
    } else if (tiporecorrido === 'pre-order') {
      resultado(this.value);
      if (this.left) this.left.depthFirstForEach(resultado, tiporecorrido);
      if (this.right) this.right.depthFirstForEach(resultado, tiporecorrido);
    } else {
      if (this.left) this.left.depthFirstForEach(resultado, tiporecorrido);
      resultado(this.value);
      if (this.right) this.right.depthFirstForEach(resultado, tiporecorrido);
    }
  }
  this.breadthFirstForEach = function(resultado) {
    resultado(this.value);
    if (this.right && this.left) {
      this.left.breadthFirstForEach(resultado);
      auxiliar = this.right;
    } else if (this.left) {
        resultado(this.value);
    }
  }


  this.size = function() {
    if (this.left && this.right) return 1 + this.left.size() + this.right.size();
    if (this.left) return 1 + this.left.size();
    if (this.right) return 1 + this.right.size();
    return 1;
  }
}

/* var arbol1 = new BinarySearchTree;
arbol1.insert(20);
arbol1.insert(15);
arbol1.insert(25);
arbol1.insert(5);
arbol1.insert(17);
arbol1.insert(21);
arbol1.insert(28);
arbol1.insert(0);
arbol1.insert(14);
arbol1.insert(50);
arbol1.insert(13);
arbol1.insert(12);
arbol1.insert(11);
arbol1.insert(45);
arbol1.insert(30);
arbol1.insert(31);
arbol1.insert(33);
arbol1.insert(34);
arbol1.insert(35);
*/

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree
};
