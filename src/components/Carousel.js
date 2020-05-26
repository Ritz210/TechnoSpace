import React, { Component } from "react";
import beach from "../img/corosal1.png";
import resort from "../img/corosal2.png";

import mountain from "../img/corosal4.png";
import gulp from "../img/corosal5.png";
import gul from "../img/corosal6.png";

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselCaption
} from "reactstrap";

const items = [
  {
    src: beach,
    // altText: "Slide 1",
    caption: "Relationship Counselling"
  },
  {
    src: resort,
    // altText: "Slide 2",
    caption: "Mental Health & well being"
  },
  // {
  //   src: camp,
  //   // altText: "Slide 3",
  //   caption: "Corporate Training"
  // },
  {
    src: mountain,
    // altText: "Slide 4",
    caption: "Pre & Post Marriage Jitters"
  },
  {
    src: gulp,
    // altText: "Slide 5",
    caption: "Work Place Stress"
  },
  {
    src: gul,
    // altText: "Slide 5",
    caption: "Deepression & loneliness"
  }
];

class MainCarousel extends Component {
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
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map(item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <center>
          <img src={item.src} alt={item.altText} className="img-carousel" />
          </center>
          <div className="captiondiv">
          <CarouselCaption
            captionText={item.altText}
            captionHeader={item.caption}
          />
          </div>
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        {/* <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={this.goToIndex}
        /> */}
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={this.previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={this.next}
        />
      </Carousel>
    );
  }
}

export default MainCarousel;
