var Sudoku = function(matrix) {
  this.matrix = matrix;
}

Sudoku.prototype.checkRows = function () {
  for (var i=0; i<9; i++) {
    var row = this.matrix[i].slice();
    row.sort();
    if (row[0] != 1) {return false;}
    for (var j=1; j<9; j++) {
      if (row[j] != (row[j-1] + 1)) { return false; }
    }
  }
  return true;
};

Sudoku.prototype.checkCols = function () {
  for (var j=0; j<9; j++) { //columns
    //filling a column
    var col = [];
    for (var i=0; i<9; i++) { //rows
      col.push(this.matrix[i][j]);
    }
    //checking if it's legal
    col.sort();
    if (col[0] != 1) {return false;}
    for (var k=1; k<9; k++) {
      if (col[k] != (col[k-1] + 1)) { return false; }
    }
  }
  return true;
};

Sudoku.prototype.checkSqrs = function () {
  for (var sr=0; sr<3; sr++) {
    for (var sc=0; sc<3; sc++) {
      //filling a square
      var sqr = [];
      for (var i=sr*3; i<(sr*3 + 3); i++) {
        for (var j=sc*3; j<(sc*3 + 3); j++) {
          sqr.push(this.matrix[i][j]);
        }
      }
      //checking if it's legal
      sqr.sort();
      if (sqr[0] != 1) {return false;}
      for (var k=1; k<9; k++) {
        if (sqr[k] != (sqr[k-1] + 1)) { return false; }
      }
    }
  }
  return true;
};

Sudoku.prototype.check = function() {
  if (!(this.checkRows())) {
    return false;
  } else if (!(this.checkCols())) {
    return false;
  } else if (!(this.checkSqrs())) {
    return false;
  } else {
    return true;
  }
}

exports.sudokuModule = Sudoku;
