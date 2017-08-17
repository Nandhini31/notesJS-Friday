(function(exports) {
  function NoteController(list) {
    this.list = list;
    list.createNote("New note 1");
    this.view = new NoteListView(list);
  }

  NoteController.prototype.render = function () {
    document.getElementById("app").innerHTML = this.view.renderList();
  };

  exports.NoteController = NoteController;
})(this);

list = new List();
controller = new NoteController(list);
// controller.render();
try { controller.render(); } catch(err) {}
