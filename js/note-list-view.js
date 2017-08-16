(function(exports){

  function NoteListView(list){
    this.list = list;
    var note = new Note();
  }

  NoteListView.prototype.renderList = function(){
    var string = "<ul>";

    this.list.noteList().forEach(function(note) {
      string += "<li><div>" + note.text() + "</div></li>";
    });
     string += "</ul>";
    return string;
  };

exports.NoteListView = NoteListView;
})(this);
