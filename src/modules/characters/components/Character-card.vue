<script setup lang='ts'>
import { Character } from '../../../types/Character.ts'

type CharacterCardProps = Omit<Character, 'id' | 'episode' | 'created' | 'url'>

defineProps<CharacterCardProps>()
</script>

<template>
  <Card :class='$style.card'>
    <template #header>
      <img :class='$style.cardImage' alt='{{$props.name}} image' :src='$props.image' />
    </template>
    <template #title>{{ $props.name }}</template>
    <template #subtitle>
      <span
        :class='[$style.statusIcon, $style[$props.status]]'>
      </span>
      {{ $props.status }} - {{ $props.species }} {{ $props.type === '' ? '' : '- ' + $props.type }}
    </template>
    <template #content>
      <ul>
        <li :class='$style.contentListItem'>
          <p>
            Last known location:
          </p>
          <p>
            {{ $props.location.name }}
          </p>
        </li>
        <li :class='$style.contentListItem'>
          <p>
            First seen in:
          </p>
          <p>
            {{ $props.origin.name }}
          </p>
        </li>
      </ul>
    </template>
  </Card>
</template>

<style module>
.card {
  width: 320px;
  padding: 10px;
  background-color: var(--surface-d);
}

.contentListItem {
  margin-top: 6px;
  list-style: none;
}

.contentListItem :last-child {
  color: rgba(255, 255, 255, 0.6);
}

.statusIcon {
  display: inline-block;
  height: 0.5rem;
  width: 0.5rem;
  margin-right: 0.25rem;
  margin-bottom: 0.1rem;
  border-radius: 50%;
}

.cardImage {
  border-radius: 6px;
}

.Dead {
  background: #D63D2EFF;
}

.unknown {
  background: #9E9E9EFF;
}

.Alive {
  background: #55CC44FF;
}
</style>