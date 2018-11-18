export const Directions = {
  UP: "up",
  RIGHT: "right",
  DOWN: "down",
  LEFT: "left"
};

const directions = [Directions.UP, Directions.RIGHT, Directions.DOWN, Directions.LEFT];

const createRandomDir = () => {
  const randomNr = Math.floor(Math.random() * directions.length);
  return directions[randomNr];
};

const createOppositeDir = (dir) => {
  if (dir === Directions.UP) {
    return Directions.DOWN;
  }
  if (dir === Directions.DOWN) {
    return Directions.UP;
  }
  if (dir === Directions.LEFT) {
    return Directions.RIGHT;
  }
  if (dir === Directions.RIGHT) {
    return Directions.LEFT;
  }
};

export const correctBeyondBorderPosition = (position, width, height) => {
  if (position.x > width) {
    position.x -= width;
  } else if (position.x < 0) {
    position.x += width;
  }
  if (position.y > height) {
    position.y -= height;
  } else if (position.y < 0) {
    position.y += height;
  }
  return position;
};

export const updateCoordsInDirection = (unit, progress) => {
  switch(unit.dir) {
    case Directions.LEFT:
      unit.x = unit.x - progress;
      break;
    case Directions.RIGHT:
      unit.x = unit.x + progress;
      break;
    case Directions.UP:
      unit.y = unit.y - progress;
      break;
    case Directions.DOWN:
      unit.y = unit.y + progress;
      break;
  }
  return unit;
};