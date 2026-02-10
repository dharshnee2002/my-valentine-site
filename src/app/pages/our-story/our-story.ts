import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-our-story',
  standalone: true,
  imports: [],
  templateUrl: './our-story.html',
  styleUrl: './our-story.scss',
})
export class OurStory implements AfterViewInit {
  
  ngAfterViewInit(): void {
    const items = document.querySelectorAll('.timeline-item');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.2 }
    );
    items.forEach(item => observer.observe(item));
  }
}
