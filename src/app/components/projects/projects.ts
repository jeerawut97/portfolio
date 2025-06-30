import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Project One Title',
      description: 'A brief but compelling description of your project. Talk about the problem it solves and the value it provides.',
      technologies: ['Angular', 'TypeScript', 'Firebase'],
      liveUrl: 'https://your-live-project-url.com',
      githubUrl: 'https://github.com/your-username/project-one'
    },
    {
      title: 'Project Two Title',
      description: 'This project showcases my ability to build complex user interfaces with a focus on performance and user experience.',
      technologies: ['React', 'Node.js', 'PostgreSQL'],
      liveUrl: 'https://your-live-project-url.com',
      githubUrl: 'https://github.com/your-username/project-two'
    },
    {
      title: 'Project Three Title',
      description: 'An exploration into backend development, creating a RESTful API that serves data to a mobile application.',
      technologies: ['Python', 'Flask', 'Docker'],
      liveUrl: 'https://your-live-project-url.com',
      githubUrl: 'https://github.com/your-username/project-three'
    }
  ];
}