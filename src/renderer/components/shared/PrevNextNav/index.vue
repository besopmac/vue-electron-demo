<template>
  <section class="wrapper-navigation">
    <button class="button is-large" data-type="prev" @click="goPrevious" :class="activeRoute > 0 ? 'active' : ''">
      <span class="icon is-medium">
        <fa-icon icon="angle-left" size="3x" />
      </span>
    </button>

    <button class="button is-large" data-type="next" @click="goNext" :class="activeRoute < 3 ? 'active' : ''">
      <fa-icon icon="angle-right" size="3x" />
    </button>
  </section>
</template>

<script src="./PrevNextNav" />

<style lang="scss" scoped>
.wrapper-navigation {
  top: 0;
  margin: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  padding: 0 15px;
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: space-between;

  >button[data-type] {
    all: unset;
    width: 60px;
    height: 60px;
    display: flex;
    color: #fff;
    position: relative;
    line-height: 60px;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    background-color: rgba(white, 0.05);
    -webkit-transition: all 600ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
    transition: all 600ms cubic-bezier(0.68, -0.55, 0.265, 1.55);

    &:focus,
    &:focus-within, {
      -webkit-backface-visibility: visible;
      backface-visibility: visible;
      animation-duration: .5s;
      animation-name: pulse;
    }
  }

  button[data-type=prev] {
    left: -100px;

    &.active {
      left: 0;
    }
  }

  button[data-type=next] {
    right: -100px;

    &.active {
      right: 0;
    }
  }
}

@keyframes pulse {
	from {
		transform: scale3d(1, 1, 1);
	}

	50% {
    transform: scale3d(1.2, 1.2, 1.2);
    background-color: rgba(white, 0.15);
	}

	to {
		transform: scale3d(1, 1, 1);
	}
}
</style>

