
const form = document.getElementById('workout-form');
const workoutList = document.getElementById('workout-list');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const exercise = document.getElementById('exercise').value;
  const sets = document.getElementById('sets').value;
  const rep = document.getElementById('rep').value;

  const listItem = document.createElement('li');
  listItem.textContent = `${exercise} - ${rep} reps -  ${sets} sets`;

  workoutList.appendChild(listItem);

  // Clear input fields
  form.reset();
});

