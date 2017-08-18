(function(exports) {
  function NoteController(list) {
    this.list = list;
    list.createNote("New note 1");
    this.view = new NoteListView(list);
  }

  NoteController.prototype.render = function () {
    document.getElementById("app").innerHTML = this.view.renderList();
  };

  NoteController.prototype.loadSingleNote = function(){
    var self = this;
    window.addEventListener("hashchange", function(){
      self.getCurrentURL();
    });
  };

  NoteController.prototype.getCurrentURL = function(){
  //manupulationg URL
  this.renderSingleNote(this.getNoteId(window.location));
  };

  NoteController.prototype.getNoteId = function(){
    //spliting the url and getting the id
    return location.hash.split("/")[1];
  };

  NoteController.prototype.renderSingleNote = function(noteId){
    var currentNote = this.list.getNoteContentId(noteId);
    var note = new NoteView(currentNote);
    document.getElementById("app").innerHTML = note.renderNote();
    console.log(note.renderNote());
  };

  exports.NoteController = NoteController;
})(this);
