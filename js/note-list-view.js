(function(exports){

  function NoteListView(list){
    this.list = list;
    var note = new Note();
  }

  NoteListView.prototype.renderList = function(){

    var string = "<ul>";

    this.list.noteList().forEach(function(note) {
      var noteid = note.getId();
      string += "<li><div><a href=\"#notes/" + noteid +"\">" + note.text().substring(0,19) + "</a></div></li>";
    });
     string += "</ul>";
    return string;
  };

exports.NoteListView = NoteListView;
})(this);
