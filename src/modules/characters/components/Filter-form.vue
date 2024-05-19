<script setup lang='ts'>

import { ref } from 'vue'

defineEmits<{
  (e: 'getFormState', name: string, statuses: { status: string, value: string }[]): void
}>()

const nameInputValue = ref<string>('')
const statusSelectValue = ref<{ status: string }>()
const statuses = ref<{ status: string }[]>([
  { status: 'unknown' },
  { status: 'Dead' },
  { status: 'Alive' },
])
</script>

<template>
  <form :class='$style.formContainer'>
    <h3 :class='$style.heading'>Filter</h3>
    <div :class='$style.inputsContainer'>
      <FloatLabel>
        <InputText id='name' v-model='nameInputValue' :class='$style.input' />
        <label for='name' :class='$style.label'>Name</label>
      </FloatLabel>
      <FloatLabel>
        <Dropdown v-model='statusSelectValue' :options='statuses' optionLabel='status' :class='$style.input' id='status' />
        <label for='status' :class='$style.label'>Status</label>
      </FloatLabel>
    </div>
    <Button
      @click.prevent="$emit('getFormState', nameInputValue, statusSelectValue)"
      :class='$style.submitBtn'
      type='submit'
    >
      Confirm
    </Button>
  </form>
</template>

<style module>
.formContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
}

.heading {
  margin-top: 12px;
}

.inputsContainer {
  gap: 16px;
  display: flex;
  margin-top: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

.input {
  height: 32px;
  width: 200px;
  padding-left: 8px;
  line-height: 32px;
}

.label {
  line-height: 0;
}

.submitBtn {
  margin-top: 12px;
  width: 80px;
  height: 32px;
  font-size: 16px;
  font-weight: bold;
  justify-content: center;
}
</style>

