import React, { useEffect } from "react";

function MyComponent() {
  useEffect(() => {
    const handleScroll = (e) => {
      // Eğer kullanıcı aşağı kaydırıyorsa, sayfayı sağa doğru 10 piksel kaydır
      if (e.deltaY > 0) {
        window.scrollBy(10, 0);
      }
    };

    window.addEventListener("wheel", handleScroll);

    return () => {
      // Bileşen temizlendiğinde olay dinleyicisini kaldır
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return <div>{/* Bileşen içeriği */}</div>;
}

export default MyComponent;
