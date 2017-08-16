(function returnsNoteHTML(){
  var note = new Note("Buy Milk");
  var noteView = new NoteView(note);
  assert.isTrue(noteView.renderNote() === "<div>Buy Milk</div>");
})();
