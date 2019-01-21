<template>
  <div class="keyboard-wrapper" :class="{'active': visible}">
    <vue-touch-keyboard id="keyboard" :layout="layout" :cancel="hide" :accept="accept" :input="input" :next="next" />
  </div>
</template>

<script src="./TouchKeyboard.js" />

<style lang="scss"></style>
