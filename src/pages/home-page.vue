<template>
  <div>
    <AppHeader />

    <AppMain>
      <TravelSection v-for="(originCity, index) in originCities"
         :title="`Pacotes de viagem saindo de ${originCity.name}`"
         :destiny-cities="originCity.destinyCities"
         :key="index"
      />
    </AppMain>
  </div>
</template>

<script>
import AppHeader from '../components/app/app-header.vue'
import AppMain from '../components/app/app-main.vue';
import TravelSection from '../modules/travels/travel-section.vue';

export default {
  components: {
    AppHeader,
    AppMain,
    TravelSection,
  },
  data() {
    return {
      originCities: [
        {
          name: 'São Paulo',
          destinyCities: [
            {
              name: 'Rio de Janeiro',
              image: 'https://cdn.greatsoftwares.com.br/arquivos/paginas_publicadas/gp.buser.com.br-pacotes/imagens/desktop/1661797641-5841403-4280-a5381fee267d9c40997eb0e44dcc103a.jpeg',
              categories: [
                '2 Diárias em Setembro ou Outubro',
                'Hospedagem em apartamento duplo',
                'Café da Manhã ',
                'Transporte ida e volta em ônibus',
              ],
              value: 479,
            },
            {
              name: 'Campos do Jordão',
              image: 'https://cdn.greatsoftwares.com.br/arquivos/paginas_publicadas/gp.buser.com.br-pacotes/imagens/desktop/1661797641-8026926_d-4280-8940d8ea40163939ab19d95a586b5c7c.jpg',
              categories: [
                '2 Diárias em Setembro ou Outubro',
                'Hospedagem em apartamento duplo',
                'Café da Manhã ',
                'Transporte ida e volta em ônibus',
              ],
              value: 200,
            }
          ]
        }
      ],
    }
  }
}
</script>

<style>

</style>