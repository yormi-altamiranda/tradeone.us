// useCountdown.js
import { ref, onMounted, onUnmounted } from "vue";

export function useCountdown(targetDate) {
  const days = ref(0);
  const hours = ref(0);
  const minutes = ref(0);
  const seconds = ref(0);

  const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = targetDate.getTime() - now;

    days.value = Math.floor(distance / (1000 * 60 * 60 * 24));
    hours.value = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    minutes.value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    seconds.value = Math.floor((distance % (1000 * 60)) / 1000);
  };

  let interval;

  onMounted(() => {
    updateCountdown();
    interval = setInterval(updateCountdown, 1000);
  });

  onUnmounted(() => {
    clearInterval(interval);
  });

  return { days, hours, minutes, seconds };
}
