

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._tuples = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var tuple = [k, v];

  if (this._storage[index] === undefined) {
    this._storage[index] = [tuple];
  } else if (this._storage[index]) {
    for (let i = 0; i < this._storage[index].length; i ++) {
      let bucket = this._storage[index][i];
      if (bucket[0] === k) {
        this._storage[index].splice(i, 1, tuple);
      } else {
        this._storage[index].push(tuple);
      }
    }
  }
  this._tuples += 1;

  if ((this._tuples / this._limit) > (3 / 4)) {
    this._limit *= 2;
    this.rehash(this._limit);
  }

  //
  // if (this._storage[index].length === 0) {
  //   // this._storage[index] = [];
  //   this._storage[index] = v;
  // } else {
  //   console.log(this._storage);
  //   this._storage[index].push(v);
  // }
};

HashTable.prototype.retrieve = function(k) { // check for 'one' key
  var index = getIndexBelowMaxForKey(k, this._limit);

  if (this._storage[index] === undefined) {
    return undefined;
  } // storage { 2: [[one,one], [two,two]], 5: [] }
  if (this._storage[index].length === 1) {
    return this._storage[index][0][1]; //x
  } else if (this._storage[index].length > 1) {
    for (let i = 0; i < this._storage[index].length; i ++) {
      let bucket = this._storage[index][i];
      if (bucket[0] === k) {
        return bucket[1];
      }
    }
  }

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // if (this._storage[index].length === 0) {
  //   delete this._storage[index];
  // } else {
  //   for (let i = 0; i < this._storage[index].length; i ++) {
  //     let ele = this._storage[index][i];
  //     if (ele === k) {
  //       this._storage[index].splice(i, 1);
  //     }
  //   }
  // }

  if (this._storage[index].length === 1) {
    delete this._storage[index];
  } else {
    for (let i = 0; i < this._storage[index].length; i ++) {
      let bucket = this._storage[index][i];
    } if (bucket[0] === k) {
      this._storage[index].splice(i, 1);
    }
  }

  this._tuples -= 1;

  if ((this._tuples / this._limit) < (1 / 4)) {
    this._limit = Math.floor(this._limit / 2);
    this.rehash(this._limit);
  }
};

HashTable.prototype.rehash = function (limit) {

  let newHashTable = new HashTable();

  for (let key in this._storage) {
    let bucket = this._storage[key];
    for (let i = 0; i < bucket.length; i ++) {
      if (bucket[i] !== undefined) {
        let newIndex = getIndexBelowMaxForKey(bucket[i][0], limit);
        var tuple = [bucket[i][0], bucket[i][1]];
        if (newHashTable._storage[newIndex] === undefined) {
          newHashTable._storage[newIndex] = [tuple];
        } else {
          newHashTable._storage[newIndex].push(tuple);
        }
      }
    }
  }
  this._storage = newHashTable._storage;
};




/*
 * Complexity: What is the time complexity of the above functions?
 */
//  [fox, quick], [cat, lazy], [dog, feisty]
//   1             1            3
// [ [], [[fox, quick], [cat,lazy]], [], [[dog, feisty]], []]
// if size is > 75% double size. place inside insert func, rehash
// if size is < 25% half size.  place inside remove func, rehash
// create counter to track how many tuples are added or removed
//

//
// make a func that will rehash current storage elements
// takes arguments array
// iterate through array
//   run getIndexBelowMaxForKey on each element of array along with the limit
//      if array[ele].length > 1
//        for loop on those ele in the array
//          run the getIBMFK(subEle[0], limit)
//            declare

// create newHashTable
// iterate over storage using for in loop
//

// rehash work
// let newStorage = [];
// console.log(this._storage);
// for (let key in this._storage) { // for key in loop
//   console.log(this._storage);

//   let bucket = this._storage[key];
//   for (let j = 0; j < bucket.length; j ++) {
//     var index = getIndexBelowMaxForKey(bucket[j][0], limit);
//     var tuple = [bucket[j][0], bucket[j][1]];
//     console.log(tuple);
//     if (newStorage[index] === undefined) {
//       newStorage[index] = [];
//       newStorage[index].push(tuple);
//     } else {
//       newStorage[index].push(tuple);
//     }
//   }
//   console.log(newStorage);
//   this._storage = newStorage.slice();

// }