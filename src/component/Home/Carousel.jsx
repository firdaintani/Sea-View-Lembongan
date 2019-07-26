import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselIndicators,
  
} from 'reactstrap';
import '../../support/css/Carousel.css'
import family from '../../support/img/room/family/family1.JPG'
import hostel from '../../support/img/room/hostel/hostel1.png'
import superior from '../../support/img/room/superior/superior1.jpg'
import spa from '../../support/img/spa_restaurant/spa2.png'
import restaurant from '../../support/img/spa_restaurant/resto1.png'

const items = [
  {
    src: `${restaurant}`,
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: `${family}`,
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: `${spa}`,
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: `${superior}`,
    altText: 'Slide 2',
    caption: 'Slide 2'
  },{
    src: `${hostel}`,
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  
];

class CarouselPhoto extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} className='imageCarousel' alt={item.altText} />

        </CarouselItem>
      );
    });

    return (
     
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
          interval={5000}
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {slides}
        </Carousel>
     

    );
  }
}


export default CarouselPhoto;