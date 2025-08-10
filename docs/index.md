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
        avatar: 'https://www.github.com/ADereusme.png', /* le lien vers mon Github, icône*/
        name: 'Alexandre Dereusme',
        title: "NoteBook",
    }
  ];
</script>

<div class="home-page">
  <div class="home-background">
    <div class="wikit-card">
      <div class="wikit-header">
        <h1 class="wikit-title">WIKIT</h1> <!-- le titre -->
        <p class="wikit-subtitle"></p> <!-- le sous-titre -->
      </div>
      <div class="member-card">
        <div class="avatar-container">
          <img 
            :src="coreMembers[0].avatar" 
            :alt="coreMembers[0].name"
            class="member-avatar"
          />
        </div>
        <h3 class="member-name">{{ coreMembers[0].name }}</h3>
      </div>
    </div>
  </div>
</div>

<!-- ANIMATIONS -->
<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
/* Animation sur le carré du profil*/
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

/* Page accueil */
.home-page {
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100vh;
}

/* Fond d'écran */
.home-background {
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeInUp 1s ease-out;
}

/* Fond d'écran avec effet blur sur les bords */
.home-background::before {
  content: '';
  position: absolute;
  inset: -20px;
  background-image: url('/proc.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: blur(0.5px); /* le flou du fond d'écran */ 
  z-index: 0;
}

/* Overlay sombre sur le fond d'écran */
.home-background::after {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(134, 134, 134, 0.4);
  z-index: 1;
}

/* Carré de présentation : contient le titre */
.wikit-card {
  position: relative;
  z-index: 2;
  background: rgba(20, 20, 20, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 4rem 2.5rem;
  max-width: 400px;
  width: 100%;
  text-align: center;
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.6), /* ombre */
    0 0 0 1px rgba(255, 0, 0, 0.05), /* contour */
    inset 0 1px 0 rgba(255, 255, 255, 0.1); /* trait lumineux interne en haut */
  backdrop-filter: blur(20px);
  animation: fadeInUp 0.8s ease-out 0.2s both;
}

/* Conteneur pour le titre et le sous-titre */
.wikit-header {
  margin-bottom: 3rem;
}

/* Titre */
.wikit-title {
  font-size: 3rem;
  font-weight: 700;
  color: #ff4444;
  margin: 0 0 0.5rem 0;
  text-shadow: 0 0 20px rgba(255, 68, 68, 0.4);
  letter-spacing: 2px;
  /* animation: float 3s ease-in-out infinite; */
}

/* Sous-titre */
.wikit-subtitle {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
  font-weight: 300;
}

/* Carré pour le Profil */
.member-card {
  background: rgba(40, 40, 40, 0.97);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 2rem 1.5rem;
  transition: all 0.3s ease;
}

/* Carré pour le Profil : quand on passe la souris dessus */
.member-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
  border-color: rgba(255, 68, 68, 0.3);
}

/* Conteneur du Logo */
.avatar-container {
  margin-bottom: 1.5rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Logo */
.member-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 3px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

/* Logo : quand on passe la souris dessus */
.member-avatar:hover {
  transform: scale(1.1);
  border-color: #ff4444;
  box-shadow: 
    0 8px 20px rgba(0, 0, 0, 0.3),
    0 0 20px rgba(255, 68, 68, 0.4);
}

/* Nom et Prénom */
.member-name {
  font-size: 1.25rem;
  font-weight: 600;
  color: #ff4444;
  margin: 0;
  text-shadow: 0 0 10px rgba(255, 68, 68, 0.3);
}

/* Responsive Design */
@media (max-width: 768px) {
  .home-background {
    padding: 1.5rem;
  }

  .wikit-card {
    padding: 2.5rem 2rem;
    max-width: 100%;
    border-radius: 16px;
  }

  .wikit-title {
    font-size: 2.5rem;
  }

  .member-card {
    padding: 1.5rem 1rem;
  }

  .member-avatar {
    width: 70px;
    height: 70px;
  }

  .member-name {
    font-size: 1.1rem;
  }
}

/* Responsive Design */
@media (max-width: 480px) {
  .home-background {
    padding: 1rem;
  }

  .wikit-card {
    padding: 2rem 1.5rem;
    border-radius: 12px;
  }

  .wikit-title {
    font-size: 2.2rem;
    letter-spacing: 1px;
  }

  .wikit-subtitle {
    font-size: 0.9rem;
  }

  .wikit-header {
    margin-bottom: 2rem;
  }

  .member-card {
    padding: 1.25rem 1rem;
    border-radius: 12px;
  }

  .member-avatar {
    width: 60px;
    height: 60px;
  }

  .member-name {
    font-size: 1rem;
  }
}

/* Responsive Design */
@media (max-width: 360px) {
  .wikit-card {
    padding: 1.5rem 1rem;
  }

  .wikit-title {
    font-size: 2rem;
  }

  .member-avatar {
    width: 55px;
    height: 55px;
  }
}

/* Mode sombre */
.dark .home-background::after {
  background: rgba(0, 0, 0, 0.6);
}
.dark .wikit-card {
  background: rgba(10, 10, 10, 0.98);
  border-color: rgba(255, 255, 255, 0.15);
}

.dark .member-card {
  background: rgba(25, 25, 25, 0.9);
  border-color: rgba(255, 255, 255, 0.1);
}

/* Effet de particules subtil */
.wikit-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 20px;
  padding: 1px;
  background: linear-gradient(45deg, 
    transparent,
    rgba(255, 68, 68, 0.1),
    transparent,
    rgba(255, 68, 68, 0.1),
    transparent
  );
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  opacity: 0.5;
}
</style>