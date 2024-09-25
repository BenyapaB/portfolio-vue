import { ref } from 'vue'
import type Portlink from '@/types/Portlink'
import { defineStore } from 'pinia'

export const usePortlinkStore = defineStore('linklocation', () => {
  const dialog = ref(false)
  // let lastId = ;

  const viewPortcard = ref<Portlink>({
    id: -1,
    image: '',
    linktitle: '',
    description: '',
    url: ''
  })

  const links = ref<Portlink[]>([
    { id: 1, image: 'image1', linktitle: 'Port 1', description: 'describe1', url: 'urllocation1' },
    { id: 2, image: 'image2', linktitle: 'Port 2', description: 'describe2', url: 'urllocation2' },
    { id: 3, image: 'image3', linktitle: 'Port 3', description: 'describe3', url: 'urllocation3' },
    { id: 4, image: 'image4', linktitle: 'Port 4', description: 'describe4', url: 'urllocation4' }
  ])
  const showPortcard = (linklocation: Portlink) => {
    viewPortcard.value = { ...linklocation } //=> return to new object (spread) or JSON.parse(JSON.stringify(user))
    dialog.value = true
  }

  return { dialog, viewPortcard, links, showPortcard }
})
