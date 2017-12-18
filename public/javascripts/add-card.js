$(document).ready(function(){
    var dialog = document.querySelector('#card-dialog');
    if (! dialog.showModal) {
      dialogPolyfill.registerDialog(dialog);

    }
    $('#add-card').click(function(){
        dialog.showModal()

    })
    $('#create-card').click(function(){
        const newCard = $( "#demo-card" ).clone().prop('id', 'newCard')
        newCard.appendTo( "#card-container" ).fadeIn()
        dialog.close()
    })

    $('#cancel').click(function(){
        dialog.close()


    })
})