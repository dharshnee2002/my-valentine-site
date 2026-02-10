import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
selector: 'app-memories',
standalone: true,
imports: [CommonModule],
templateUrl: './memories.html',
styleUrl: './memories.scss'
})
export class Memories {

memories1 = [
{
image: 'assets/images/rose.png',
caption: 'First Chat 💬'
},
{
image: 'assets/images/rose.png',
caption: 'First Call 📞'
},
{
image: 'assets/images/rose.png',
caption: 'First Selfie 📸'
},
{
image: 'assets/images/rose.png',
caption: 'First Trip ✈️'
}
];

memories2 = [
{
image: 'assets/images/rose.png',
caption: 'Proposal Day 💍'
},
{
image: 'assets/images/rose.png',
caption: 'Birthday Together 🎂'
},
{
image: 'assets/images/rose.png',
caption: 'Movie Date 🍿'
},
{
image: 'assets/images/rose.png',
caption: 'Forever Us ❤️'
}
];

}
