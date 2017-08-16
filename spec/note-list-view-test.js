(function returnsNotelistHTML(){
  var list = new List();
  list.createNote("Buy bread, milk,honey, sugar, cucumber, tomatos,feta cheese and some crackers.");
  var noteListView = new NoteListView(list);
  assert.isTrue(noteListView.renderList() === "<ul><li><div>Buy bread, milk,hon</div></li></ul>");
})();
