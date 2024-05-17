<script setup>

import { useRoute } from 'vue-router';
import { selectAllById } from '@/api/house';

const route = useRoute();

selectAllById(route.params.id,
    (data) => {
        console.log(data);
    },
    (error) => {
        console.log(error);
    }
)

</script>

<template>
  <div>
    <h1>detail view</h1>
    {{ $route.params.id }}
  </div>
</template>

<style scoped>

</style>