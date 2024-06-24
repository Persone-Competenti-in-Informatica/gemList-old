<script setup>
// TODO: make logged in user get loaded from the backend and stored in the Vuex store
import { ref } from 'vue'
import ExploreItem from "./ExploreItem.vue";

const user = ref({
  name: '',
  avatar: ''
})

// REVIEWS
const reviews = ref([
  {
    id: 1,
    game: {
      title: 'The Witcher 3: Wild Hunt',
      description: 'The Witch'
    },
    user: 'John Doe',
    rating: 5
  },
]);

</script>

<template>
 <div v-if="!user.name" class="login-banner">
   <h3>Track, Share and Review your favorite games</h3>
   <p>Join our Community, share your thoughts on the games you played or just explore new games you have never heard about</p>
   <div>
      <router-link to="/login" class="button">Login</router-link>
      <router-link to="/register" class="button">Register</router-link>
   </div>
 </div>
  <div class="explore" data-type="reviews">
    <span>Recent Reviews</span>
    <div class="container">
      <ExploreItem v-for="review in reviews" :key="review.id" :game="review.game" :type="'reviews'" :review="review" />
    </div>
  </div>
</template>

<style scoped>
.login-banner {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  width: fit-content;
  padding: 16px 12px;
  border-radius: 12px;
  background: rgba(217, 217, 217, 0.12);

  margin-inline: auto;
  margin-top: 40px;

  & > h3 {
    font-size: 1.7rem;
    font-weight: bold;
    margin-bottom: 8px;
  }

  & > p {
    font-size: 1rem;
    margin-bottom: 16px;
  }

  & > div {
    display: flex;
    flex-direction: row;
    gap: 8px;
    margin-top: 24px;

    & > .button {
      padding: 4px 48px;
      border-radius: 8px;

      font-weight: bold;
      background: var(--primary);
    }
  }
}

.explore {
  margin-top: 40px;

  & > span {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 16px;
  }

  & > .container {
    display: flex;
    flex-direction: row;
    overflow: hidden;
  }
}

</style>