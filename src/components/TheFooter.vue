<template>
  <footer>
    <div>
      <p>Feito por:</p>
      <a class="github" href="https://github.com/lucasdgimenez">Lucas Dias</a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "TheFooter",
};
</script>

<style scoped>
footer {
  background: #141414;
  padding: 20px;
  position: relative;
}
footer div {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  color: white;
  align-items: center;
}

footer div a {
  color: white;
  margin: 4px;
}

.github:hover {
  color: #d1161d;
}
</style>