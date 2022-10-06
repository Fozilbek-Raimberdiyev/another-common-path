// import { defineStore } from 'pinia'

// export const useCounterStore = defineStore({
//   id: 'counter',
//   state: () => ({
//     counter: 0
//   }),
//   getters: {
//     doubleCount: (state) => state.counter * 2
//   },
//   actions: {
//     increment() {
//       this.counter++
//     }
//   }
// })

import {defineStore} from "pinia"

export const useCounterStore = defineStore("counter", {
  state : () => {
    return {
      firstName: "Fozilbek",
      lastName: "Raimberdiyev",
      job: "Front-end developer"
    }
  },
  getters : {

  },
  actions : {
    
  }
})
