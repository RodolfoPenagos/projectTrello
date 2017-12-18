$(document).ready(function(){
    $('#add-card').click(function(){
        const newCard = $( "#demo-card" ).clone().prop('id', 'newCard')

        newCard.appendTo( "#card-container" ).fadeIn()



        
    
    
    })
})