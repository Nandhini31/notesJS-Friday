(function(exports){

  function List(){
    this.listOfNotes = [];
    this.id = 0;

  List.prototype.noteList = function(){
    return this.listOfNotes;
  };

  List.prototype.createNote = function(text){
    this.id +=1;
    note = new Note(text, this.id);
    this.listOfNotes.push(note);
  };
}
exports.List = List;
})(this);
