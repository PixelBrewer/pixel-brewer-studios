import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  imports: [],
  templateUrl: './gallery.component.html',
})
export class GalleryComponent {
  // Track the currently enlarged image
  selectedImage: {
    src: string;
    alt: string;
    title: string;
  } | null = null;

  // Gallery images data
  galleryImages = [
    {
      src: 'Mittens.jpg',
      alt: 'She is a bit of a princess.',
      title: 'Mittens 👑',
    },
    {
      src: 'Oliver.jpg',
      alt: 'Ollie is more like a dog than a cat.',
      title: 'Oliver (Ollie). 🐱🐶',
    },
    {
      src: 'KendoMatch.jpg',
      alt: 'My first kendo tournament.',
      title: 'Kendo ⚔️',
    },
    {
      src: 'Coffee.jpg',
      alt: 'One of my first latte art attempts.',
      title: 'Coffee ☕',
    },
  ];

  /**
   * Opens the modal with the selected image
   * @param image The image to enlarge
   */
  openModal(image: (typeof this.galleryImages)[0]): void {
    this.selectedImage = image;
    // Add a class to the body to prevent scrolling while modal is open
    document.body.classList.add('overflow-hidden');
  }

  /**
   * Closes the image modal
   */
  closeModal(): void {
    this.selectedImage = null;
    // Remove the body class to allow scrolling again
    document.body.classList.remove('overflow-hidden');
  }

  /**
   * Stops propagation of click events to prevent closing the modal when clicking on the image
   * @param event The click event
   */
  preventClose(event: MouseEvent): void {
    event.stopPropagation();
  }
}
