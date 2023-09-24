const userProfiles = [
  {
    username: "user1",
    name: "Danish Kamal",
    city: "Hyderabad",
    course: "MCA",
    work: "Frontend Developer",
    msgURL: "",
    linkedinURL: "https://www.linkedin.com/in/danishzayan",
    imageUrl: "https://avatars.githubusercontent.com/u/46997504?s=400&u=07c0ac700535b5afda53b66b6346ca7cdbc2bd6a&v=4",
    skills: [
      "UI / UX",
      "Front End Development",
      "HTML",
      "CSS",
      "JavaScript",
      "ReactJS",
      "Node",
    ],
  },
  {
    username: "user2",
    name: "Shadab Ansari",
    city: "Hyderabad",
    course: "MCA",
    work: "Frontend Developer",
    msgURL: "",
    linkedinURL: "https://www.linkedin.com/in/shadabdln",
    imageUrl: "https://avatars.githubusercontent.com/u/140787517?s=400&u=a263e252c9cc353a91c8f17b22deebdcecbe3713&v=4",
    skills: [
      "UI / UX",
      "Front End Development",
      "HTML",
      "CSS",
      "JavaScript",
      "ReactJS",
      "Node",
      "Figma"
    ],
  },
  
  // Add your Data order wise
];


function displayUserContributions() {
  const cardContainer = document.getElementById("card-container");

  userProfiles.forEach((profile) => {
    // Create a profile card div
    const card = document.createElement("div");
    card.classList.add("card-box");

    // Create the profile card content
    card.innerHTML = `
            <span class="pro">${profile.course}</span>
            <img class="round" src="${profile.imageUrl}" alt="user" />
            <h3>${profile.name}</h3>
            <h6>${profile.city}</h6>
            <p>${profile.work}</p>
            <div class="buttons">
                <a href="${
                  profile.msgURL
                }" target="_blank" rel="noopener noreferrer">
                  <button class="primary">
                    Message
                   </button>
                </a>
                <a href="${
                  profile.linkedinURL
                }" target="_blank" rel="noopener noreferrer">
                   <button class="primary ghost">
                    Hire Me
                   </button>
                </a>
            </div>
            <div class="skills">
                <h6 class="skill-heading">Skills</h6>
                <ul>
                    ${profile.skills.map((skill) => `<li>${skill}</li>`)}
                </ul>
            </div>
        `;

    // Append the profile card to the container
    cardContainer.appendChild(card);
  });
}

// Call the function to display user when the page loads
window.addEventListener("load", displayUserContributions);


//funtion for dowload card design for user.
// document.getElementById('capture').addEventListener('click', function () {
//   html2canvas(document.querySelector('.card')).then(canvas => {
      
//       const imageDataUrl = canvas.toDataURL('image/png');

//       const a = document.createElement('a');
//       a.href = imageDataUrl;
//       a.download = 'card.png';
//       a.textContent = 'Download Card';

//       const result = document.getElementById('result');
//       result.innerHTML = '';
//       result.appendChild(a);
//   });
// });

