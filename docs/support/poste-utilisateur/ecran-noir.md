# Écran noir au démarrage ou en cours d’utilisation

## Symptômes (à confirmer avec l’utilisateur)
- Écran totalement noir, aucun affichage.
- Message "Pas de signal" sur l’écran.
- Affichage qui disparaît après le logo Windows.

## Causes possibles
- Écran éteint ou débranché.
- Câble vidéo mal branché ou défectueux.
- Problème de sortie vidéo (mauvais écran sélectionné).
- Carte graphique ou pilote défaillant.

## Procédure de résolution (script d’appel)

### 1️⃣ Vérifier le contexte
- "Le problème est-il arrivé d’un coup ou après un événement particulier (mise à jour, déplacement du PC) ?"
- "Voyez-vous un voyant lumineux sur l’écran ou le PC ?"
- "Le câble vidéo est bien branché aux **deux extrémités** ?"

### 2️⃣ Vérifier l’écran et la connexion
- Vérifier que l’écran est allumé.
- Vérifier le branchement du câble vidéo (HDMI, DisplayPort, VGA).
- Débrancher puis rebrancher le câble sur un autre port de la carte graphique.
- **Si l’utilisateur dispose d’un autre écran ou téléviseur** : tester pour vérifier si l’affichage revient.

### 3️⃣ Si affichage OK mais écran noir après connexion
- Si plusieurs écrans : 
    - Appuyer sur `Win + P`.
    - Sélectionner <mark>Dupliquer</mark> ou <mark>Étendre</mark>.
- Appuyer sur `Ctrl + Alt + Suppr` → si l’écran s’affiche :
    - Cliquer sur <mark>Gestionnaire des tâches</mark>.
    - Vérifier si un programme bloque l’affichage.

### 4️⃣ Démarrer en mode sans échec (pour problème de pilote)
- Demander à l’utilisateur :
  - Cliquer sur <mark>Démarrer</mark> → <mark>Marche/Arrêt</mark>.
  - Maintenir `Maj` et cliquer sur <mark>Redémarrer</mark>.
  - Aller dans <mark>Dépannage</mark> → <mark>Options avancées</mark> → <mark>Paramètres</mark> → <mark>Redémarrer</mark>.
  - Choisir <mark>Mode sans échec avec prise en charge réseau</mark>.
- Désinstaller le dernier pilote graphique installé.

## Prévention
- Éviter de déplacer le PC ou l’écran lorsque ceux-ci sont allumés.
- Installer uniquement des pilotes validés.

## Escalade au technicien supérieur (systèmes/réseaux)

### Quand :
- Aucun affichage malgré toutes les vérifications.
- Problème graphique persistant en mode sans échec.

### Informations à transmettre
- Nom et service de l’utilisateur impacté.
- Description claire du problème et symptômes.
- Étapes déjà effectuées et résultats obtenus.
- Type de câble et d’écran utilisés.
- Heure et date du signalement.
