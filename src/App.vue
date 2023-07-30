<template>
  <v-app id="inspire">
    <v-navigation-drawer v-if="mdAndDown" class="bg-background" v-model="drawer">
      <v-list color="background">
        <v-list-item href="#/aboutme" prepend-icon="mdi-account" title="About me">
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item href="#/services" prepend-icon="mdi-book-open-variant" title="Services">
        </v-list-item>
        <v-divider/>
        <v-list-item href="#/contact" prepend-icon="mdi-phone" title="Contact">
        </v-list-item>
      </v-list>

    </v-navigation-drawer>
    <v-app-bar color="background">
      <v-app-bar-nav-icon v-if="mdAndDown" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title><a href="/" style="color: black;text-decoration: none"> Counselling Solutions for Women </a>
      </v-toolbar-title>

      <v-btn href="#/aboutme" variant="tonal" style="margin-right: 12px" v-if="lgAndUp"> About me</v-btn>
      <v-btn href="#/services" variant="tonal" style="margin-right: 12px" v-if="lgAndUp"> Services</v-btn>
      <v-btn href="#/contact" variant="tonal" v-if="lgAndUp"> Contact</v-btn>

    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
    <v-footer v-if="lgAndUp" app height="45" style="background-color: #D5C6B1; ">
      <v-row justify="space-between">
        <span> Annekatrin Shaw <br> Counsellor, MC RCC </span>
        <a href="tel:+16045933522" style="color: black"><span> Tel: 604-593-3522</span></a>
        <span> Fax: 604-593-4480</span>
        <a target="_blank" href="https://goo.gl/maps/VhTDA96UiG5G1cP17" style="color: black"><span> Suite 201, 11957 80th Ave.<br> Delta BC V6C 0E1</span></a>


      </v-row>
    </v-footer>
    <v-footer v-if="md" app height="86" style="background-color: #D5C6B1; ">
      <v-row justify="space-between">
        <span> Annekatrin Shaw <br> Counsellor, MC RCC </span>
        <a href="tel:+16045933522" style="color: black"><span> Tel: 604-593-3522</span></a>
        <span> Fax: 604-593-4480</span>
        <a target="_blank" href="https://goo.gl/maps/VhTDA96UiG5G1cP17" style="color: black"><span> Suite 201, 11957 80th Ave.<br> Delta BC V6C 0E1</span></a>


      </v-row>
    </v-footer>
    <v-footer v-if="smAndDown" app height="145" style="background-color: #D5C6B1; ">
      <v-col>
        <div> Annekatrin Shaw, Counsellor, MC RCC</div>
        <a href="tel:+16045933522" style="color: black">
          <div> Tel: 604-593-3522</div>
        </a>
        <div> Fax: 604-593-4480</div>
        <a target="_blank" href="https://goo.gl/maps/VhTDA96UiG5G1cP17" style="color: black">
          <div> Suite 201, 11957 80th Ave.</div>
        </a>
        <a target="_blank" href="https://goo.gl/maps/VhTDA96UiG5G1cP17" style="color: black">
          <div> Delta BC V6C 0E1</div>
        </a>


      </v-col>
    </v-footer>

  </v-app>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {useDisplay} from "vuetify";
import Bild1 from '@/assets/Bild1.jpg'


const drawer = ref(false)
let {mdAndDown, lgAndUp, md, smAndDown} = useDisplay();
</script>
