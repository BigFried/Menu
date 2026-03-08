import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, HostListener, OnDestroy, inject } from '@angular/core';

type MenuSection = {
  id: string;
  title: string;
  navLabel: string;
  image: string;
  alt: string;
};

@Component({
  selector: 'app-menu-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-gallery.component.html',
  styleUrl: './menu-gallery.component.scss'
})
export class MenuGalleryComponent implements OnDestroy {
  private readonly document = inject(DOCUMENT);

  readonly contact = {
    call: 'tel:01096116472',
    facebook: 'https://web.facebook.com/BIGRestaurantBNS',
    address: 'طراد النيل امام كشري البكري'
  };

  readonly sections: MenuSection[] = [
    {
      id: 'rizzo-sandwiches',
      title: 'Rizzo, Beef Sandwiches, Chicken Sandwiches & Extra',
      navLabel: 'Rizzo & Sandwiches',
      image: 'assets/menu-pages/02.png',
      alt: 'Rizzo and sandwiches menu page'
    },
    {
      id: 'fried-chicken-meals',
      title: 'Fried Chicken Meals',
      navLabel: 'Chicken Meals',
      image: 'assets/menu-pages/03.png',
      alt: 'Fried chicken meals menu page'
    },
    {
      id: 'meats-chicken-fetter',
      title: 'Meats Fetter & Chicken Fetter',
      navLabel: 'Meats/Chicken Fetter',
      image: 'assets/menu-pages/04.png',
      alt: 'Meats and chicken fetter menu page'
    },
    {
      id: 'fetter-showcase',
      title: 'Fetter Showcase',
      navLabel: 'Fetter Showcase',
      image: 'assets/menu-pages/05.png',
      alt: 'Fetter dishes showcase page'
    },
    {
      id: 'vch-seafood-mixes',
      title: 'V & CH, Sea Food & Mixes',
      navLabel: 'Sea Food & Mixes',
      image: 'assets/menu-pages/06.png',
      alt: 'Vegetables, seafood and mixes menu page'
    },
    {
      id: 'meshaltet-pizza',
      title: 'Meshaltet & Pizza',
      navLabel: 'Pizza',
      image: 'assets/menu-pages/07.png',
      alt: 'Meshaltet and pizza menu page'
    },
    {
      id: 'sweet-fetter',
      title: 'Sweet Fetter',
      navLabel: 'Sweet Fetter',
      image: 'assets/menu-pages/08.png',
      alt: 'Sweet fetter menu page'
    },
    {
      id: 'bechamel-extras',
      title: 'Bechamel & Extras',
      navLabel: 'Bechamel & Extras',
      image: 'assets/menu-pages/09.png',
      alt: 'Bechamel and extras menu page'
    }
  ];

  selectedImage: MenuSection | null = null;
  isSidebarOpen = false;

  scrollToSection(sectionId: string): void {
    const target = this.document.querySelector<HTMLElement>(`#${sectionId}`);
    if (!target) {
      return;
    }

    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  scrollToMenu(): void {
    this.scrollToSection(this.sections[0].id);
  }

  openSidebar(): void {
    this.isSidebarOpen = true;
    this.updateBodyScrollLock();
  }

  closeSidebar(): void {
    this.isSidebarOpen = false;
    this.updateBodyScrollLock();
  }

  toggleSidebar(): void {
    this.isSidebarOpen ? this.closeSidebar() : this.openSidebar();
  }

  onSectionClick(sectionId: string): void {
    this.scrollToSection(sectionId);
    this.closeSidebar();
  }

  openImage(section: MenuSection): void {
    this.selectedImage = section;
    this.updateBodyScrollLock();
  }

  closeModal(): void {
    this.selectedImage = null;
    this.updateBodyScrollLock();
  }

  onBackdropClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.closeModal();
    }
  }

  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    if (this.selectedImage) {
      this.closeModal();
      return;
    }

    if (this.isSidebarOpen) {
      this.closeSidebar();
    }
  }

  private updateBodyScrollLock(): void {
    this.document.body.style.overflow = this.selectedImage || this.isSidebarOpen ? 'hidden' : '';
  }

  ngOnDestroy(): void {
    this.document.body.style.overflow = '';
  }
}
