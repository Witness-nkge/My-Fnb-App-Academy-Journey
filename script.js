// Timeline data 
const timelineData = [
  {
    level: "Beginner Level",
    items: [
      {
        week: "Week 1",
        lesson: "Lesson 1-2",
        content: ["Orientation", "App Strategies"]
      },
      {
        week: "Week 2",
        lesson: "Lesson 3-4",
        content: ["Github and Collaboration", "Principles of UX Design"]
      },
      {
        week: "Week 3",
        lesson: "Lesson 5-6",
        content: ["Principles of UX Design + Basic Layouts + Transitions"]
      }
    ]
  },
  {
    level: "Intermediate Level",
    items: [
      {
        week: "Week 4",
        lesson: "Lesson 7-8",
        content: ["Design Thinking", "APS's, User Input & Data Processing"]
      },
      {
        week: "Week 5",
        lesson: "Lesson 9-10",
        content: ["User Centric App Development", "Smart Database Management and Analysis"]
      },
      {
        week: "Week 6",
        lesson: "Lesson 11-12",
        content: ["Business Development"]
      }
    ]
  },
  {
    level: "Advance Level",
    items: [
      {
        week: "Week 7",
        lesson: "Lesson 13-14",
        content: ["Backend Development", "Backend Development - Build an API"]
      },
      {
        week: "Week 8",
        lesson: "Lesson 15-16",
        content: ["AI in Development", "Business Funding"]
      },
      {
        week: "Week 9",
        lesson: "Lesson 17-18",
        content: ["Market your App Business"]
      }
    ]
  }
];

function renderTimeline() {
  const timelineContainer = document.querySelector('.timeline');
  timelineContainer.innerHTML = '';

  timelineData.forEach(level => {
    const divider = document.createElement('div');
    divider.className = 'level-divider';
    divider.textContent = level.level;
    timelineContainer.appendChild(divider);

    level.items.forEach(item => {
      const timelineItem = document.createElement('div');
      timelineItem.className = 'timeline-item';
      
      timelineItem.innerHTML = `
        <div class="timeline-header">
          <span>${item.week}</span>
          <span>${item.lesson}</span>
        </div>
        <div class="timeline-content">
          <ul>
            ${item.content.map(point => `<li>${point}</li>`).join('')}
          </ul>
        </div>
      `;
      
      timelineContainer.appendChild(timelineItem);
    });
  });
}



//projects
const projects = [
    {name:'Avenger App', description:'Displays superhero profiles with images and details.',stack:['HTML','CSS'], github:'https://github.com/Witness-nkge/Avengers-App'},
    {name:'Pine City Zoo App',description:'Serves as a tour guide for a fictional zoo.',stack:['HTML','CSS'], github: 'https://github.com/Witness-nkge/Pine-City-Zoo-Web-App'},
    {name:'Calculator App',description:'Performs basic arithmetic functions.',stack:['HTML','CSS','JavaScript'], github:'https://github.com/Witness-nkge/Calculator-App'},
    {name:'Contact Book App',description:'Uses an API to stores, edits, and manages personal contacts.',stack:['HTML','CSS','JavaScript'], github:'https://github.com/Witness-nkge/Contact-Book-App'},
    {name:'Shopping Cart', description:'Simulates adding items to a cart and checking out.', stack:['Python'], github: 'https://github.com/Witness-nkge/Shopping-Cart'}
];

function renderProjects(){
    
    const container = document.getElementById('projects-content');
    projects.forEach(project => {

        const stackItems = project.stack.map(stacks => 
            `<span class="stack">${stacks}</span>`
        ).join(' ');

        const item = document.createElement('div');
        item.className = 'item';
        item.innerHTML = `
        <div class="item-content">
        <p class="item-icon">💻</p>
        </div>
        <div class="item-text">
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <p style="margin-bottom:35px;">${stackItems}</p>
        <div style="position:absolute; left:0; bottom:0;width:100%;">
        <a class="one" href="${project.github}" style="font-size:0.7rem; padding:4px; display:block; background: linear-gradient(135deg, rgb(153, 102, 255), rgb(51, 187, 255));">View on github</a>
        </div>
        </div>
        `;
        container.appendChild(item);
    });
}

document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  renderTimeline();
});


