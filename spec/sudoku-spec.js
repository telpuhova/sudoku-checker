var Sudoku = require('./../js/sudoku.js').sudokuModule;

describe('sudoku-checker', function() {
  var matrixLegal = [[], [], [], [], [], [], [], [], []];
  var matrixIllegal1 = [[], [], [], [], [], [], [], [], []];
  var matrixIllegal2 = [[], [], [], [], [], [], [], [], []];
  var matrixIllegal3 = [[], [], [], [], [], [], [], [], []];

  var sudoku;
  var sudokuIllegal1;
  var sudokuIllegal2;
  var sudokuIllegal3;
  beforeEach(function() {
    matrixLegal = [[4, 3, 5, 2, 6, 9, 7, 8, 1], [6, 8, 2, 5, 7, 1, 4, 9, 3], [1, 9, 7, 8, 3, 4, 5, 6, 2], [8, 2, 6, 1, 9, 5, 3, 4, 7], [3, 7, 4, 6, 8, 2, 9, 1, 5], [9, 5, 1, 7, 4, 3, 6, 2, 8], [5, 1, 9, 3, 2, 6, 8, 7, 4], [2, 4, 8, 9, 5, 7, 1, 3, 6], [7, 6, 3, 4, 1, 8, 2, 5, 9]];

    matrixIllegal3 = [[4, 3, 5, 2, 6, 9, 7, 8, 1], [6, 8, 2, 5, 7, 1, 4, 9, 3], [1, 9, 7, 8, 3, 4, 5, 6, 2], [8, 2, 6, 1, 9, 5, 3, 4, 7], [3, 7, 4, 6, 8, 2, 9, 1, 5], [6, 5, 1, 7, 4, 3, 6, 2, 8], [5, 1, 9, 3, 2, 6, 8, 7, 4], [2, 4, 8, 9, 5, 7, 1, 3, 6], [7, 6, 3, 4, 1, 8, 2, 5, 9]];

    for (var i=0; i<9; i++) {
      for (var j=0; j<9; j++) {
        matrixIllegal1[i][j] = 0;
      }
    }

    for (var i=0; i<9; i++) {
      for (var j=0; j<9; j++) {
        matrixIllegal2[i][j] = 1;
      }
    }

    sudoku = new Sudoku(matrixLegal);
    sudokuIllegal1 = new Sudoku(matrixIllegal1);
    sudokuIllegal2 = new Sudoku(matrixIllegal2);
    sudokuIllegal3 = new Sudoku(matrixIllegal3);
  });

  it('should test if sudoku is created correctly', function() {
    var sudoku = new Sudoku(matrixLegal);
    expect(sudoku.matrix).toEqual(matrixLegal);
  });

  it('should test if rows are checked correctly', function() {
    expect(sudoku.checkRows()).toEqual(true);
    expect(sudokuIllegal1.checkRows()).toEqual(false);
    expect(sudokuIllegal2.checkRows()).toEqual(false);
  });

  it('should test if columns are checked correctly', function() {
    expect(sudoku.checkCols()).toEqual(true);
    expect(sudokuIllegal1.checkCols()).toEqual(false);
    expect(sudokuIllegal2.checkCols()).toEqual(false);
  });

  it('should test if squares are checked correctly', function() {
    expect(sudoku.checkSqrs()).toEqual(true);
    expect(sudokuIllegal1.checkSqrs()).toEqual(false);
    expect(sudokuIllegal2.checkSqrs()).toEqual(false);
  });

  it('should test if sudoku is checked correctly', function() {
    expect(sudoku.check()).toEqual(true);
    expect(sudokuIllegal1.check()).toEqual(false);
    expect(sudokuIllegal2.check()).toEqual(false);
    expect(sudokuIllegal3.check()).toEqual(false);
  });
});
