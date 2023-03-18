<template>
  <div class="home">
    <div class="img"><img src="../assets/download (1).png" alt="avatar" /></div>
    <p class="intro">
      Hi, I'm Abdulsamad a frontend developer who loves turning designs into
      functional websites and applications.I'm always eager to learn new skills and take on new challenges in the
      ever-evolving world of web development. <br>
      check out my github repo <a href="https://github.com/THEDARKMAN007" target="blank">here</a>
    </p>
    <div></div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "homeComponent",
};
</script>

<style scoped>
.home {
  height: max(600px,100vh);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}

.intro {
  font-size: clamp(1em, 3vw, 2em);
  width: 60%;
  text-align: center;
}

img {
  width: 200px;
  height: 200px;
}
</style>
