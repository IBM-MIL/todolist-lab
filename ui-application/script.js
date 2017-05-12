var todos = [];
//this base url should point to where the BFF Server is running
var baseurl = "http://localhost:8080";

//when a mouse enters the list items, show the x delete button
$(document).ready(function () {
  $(document).on('mouseenter', '.items', function () {
    $(this).find(":button").show();
  }).on('mouseleave', '.items', function () {
    $(this).find(":button").hide();
  });
});

// check for keydown inside the input text field.
$('#inputText').keydown(function(e) {
  var item = $('#inputText').val();
  //if the keydown was enter and there is an item in the field
  if (e.which == 13 && item.length > 0) {
    //set the input text back to blank and make POST request
    $('#inputText').val('')
    $.ajax({
      method: "POST",
      url: baseurl + "/todoitems",
      contentType: "application/json",
      data: JSON.stringify({todo: item})
    })
    .done(function(data) {
      //reload the items
      loadItems()
    });
  }
});
//load the list items from the bff api
function loadItems() {
  $.get(baseurl + "/todoitems")
    .done(function(data) {
      if(data.length > 0) {
        todos = []
        for (var i=0; i<data.length; i++) {
          todos.push(data[i])
        }
        refreshList()
      }
    });
}
//on page load, call load items
loadItems()

//refresh the list by first emptying it, then appending items from todo array
function refreshList() {
  $('#todoList').empty();
  for (var i=0; i<todos.length; i++) {
    $('#todoList').append("<li class=\"items\"><input class=\"toggle\" type=\"checkbox\">"
    + todos[i].todo
    + "<button class=\"button\" onclick=\"deleteItem("
    + i
    + ")\">X</button></li>")
  }
}

//delete items from the todos array and from db via DELETE request
function deleteItem(index) {
  var id = todos[index]._id
  $.ajax({
    method: "DELETE",
    url: baseurl + "/todoitem/" + id,
    contentType: "application/json"
  })
  todos.splice(index, 1)
  refreshList()
}
