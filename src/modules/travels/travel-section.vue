<template>
  <div class="travel-section">
    <h2 class="travel-section__title">{{ title }}</h2>
  
    <div class="travel-section__grid">
      <TravelCard
        v-for="(destinyCity, index) in destinyCities"
        :key="index"
        :title="destinyCity.name"
        :image="destinyCity.image"
        :categories="destinyCity.categories"
        :value="destinyCity.value"
      />
    </div>
  </div>
</template>

<script>
import TravelCard from './travel-card.vue';

export default {
  components: {
    TravelCard,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    destinyCities: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style>
.travel-section {

}

.travel-section__title {
  color: #f11075;
}

.travel-section__grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;
}
</style>