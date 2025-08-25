import { useEffect } from "react";

export default function SakuraFalling() {
  useEffect(() => {
    const sakuraContainer = document.createElement("div");
    sakuraContainer.className = "fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-[-1]";
    document.body.appendChild(sakuraContainer);

    const petals = [];

    function createPetal() {
      const petal = document.createElement("img");
      petal.src = "/media/images/petal.png";
      petal.style.position = "absolute";
      petal.style.top = "-50px";
      petal.style.left = Math.random() * window.innerWidth + "px";
      petal.style.width = 20 + Math.random() * 10 + "px";
      petal.style.opacity = Math.random() + 0.5;
      petal.style.transition = "transform 1s linear";
      sakuraContainer.appendChild(petal);

      petals.push({
        el: petal,
        x: Math.random() * window.innerWidth,
        y: 0,
        speed: 1 + Math.random() * 2,
        drift: Math.random() * 2 - 1,
        rotate: Math.random() * 360,
      });
    }

    function animate() {
      petals.forEach((p, i) => {
        p.y += p.speed;
        p.x += p.drift;
        p.rotate += p.drift * 2;

        p.el.style.transform = `translate(${p.x}px, ${p.y}px) rotate(${p.rotate}deg)`;

        if (p.y > window.innerHeight - 100) {
          p.el.style.opacity = Math.max(0, (window.innerHeight - p.y) / 100);
        }

        if (p.y > window.innerHeight + 50) {
          p.el.remove();
          petals.splice(i, 1);
        }
      });

      requestAnimationFrame(animate);
    }

    // generar flores cada cierto tiempo
    const interval = setInterval(() => {
      createPetal();
    }, 150);

    animate();

    return () => {
      clearInterval(interval);
      sakuraContainer.remove();
    };
  }, []);

  return null;
}
