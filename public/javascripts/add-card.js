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

        let newAssignee = $('#assignee').val()

        var data = {
            name: newTitle,
            description: newDesc,
            assignee: newAssignee

        }

        $.ajax({
            type: "POST",
            url: 'http://localhost:3000',
            data: JSON.stringify(data),
            contentType: 'application/json',
            
          }).done(function(result){
              if(result != 'fail request'){

                  console.log(result)
                  console.log(result.name)
                  console.log(result.description)
                  console.log(result.assignee)
      
                  let title = newCard.find('#demo-title-container').find('#demo-title')
                  title.html(result.name)
          
                  let description = newCard.find('#demo-description')
                  description.html(result.description)
          
                  let assignee = newCard.find('#demo-assignee')
                  assignee.html(result.assignee)
      
                  newCard.appendTo( "#card-container" ).fadeIn()
                  dialog.close()
      
      
                  $('#title').val('')
                  $('#description').val('')
                  $('#assignee').val('')
              } else {
                  console.log(result)
              }
              
          });
          

    })

    $('#cancel').click(function(){
        dialog.close()


    })
})