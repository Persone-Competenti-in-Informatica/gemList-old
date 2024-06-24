<script setup>
import { ref } from 'vue'
import { mdiStar } from '@mdi/js'
</script>

<script>
export default {
  name: "ExploreItem",
  props: {
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
  },
}
</script>

<template>
  <div class="explore-item" :class="{ selected }" @click="setSelected( type === 'reviews' ? review : game )">
    <img :src="game.image" alt="Game Image" />
    <div class="info">
      <h3>{{ game.title }}</h3>
      <p v-if="review">{{ review.user }}</p>
      <div v-if="review" class="stars">
        <svg-icon v-for="i in 5" type="mdi" :path="mdiStar" />
      </div>
    </div>
  </div>

</template>

<style scoped>
  .explore-item {
    width: 170px;
    height: 170px;
    cursor: pointer;

    &.selected {
      width: 200px;
      height: 200px;

      & > .info > h3 {
        font-size: 1.2rem;
      }
    }

    &:hover {
      outline: 4px solid #fff;
    }

    position: relative;

    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    & > .info {
      position: absolute;
      bottom: 0;
      left: 0;
      color: #000;
      padding: 3px;

      & > h3 {
        font-size: 1rem;
        font-weight: bold;
        margin: 0;
      }

      & > .stars {
        display: flex;
        flex-direction: column;

        position: absolute;
        bottom: 0;
        right: 0;

        & > svg-icon {
          height: 24px;
        }
      }
    }
  }
</style>