var todos = [];
var baseurl = "http://localhost:8080";
$(document).ready(function () {
  $(document).on('mouseenter', '.items', function () {
    $(this).find(":button").show();
  }).on('mouseleave', '.items', function () {
    $(this).find(":button").hide();
  });
});

$('#inputText').keydown(function(e) {
  var item = $('#inputText').val();
  if (e.which == 13 && item.length > 0) {
    $('#inputText').val('')
    $.ajax({
      method: "POST",
      url: baseurl + "/todoitems",
      contentType: "application/json",
      data: JSON.stringify({todo: item})
    })
    .done(function(data) {
      loadItems()
    });
  }
});
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
loadItems()

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
