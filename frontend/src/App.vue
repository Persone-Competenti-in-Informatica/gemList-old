<script setup>
import '@jamescoyle/svg-icon'
import { mdiMenu, mdiClose, mdiMagnify, mdiCog } from "@mdi/js";
</script>

<template>
  <header>
    <button class="has-icon" style="scale: 1.7;" @click="menuState = !menuState">
      <svg-icon v-if="!menuState" type="mdi" :path="mdiMenu" />
      <svg-icon v-else type="mdi" :path="mdiClose" />
    </button>
    <router-link to="/" class="title">gemList</router-link>
    <div>
      <button class="has-icon" style="scale: 1.4;">
        <svg-icon type="mdi" :path="mdiMagnify" />
      </button>
      <button class="user">
        <img src="https://avatars.githubusercontent.com/u/47269261?v=4" alt="User Avatar" />
      </button>
      <a tabindex="0" class="has-icon button" style="scale: 1.3; display: inline-block">
        <svg-icon type="mdi" :path="mdiCog" />
      </a>
    </div>
  </header>
  <main>
    <router-view />
  </main>
</template>

<script>
export default {
  data() {
    return {
      menuState: false,
    }
  }
}
</script>

<style scoped>
header {
  background-color: rgba(217, 217, 217, 0.12);
  color: #000;

  height: 80px;
  box-sizing: border-box;

  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  padding: 1rem 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > .title {
    font-weight: bold;
    letter-spacing: 4px;
    margin-right: -100px;
  }

  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 18px;

    & > .user {
      width: 34px;
      height: 34px;
      & > img {
        border-radius: 50%;
        width: 34px;
        height: 34px;
      }
    }
  }
}
</style>
