<template>
    <div ref="card" class="card w-80" :class="{ tiltable: tiltable, shiny: shiny }">
        <slot></slot>
    </div>
</template>

<script>
import { addTiltOnHover } from "../ui/hoverTilt.js";
export default {
    props: {
        tiltable: {
            type: Boolean,
            default: () => false
        },
        shiny: {
            type: Boolean,
            default: () => false
        }
    },
    mounted() {
        if (this.tiltable) {
            addTiltOnHover(this.$refs.card)
        }
    }
}
</script>

<style scoped>
.card {
    position: relative;
    @apply bg-light p-4 rounded-lg shadow-xl
}

.shiny:hover:after {
    pointer-events: none;
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: url(https://assets.codepen.io/13471/sparkles.gif), url(https://assets.codepen.io/13471/holo.png), linear-gradient(125deg, #ff008450 15%, #fca40040 30%, #ffff0030 40%, #00ff8a20 60%, #00cfff40 70%, #cc4cfa50 85%);
    background-position: 50% 50%;
    background-size: 160%;
    background-blend-mode: overlay;
    z-index: 2;
    /* filter: brightness(1) contrast(1); */
    /* transition: all 0.33s ease; */
    mix-blend-mode: color-dodge;
    opacity: 0.75;
    @apply rounded-lg
}

.tiltable {
    --rY: 0turn;
    --rX: 0turn;
    transform: perspective(500px) rotateX(var(--rX)) rotateY(var(--rY));
    transform-origin: center center;
}
</style>