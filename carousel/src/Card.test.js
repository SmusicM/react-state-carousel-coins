import { render, fireEvent } from "@testing-library/react";
import Card from "./Card.js";
import TEST_IMAGES from "./_testCommon.js";

it("works smoke test",function(){
    const image = TEST_IMAGES[0]
    render(
      <Card
       caption={image.caption}
       src = {image.src}
       currNum={1}
       totalNum={TEST_IMAGES.length}
      />
    );
  })

  it("works with snapshot test",function(){
    const {asFragment} = render(<Card 
        caption="test caption" 
        src="https://fakefakefakegugyfug.com"
        currNum={1}
        totalNum={3}/>);
        expect(asFragment()).toMatchSnapshot()
  })