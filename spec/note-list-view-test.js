(function returnsNotelistHTML(){
  var list = new List();
  list.createNote("Buy bread, milk,honey, sugar, cucumber, tomatos,feta cheese and some crackers.");
  var noteListView = new NoteListView(list);
  assert.isTrue(noteListView.renderList() === "<ul><li><div><a href=\"#notes/1\">Buy bread, milk,hon</a></div></li></ul>");
})();
