<template>
  <div class="note">
    <span class="close-note">
      <i class="fas fa-times"></i>
    </span>

    <div class="detail-note">
      <h3 class="title-note">Coisas pra fazer</h3>

      <p class="description-note">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.
      </p>
    </div>

    <p class="date-note">12 de Jan de 2021</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Note',
})
</script>
<style scoped lang="scss">
@import '../styles/variables.scss';

$module: 'note';

.#{$module} {
  position: relative;
  min-height: 231px;
  margin: 20px 0;
  padding: 16px;
  border-radius: 16px;

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  color: white;
  background: linear-gradient(180deg, #3a384f 0%, rgba(49, 48, 66, 0.51) 100%);
  font-family: Nunito;
  letter-spacing: -0.03em;
}

.close-#{$module} {
  position: absolute;
  top: -11px;
  right: -11px;

  width: 30px;
  height: 30px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: $secondary-color;

  &:hover {
    cursor: pointer;
    background-color: darken($secondary-color, 9%);
  }
}

.detail-#{$module} {
  padding-bottom: 16px;

  display: flex;
  flex-direction: column;
  flex-grow: 1;

  .title-#{$module} {
    font-weight: 900;
  }

  .description-#{$module} {
    margin-top: 4px;
    font-weight: 500;
  }
}

.date-#{$module} {
  font-weight: 300;
  font-size: 12px;
}
</style>
