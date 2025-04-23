import { Component, inject } from '@angular/core';
import { homeCarouselData } from 'src/app/Data/mainCarousel';
import { EcomerceService } from 'src/app/service/ecomerce.service';
import { ICaroselData } from 'src/interface';

@Component({
  selector: 'app-main-carousel',
  templateUrl: './main-carousel.component.html',
  styleUrls: ['./main-carousel.component.css']
})
export class MainCarouselComponent {

  carouselData: ICaroselData[] = [];
  currentSlide: number = 0;
  ecommApi = inject(EcomerceService)

  ngOnInit(): void {

    this.GetAllCaroseldata()

  }

  GetAllCaroseldata() {
    this.ecommApi.getCarouselData().subscribe((res: ICaroselData[]) => {
      this.carouselData = res;
      this.autoPlay()
    })
  }


  get transformStyle(): string {
    return `translateX(-${this.currentSlide * 100}%)`
  }

  autoPlay() {
    setInterval(() => {
      this.nextSlide();
    }, 7000)
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.carouselData.length;

  }

}
