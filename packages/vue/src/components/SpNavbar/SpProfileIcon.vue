<template>
  <div
    class="profile-gradient profile-shadow"
    style="width: 32px; height: 32px; border-radius: 50%;"
  />
</template>

<script>
export default {
  name: 'SpProfileIcon',
}
</script>

<style>
.profile-gradient {
  background: linear-gradient(276.98deg, #EAE501 3.37%, #A5FBFF 22.05%, #4251FA 56.21%, #320B93 95.92%);
}

.profile-shadow {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}
</style>
