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
    }
  },
}
</script>

<template>
  <div class="explore-item">
    <img src="https://via.placeholder.com/150" alt="Game Cover" />
    <div class="info">
      <h3>{{ game.title }}</h3>
      <p>{{ type === 'reviews' ? review.user : game.description }}</p>
      <div v-if="review.user" class="stars">
        <svg-icon v-for="i in 5" type="mdi" :path="mdiStar" />
      </div>
    </div>
  </div>

</template>

<style scoped>
  .explore-item {
    width: 200px;
    height: 200px;

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
        font-size: 1.1rem;
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