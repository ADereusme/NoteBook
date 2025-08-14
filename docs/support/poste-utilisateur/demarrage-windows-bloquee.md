# Démarrage Windows bloqué ou mise à jour Windows en cours/bloquée

## Symptômes (à confirmer avec l’utilisateur)
- Écran affichant **« Mise à jour en cours »** pendant une longue durée.
- Écran noir après l’allumage.
- Message **« Préparation de Windows »** qui ne se termine pas.
- Redémarrages en boucle.

## Causes possibles
- Mise à jour Windows en cours ou bloquée.
- Problème matériel (disque dur défaillant).
- Fichiers système corrompus.
- Problème avec un périphérique connecté.

## Procédure de résolution (script d’appel)

### 1️⃣ Vérifier le contexte
- "Depuis quand le problème est-il présent ?"
- "Le PC a-t-il été éteint brutalement pendant une mise à jour ?"
- "Avez-vous branché un périphérique récemment (clé USB, disque dur externe, imprimante) ?"

### 2️⃣ Vérifier si une mise à jour est en cours
- Informer l’utilisateur qu’il ne faut pas éteindre le PC pendant une mise à jour.
- Attendre au moins 30 minutes avant de conclure à un blocage.
- Vérifier à distance si le PC répond.

### 3️⃣ Forcer un redémarrage si blocage confirmé
- Maintenir le bouton d’alimentation pendant 10 secondes.
- Rallumer le PC et vérifier si Windows démarre normalement.
- Si le problème persiste, passer en mode sans échec.

### 4️⃣ Accéder au mode sans échec
- Allumer le PC et interrompre le démarrage **3 fois de suite** pour lancer le menu de récupération.
- Choisir <mark>Dépannage</mark> → <mark>Options avancées</mark> → <mark>Paramètres</mark> → <mark>Redémarrer</mark> → <mark>Mode sans échec</mark>.
- Dans le mode sans échec :
  - Désinstaller la dernière mise à jour installée :  
    <mark>Panneau de configuration</mark> → <mark>Programmes</mark> → <mark>Afficher les mises à jour installées</mark>.
  - Lancer un scan système :  
    ```powershell
    sfc /scannow
    ```
  - Vérifier le disque :  
    ```powershell
    chkdsk C: /f /r
    ```

### 5️⃣ Débrancher les périphériques externes
- Retirer clé USB, disques durs externes, imprimantes, etc.
- Redémarrer le PC.

### 6️⃣ Vérifier l’état du disque
- Ouvrir le **Gestionnaire de périphériques** :
    - Clic droit sur le logo windows → <mark>Gestionnaire de périphériques</mark>.
    - Ou `Win + X` → <mark>Gestionnaire de périphériques</mark>.
    - Ou taper `Phériphérique` dans la barre de recherche → <mark>Gestionnaire de périphériques</mark>.
- - Vérifier si icône ⚠ sur le disque.
- Confirmer s’il s’agit d’un HDD ou SSD avant de planifier une défragmentation.

## Prévention
- Ne pas éteindre le PC pendant une mise à jour.
- Faire des sauvegardes régulières.
- Installer les mises à jour pendant les périodes creuses.

## Escalade au technicien supérieur (systèmes/réseaux)

### Quand :
- Blocage persistant malgré les étapes ci-dessus.
- Erreurs système ou mises à jour corrompues récurrentes.
- Bruits inhabituels du disque dur.
- Plusieurs postes impactés simultanément.

### Informations à transmettre
- Nom et service de l’utilisateur impacté.
- Description claire du problème et symptômes.
- Étapes déjà effectuées et résultats obtenus.
- Captures d’écran ou messages d’erreur.
- Heure et date du signalement.
