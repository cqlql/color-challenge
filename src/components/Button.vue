<template>
  <button class="j-button" :class="type" v-bind="$attrs"><slot /></button>
</template>

<script lang="ts" setup>
defineProps<{
  type?: string
}>()
</script>

<style lang="scss">
.j-button {
  border: 0;
  color: #fff;
  background-color: #00b7ee;
  padding: 12px 30px;
  border-radius: 100px;
  line-height: 1;
  outline: none;
  box-shadow: 0 1px 4px #929292;
  box-shadow: 0 4px 6px 0 rgba(2, 25, 44, 0.21);
  font-size: 18px;

  &:hover {
    background-color: #00b6eee7;
  }
  &:active {
    background-color: #00b0e4;
    color: #007294;
    text-shadow: 0 1px 0 hsla(0, 0%, 100%, 0.3);
    text-decoration: none;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2);
  }

  &.green {
    background-color: #67c23a;

    &:hover {
      background-color: #85ce61;
    }
    &:active {
      background-color: #3db700;
      color: #309100;
    }
  }

  &.danger {
    background-color: #ff4351;

    &:hover {
      background-color: #ff7680;
    }
    &:active {
      background-color: #f64c59;
      color: #ff1022;
    }
  }

  &.info {
    background-color: #a6a6a6;

    &:hover {
      background-color: #a6a6a6e7;
    }
    &:active {
      background-color: #9e9e9e;
      color: #464646;
    }
  }
}
</style>
