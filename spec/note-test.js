(function createNewNote(){
  var note = new Note("Buy bread", 0);
  assert.isTrue(note.text() === "Buy bread");
  assert.isTrue(note.getId() === 0);
})();
