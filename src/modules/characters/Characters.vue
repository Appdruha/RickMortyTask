<script setup lang='ts'>
import { onMounted, ref, watch } from 'vue'
import { getCharactersPage } from '../../api/api.ts'
import { Character } from '../../types/Character.ts'
import CharacterCard from './components/Character-card.vue'
import { PaginationInfo } from '../../types/Pagination-info.ts'
import { PageState } from 'primevue/paginator'
import FilterForm from './components/Filter-form.vue'

type StatusObj = {
  status: string
}

const charactersData = ref<null | Character[]>(null)
const paginationInfo = ref<null | Omit<PaginationInfo, 'prev' | 'next'>>(null)
const filterOptions = ref<{name: string, status: string}>({name: '', status: ''})
const currentPage = ref<number>(0)

onMounted( () => {
  setCharactersAndPaginationData(1, filterOptions.value.name, filterOptions.value.status)
})

watch(filterOptions, () => {
  setCharactersAndPaginationData(1, filterOptions.value.name, filterOptions.value.status)
  currentPage.value = 0
})

watch(currentPage, () => {
  if (currentPage.value !== 0) {
    setCharactersAndPaginationData(currentPage.value + 1, filterOptions.value.name, filterOptions.value.status)
  }
})

const setCharactersAndPaginationData = async (page: number, name?: string, status?: string) => {
  const { results, info } = await getCharactersPage(page, name, status)
  charactersData.value = results
  const {pages, count} = info
  paginationInfo.value = {pages, count}
}

const setFilterOptions = (name: string, statusObjects: StatusObj) => {
  filterOptions.value = {name, status: statusObjects.status}
}
</script>

<template>
  <FilterForm @get-form-state='(name: string, status: StatusObj) => setFilterOptions(name, status)'
  />
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
  <div :class='$style.paginatorContainer'>
    <Paginator
      v-if='paginationInfo'
      :first='currentPage * Math.ceil(paginationInfo.count / paginationInfo.pages)'
      :rows='Math.ceil(paginationInfo.count / paginationInfo.pages)' :totalRecords='paginationInfo.count'
      @page='(event: PageState) => currentPage = event.page'
    >
    </Paginator>
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

.paginatorContainer {
  margin-bottom: 24px;
}
</style>
