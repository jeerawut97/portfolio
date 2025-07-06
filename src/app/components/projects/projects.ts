import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'django-jasper',
      description: 'Learning by Doing.',
      technologies: ['Django', 'Python', 'HTML', 'Docker'],
      liveUrl: 'https://django-jasper.onrender.com/',
      githubUrl: 'https://github.com/jeerawut97/django-jasper'
    },
    {
      title: 'dice-game',
      description: 'Learning by Doing.',
      technologies: ['HTML', 'JavaScript', 'CSS'],
      liveUrl: 'https://jeerawut97.github.io/dice-game.github.io/',
      githubUrl: 'https://github.com/jeerawut97/dice-game.github.io'
    },
    {
      title: 'drum-kit',
      description: 'Learning by Doing.',
      technologies: ['JavaScript', 'CSS', 'HTML'],
      liveUrl: 'https://jeerawut97.github.io/drum-kit.github.io/',
      githubUrl: 'https://github.com/jeerawut97/drum-kit.github.io'
    },
    {
      title: 'react-essentials',
      description: 'Learning by Doing.',
      technologies: ['React', 'JavaScript', 'CSS', 'HTML'],
      liveUrl: 'https://jeerawut97.github.io/react-essentials/',
      githubUrl: 'https://github.com/jeerawut97/react-essentials'
    },
    {
      title: 'react-tic-tac-toe',
      description: 'Learning by Doing.',
      technologies: ['React', 'JavaScript', 'CSS', 'HTML'],
      liveUrl: 'https://jeerawut97.github.io/react-tic-tac-toe/',
      githubUrl: 'https://github.com/jeerawut97/react-tic-tac-toe'
    },
    {
      title: 'react-investment',
      description: 'Learning by Doing.',
      technologies: ['React', 'JavaScript', 'CSS', 'HTML'],
      liveUrl: 'https://jeerawut97.github.io/react-investment/',
      githubUrl: 'https://github.com/jeerawut97/react-investment'
    },
    {
      title: 'react-final-countdown',
      description: 'Learning by Doing.',
      technologies: ['React', 'JavaScript', 'CSS', 'HTML'],
      liveUrl: 'https://jeerawut97.github.io/react-the-almost-final-countdown/',
      githubUrl: 'https://github.com/jeerawut97/react-the-almost-final-countdown'
    },
    {
      title: 'react-project-management',
      description: 'Learning by Doing.',
      technologies: ['React', 'JavaScript', 'CSS', 'HTML'],
      liveUrl: 'https://jeerawut97.github.io/react-project-management/',
      githubUrl: 'https://github.com/jeerawut97/react-project-management'
    },
    {
      title: 'react-place-picker',
      description: 'Learning by Doing.',
      technologies: ['React', 'JavaScript', 'CSS', 'HTML'],
      liveUrl: 'https://jeerawut97.github.io/react-place-picker/',
      githubUrl: 'https://github.com/jeerawut97/react-place-picker'
    },
    {
      title: 'react-quiz',
      description: 'Learning by Doing.',
      technologies: ['React', 'JavaScript', 'CSS', 'HTML'],
      liveUrl: 'https://jeerawut97.github.io/react-quiz/',
      githubUrl: 'https://github.com/jeerawut97/react-quiz'
    },
    {
      title: 'react-elegant-context',
      description: 'Learning by Doing.',
      technologies: ['React', 'JavaScript', 'CSS', 'HTML'],
      liveUrl: 'https://jeerawut97.github.io/react-elegant-context/',
      githubUrl: 'https://github.com/jeerawut97/react-elegant-context'
    },
    {
      title: 'react-forms',
      description: 'Learning by Doing.',
      technologies: ['React', 'JavaScript', 'CSS', 'HTML'],
      liveUrl: 'https://jeerawut97.github.io/react-forms/',
      githubUrl: 'https://github.com/jeerawut97/react-forms'
    },
    {
      title: 'react-redux-cart',
      description: 'Learning by Doing.',
      technologies: ['React', 'JavaScript', 'CSS', 'HTML'],
      liveUrl: 'https://jeerawut97.github.io/react-redux-cart/',
      githubUrl: 'https://github.com/jeerawut97/react-redux-cart'
    }
  ].reverse();

  currentPage = signal(1);
  itemsPerPage = signal(3);

  totalPages = computed(() => {
    return Math.ceil(this.projects.length / this.itemsPerPage());
  });

  totalPagesArray = computed(() => {
    return Array.from({ length: this.totalPages() }, (_, i) => i + 1);
  });

  paginatedProjects = computed(() => {
    const start = (this.currentPage() - 1) * this.itemsPerPage();
    const end = start + this.itemsPerPage();
    return this.projects.slice(start, end);
  });

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage.set(page);
    }
  }

  nextPage(): void {
    this.goToPage(this.currentPage() + 1);
  }

  previousPage(): void {
    this.goToPage(this.currentPage() - 1);
  }

}