import { useState } from "react";
import "./Carousel.css";
import Card from "./Card";


/** Carousel: displays images and arrows to navigate through them
 * 
 * Props:
 * - photos: array of {src, caption} objects
 * - title: string describing the collection of images
 * 
 * State:
 * - currCardIdx: integer for current card index
 * 
 * App --> Carousel --> Card
 */
 function Carousel({ photos, title }) {
  const [currCardIdx, setCurrCardIdx] = useState(0);

  const currCard = photos[currCardIdx];
  const total = photos.length;

  //Increments currCardIdx state by 1
  function goForward() {
    setCurrCardIdx(function(previous){
      if(previous===total-1){
        return 0;
      }else{
        return previous+1
      }
    })
  }
//for going back, 
  function goBackward() {
    setCurrCardIdx(function(previous){
      //get last if prev is 0
      if(previous===0){

        return total-1;
      }else{
        //return previous
        return previous-1
      }
    })
  }

//uses index of card to show or hide button
  return (
    <div className="Carousel">
      <h1>{title}</h1>
      <div className="Carousel-main">
        {currCardIdx>0&&(
        <i
          className="bi bi-arrow-left-circle"
          onClick={goBackward}
        />
         )}
        <Card
          caption={currCard.caption}
          src={currCard.src}
          currNum={currCardIdx + 1}
          totalNum={total}
        />
        {currCardIdx < total -1 && (
        <i
          className="bi bi-arrow-right-circle"
          onClick={goForward}
        />
      )}
      </div>
    </div>
  );
}

export default Carousel;
