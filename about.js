document.addEventListener('DOMContentLoaded', function() {
    // Render biography content
    renderBio();
  
    // Functions to render content
    function renderBio() {
      const bioContent = document.getElementById('bioContent');
      bioContent.textContent = `Welcome to my corner of the internet! I'm a passionate college student with an insatiable curiosity for technology and a burning desire to delve into the world of programming. although I am currently pursuing a degree in Electrical Engineering, I'm constantly fascinated by the ever-evolving landscape of technology. From artificial intelligence to blockchain, I'm eager to explore the endless possibilities that lie ahead. My journey into programming began with a simple curiosity and has since blossomed into a full-blown passion. I love the challenge of solving problems and the satisfaction that comes with turning lines of code into functional software. When I'm not buried in textbooks or coding away on my laptop, you can find me tinkering with gadgets all day. I believe that every line of code I write brings me one step closer to achieving my goals.`;
    }
  
    function renderResume() {
      const resumePreview = document.getElementById('resumePreview');
      resumePreview.innerHTML = '<iframe src="assets/CV.pdf" width="100%" height="600px"></iframe>'; // Replace "resume.pdf" with your resume file path
    }
  
    function renderProjects() {
      const projectsPreview = document.getElementById('projectsPreview');
      projectsPreview.innerHTML = '<a href="projects/">View Projects</a>';
    }
  
    // Function to preview resume
    window.previewResume = function() {
      renderResume();
    };
  
    // Function to preview projects
    window.previewProjects = function() {
      renderProjects();
    };
  });
  