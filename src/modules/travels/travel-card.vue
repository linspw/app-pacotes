<template>
  <BCard>
    <img
      class="travel-card__image"
      :src="image" />

    <div class="travel-card__body">
      <h3 class="travel-card__title">{{ title }}</h3>

      <ul class="travel-card__description b-text--size-small">
        <li v-for="(category, index) in categories" :key="index">
          • {{ category }}
        </li>
      </ul>

      <div class="travel-card__line" />
      
      <div class="travel-card__price-description">
        <div>a partir de</div>

        <span class="travel-card__price">
          <span class="b-text--size-large">R$ {{ value }}</span>

          <span class="b-text--size-small">Em até 12x</span>
        </span>
      </div>

      <div class="b-text--weight-bold b-text--size-small">
        Por pessoa em quarto duplo
      </div>

      <BButton block class="travel-card__price-action-button">Meu Botao 2</BButton>

      <div align="center">
        <a href="" class="travel-card__price-action-link b-text--weight-semibold">Reservar pelo WhatsApp</a>
      </div>
    </div>

  </BCard>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
    categories: {
      required: true,
      type: Array,
    },
    image: {
      required: true,
      type: String,
    }
  }
}
</script>

<style>
.travel-card__image {
  margin: calc(-1 * 16px);
  width: calc(100% + calc(2* 16px));
  margin-bottom: 16px;
}

.travel-card__title {
  font-size: 19px;
  color: rgb(92,0,110);
  margin-bottom: 8px;
  margin-top: 0;
}

.travel-card__description {
  margin: 0;
  font-weight: 700;
  color: rgb(112,112,112);
  padding-inline-start: 0px;
  list-style-type: none;
  gap: 4px;
  display: flex;
  flex-direction: column;
}

/* .travel-card__description > li {
  mar
} */

.travel-card__line {
  width: 40px;
  height: 1px;
  background-color: black;
  margin-top: 4px;
  margin-bottom: 4px;
}

.travel-card__price-description {
  color: rgb(241,16,117);
  font-weight: 700;
}

.travel-card__price {
  display: flex;
  justify-content: space-between;
}

.travel-card__price-action-button {
  margin-top: 16px;
  margin-bottom: 16px;
}

.travel-card__price-action-link {
  color: rgb(0,164,255);
  text-decoration: none;
  font-size: 14px;
}

.b-text {

}

.b-text--size-small {
  font-size: 12px;
}

.b-text--size-medium {
  font-size: 16px
}

.b-text--size-large {
  font-size: 20px;
}

.b-text--weight-normal {
  font-weight: 400;
}

.b-text--weight-medium {
  font-weight: 500;
}

.b-text--weight-semibold {
  font-weight: 600;
}

.b-text--weight-bold {
  font-weight: 700;
}
</style>