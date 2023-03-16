import { computed } from "vue";
import store from "../store";

export const useCounter = () => {
  const count = computed(() => store.state.count);

  const incrementHandler = () => store.commit("increment");
  const decrementHandler = () => store.commit("decrement");
  const resetHandler = () => store.commit("reset");
  const setValue = (value) => store.commit("setValue", value);

  return {
    count,
    incrementHandler,
    decrementHandler,
    resetHandler,
    setValue,
  };
};
