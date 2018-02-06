$(document).ready(function() {
  $("#sudoku-form").submit(function(event) {
    event.preventDefault();

    var matrix = [];
    var values = [];
    for (var i=0; i<81; i++) {
      values.push($("#" + i).val());
    }
    for (var i=0; i<9; i++) {
      matrix[i] = values.slice(i*9, i*9+9);
    }

    var sudoku = new Sudoku(matrix);
    if (sudoku.check()) {
      $("#result").text("correct");
    } else {
      $("#result").text("wrong");
    }
    $(".result").show();

  });
});
