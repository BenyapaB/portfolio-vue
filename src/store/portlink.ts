import { ref } from 'vue'
import type Portlink from '@/types/Portlink'
import { defineStore } from 'pinia'

export const usePortlinkStore = defineStore('linklocation', () => {
  const dialog = ref(false)
  // let lastId = ;

  //   const viewPortcard = ref<Portlink>({
  //     id: -1,
  //     image: '',
  //     linktitle: '',
  //     description: '',
  //     url: ''
  //   })

  const links = ref<Portlink[]>([
    {
      id: 1,
      image: 'image1',
      linktitle: 'Landing page website',
      description: 'This website made by HTML5, CSS and JavaScript blablablabal',
      websiteurl: 'https://v2.vuejs.org/v2/examples/modal',
      githuburl: 'https://youtube.com'
    },
    {
      id: 2,
      image: 'image2',
      linktitle: 'Port 2',
      description: 'describe2',
      websiteurl: 'https://dev.to/vincentdorian/vue-33-generic-types-and-when-to-use-them-5egn',
      githuburl: 'https://youtube.com'
    },
    {
      id: 3,
      image: 'image3',
      linktitle: 'Port 3',
      description: 'describe3',
      websiteurl: '',
      githuburl: 'https://youtube.com'
    },
    {
      id: 4,
      image: 'image4',
      linktitle: 'Port 4',
      description: 'describe4',
      websiteurl: '',
      githuburl: 'https://youtube.com'
    },
    {
      id: 5,
      image: 'image5',
      linktitle: 'Port 5',
      description: 'describe5',
      websiteurl: '',
      githuburl: 'https://youtube.com'
    },
    {
      id: 6,
      image: 'image6',
      linktitle: 'Port 6',
      description: 'describe6',
      websiteurl: '',
      githuburl: 'https://youtube.com'
    },
    {
      id: 7,
      image: 'image7',
      linktitle: 'Port 7',
      description: 'describe7',
      websiteurl: '',
      githuburl: 'https://youtube.com'
    },
    {
      id: 8,
      image: 'image8',
      linktitle: 'Port 8',
      description: 'describe8',
      websiteurl: '',
      githuburl: 'https://youtube.com'
    }
  ])
  //   const showPortcard = (linklocation: Portlink) => {
  //     viewPortcard.value = { ...linklocation } //=> return to new object (spread) or JSON.parse(JSON.stringify(user))
  //     dialog.value = true
  //   }

  return { links }
})
