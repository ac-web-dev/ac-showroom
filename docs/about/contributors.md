---
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://github.com/wirewl-08o3.png',
    name: 'cris',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/wirewl-08o3' }
    ]
  },
  {
    avatar: 'https://github.com/lint069.png',
    name: 'lint0',
    title: 'Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/lint069' }
    ]
  },
  {
    avatar: 'https://github.com/3mil-iO.png',
    name: 'Emil',
    title: 'Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/3mil-iO' },
      { icon: 'discord', link: 'https://discord.gg/Szd4nu4wEp'}
    ]
  }
]

const authors = []
const creators = []
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Contributors
    </template>
    <template #lead>
      The development of this showroom is guided by a small team, with contributions
      from numerous individuals.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers :members="members" />
</VPTeamPage>
