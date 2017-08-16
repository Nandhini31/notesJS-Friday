(function(exports){

  function Note(content, id){
    this.content = content;
    this.id = id;

  Note.prototype.text = function(){
    return this.content;
  };

  Note.prototype.getId = function() {
    return this.id;
  };
}
exports.Note = Note;
})(this);
