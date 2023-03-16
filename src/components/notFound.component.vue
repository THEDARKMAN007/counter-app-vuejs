<template>
  <div class="notFound">
    <div class="notFoundBaby">
      <h1>404 Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style scoped>
.notFound {
  display: grid;
  place-items: center;
  border: 1px solid black;
  height: 100vh;
  font-size: clamp(1em, 4vw, 2em);
}
</style>
