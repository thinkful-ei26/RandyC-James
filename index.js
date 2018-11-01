'use strict';
$(init());

function init(){
//main code event listeners go here
     

    $('button[type ="submit"]').on('click',function(event){

        event.preventDefault();
     
        console.log('submit fired');
    
        const userItemInput = $('input').val();
      
        $('input').val('');
    
        //add a new <li> 
        addListItem(userItemInput);

        //console.log(userItemInput);
 
    });
    //event listener for check button toggle from ul using event delegation
    $('.shopping-list').on('click', 'button', function(event){
      if(event.target.innerHTML === 'check'){
        doCheckedItem(event);
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

function doCheckedItem(userDataObject){
  const parent = $(userDataObject.currentTarget).parent('.shopping-item-controls');
  const uncle = parent.prev();
  uncle.toggleClass('shopping-item__checked');
}

function doDeleteItem(parameter){
  console.log("Line 67 fired, do delete func");
}

