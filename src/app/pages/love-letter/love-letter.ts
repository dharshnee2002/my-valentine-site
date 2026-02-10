import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-love-letter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './love-letter.html',
  styleUrls: ['./love-letter.scss']
})
export class LoveLetter {

  showPopup = false;

  petalsArray = Array(15);

  openLetter() {
    this.showPopup = true;
  }

  closeLetter() {
    this.showPopup = false;
  }

}
