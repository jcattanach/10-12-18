let taskTextBox = $("#taskTextBox")

$("#addButton").click(function() {
  let task = taskTextBox.val()

  let listItem = $("<li>")
  let deleteButton = $("<button>")
  deleteButton.html("Remove")
  let checkBox = $("<input>").attr("type","checkbox")

  listItem.append(checkBox, task, deleteButton)
  $('#pendingTasks').append(listItem)

  deleteButton.click(function() {
    $(this).parent().remove()
  })
  checkBox.change(function() {
    if($(this).is(":checked")) {
      $("#completedTasks").append($(this).parent())
    } else {
      $("#pendingTasks").append($(this).parent())
    }
  })
})
