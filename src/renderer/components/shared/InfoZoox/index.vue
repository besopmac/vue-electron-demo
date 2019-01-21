<template>
  <a class="button is-light is-outlined is-inverted is-small">
    <span class="icon is-small">
      <fa-icon icon="dot-circle" size="lg" />
    </span>
  </a>
</template>

<script src="./InfoZoox"/>

<style lang="scss" scoped>
.button {
  left: 5px;
  bottom: 5px;
  position: absolute;
}
.button.is-light.is-inverted.is-outlined {
  color: rgba(#fff, 0.5);
  border-color: transparent;
  transition: color 0.75s ease-in;
}
</style>
