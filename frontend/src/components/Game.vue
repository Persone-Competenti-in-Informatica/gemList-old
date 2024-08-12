<script setup>
import '@jamescoyle/svg-icon'
import { mdiSteam, mdiGog } from '@mdi/js'

const props = defineProps({
  game: {
    type: Object,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  review: {
    type: Object,
    required: false,
    default: null
  },
  selected: {
    type: Boolean,
    required: false,
    default: false,
  },
  setSelected: {
    type: Function,
    required: true,
  }
})

</script>

<template>
  <div class="infos">
<!--  image of the game, external links as ul,   -->
    <img src="https://picsum.photos/200" alt="">
    <ul class="external-links">
<!--   TODO: change the links with variable ones   -->
      <li><a href="https://store.steampowered.com/app/292030/The_Witcher_3_Wild_Hunt/">
        <svg-icon type="mdi" :path="mdiSteam" />
      </a></li>
      <li><a href="https://www.gog.com/game/the_witcher_3_wild_hunt">
        <svg-icon type="mdi" :path="mdiGog" />
      </a></li>
      <li><a href="https://www.epicgames.com/store/en-US/p/the-witcher-3-wild-hunt">
        <svg-icon type="mdi" path="M10 3C6.69 3 4 5.69 4 9v32.24l21 6.3 21-6.3V9c0-3.31-2.69-6-6-6zm1 5h4v3h-4v7h3v3h-3v7h4v3h-4c-1.66 0-3-1.34-3-3V11c0-1.66 1.34-3 3-3m6 0h6c1.66 0 3 1.34 3 3v7c0 1.66-1.34 3-3 3h-3v10h-3zm11 0h3v23h-3zm8 0h3c1.66 0 3 1.34 3 3v4h-3v-4h-3v17h3v-4h3v4c0 1.66-1.34 3-3 3h-3c-1.66 0-3-1.34-3-3V11c0-1.66 1.34-3 3-3m-16 3v7h3v-7zM9 34h4c.55 0 1 .45 1 1v1h-1v-.75c0-.14-.11-.25-.25-.25h-3.5c-.14 0-.25.11-.25.25v3.5c0 .14.11.25.25.25h3.5c.14 0 .25-.11.25-.25V38h-1v-1h2v2c0 .55-.45 1-1 1H9c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1m9 0h1l3 6h-1l-.5-1h-4l-.5 1h-1zm5 0h1l2 4 2-4h1v6h-1v-4l-1.5 3h-1L24 36v4h-1zm7 0h5v1h-4v1.5h2v1h-2V39h4v1h-5zm7 0h4c.55 0 1 .45 1 1v.5h-1v-.25c0-.14-.11-.25-.25-.25h-3.5c-.14 0-.25.11-.25.25v1c0 .14.11.25.25.25H41c.55 0 1 .45 1 1V39c0 .55-.45 1-1 1h-4c-.55 0-1-.45-1-1v-.5h1v.25c0 .14.11.25.25.25h3.5c.14 0 .25-.11.25-.25v-1c0-.14-.11-.25-.25-.25H37c-.55 0-1-.45-1-1V35c0-.55.45-1 1-1m-18.5 1L17 38h3z" />
      </a></li>
    </ul>
  </div>
</template>

<style scoped>
.infos {
  display: flex;
  flex-direction: row;
  align-items: baseline;

  padding-inline: 20px;

  margin-top: -110px;
  z-index: 1000;
  position: relative;

  & > img {
    width: 220px;
    height: 220px;
    border-radius: 6px;
  }

  & > ul {
    list-style-type: none;

    padding-inline: 0;
    margin-block: 0;

    padding-left: 20px;

    display: flex;
    flex-direction: row;
    gap: 20px;

    & > li {
      width: 30px;
      height: 30px;
      line-height: 40px;
      text-align: center;
      border-radius: 6px;
      background: #D9D9D9;
      color: #000;
      scale: 1.3;
    }
  }
}
</style>