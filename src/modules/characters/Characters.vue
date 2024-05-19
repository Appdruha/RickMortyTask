<script setup lang='ts'>
import { onMounted, ref } from 'vue'
import { getAll } from '../../api/api.ts'
import { Character } from '../../types/Character.ts'
import CharacterCard from './components/Character-card.vue'

const charactersData = ref<null | Character[]>(null)

onMounted(async () => {
  const { results } = await getAll()
  charactersData.value = results
})
</script>

<template>
  <div :class='$style.cardsContainer'>
    <CharacterCard
      v-for='character in charactersData'
      :key='character.id'
      :image='character.image'
      :gender='character.gender'
      :location='character.location'
      :name='character.name'
      :origin='character.origin'
      :species='character.species'
      :status='character.status'
      :type='character.type'
    />
  </div>
</template>

<style module>
.cardsContainer {
  margin: 24px;
  display: inline-flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px;
}
</style>
