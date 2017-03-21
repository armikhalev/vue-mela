<template>
<div id="koyla_page" class="row text-center col-xs-offset-4 col-xs-4 ">

    <button v-on:click="changeLanguage_onClick" type="submit" id="changeLanguageBtn" class="btn btn-primary">Change language</button>

    <div class="form-group">
        <label id="languageTranslatedFromHeader" class="formHeader" for="wordToTranslate">{{ langTranslateFrom }}</label>
        <input  v-on:keyup.enter="getWord(toTranslate)" v-model="toTranslate" type="text" placeholder="Type any word to translate" id="wordToTranslate" class="form-control wordToTranslate"><br>
        
    </div>

    <button v-on:click="getWord(toTranslate)" type="submit" id="submitBtn" class="btn btn-success">Submit</button>
    
    <div class="row">
        <label id="languageTranslatedToHeader" class="formHeader">{{ langTranslateTo }}</label>
        <div id="translation" class="translationDiv well well-lg">{{ word }}</div>
    </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'koyla',
  data () {
    return {
      word: 'Translate',
      langTranslateFrom: 'english',
      langTranslateTo: 'mela',
      toTranslate: ''
    }
  },
  methods: {
    getWord (toTranslate) {
      let wordsUrl = 'http://0.0.0.0:8000/koyla/'

      axios.get(wordsUrl + this.langTranslateFrom + '/' + toTranslate).then((response) => {
        let resp = response.data[0]
        this.word = this.langTranslateFrom === 'english' ? resp.la : resp.word
      })
    },
    changeLanguage_onClick () {
      this.langTranslateFrom = this.langTranslateFrom === 'english' ? 'mela' : 'english'
      this.langTranslateTo = this.langTranslateFrom === 'english' ? 'mela' : 'english'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.koylaPage {
    position: relative;
    margin: auto;
    width: 50%;

    input[type="text"] {
        width: 100%;
        height: 50px;
        border-radius: 4px;
        background-color: #f8f8f8;
        resize: none;
        font-size: 30px;
        color: indianred;
    }

    .formHeader {
        margin-top: 24px;
        color: tan;
        font-size: 24px;

        &:first-letter {
            text-transform:capitalize;
        }
    }

      .formHeader {
          color: mediumblue;
          margin: 10px 106px;
          text-align: center;
          font-size: large;
          border-bottom: 1px solid brown;
    }

    .translationDiv {
        height: 50px;
        width: 100%;
        background-color: beige;
        font-size: 24px;
        text-align: center;
        margin-top: 24px;
        padding-top: 8%;
    }

    .button {
        margin: 10px 0;
        background-color: burlywood;
        padding: 9px;
        font-size: 14px;
        font-family: sans-serif;
        font-style: normal;
        font-weight: bolder;
        color: darkcyan;
    }
}
</style>
