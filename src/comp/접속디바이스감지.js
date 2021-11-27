import React from "react"
import { useMediaQuery } from "react-responsive"

//접근 디바이스 감지
function App() {

  const isPc = useMediaQuery({
    query : "(min-width:1024px)"
  });
  const isTablet = useMediaQuery({
    query : "(min-width:768px) and (max-width:1023px)"
  });
  const isMobile = useMediaQuery({
    query : "(max-width:767px)"
  });

  return (
  <div>
    {isPc && <p>PC로 접속하셨습니다.</p>}
    {isTablet && <p>Tablet로 접속하셨습니다.</p>}
    {isMobile && <p>Mobile로 접속하셨습니다.</p>}
  </div>
  );
}

export default App;