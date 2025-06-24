---
layout: page
sidebar: false
---
<script setup>
  import {
    VPTeamPage,
    VPTeamPageTitle,
    VPTeamMembers,
  } from 'vitepress/theme';

  const coreMembers = [
    {
        avatar: 'https://www.github.com/ADereusme.png',
        name: 'Alexandre Dereusme',
        title: "",
    }
  ];
</script>

<div class="home-page">
<div class="home-background">
    <VPTeamPage>
      <VPTeamPageTitle>
        <template #title>WIKIT</template>
        <template #lead></template>
      </VPTeamPageTitle>
      <VPTeamMembers
      size="medium"
      :members="coreMembers"
      />
    </VPTeamPage>
</div>
</div>

<style >
  .home-page h1 {
    color: red;
  }
</style>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.home-background {
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  color: white;
  animation: fadeInUp 1s ease-out;
  /* animation: fadeIn 1s ease-in; */
}

/* Calque de fond transparent */
.home-background::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url('/proc.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.9; /* <<< joue ici sur l'alpha entre 0 (invisible) et 1 (opaque) */
  z-index: 0;
}

.dark .home-background::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url('/proc.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.5; /* <<< joue ici sur l'alpha entre 0 (invisible) et 1 (opaque) */
  z-index: 0;
}

/* Optionnel : ajouter un fond semi-transparent au contenu */
.VPTeamPage {
  background-color: rgba(41, 39, 39, 0.8);
  border-radius: 20px;
  padding: 1rem;
  margin-top: 2rem;
  max-width: 450px;
  width: 90%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  animation: fadeInUp 0.5s ease-out;
  animation-delay: 0.2s;
  animation-fill-mode: both;
  color: black;
}

.dark .VPTeamPage {
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 20px;
  padding: 1rem;
  margin-top: 2rem;
  max-width: 450px;
  width: 90%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  animation: fadeInUp 0.5s ease-out;
  animation-delay: 0.2s;
  animation-fill-mode: both;
  color: white;
}
</style>

<!--

  /* Appliquer un fond d'écran sur la page */
.hero-wrapper {
  background-image: url('/proc.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  color: white; /* Améliore la visibilité du texte sur fond */
}

-->