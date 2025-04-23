import { Component, HostListener, inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ILogo } from 'src/interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isProfileMenuOpen: boolean = false;
  UserProfile: boolean = true;
  isUserLogin: boolean = false;
  isNavbarContentOpen: boolean = false;
  currentSection: any
  _router = inject(Router)

  @Input() logoImage: ILogo | undefined;

  OpenNavbarContent(menu: any) {
    this.isNavbarContentOpen = true;
    this.currentSection = menu;
  };

  CloseNavbarContent() {
    this.isNavbarContentOpen = false
  }

  navigateToCart() {

  }

  @HostListener('document:click', [`$event`])
  onDocumentClick(event: MouseEvent) {
    const modalContainer = document.querySelector(".modal-container");
    const openButtons = document.querySelectorAll(".open-button");

    let clickInsideButton = false;

    openButtons.forEach((btn: Element) => {

      if (btn.contains(event.target as Node)) {
        clickInsideButton = true;

      }

    })

    if (modalContainer && !clickInsideButton && this.isNavbarContentOpen) {
      this.CloseNavbarContent()
    }


  }


  navigateToHome() {
    this._router.navigate(['/home']);
  }

}
