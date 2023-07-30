<template>

  <v-container>
    <v-row style="margin-left: 0px ; margin-top:10px"><h1>My Services:</h1></v-row>

    <v-row>
      <v-col>
        <v-img :src="BildServices"></v-img>
      </v-col>
      <v-col>

        <div style="margin-bottom: 40px"><h3>Psychotherapy: </h3>
          <div>A broad term that encompasses various techniques of treating mental health problems by talking with a
            psychiatrist, psychologist or other mental health provider.
          </div>
        </div>
        <div style="margin-bottom: 40px"><h3>Counselling: </h3>
          <div>A supportive process designed to help individuals deal with various life issues, such as stress, grief,
            relationship problems, etc.
          </div>
        </div>
        <div><h3>Solution-focused Therapy: </h3>
          <div>A goal-directed collaborative approach that mainly concentrates on a client's present and future
            circumstances and goals rather than past experiences.
          </div>
        </div>

      </v-col>
    </v-row>
  </v-container>
</template>


<script setup lang="ts">
import BildServices from "@/assets/Services.jpg"

</script>


<style scoped>

</style>
