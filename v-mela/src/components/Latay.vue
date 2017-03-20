<template>
<div class="latayPage">
    <div v-for="card in cards" v-bind:class="[card.flip ? flipClass : '', 'flipContainer']" v-on:click="flipCard(card)"> 
        <div class="flipper">
            <div class="card frontCard">{{card.front}}</div>
            <div class="card backCard">{{card.back}}</div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'latay',
  data () {
    return {
      flipClass: 'flip',
      cards: [
        {
          front: 'A',
          back: 'Makes any word an infinitive verb',
          flip: false
        },
        {
          front: 'E',
          back: 'Mark of a direct object, accusative case',
          flip: false
        },
        {
          front: 'I',
          back: 'And',
          flip: false
        },
        {
          front: 'O',
          back: 'Honorification, high style, politeness. "Omaw - please".',
          flip: false
        },
        {
          front: 'U',
          back: 'Some',
          flip: false
        }
      ]
    }
  },
  methods: {
    flipCard (_card) {
      _card.flip = !_card.flip
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.latayPage {
    position: relative;
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    overflow: hidden;
    top: 25px;
}

.flipContainer {
	perspective: 1000px;
    position: relative;
    height: 200px;
    width: 16%;
}

/* flip speed goes here */
.flipper {
	transition: 0.6s;
	transform-style: preserve-3d;
	position: relative;
    text-align: center;
    font-size: x-large;
    background-color: darkkhaki;
    height: 100%;
    display: flex;
    justify-content: center;
}

/* hide back of pane during swap */
.frontCard, .backCard {
	backface-visibility: hidden;
    position: absolute;
    top: 25%;
}

/* front pane, placed above back */
.frontCard {
	z-index: 2;
	/* for firefox 31 */
	transform: rotateY(0deg);
}

/* back, initially hidden pane */
.backCard {
	transform: rotateY(180deg);
}

.flipContainer.flip .flipper {
	transform: rotateY(180deg);
}
</style>
