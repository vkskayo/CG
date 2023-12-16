function setup() {
  createCanvas(400, 400);
}

function calculateAngleSeconds(seconds) {
  if (seconds == 0) {
    return -HALF_PI;
  }

  return -HALF_PI + (seconds * TWO_PI) / 60;
}

function calculateAngleMinutes(minutes) {
  if (minutes == 0) {
    return -HALF_PI;
  }

  return -HALF_PI + (minutes * TWO_PI) / 60;
}

function calculateAngleHours(hours) {
  if (hours == 0) {
    return -HALF_PI;
  }

  return -HALF_PI + (hours * TWO_PI) / 12;
}

function draw() {
  background(220);
  translate(width / 2, height / 2);
  circle(0, 0, 200);
  text("12", 80 * cos(-HALF_PI), 80 * sin(-HALF_PI));
  text("1", 80 * cos(-HALF_PI + PI / 6), 80 * sin(-HALF_PI + PI / 6));
  text("2", 80 * cos(-HALF_PI + PI / 3), 80 * sin(-HALF_PI + PI / 3));
  text("3", 80 * cos(0), 80 * sin(0));
  text(
    "4",
    80 * cos(-HALF_PI + PI / 6 + HALF_PI),
    80 * sin(-HALF_PI + PI / 6 + HALF_PI)
  );
  text(
    "5",
    80 * cos(-HALF_PI + PI / 3 + HALF_PI),
    80 * sin(-HALF_PI + PI / 3 + HALF_PI)
  );
  text("6", 80 * cos(HALF_PI), 80 * sin(HALF_PI));
  text("7", 80 * cos(-HALF_PI + PI / 6 + PI), 80 * sin(-HALF_PI + PI / 6 + PI));
  text("8", 80 * cos(-HALF_PI + PI / 3 + PI), 80 * sin(-HALF_PI + PI / 3 + PI));
  text("9", 80 * cos(PI), 80 * sin(PI));
  text("10", 80 * cos(PI / 6 + PI), 80 * sin(PI / 6 + PI));
  text("11", 80 * cos(PI / 3 + PI), 80 * sin(PI / 3 + PI));
  strokeWeight(1);
  line(
    0,
    0,
    0.8 * (100 * cos(calculateAngleSeconds(second()))),
    0.8 * (100 * sin(calculateAngleSeconds(second())))
  );
  strokeWeight(3);
  line(
    0,
    0,
    0.7 * (100 * cos(calculateAngleMinutes(minute() + second() / 60))),
    0.7 * (100 * sin(calculateAngleMinutes(minute())))
  );
  strokeWeight(5);
  line(
    0,
    0,
    0.5 * (100 * cos(calculateAngleHours(hour() + minute() / 60))),
    0.5 * (100 * sin(calculateAngleHours(hour())))
  );
}
