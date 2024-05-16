import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useHouseStore = defineStore('house', () => {

  const houses = ref([])

  const getHouses = computed(() => {
    return houses.value;
  });

  const getApartmets = computed(() => {
    return houses.value.filter(house => house.type === "apartment"); 
  });

  const getVillas = computed(() => {
    return houses.value.filter(house => house.type === "villa");
  });

  const getOfficetels = computed(() => {
    return houses.value.filter(house => house.type === "officetel");
  });

  function setHouses(newHouses) {
    houses.value = newHouses;
  }

  return { houses, getHouses, getApartmets, getVillas, getOfficetels, setHouses }

})


export const useKakaoStore = defineStore('kakao', () => {
  const lat = ref(37.501486255964835);
  const lng = ref(127.03780378177515);
  return { lat, lng }
})