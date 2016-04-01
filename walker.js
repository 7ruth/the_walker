// Get the walker image:
var walker = document.getElementById('walker');

// Configure motion params:
var leftBorder = 0;
var rightBorder = window.innerWidth - walker.offsetWidth;

var distance = 1;
var direction = 0;

console.log(window.innerWidth);

window.setInterval(function(){



  walker.style.right= (distance) + 'px';


        if (direction === 0) {
          distance += window.innerWidth/500;
        } else {
          distance -= window.innerWidth/500;
        }

        if (distance < window.innerWidth*(.1)) {
          direction = 0;
        } else if (distance > window.innerWidth*(.85)) {
          direction = 1;
        }

console.log(walker.style.right);
console.log(direction);

}, 10);



console.log(rightBorder);
// Have the stick figure start at the right border and start walking left
// When he crosses the left border, have him turn around and start walking right (and vice versa)
// Bonus: Make him turn around when you click on him
