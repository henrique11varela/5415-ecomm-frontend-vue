<template>
    <div ref="intro" class="wrapper" v-if="playIntro">
        <div ref="stars1" id="stars1"></div>
        <div ref="stars2" id="stars2"></div>
        <div ref="stars3" id="stars3"></div>
        <div id="title">
            STARLIGHT
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        playIntro: function(){
            return localStorage.getItem('introPlayed') != 'true'
        }
    },
    methods: {
        multipleBoxShadow(n) {
            let value = '';
            for (let i = 1; i <= n; i++) {
                value += `${Math.floor(Math.random() * 2000)}px ${Math.floor(Math.random() * 2000)}px #FFF`;
                if (i !== n) {
                    value += ', ';
                }
            }
            return value;
        }
    },
    mounted() {
        if (this.playIntro) {
            this.$refs.stars1.style.boxShadow = this.multipleBoxShadow(700);
            this.$refs.stars2.style.boxShadow = this.multipleBoxShadow(700);
            this.$refs.stars3.style.boxShadow = this.multipleBoxShadow(500);
            setTimeout(() => {
                this.$refs.intro.classList.add('close')
            }, 3000);
            localStorage.setItem('introPlayed', 'true')
        }
        window.onbeforeunload = function (e) {
            localStorage.removeItem('introPlayed')
        };
    }
}

</script>

<style scoped>
.wrapper {
    position: fixed;
    top: 0;
    left: 0;
    min-height: 100dvh;
    width: 100vw;
    /* background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%); */
    background: linear-gradient(334deg, #070b0f 40%, #1d262e 50%, #070b0f 60%);
    background-size: 180% 180%;
    animation: gradient-animation 5.5s ease;
    overflow: hidden;
    z-index: 1000;
}

#stars1,
#stars2,
#stars3 {
    position: absolute;
    top: 0;
    left: 0;
    width: 1px;
    height: 1px;
    background: transparent;
    animation: animStar 50s linear;
}



#stars2 {
    width: 2px;
    height: 2px;
    animation: animStar 100s linear;
}

#stars3 {
    width: 3px;
    height: 3px;

    animation: animStar 80s linear;
}

#stars1:after,
#stars2:after,
#stars3:after {
    content: " ";
    position: absolute;
    top: 2000px;
    width: inherit;
    height: inherit;
    background: transparent;
    box-shadow: inherit;
}

#title {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    color: #FFF;
    text-align: center;
    font-family: 'lato', sans-serif;
    font-weight: 300;
    font-size: 50px;
    letter-spacing: 10px;
    margin-top: -60px;
    padding-left: 10px;
}

#title span {
    background: -webkit-linear-gradient(white, #38495a);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

@keyframes animStar {
    from {
        transform: translateY(0px);
    }

    to {
        transform: translateY(-2000px);
    }
}

@keyframes gradient-animation {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}

.close {
    min-height: 0px;
    opacity: 0;
    transition: min-height 2s, opacity 2s cubic-bezier(.75, 0, 1, .39);
}
</style>