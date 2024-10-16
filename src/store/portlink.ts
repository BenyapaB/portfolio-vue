import { ref } from 'vue'
import type Portlink from '@/types/Portlink'
import { defineStore } from 'pinia'

export const usePortlinkStore = defineStore('linklocation', () => {
  const links = ref<Portlink[]>([
    {
      id: 1,
      image: 'src/assets/imgs/img-portfolio.png',
      linktitle: 'Portfolio Website',
      description:
        'This website was developed using Vue.js to present my works, making it more convenient and accessible for browsing.',
      websiteurl: '',
      githuburl: 'https://github.com/BenyapaB/portfolio-vue'
    },
    {
      id: 2,
      image: 'src/assets/imgs/gis-index.png',
      linktitle: 'GIS Landing page website',
      description:
        'This website is a website for products presentation, developed using HTML5 CSS and JavaScript.',
      websiteurl: 'https://benyapab.github.io/gis-landing-page-website/',
      githuburl: 'https://github.com/BenyapaB/gis-landing-page-website'
    },
    {
      id: 3,
      image: 'src/assets/imgs/img-game-for-kid.png',
      linktitle: 'Games for kids',
      description:
        'This website is one of the course projects, creating educational games suitable for children aged 3-5 years.',
      websiteurl: 'https://benyapab.github.io/games-for-kids.github.io/',
      githuburl: 'https://github.com/BenyapaB/games-for-kids.github.io'
    },
    {
      id: 4,
      image: 'src/assets/imgs/img-calbmi.png',
      linktitle: 'BMI Calculator',
      description:
        'This website was used to calculate BMI value and corresponding weight status while taking age into consideration.',
      websiteurl: 'https://cal-bmi-43aa6.web.app/',
      githuburl: 'https://github.com/BenyapaB/bmi-calculator-website'
    },
    {
      id: 5,
      image: 'src/assets/imgs/image-pricing-page.png',
      linktitle: 'Pricing Page',
      description:
        'This website was developed using HTML5 CSS and JavaScript to select different prices or levels for products or services.',
      websiteurl: 'https://benyapab.github.io/pricing-page.github.io/',
      githuburl: 'https://github.com/BenyapaB/gis-landing-page-website'
    }
  ])
  //   const showPortcard = (linklocation: Portlink) => {
  //     viewPortcard.value = { ...linklocation } //=> return to new object (spread) or JSON.parse(JSON.stringify(user))
  //     dialog.value = true
  //   }

  return { links }
})
