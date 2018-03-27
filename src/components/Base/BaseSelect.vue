<template>
  <div class="field">
    <label class="label">{{ label }}</label>
    <div class="control">
      <div class="select">
        <label>
          <select v-model="value" @change="item">
            <option v-for="item in menuItems">
              {{ item }}
            </option>
          </select>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "base-select",
    props: ['label', 'menuItems'],
    data(){
      return {
        value: ''
      }
    },
    methods: {
      item(){
        this.$emit('selected', this.value)
      }
    },
    computed: {

    }
  }
</script>

<style scoped>

</style>