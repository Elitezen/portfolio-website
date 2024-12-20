import { useEffect, useRef } from "react";
import styles from "./index.module.scss";

// Constants for stars and screen height
const NUM_STARS = 300;
const PAGE_HEIGHT_VH = 100;

// Fall speed configuration (adjustable base speed)
const BASE_FALL_SPEED = 0.008; // Base fall speed to scale with size

const SpaceBackground: React.FC = () => {
  const spaceRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const spaceElement = spaceRef.current;
    if (!spaceElement) return;

    // Helper function to generate random numbers
    const random = (min: number, max: number) => Math.random() * (max - min) + min;

    // Create stars dynamically
    const stars: HTMLElement[] = [];
    for (let i = 0; i < NUM_STARS; i++) {
      const star = document.createElement("div");
      star.classList.add(styles.star);

      // Randomize position and size with more even distribution
      const x = random(0, 100); // X position in percentage (0 to 100)
      const y = random(0, PAGE_HEIGHT_VH); // Y position in viewport height (0 to 200vh)
      const size = random(2, 4); // Star size (between 1 and 5 pixels)
      const duration = 30; // Animation duration for stars

      // Set styles for each star
      star.style.left = `${x}vw`; // Randomize the horizontal position
      star.style.top = `${y}vh`; // Randomize the vertical position
      star.style.width = `${size}px`; // Set the width of the star
      star.style.height = `${size}px`; // Set the height of the star (same as width for circle)
      star.style.borderRadius = "50%"; // Ensure it's a circle by making the corners round
      star.style.animationDuration = `${duration}s`;

      // Randomly adjust animation duration for the glimmer effect (making each star twinkle at different speeds)
      const glimmerDuration = random(1, 3); // Randomize between 1.5s and 3s for the twinkle speed
      star.style.animationDuration = `${glimmerDuration}s`; // Assign the random duration

      // Adjust fall speed based on the star's size
      const speed = BASE_FALL_SPEED * (size / 5); // Map the size to fall speed
      star.style.setProperty("--fall-speed", `${speed}`);

      // Append to container
      spaceElement.appendChild(star);
      stars.push(star); // Store the star for future reference
    }

    starsRef.current = stars;

    // Mousemove interaction to shift the parent div in the direction of the mouse movement
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const offsetX = (clientX / window.innerWidth - 0.5) * 2; // Horizontal offset
      const offsetY = (clientY / window.innerHeight - 0.5) * 2; // Vertical offset

      // Apply transformation to the parent div to move it
      if (spaceElement) {
        const movementFactor = 15; // Adjust this for more or less movement
        const translateX = offsetX * movementFactor;
        const translateY = offsetY * movementFactor;
        spaceElement.style.transform = `translate(${translateX}px, ${translateY}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Animation to move stars downward with varying speeds based on the FALL_SPEED constant
    const moveStarsDown = () => {
      starsRef.current.forEach((star) => {
        const currentTop = parseFloat(star.style.top); // Get current top position
        const fallSpeedValue = parseFloat(star.style.getPropertyValue("--fall-speed"));
        const newTop = currentTop + fallSpeedValue; // Use the adjusted fallSpeed for each star

        // If the star goes off the screen, reset to the top
        if (newTop > PAGE_HEIGHT_VH) {
          star.style.top = `0vh`;
        } else {
          star.style.top = `${newTop}vh`;
        }

        // Use transform for smoother animations
        star.style.transform = `translateY(${newTop}vh)`;
      });

      // Continue the animation loop
      requestAnimationFrame(moveStarsDown);
    };

    // Start the animation loop
    requestAnimationFrame(moveStarsDown);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      spaceElement.innerHTML = ""; // Clear stars
    };
  }, []); // Only run once on mount

  return <div className={styles.spaceBackground} ref={spaceRef}></div>;
};

export default SpaceBackground;
