import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { OurStory } from './pages/our-story/our-story';
import { LoveLetter } from './pages/love-letter/love-letter';
import { Memories } from './pages/memories/memories';
import { Surprise } from './pages/surprise/surprise';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'our-story', component: OurStory},
  { path: 'love-letter', component: LoveLetter},
  { path: 'memories', component: Memories},
  { path: 'surprise', component: Surprise}
];
