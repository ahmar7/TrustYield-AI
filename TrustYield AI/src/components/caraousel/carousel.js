import Slider from "react-animated-slider";
import horizontalCss from "react-animated-slider/build/horizontal.css";
import { content } from "../../data/content";
const Carousel = () => {
  return (
    <div>
      <Slider classNames={horizontalCss}>
        {content.map((item, index) => (
          <div
            key={index}
            style={{
              background: `url('${item.image}') no-repeat center center`,
            }}
          >
            <div className="center">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <button>{item.button}</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
