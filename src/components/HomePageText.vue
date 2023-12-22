<template>
  <div class='console-container items-center'>
    <span ref='text'></span>
    <div class='console-underscore' ref='console'>&#95;</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      words: ['Give light to your life.'],
      colors: ['#BB8536']
    }
  },
  mounted() {
    this.consoleText(this.words, this.colors);
  },
  methods: {
    consoleText(words, colors) {
      if (colors === undefined) colors = ['#fff'];
      let visible = true;
      let con = this.$refs.console
      let letterCount = 1;
      let x = 1;
      let waiting = false;
      let target = this.$refs.text
      target.style.color = colors[0]
      window.setInterval(function () {
        if (letterCount === 0 && waiting === false) {
          waiting = true;
          target.innerText = words[0].substring(0, letterCount)
          window.setTimeout(function () {
            let usedColor = colors.shift();
            colors.push(usedColor);
            let usedWord = words.shift();
            words.push(usedWord);
            x = 1;
            target.style.color = colors[0]
            letterCount += x;
            waiting = false;
          }, 1000)
        } else if (letterCount === words[0].length + 1 && waiting === false) {
          waiting = true;
          // if (this.cycle) {
          //     window.setTimeout(function () {
          //         x = -1;
          //         letterCount += x;
          //         waiting = false;
          //     }, 1000)
          // }
        } else if (waiting === false) {
          target.innerText = words[0].substring(0, letterCount)
          letterCount += x;
        }
      }, 120)
      window.setInterval(function () {
        if (visible === true) {
          con.className = 'console-underscore hidden'
          visible = false;
        } else {
          
          con.className = 'console-underscore'
          visible = true;
        }
      }, 400)
    }
  }
}
</script>
  
<style scoped>
@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap);

.hidden {
  opacity: 0;
}

.console-container {
  font-family: Montserrat;
  font-size: 4em;
  text-align: center;
  height: 200px;
  width: 600px;
  display: block;
  color: white;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}

.console-underscore {
  display: inline-block;
  position: relative;
  color: black;
  top: -0.14em;
  left: 10px;
}
</style>
  