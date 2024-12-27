<template>
  <div class="w-[95.8%] mx-auto h-[90vh] max-h-[48.5rem] relative rounded-[0.5rem] overflow-hidden">
        <div class="rounded-[0.5rem] w-full h-full">
            <img :src="props.imgSource" alt="student with grmi staffs" class="object-cover h-full w-full">
        </div>
        <div
            class="absolute inset-0 bg-gray-800 opacity-50 transitionAll"
            :class="videoPlayed ? 'hidden' : 'block'"
        ></div>
        <div
            class="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[5rem] h-[5rem] cursor-pointer transitionAll"
            @click="vidControl(true)"
            :class="videoPlayed ? 'hidden' : 'block'"
        >
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 120 119"
            fill="none"
            >
            <path
                d="M119.435 59.4843C119.435 91.834 92.969 118.066 60.3114 118.066C27.6538 118.066 1.18738 91.834 1.18738 59.4843C1.18738 27.1347 27.6538 0.902344 60.3114 0.902344C92.969 0.902344 119.435 27.1347 119.435 59.4843Z"
                stroke="#63D8E4"
            />
            <path
                d="M47.5375 38.3702C47.5375 36.3873 49.8208 35.2745 51.3826 36.4963L81.4338 60.0052C82.71 61.0036 82.6366 62.9578 81.2891 63.8577L51.238 83.9263C49.657 84.9821 47.5375 83.8488 47.5375 81.9477V38.3702Z"
                fill="#63D8E4"
            />
            </svg>
        </div>
        <div 
        class="w-full h-full absolute top-0 transitionAll overflow-hidden left-0"
        :class="videoPlayed? 'opacity-[1] visible': 'opacity-0 invisible'"
        >
            <video 
            :src="props.vidSource" 
            class="w-full h-full object-fill mob:object-fit"
            frameborder="0" autoplay 
            title="CLICK TO PAUSE" 
            data-ready="true"
            @play="handlePlay"
            @pause="handlePause"
            @click="togglePlayPause"
            ref="vidPlayer"
            controls
            ></video>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps(['vidSource', 'imgSource'])

const vidPlayer = ref(null);
const videoPlayed = ref(false);

// Video control function
const vidControl = (manualToggle = false) => {
  if (manualToggle) {
    if (vidPlayer.value.paused) {
      vidPlayer.value.play();
    } else {
      vidPlayer.value.pause();
    }
  }
  videoPlayed.value = !vidPlayer.value.paused;

  if (!videoPlayed.value) {
    vidPlayer.value.setAttribute('controls', 'controls'); // Add controls
  } else {
    vidPlayer.value.removeAttribute('controls'); // Remove controls
  }
};

// Event listeners for play and pause
const handlePlay = () => {
  vidControl();
};

const handlePause = () => {
  vidControl();
};

const togglePlayPause = () => {
  if (vidPlayer.value.paused) {
    vidPlayer.value.play();
    videoPlayed.value = true;
  } else {
    vidPlayer.value.pause();
    videoPlayed.value = false;
  }
};

</script>

<style scoped>
    .hide-controls::-webkit-media-controls {
  display: none !important;
}

.hide-controls::-moz-media-controls {
  display: none !important;
}

.hide-controls {
  pointer-events: auto; /* Ensure video interaction remains */
}
</style>