(function(exports){

  function Note(content){
    this.content = content;


  Note.prototype.text = function(){
    return this.content;
  }
}
exports.Note = Note;
})(this);
