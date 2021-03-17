// Consegna
// Creare una Todo-list in cui si possano aggiungere nuovi todo e rimuoverli.
// Rendiamo il tutto gradevole alla vista.
// Bonus
// Permettiamo la modifica di un todo già aggiunto.

$(document).ready(function(){
  // al click salvo il valore inserito dall'utente
  $('#add').click(function(){
    var toDo = $('#toDoIn').val();
    $('#toDoIn').val('');
    // clono li e sostituisco il valore con il valore inserito dall'utente
    var template = $('#toDo li').clone();
    template.children('span.userToDo').text(toDo);
    // al click di delete la To-Do viene rimossa
    template.children('span.delete').click(function() {
      $(this).parent().remove();
    });
    // stampo il valore su HTML 
    $('#todos').append(template);
  })
});
