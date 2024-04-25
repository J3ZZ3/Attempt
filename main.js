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
// Define portfolio data with pictures
const projects = [
    {
      title: "Calculator",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "assets/calculator.jpg"
    },
    {
      title: "Digital Clock",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "assets/digi.jpg"
    }
  ];
  
  // Render projects
  const portfolioSection = document.getElementById('portfolio-section');
  
  projects.forEach(project => {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project');
    projectDiv.innerHTML = `
      <h2>${project.title}</h2>
      <img src="${project.image}" alt="${project.title}">
      <p>Technologies used: ${project.technologies.join(', ')}</p>
    `;
    portfolioSection.appendChild(projectDiv);
  });
  