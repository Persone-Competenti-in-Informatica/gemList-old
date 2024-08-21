<script setup>
import '@jamescoyle/svg-icon'
import { mdiMenu, mdiClose, mdiMagnify, mdiCog, mdiHeartPlus } from "@mdi/js";

import { useUserStore } from '@/store/user'
import { useHeaderStore } from '@/store/header'

const user = useUserStore()
const header = useHeaderStore()

console.log(user)

</script>

<template>
{{ user.username }}
  <button @click="user.setUser({
    username: 'test',
    email: ''
  })">
    Change username to "test"
  </button>
</template>

<style scoped>

</style>
