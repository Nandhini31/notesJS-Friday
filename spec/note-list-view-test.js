(function returnsNotelistHTML(){
  var list = new List();
  list.createNote("Buy bread");
  var noteListView = new NoteListView(list);
  assert.isTrue(noteListView.renderList() === "<ul><li><div>Buy bread</div></li></ul>");
})();
