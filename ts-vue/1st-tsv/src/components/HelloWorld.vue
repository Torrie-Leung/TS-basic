<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{aloha}}</p>
    <p>{{fullName}}</p>
    <h4>{{counter}}</h4>
    <button @click="incCounter">PressMe</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  aloha = 'hey dummies'
  fisrtName = 'Torrie'
  lastName = 'Leung'
  counter = 0
  mounted(){
    console.log('mounted')
  }
  get fullName(): string{
    return this.fisrtName + ' ' + this.lastName
  }
  incCounter(){
    this.counter++
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
