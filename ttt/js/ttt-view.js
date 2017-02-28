class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    $('ul li').click( e => {
      if ($(e.currentTarget).attr('class').match(/clicked/)) {
          alert("Not a valid move");
      } else {
        this.game.playMove($(e.currentTarget).data("pos"));

        $(e.currentTarget).text(this.game.currentPlayer);
        
        $(e.currentTarget).addClass("clicked");
        if (this.game.isOver()) {
          if(!this.game.winner()) {
            alert("DRAW!!");
          } else {
            alert(`${this.game.winner()} wins!!`);
          }
        }
      }
    });
  }

  makeMove($square) {}

  setupBoard() {
    //let views = $('.ttt');

    const ul = document.createElement("ul");
    this.$el.append(ul);
    for(let i = 0; i < 3; i++) {
      for(let j = 0; j < 3; j++) {
        let li = document.createElement("li");
        $(li).data("pos",[i,j]);
        ul.append(li);
      }
    }
    $('ul li').hover( function(event) {
      $(event.currentTarget).addClass('hovered');
    }, function() {
      $(event.currentTarget).removeClass('hovered');
    });
  }
}

module.exports = View;
