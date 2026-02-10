import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routeConfigs } from '../../constants/config';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  public isMenuOpen = false;

  constructor(private router: Router) {}

  public toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  public closeMenu(): void {
    this.isMenuOpen = false;
  }

  public navigateToSection = (key: string) => {
    this.isMenuOpen = false;
    this.router?.navigate([routeConfigs[key as keyof typeof routeConfigs]]);
  }
}
