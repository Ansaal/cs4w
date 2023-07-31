<template>
  <v-container>
    <v-row style="margin-left: 0px ; margin-top:10px"><h1>About Me:</h1></v-row>
    <v-row>
      <v-col sm="12" md="6" order-sm="last" order-md="first">
        <v-img :src="BildAnnekatrin"></v-img>
      </v-col>
      <v-col>
        <p class="section">Hello and welcome, I'm Annekatrin Shaw.</p>

        <p class="section">In my 25-year career as a Registered Nurse and Registered Clinical Counsellor, I have
          dedicated myself to
          helping women navigate life's various challenges. From anxiety and low mood to relationship issues and stress,
          I have developed a deep understanding and specialism in supporting women of all ages.</p>

        <p class="section">Life is filled with transitions, moments of stress, and unexpected crises. During these
          times, it's my
          privilege to provide a safe and supportive environment for women to find calm, resilience, strength, and inner
          wisdom. Whether you are facing the loss of a loved one, navigating a relationship crisis, grappling with
          reproductive health challenges, dealing with menopause, experiencing career changes, or struggling with other
          forms of stress, I am here to help.</p>

        <p class="section">While my formal education and training in psychotherapy techniques underpin my practice, I
          believe the true
          essence of therapy lies in a therapist's genuineness and warmth. It's through building an environment of
          comfort, support, and understanding that the path to positive change is revealed.</p>

        <p class="section">In therapy, I seek to do more than attend to problems. I strive to understand your personal
          aspirations,
          commitments, and the things that bring joy and meaning to your life. This understanding allows me to help you
          connect existential insights into practical action steps using solution-focused therapy, a method that my
          clients have found to be immensely beneficial.</p>

        <p class="section">My goal in this therapeutic journey is to connect you to your strengths, reveal your inner
          resources, and
          empower you to take ownership of your life. Together, we will identify your unique life path and the strengths
          that you bring to it.</p>

        <p class="section">To get started, I offer a complimentary initial session. This gives us an opportunity to get
          to know each
          other, and for you to ask any questions that you may have. It also allows us to discuss your strengths, your
          goals, and your challenges. Once you feel that I am a good fit for you, we can schedule follow-up appointments
          as needed.</p>

        <p class="section">I look forward to possibly working with you and thank you for considering me as your partner
          in this journey
          towards better mental health and personal growth.</p>
      </v-col>
    </v-row>
  </v-container>


</template>


<script setup lang="ts">

import BildAnnekatrin from "@/assets/BildAnnekatrin.jpg";
</script>


<style scoped>
.section {
  margin-bottom: 12px;
}
</style>
