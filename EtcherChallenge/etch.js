'use strict';
/*eslint-env jquery */
// Add Event Listeners here:
function cellHovered(event){
    $(event.target).addClass('active');
}

function resetGrid(){
    createAndPlaceRows(8);
    $('.cell').hover(cellHovered);
}

// When DOM is ready:
$(() => { createAndPlaceRows(8);
  
    // Bind your event listeners here:
    $('.cell').hover(cellHovered);
    $('button').on('click', resetGrid);
  });
  
  
  
  
  
  
  
  // ===============================
  // Code below is to automate grid creation
  // You can ignore this!
  // ===============================
  function createRow(cellCount) {
    let row = '<div class="row">';
    let str = '<div class="cell">&nbsp;</div>';
    for (let i = 0; i < cellCount; i++) {
      row += str;
    }
    row += '</div>';
    return row;
  }
  
  function createRows(n) {
    let rows = '';
    for (let i = 0; i < n; i++) {
      rows += createRow(n);
    }
    return rows;
  }
  
  function createAndPlaceRows(n) {
    $('.cell').remove(); // Clear all current cells and listeners
    const rows = createRows(n);
    $('.grid').html(rows);
    const cells = $('.cell');
    cells.css({ height: cells.width() });
  }