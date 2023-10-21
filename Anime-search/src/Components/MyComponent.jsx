import React, { useEffect } from "react";

function MyComponent() {
  useEffect(() => {
    const handleScroll = (e) => {
      if (e.deltaY > 0) {
        window.scrollBy(+40, 0);
      } else if (e.deltaY < 0) {
        window.scrollBy(-40, 0);
      }
    };

    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return <div>{/* Bileşen içeriği */}</div>;
}

export default MyComponent;
