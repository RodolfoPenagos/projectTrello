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

        let newTitle = $('#title').val()

        let newDesc = $('#description').val()

        let title = newCard.find('#demo-title-container').find('#demo-title')
        title.html(newTitle)

        
        let description = newCard.find('#demo-description')
        description.html(newDesc)

        newCard.appendTo( "#card-container" ).fadeIn()
        dialog.close()

        $('#title').val('')
        $('#description').val('')
    })

    $('#cancel').click(function(){
        dialog.close()


    })
})