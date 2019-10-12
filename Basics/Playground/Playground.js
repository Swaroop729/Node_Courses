var cat = {
    lives: 9,
    jumps: () => {
      return this.lives--;
    }
  }

  var addValues = (x, y) => {
    return x + y
  }

  console.log(cat.jumps())
  console.log(addValues(1,2))