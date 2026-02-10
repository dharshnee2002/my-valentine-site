import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-surprise',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './surprise.html',
  styleUrl: './surprise.scss'
})
export class Surprise {

  // Movement count
  noMoveCount = 0;

  // NO button position
  noTop = 60;
  noLeft = 55;

  // States
  showFinalMessage = false;
  forceYes = false;

  // Move NO button (Desktop + Mobile)
  moveNoButton() {

    if (this.noMoveCount >= 5) {
      this.forceYes = true;
      return;
    }

    this.noMoveCount++;

    // Small delay → smoother on mobile tap
    setTimeout(() => {
      this.noTop = Math.random() * 70;
      this.noLeft = Math.random() * 70;
    }, 150);
  }

  // YES clicked
  selectYes() {
    this.showFinalMessage = true;
  }

}
