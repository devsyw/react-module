import "./App.css";
import HorizontalScroll from "react-scroll-horizontal";

//가로스크롤
export default function App() {

  return (
    <div className="fullPage">
      <HorizontalScroll>
        <div className="child bg1">
          <h1>화면 1</h1>
        </div>

        <div className="child bg2">
          <h1>화면 2</h1>
        </div>

        <div className="child bg3">
          <h1>화면 3</h1>
        </div>
      </HorizontalScroll>
    </div>
  );
}

/**
 * css코드

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.fullPage {
  height: 100vh;
  scroll-snap-type: x mandatory;
}

.child {
  scroll-snap-align: start;
  width: 100vw;
  height: 100vh;
  color: #fff;
}

.bg1 {
  background-color: #ff0;
}

.bg2 {
  background-color: #0ff;
}

.bg3 {
  background-color: #f0f;
}

 */