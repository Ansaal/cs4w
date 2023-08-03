<template>
  <v-app>
    <v-row justify="center" align-content="center" v-if="mdAndDown" class="header-mobile" :class="xs ? 'isXs' :''"
           color="background">
      <v-col class="navicon-wrapper" :class="xs?'isXs':''">
        <button @click.stop="drawer=!drawer" :class="drawer?'is-active':''" class="hamburger hamburger--slider"
                type="button">
  <span class="hamburger-box">
    <span class="hamburger-inner"></span>
  </span>
        </button>
      </v-col>
      <v-col cols="12">
        <v-row style="width: 100%;" justify="center">
          <router-link to="/" style="color: black;text-decoration: none!important;">
            <div class="title-wrapper">
              <div>
                <h1 class="title">Annekatrin Shaw</h1>
                <span class="subtitle">Counsellor, MC RCC</span>
              </div>
              <span v-if="lgAndUp" class="line-left"/>
              <span v-if="lgAndUp" class="line-right"/>
            </div>
          </router-link>
        </v-row>
      </v-col>
    </v-row>
    <v-row v-else align-content="center" class="header">
      <v-col cols="2" style="margin-top: 16px">
        <v-row>
          <v-btn active-class="no-active" to="/aboutme" variant="text">About</v-btn>
          <v-btn active-class="no-active" to="/services" variant="text">Services</v-btn>
        </v-row>
      </v-col>
      <v-col offset="3">
        <v-row style="width: 100%;" justify="center">
          <router-link to="/" style="color: black;text-decoration: none!important;">
            <div class="title-wrapper">
              <div>
                <h1 class="title" style="min-width: 302px!important">Annekatrin Shaw</h1>
                <span class="subtitle">Counsellor, MC RCC</span>
              </div>
              <div v-if="lgAndUp">
                <span class="line-left"/>
                <span class="line-right"/>
              </div>
            </div>
          </router-link>
        </v-row>
      </v-col>

      <v-spacer/>
      <v-col cols="1">
        <v-row style="margin-top: 8px">
          <v-btn active-class="no-active" to="/contact" class="contact" style="max-width: unset!important;"
                 variant="outlined">Contact
          </v-btn>
        </v-row>
      </v-col>

    </v-row>
    <v-main v-show="!drawer">
      <router-view/>
    </v-main>

    <v-slide-x-transition hide-on-leave>
      <div class="navigation-content" v-show="drawer">
        <v-container style="margin-top:-80px; align-content: center; justify-content: center; text-align: center">
          <router-link style="color: black" to="/aboutme">
            <div class="navitem"><span>About</span></div>
          </router-link>
          <router-link style="color: black" to="/services">
            <div class="navitem">Services</div>
          </router-link>
          <router-link style="color: black" to="/contact">
            <div class="navitem">Contact</div>
          </router-link>
        </v-container>

      </div>
    </v-slide-x-transition>

    <v-footer v-show="!drawer" class="footer" app style="background-color: #D5C6B1; ">
      <v-row wrap justify="space-between">
        <v-col cols="12" sm="12" md="6">
          <div class="footer-title">Annekatrin Shaw</div>
          <div><a style="color: black; text-decoration: none" href="tel:+16045933522">
            phone: 604-593-3522 </a>
          </div>
          <div>
            <a style="color:black;text-decoration: none" href="mailto:counsellingsolutionsforwomen@yahoo.com">
              mail: counsellingsolutionsforwomen@yahoo.com
            </a>
          </div>
          <div>
            fax: 604-593-4480
          </div>
        </v-col>
        <v-spacer/>
        <v-col cols="12" sm="12" md="6" style="text-align: end">
          <div style="display: block">
            <a style="color: black;text-decoration: none" href="https://goo.gl/maps/VhTDA96UiG5G1cP17">11957 80th Ave,
              Suite 201,</a><br/>
          </div>
          <div>
            <a style="color: black;text-decoration: none" href="https://goo.gl/maps/VhTDA96UiG5G1cP17">Delta BC V6C
              0E1</a>
          </div>
        </v-col>

      </v-row>
    </v-footer>

  </v-app>
</template>

<script setup lang="ts">
import {ref, watch} from 'vue'
import {useDisplay} from "vuetify";
import Bild1 from '@/assets/Bild1.jpg'
import {useRoute} from "vue-router";


const drawer = ref(false)
let {mdAndDown, lgAndUp, md, smAndDown, xs, mdAndUp} = useDisplay();
let route = useRoute();
watch(() => route.path, () => {
  drawer.value = false
})

</script>

<style scoped lang="less">


.navigation-content {
  height: calc(100vh - 180px) !important;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  z-index: 1000;
  background-color: #F3E2CA;
}

.navitem {
  font-size: 60px;
  margin-bottom: 50px;
  text-transform: uppercase;

}

.header {
  position: relative;
  max-height: 180px !important;
  padding-left: 3em;
  height: 180px;
  padding-right: 3em;
}

.header-mobile {
  position: relative;
  max-height: 180px !important;
  height: 180px;
  padding-left: 3em;
  padding-right: 3em;
}

.header-mobile.isXs {
  padding-left: 1em;
  padding-right: 1em;
  max-height: 100px !important;
}

.navicon-wrapper {
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  left: 3em;
  width: 70px;
  height: 100%;
}

.navicon-wrapper.isXs {
  left: 1em;
}

.title {
  font-family: span, serif;
  font-size: 40px;
}

.subtitle {
  font-family: span, serif;
  display: flex;
  align-content: center;
  justify-content: center;
  font-size: 10px;
}

.title-wrapper {
  text-align: center;
  position: relative;

  .line-left {
    position: absolute;
    top: 50%;
    left: -10vw;
    height: 0;
    width: calc(10vw - 10px);
    border-bottom: 1px solid black;
  }

  .line-right {
    position: absolute;
    top: 50%;
    right: -10vw;
    height: 0;
    width: calc(10vw - 10px);
    border-bottom: 1px solid black;
  }


}

.footer {
  padding: 3em;
  font-family: span, serif;
  font-size: 18px;
}

.footer-title {
  font-family: span, serif;
  font-size: 32px;
  margin-bottom: 1em;

}

</style>


<style>
.v-btn--active > .v-btn__overlay {
  opacity: 0;
}
</style>
