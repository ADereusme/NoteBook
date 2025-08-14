# PC lent ou qui freeze

## Symptômes (à confirmer avec l’utilisateur)
- Démarrage très long.
- Ouverture des applications lente.
- Blocages fréquents ou freeze du PC.

## Causes possibles
- Trop de programmes au démarrage.
- Mises à jour Windows en attente.
- Malware ou virus.
- Disque dur saturé ou défaillant.
- Utilisation intensive de la RAM ou du processeur par une application.

## Procédure de résolution (script d’appel)

### 1️⃣ Vérifier le contexte
- "Depuis combien de temps votre PC est-il lent ?"
- "Est-ce arrivé d’un coup ou progressivement ?"
- "Cela se produit-il tout le temps ou seulement avec certains programmes ?"

### 2️⃣ Vérifier les ressources système
- `Ctrl + Maj + Échap` → Gestionnaire des tâches → onglet <mark>Processus</mark>.
- Repérer un programme consommant beaucoup de CPU, mémoire ou disque.
- Fermer les applications non essentielles.

### 3️⃣ Désactiver les programmes inutiles au démarrage
- `Ctrl + Maj + Échap` → onglet <mark>Démarrage</mark>.
- Clic droit sur le programme inutile → <mark>Désactiver</mark>.
- Redémarrer le PC.

### 4️⃣ Vérifier les mises à jour Windows
- `Win + I` → <mark>Windows Update</mark> → <mark>Rechercher les mises à jour</mark>.
- Télécharger et installer les mises à jours (si mises à jour disponible).
- Redémarrer le PC.

### 5️⃣ Vérifier la présence de malwares ou virus
- Ouvrir `Sécurité Windows` → <mark>Protection contre les virus et menaces</mark>.
- Lancer un **Scan rapide** (immédiat).

### 6️⃣ Nettoyer le disque dur (libérer de l'espace)
- `Win + R` → taper `cleanmgr`.
- Sélectionner le lecteur C: → cocher <mark>Fichiers temporaires</mark>, <mark>Corbeille</mark>, etc.
- Si HDD uniquement → lancer une défragmentation via :
  - `Win + S` → taper `Défragmenter` → <mark>Optimiser</mark>.

::: tip
Pour vérifier si le disque est un HDD ou SSD :
- `Ctrl + Maj + Échap` → onglet <mark>Performances</mark>
- Sélectionner <mark>Disque</mark> → le type est indiqué sous le nom du disque.
:::

### 7️⃣ Vérifier l’état du disque dur
- `Win + E` → clic droit sur C: → <mark>Propriétés</mark> → <mark>Outils</mark> → <mark>Vérifier</mark>.
- Option ligne de commande :  

```powershell
chkdsk C:
```

## Prévention
- Éviter d’installer trop de logiciels inutiles.
- Faire un scan antivirus régulier.
- Laisser Windows installer ses mises à jour.
- Vider régulièrement les fichiers temporaires.

## Escalade au technicien supérieur (systèmes/réseaux)

### Quand :
- Si les lenteurs persistent après toutes les étapes ci-dessus.
- Si infection persistante ou suspecte.
- Si des bruits mécaniques inhabituels viennent du disque dur.
- Si le problème touche plusieurs utilisateurs simultanément.

### Informations à transmettre
- Nom et service de l’utilisateur impacté.
- Description claire du problème et symptômes.
- Étapes déjà effectuées et résultats obtenus.
- Captures d’écran ou messages d’erreur.
- Heure et date du signalement.