(function(exports){

  function List(){
    this.listOfNotes = [] ;

  List.prototype.noteList = function(){
    return this.listOfNotes;
  }

  List.prototype.createNote = function(text){
    note = new Note(text);
    this.listOfNotes.push(note);
  }
}
exports.List = List;
})(this);
