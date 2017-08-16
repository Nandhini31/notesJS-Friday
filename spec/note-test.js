(function createNewNote(){
  var note = new Note("Buy bread");
  assert.isTrue(note.text() === "Buy bread");
})();
