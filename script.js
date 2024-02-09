document.getElementById('username').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('userName').value;

  const isValidUsername = /^[a-zA-Z0-9]{5,}$/.test(username);
 

  if (isValidUsername) {
    alert('Success! Username is valid.');
  } else {
    alert('Error! Username must be at least 5 characters long and contain only alphanumeric characters.');
  }
});



    const toggleButton = document.getElementById('btn_toogle');
  const hiddenDiv = document.getElementById('hidden');


  toggleButton.addEventListener('click', function() {
    if (hiddenDiv.style.display == 'none') {
      hiddenDiv.style.display = 'block';  
    } else {
      hiddenDiv.style.display = 'none';}
  });