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
    // clono tutto il template
    var template = $('#toDo li').clone();
    // sostituisco il valore con il valore inserito dall'utente
    template.children('span.template').text(toDo);
    // al click di Fatto! la To-Do corrispondente viene rimossa
    template.children('span.delete').click(function() {
      $(this).parent().remove();
    });
    // stampo il valore su HTML
    $('#todos').append(template);
  });

  // prova modifica
  $(document).on('click', '.lista li .edit', function (){
  if ($(this).addClass('active')) {
    $(this).siblings('input').hide();
    var title = $(this).siblings('input').val();

    $(this).siblings('span.template').text(title).show();
  } else {
    $(this).siblings('span.template').hide();
    var title = $(this).siblings('span.template').text();

    $(this).siblings('input').val(title).show();
  }
  $(this).toggleClass('active');
  });
});
