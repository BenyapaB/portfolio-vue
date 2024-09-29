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
      linktitle: 'Portfolio Website',
      description: 'This website made by HTML5, CSS and JavaScript blablablabal',
      websiteurl: '',
      githuburl: 'https://github.com/BenyapaB/portfolio-vue'
    },
    {
      id: 2,
      image: 'image2',
      linktitle: 'GIS Landing page website',
      description: 'describe2',
      websiteurl: 'https://benyapab.github.io/gis-landing-page-website/',
      githuburl: 'https://github.com/BenyapaB/gis-landing-page-website'
    },
    {
      id: 3,
      image: 'image3',
      linktitle: 'Games for kids',
      description: 'describe3',
      websiteurl: 'https://benyapab.github.io/games-for-kids.github.io/',
      githuburl: 'https://github.com/BenyapaB/games-for-kids.github.io'
    },
    {
      id: 4,
      image: 'image4',
      linktitle: 'Web template for user',
      description: 'describe4',
      websiteurl: '',
      githuburl: 'https://youtube.com'
    },
    {
      id: 5,
      image: 'image5',
      linktitle: 'Web template for admin',
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
