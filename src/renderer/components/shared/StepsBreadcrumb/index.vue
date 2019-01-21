<template>
  <section class="container">
    <ul class="progress-bar">
      <li
        v-for="(scene, index) in scenes"
        v-bind:key="scene.key"
        :class="
          activeRoute === index ? 'current' :
          activeRoute > index ? 'complete' : ''
        ">
        {{ scene.name }}
      </li>
    </ul>
  </section>
</template>

<script src="./StepsBreadcrumb"/>

<style lang="scss" scoped>
.progress-bar {
  margin-top: 2.5%;
  counter-reset: step;
  -webkit-transition: all 600ms cubic-bezier(0.86, 0, 0.07, 1);
  transition: all 600ms cubic-bezier(0.86, 0, 0.07, 1);

  &.active {
    margin-top: 1.5%;
  }

  li {
    z-index: 0;
    width: 25%;
    float: left;
    color: #fff;
    font-size: .7rem;
    font-weight: bold;
    position: relative;
    text-align: center;
    list-style-type: none;
    text-transform: uppercase;

    &:before {
      color: #004B69;
      font-size: 1rem;
      content: counter(step);
      counter-increment: step;
      width: 30px;
      height: 30px;
      line-height: 30px;
      font-weight: bold;
      display: block;
      text-align: center;
      margin: 0 auto 10px auto;
      border-radius: 50%;
      background-color: #fff;
    }

    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 3px;
      background-color: #fff;
      top: 14px;
      left: -47.5%;
      z-index: -1;
    }

    &:first-child:after {
      content: none;
    }

    &.complete,
    &.current {
      color: white;

      &:before {
        color: white;
        background-color: rgb(130, 197, 21);
      }

      +li:after {
        background-color: rgb(130, 197, 21);
      }
    }

    &.current {
      +li:after {
        background: linear-gradient(110deg, rgb(130, 197, 21), #fff);
      }
    }
  }
}
</style>
