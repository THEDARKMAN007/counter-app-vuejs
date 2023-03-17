<template>
  <div class="counterComponent">
    <div class="counter">Counter: {{ count }}</div>
    <div>
      <button @click="decrementHandler">-</button>
      <button @click="resetHandler">Reset</button>
      <button @click="incrementHandler">+</button>
    </div>
    <div class="setValue">
      <input v-model="value" type="number" placeholder="input a number" />
      <button @click="setValue(value)">Set Value</button>
    </div>
  </div>
</template>

<script>
import { useCounter } from "../composables/counter.composable";
import { ref } from "vue";
export default {
  name: "counterComponent",
  setup() {
    const {
      count,
      incrementHandler,
      decrementHandler,
      resetHandler,
      setValue,
    } = useCounter();
    const value = ref();

    return {
      count,
      value,
      incrementHandler,
      decrementHandler,
      resetHandler,
      setValue,
    };
  },
};
</script>

<style scoped>
.counterComponent {
  height: 80vh;
  display: grid;
  place-items: center;
}
.counter {
  font-size: clamp(2em, 8.53vw, 4em);
  font-weight: 700;
}

button {
  font-size: clamp(1em, 4vw, 2em);
  padding: 0.124em 0.5em;
}
button:hover {
  cursor: pointer;
}

input {
  font-size: clamp(1em, 4vw, 2em);
  padding: 0.124em 0.5em;
  text-align: center;
}

.setValue {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1em;
}

.setValue button {
  width: 80%;
}
</style>
