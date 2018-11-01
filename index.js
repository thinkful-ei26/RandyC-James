'use strict';
$(init());

function init(){
//main code event listeners go here
     

    $('button[type ="submit"]').on('click',function(event){

        event.preventDefault();
    
        const userItemInput = $('input').val();
      
        $('input').val('');
    
        //add a new <li> 
        addListItem(userItemInput);
 
    });
    //event listener for button from ul using event delegation
    $('.shopping-list').on('click', 'button', function(event){
      if(event.target.innerHTML === 'check'){
        const divElement = $(this).parent('.shopping-item-controls');
        doCheckedItem(divElement);
      } else if (event.target.innerHTML === 'delete'){
        doDeleteItem(event);
      }
    });
}

function addListItem(newListValue){

    const oldList = $('.shopping-list').html();
  
    $('.shopping-list').html('');

    $('.shopping-list').append(`
    <li>
    <span class="shopping-item">${newListValue}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
    </li>
    `);
 
    $('.shopping-list').append(oldList);
}

function doCheckedItem(passedInDiv){
  const elementSpan = passedInDiv.prev();
  elementSpan.toggleClass('shopping-item__checked');
}

function doDeleteItem(listItemToBeDeleted){
 
  const listItem = $(listItemToBeDeleted.target).closest( 'li' );
  
  listItem.remove();


}

