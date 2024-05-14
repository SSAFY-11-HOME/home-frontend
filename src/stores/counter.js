import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  // 1. state
  const count = ref(0)

  // 2. getter
  const doubleCount = computed(() => count.value * 2)

  // 3. action
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})

export const useHouseStore = defineStore('house', () => {

  const houses = ref([
    {
      id: "11110000000001",
      name: "광화문스페이스본",
      floor: "10층",
      area: "10평",
      dealAmount: "19억 4000만원",
      dealDate: "21.01.01",
      lng: "38",
      lat: "128",
      type: "apartment"
    },
    {
      id: "11110000000002",
      name: "광화문스페이스본",
      floor: "20층",
      area: "20평",
      dealAmount: "21억 4000만원",
      dealDate: "22.02.02",
      lng: "38",
      lat: "128",
      type: "apartment"
    },
    {
      id: "11110000000003",
      name: "롯데미도파광화문빌딩",
      floor: "30층",
      area: "30평",
      dealAmount: "13억 4000만원",
      dealDate: "23.03.03",
      lng: "38",
      lat: "128",
      type: "apartment"
    },
    {
      id: "11110000000004",
      name: "김빌라1",
      floor: "14층",
      area: "14평",
      dealAmount: "41억 4000만원",
      dealDate: "21.04.14",
      lng: "38",
      lat: "128",
      type: "villa"
    },
    {
      id: "11110000000005",
      name: "총빌라2",
      floor: "15층",
      area: "51평",
      dealAmount: "5억 4000만원",
      dealDate: "22.11.05",
      lng: "38",
      lat: "128",
      type: "villa"
    },
    {
      id: "11110000000006",
      name: "가산 오피스텔",
      floor: "6층",
      area: "26평",
      dealAmount: "26억 4000만원",
      dealDate: "23.06.16",
      lng: "38",
      lat: "128",
      type: "officetel"
    },
    {
      id: "11110000000007",
      name: "정자 오피스텔",
      floor: "7층",
      area: "17평",
      dealAmount: "7억 4000만원",
      dealDate: "23.03.07",
      lng: "38",
      lat: "128",
      type: "officetel"
    },
    {
      id: "11110000000008",
      name: "롯데 오피스텔",
      floor: "18층",
      area: "18평",
      dealAmount: "18억 4000만원",
      dealDate: "23.03.03",
      lng: "38",
      lat: "128",
      type: "officetel"
    },
    {
      id: "11110000000009",
      name: "삼성 오피스텔",
      floor: "33층",
      area: "33평",
      dealAmount: "33억 4000만원",
      dealDate: "23.03.03",
      lng: "38",
      lat: "128",
      type: "officetel"
    },
  ])


  const getApartmets = computed(() => {
    return houses.value.filter(house => house.type === "apartment"); 
  });

  const getVillas = computed(() => {
    return houses.value.filter(house => house.type === "villa");
  });

  const getOfficetels = computed(() => {
    return houses.value.filter(house => house.type === "officetel");
  });

  return { houses, getApartmets, getVillas, getOfficetels }
})