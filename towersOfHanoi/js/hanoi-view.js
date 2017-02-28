class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupTowers();
    this.render();
  }

  setupTowers() {
    for(let i = 0; i < 3; i++) {
      let ul = document.createElement("ul");
      this.$el.append(ul);
      $(ul).data("tower", i);
      for(let j = 0; j < 3; j++) {
        let li = document.createElement("li");
        ul.append(li);
        $(li).data("index", j);
      }
    }

  }

  render() {
    this.$el.children().remove();
    this.game.towers.forEach( (tower, towerIdx) => {
      let ul = document.createElement("ul");
      let numEmpty = 3 - tower.length;
      for(let i = 0; i < numEmpty; i++) {
        let li = document.createElement("li");
        $(li).addClass("empty");
        ul.append(li);
      }

      for(let i = 0; i < tower.length; i++) {
        let li = document.createElement("li");
        $(li).addClass(`disk${tower[tower.length - i - 1]}`);
        ul.append(li);
      }
      this.$el.append(ul);
    });
  }
}

module.exports = View;
