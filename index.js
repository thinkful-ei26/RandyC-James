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

 

