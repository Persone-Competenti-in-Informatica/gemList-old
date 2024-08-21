<script setup>
// TODO: make logged in user get loaded from the backend and stored in the Vuex store
import { ref } from 'vue'
import ExploreItem from "./ExploreItem.vue";

const user = ref({
  name: '',
  avatar: ''
})

// GLOBAL SELECTED ITEM - is the item that is currently selected in the explore section (reviews, games, etc.)
// it will be shown in the header

const selectedItem = ref({
  type: '',
  item: null,
});

function setSelectedItem(type, item) {
  selectedItem.value = { type, item };
}

// REVIEWS
const reviews = ref([
  {
    id: 1,
    game: {
      title: 'The Witcher 3: Wild Hunt',
      image: "",
      description: 'The Witch'
    },
    user: 'reloia',
    rating: 5,
    selected: false,
  },
  {
    id: 2,
    game: {
      title: 'The Witcher 3: Wild Hunt',
      image: "",
      description: 'The Witch'
    },
    user: 'reloia',
    rating: 5,
    selected: false,
  },
]);

function setSelectedReview(review) {
  setSelectedItem('reviews', review);
  reviews.value.forEach(r => r.selected = r.id === review.id);
}

// setting the first review as selected by default
reviews.value[0].selected = true;

// GAMES

const games = ref([
  {
    id: 1,
    title: 'The Witcher 3: Wild Hunt',
    description: 'The Witcher 3: Wild Hunt is a story-driven, next-generation open world role-playing game set in a visually stunning fantasy universe full of meaningful choices and impactful consequences. In The Witcher, you play as Geralt of Rivia, a monster hunter tasked with finding a child from an ancient prophecy.',
    image: "",
    selected: false,
  },
  {
    id: 2,
    title: 'The Witcher 3: Wild Hunt',
    description: 'The Witcher 3: Wild Hunt is a story-driven, next-generation open world role-playing game set in a visually stunning fantasy universe full of meaningful choices and impactful consequences. In The Witcher, you play as Geralt of Rivia, a monster hunter tasked with finding a child from an ancient prophecy.',
    image: "",
    selected: false,
  },
]);

function setSelectedGame(game) {
  setSelectedItem('games', game);
  games.value.forEach(g => g.selected = g.id === game.id);
}

// setting the first game as selected by default
games.value[0].selected = true;

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
      <ExploreItem v-for="review in reviews" :setSelected="setSelectedReview" :selected="review.selected" :key="review.id" :game="review.game" :type="'reviews'" :review="review" />
    </div>
  </div>
  <div class="explore" data-type="games">
    <span>Popular Games</span>
    <div class="container">
      <ExploreItem v-for="game in games" :setSelected="setSelectedGame" :selected="game.selected" :key="game.id" :game="game" :type="'games'" />
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
  margin-block: 20px;

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
  padding: 10px;

  & > span {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 16px;
  }

  & > .container {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    overflow: hidden;

    gap: 20px;
  }
}

</style>