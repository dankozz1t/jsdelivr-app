<script setup lang="ts">
import styles from './Footer.module.scss';
</script>

<template>
  <v-footer class="flex justify-center align-end">
    <v-card flat tile>
      <v-card-title class="teal">
        <v-btn class="mx-1 mx-sm-4" icon href="https://www.linkedin.com/in/dankozz1/">
          <v-icon size="24px"> mdi-linkedin </v-icon>
        </v-btn>

        <v-btn class="mx-1 mx-sm-4" icon href="https://github.com/dankozz1t">
          <v-icon size="24px"> mdi-github </v-icon>
        </v-btn>

        <v-btn class="mx-1 mx-sm-4" icon href="mailto:alexdankoxxl@gmail.com">
          <v-icon size="24px"> mdi-email </v-icon>
        </v-btn>

        <v-btn class="mx-1 mx-sm-4" icon href="https://t.me/dankozz1">
          <v-icon size="24px"> mdi-send-circle </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="d-flex flex-column align-center ga-3 flex-sm-row">
        <p>{{ new Date().getFullYear() }} — <strong>Alex-Taylor Danko</strong></p>

        <div :class="styles.box">
          <img :class="styles.image" src="../../../public/pudge.webp" alt="pudge" />
        </div>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
