import { Component, Input, OnInit } from '@angular/core';




interface carouselImage {
  iamgeSrc: string;
  imageAlt: string;
}



@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})



export class CarouselComponent implements OnInit {
  id: any;
  audio: any;
  audios: any;
  constructor() { }
  images = [
    {
      imageSrc:
        'https://images.unsplash.com/photo-1460627390041-532a28402358?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      imageAlt: 'nature1',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      imageAlt: 'nature2',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1640844444545-66e19eb6f549?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
      imageAlt: 'person1',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      imageAlt: 'person2',
    },
  ];

  //select the initial index of carousel and dot
  selectedIndex = 0;

  //select indicators of dot
  @Input() indicators = true;


  //select index of image on dot indicator click
  selectImage(index: number): void {
    this.selectedIndex = index;
  }

  //initialize controls as true
  @Input() controls = true;

  onPrevClick() {
    if (this.selectedIndex == 0) {
      this.selectedIndex = this.images.length - 1;
    }
    else {
      this.selectedIndex = this.selectedIndex - 1;
    }
    this.playnotifAudio();
  }

  onnextts() {
    if (this.selectedIndex == this.images.length - 1) {
      this.selectedIndex = 0;
    }
    else {
      this.selectedIndex = this.selectedIndex + 1;
    }
  }

  onNextClick() {
    this.onnextts();
    this.playnotifAudio();
  }

  //initialize auto slide as false 
  @Input() playSlide = true;
  @Input() stopSlide = false;
  @Input() autoSlide = false;
  @Input() slideInterval = 3000; //Default to 3 second


  //change slide in every 3 second
  autoSlideImages(): void {
    this.id = setInterval(() => {
      this.onnextts();
    }, this.slideInterval
    )

  }

  onPlayClick() {
    this.autoSlide = true;
    this.playSlide = false;
    this.stopSlide = true;
    this.autoSlideImages()
    this.playAudio();
  }

  onStopClick() {
    this.autoSlide = false;
    this.playSlide = true;
    this.stopSlide = false;
    //stop slide with id
    if (this.id) {
      clearInterval(this.id);
    }
    this.stopAudio()
  }

  playAudio() {
    this.audio = new Audio();
    this.audio.src = "/assets/audio/alarm6.mp3";
    this.audio.load();
    this.audio.play();

  }

  stopAudio() {
    this.audio.pause();
    //stop slide with id

  }

  playnotifAudio() {
    this.audios = new Audio();
    this.audios.src = "/assets/audio/a7.mp3";
    this.audios.load();
    this.audios.play();
    this.audios.volume = 0.1;
  
  }



  ngOnInit(): void {
    //if we can used for automatique slide
    if (this.autoSlide == true) {
      this.autoSlideImages
    }

  }




}
