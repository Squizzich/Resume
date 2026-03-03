import { useEffect, useRef } from "react";
import sprite from "../assets/player.png";

export default function Game() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = 1920;
    canvas.height = 1080;

    const image = new Image();
    image.src = sprite;

    const FRAME_WIDTH = 192;
    const FRAME_HEIGHT = 188;
    const FRAMES_PER_ROW = 9;

    const getFrameByIndex = (index) => {
      const col = index % FRAMES_PER_ROW;
      const row = Math.floor(index / FRAMES_PER_ROW);

      return {
        x: col * FRAME_WIDTH,
        y: row * FRAME_HEIGHT,
        w: FRAME_WIDTH,
        h: FRAME_HEIGHT,
      };
    };

    const animations = {
      idleRight: [getFrameByIndex(0)],
      idleLeft: [getFrameByIndex(9)],

      walkRight: [
        getFrameByIndex(1),
        getFrameByIndex(2),
      ],

      walkLeft: [
        getFrameByIndex(10),
        getFrameByIndex(11)],
    };

    const player = {
      x: 300,
      y: 250,
      size: 150,
      frameIndex: 0,
      animation: "idleRight",
      direction: "right",
      speed: 3,
      moving: false,
    };

    // ====== СКРОЛЛ ======
    const handleWheel = (e) => {
    e.preventDefault(); // 🚫 отключаем скролл страницы

    if (e.deltaY > 0) {
      player.direction = "right";
      player.animation = "walkRight";
      player.x += 5;
      player.moving = true;
    } else {
      player.direction = "left";
      player.animation = "walkLeft";
      player.x -= 5;
      player.moving = true;
    }

    clearTimeout(player.stopTimeout);
    player.stopTimeout = setTimeout(() => {
      player.moving = false;
      player.animation =
        player.direction === "right"
          ? "idleRight"
          : "idleLeft";
    }, 120);
  };

  window.addEventListener("wheel", handleWheel, { passive: false });

    function drawBackground() {
      ctx.fillStyle = "#4da6ff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "green";
      ctx.fillRect(0, 350, canvas.width, 150);
    }

    function drawPlayer() {
      const frames = animations[player.animation];
      const frame = frames[player.frameIndex % frames.length];

      ctx.drawImage(
        image,
        frame.x,
        frame.y,
        frame.w,
        frame.h,
        player.x,
        player.y,
        player.size,
        player.size
      );
    }

    let frameTimer = 0;

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drawBackground();
      drawPlayer();

      if (player.moving) {
        frameTimer++;
        if (frameTimer % 10 === 0) {
          player.frameIndex++;
        }
      }

      requestAnimationFrame(animate);
    }

    image.onload = () => {
      animate();
    };
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 40 }}>
      <canvas ref={canvasRef} />
    </div>
  );
}