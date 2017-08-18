(function testingNoteViewController(){
  var list = new List();
  list.createNote("Note created");
  var noteController = new NoteController(list);
  var stringHTML = "<ul><li><div><a href=\"#notes/1\">Note created</a></div></li></ul>";
  noteController.render();
  assert.isTrue(document.getElementById("app").innerHTML === stringHTML);
}());

(function testingControllerReturnsSinglePageNote(){
  var list = new List();
  list.createNote("New note created");
  var noteController = new NoteController(list);
  var singleStringHTML = "<div><a href=\"#notes/1\">New note created</a></div>";
  noteController.loadSingleNote();
  assert.isTrue( noteController.loadSingleNote === singleStringHTML);
}());
