const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');

yesBtn.addEventListener('click', function() {
  alert('I Love You. Call Me Now🤭');
});

noBtn.addEventListener('click', function() {
  // Reposition the buttons randomly
  const proposalContainer = document.getElementById('proposal-container');
  const maxWidth = window.innerWidth - 200; // Adjust button width
  const maxHeight = window.innerHeight - 100; // Adjust button height

  const randomX = Math.floor(Math.random() * maxWidth);
  const randomY = Math.floor(Math.random() * maxHeight);

  proposalContainer.style.left = randomX + 'px';
  proposalContainer.style.top = randomY + 'px';
});
