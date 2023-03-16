<template>
  <div class="appComponentVue">
    <header>
      <nav>
        <router-link class="router-link" to="/">Home</router-link>
        <router-link class="router-link" to="/counter">Counter</router-link>
      </nav>
    </header>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
}
.appComponentVue {
  height: 100vh;
  width: max(23.4375em,100vw);
  display: flex;
  flex-direction: column;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
header {
  background:gray;
}
nav {
  margin-inline: auto;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: clamp(1.5em, 5vw, 4em);
  padding-top: 0.2em;
  padding-bottom: 0.2em;
}
.router-link {
  text-decoration: none;
  color: black;
  font-weight: 600;
}
.router-link:hover {
  color: white;
  transition: 1s;
}
</style>
