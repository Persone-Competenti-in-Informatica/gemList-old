<script setup>
import '@jamescoyle/svg-icon'
import { mdiMenu, mdiClose, mdiMagnify, mdiCog } from "@mdi/js";

import { ref } from 'vue'

const menuState = ref(false)

const user = ref({
  name: '',
  avatar: ''
})

// TODO: remove after tests
const selectedItem = ref({
  type: 'reviews',
  item: {
    id: 1,
    game: {
      title: 'The Witcher 3: Wild Hunt',
      image: "https://avatars.githubusercontent.com/u/37927709?v=4",
      description: 'The Witch'
    },
    user: 'reloia',
    rating: 5,
    selected: false,
  }
});
</script>

<template>
  <header :class="{ expanded: selectedItem.type }">
    <div class="content">
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
          <img :src="user.avatar || ''" alt="User Avatar" />
        </button>
        <a tabindex="0" class="has-icon button" style="scale: 1.3; display: inline-block">
          <svg-icon type="mdi" :path="mdiCog" />
        </a>
      </div>
    </div>
    <divider v-if="selectedItem.type" />
    <div v-if="selectedItem.type" :style="{ '--backgroundImage': 'url(' + selectedItem.item.game.image + ')' }">
      <h3>{{ selectedItem.item.game.title }}</h3>
    </div>
  </header>
  <left-menu :class="{ expanded: menuState }">
    <router-link to="/">gemList</router-link>
    <router-link to="/">Home</router-link>
    <router-link to="/explore">Explore</router-link>
    <router-link to="/calendar">Calendar</router-link>
    <divider />
    <router-link to="/library">Library</router-link>
    <router-link to="/community">Community</router-link>
    <router-link to="/friends">Friends</router-link>
  </left-menu>
  <main>
    <router-view />
  </main>
</template>

<style scoped>
header {
  background-color: rgba(217, 217, 217, 0.12);
  color: #000;

  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  display: flex;
  flex-direction: column;

  position: relative;
  z-index: 1;

  transition: .8s all;

  & > .content {
    height: 80px;
    box-sizing: border-box;

    position: relative;

    padding: 1rem 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 80px;

    z-index: 1;

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

  &.expanded {
    height: 240px;

    --backgroundImage: url("https://avatars.githubusercontent.com/u/37927709?v=4");
    overflow: hidden;

    color: #fff;

    &:after {
      position: absolute;
      top: 0;
      left: 0;

      width: 100%;
      height: 100%;
      content: '';

      background-image: var(--backgroundImage);
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      filter: brightness(0.3) blur(24px);
      transform: scale(1.1);

      z-index: -1;
    }

    & > .content:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      max-width: 80%;
      height: 1px;
      background-color: #fff;
      z-index: 1;
    }

    & > div:nth-child(3) {
      padding: 1rem 4rem;

      margin-top: auto;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: baseline;
      z-index: 1;

      & > h3 {
        font-size: 1.4rem;
        font-weight: bold;
      }
    }
  }
}

main {
  max-width: 1200px;
  margin-inline: auto;
}

left-menu {
  display: block;

  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;

  width: 100%;
  max-width: 320px;

  height: calc(100% - 80px);
  margin-top: auto;

  background-color: rgba(217, 217, 217, 0.24);
  z-index: 2;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: .8s all;

  backdrop-filter: blur(10px);

  transform: translateX(-100%);

  &.expanded {
    transform: translateX(0);
  }

  & > a {
    display: block;
    padding: 1rem 2rem;

    width: 100%;

    text-decoration: none;

    box-sizing: border-box;

    position: relative;

    &:first-of-type {
      text-align: center;
      letter-spacing: 2px;
      font-weight: bold;
      font-size: 1.1rem;

      margin-bottom: 10px;

      &:after {
        content: '';
        display: block;
        width: 60%;
        height: 1px;
        background-color: #000;

        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
      }
    }


    &:not(:first-of-type) {
      transition: .2s all;

      &.router-link-active {
        background-color: #D9D9D9;
        color: #000;
        font-weight: bold;
      }

      &:hover {
        background-color: rgba(0, 0, 0, 0.1);
      }
    }
  }

  & > divider {
    display: block;
    height: 1px;
    width: 60%;
    margin-inline: auto;

    background: black;
  }
}
</style>
