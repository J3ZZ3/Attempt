const bioSection = document.getElementById('bio-section');

const bioDiv = document.createElement('div');
bioDiv.classList.add('bio');

const profilePicture = document.createElement('img');
profilePicture.src = 'assets/me.jpg';
profilePicture.alt = 'Profile Picture';

const bioText = document.createElement('p');
bioText.innerHTML = `
  Welcome to my portfolio!<br />I am Jesse, a passionate college
  student with an insatiable curiosity for technology and a burning
  desire to delve into the world of programming. From a young age,
  Jesse has been captivated by the endless possibilities that
  technology offers and has always found himself drawn to computers
  and coding.With each line of code he writes, Jesse is not only
  honing his technical prowess but also shaping his future. Driven by
  his passion for technology and fueled by his ambition to make a
  difference.
`;

bioDiv.appendChild(profilePicture);
bioDiv.appendChild(bioText);

bioSection.appendChild(bioDiv);
