<template>
  <div>
    <div class="container">
      <slot />
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;531;600;700;800&display=swap");

.container {
  font-family: "Inter";
  font-weight: 700;
  font-size: 1.5rem;
  margin: 3.5rem 0 1rem;
  display: flex;
  align-items: center;
}
</style>
