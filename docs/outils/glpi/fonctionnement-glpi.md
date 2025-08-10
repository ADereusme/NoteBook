# ⚙️ Fonctionnement de GLPI


## Vue d’ensemble

GLPI repose sur 4 grands modules principaux :

1. **Assistance**  
   Gestion des tickets, demandes, incidents, changements et problèmes.
2. **Parc informatique**  
   Inventaire complet des matériels, logiciels et périphériques.
3. **Gestion administrative**  
   Suivi des contrats, licences, documents et fournisseurs.
4. **Outils de communication**  
   Notifications automatiques par email, suivi des échanges entre utilisateurs et techniciens.


## Processus typique dans GLPI

```text
Utilisateur signale un problème
           ↓
Création d’un ticket
           ↓
Affectation à un technicien ou groupe
           ↓
Diagnostic et actions correctives
           ↓
Résolution et fermeture du ticket
```


## Rôles et permissions

GLPI utilise un système de profils pour gérer les droits d’accès :

| Profil             | Rôle principal                                                      |
| ------------------ | ------------------------------------------------------------------- |
| **Utilisateur**    | Crée et suit ses tickets.                                           |
| **Technicien**     | Reçoit, traite et résout les tickets.                               |
| **Superviseur**    | Supervise l’équipe de support, assigne les tickets et suit les SLA. |
| **Administrateur** | Gère la configuration, les profils et les modules de GLPI.          |


## Inventaire du parc

- Permet de recenser le matériel (PC, serveurs, imprimantes, téléphones IP…).
- Association d’informations techniques (CPU, RAM, OS…).
- Gestion des licences logicielles.
- Intégration possible avec FusionInventory ou OCS Inventory pour l’inventaire automatisé.


## Automatisations

GLPI peut automatiser certaines tâches grâce à :

- Règles métiers : déclencher automatiquement une affectation en fonction de mots-clés.
- Escalade : relancer ou réassigner un ticket si non traité dans un délai défini.
- Modèles : réponses types et tickets pré-remplis.

---
<br>

📎 [Retour à GLPI](./glpi.md)
