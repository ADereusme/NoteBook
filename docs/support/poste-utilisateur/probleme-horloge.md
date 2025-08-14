# Problème d’horloge

## Symptômes (à confirmer avec l’utilisateur)
- Heure ou date incorrecte.
- Décalage horaire récurrent.
- Problèmes de connexion (certificats, mails).

## Causes possibles
- Horloge Windows mal configurée.
- Serveur de temps inaccessible.
- Pile CMOS vide (pas de correction possible à distance).

## Procédure de résolution (script d’appel)

### 1️⃣ Synchroniser l’heure
- `Win + I` → <mark>Heure et langue</mark> → <mark>Date et heure</mark>.
- Activer <mark>Régler l’heure automatiquement</mark>.
- Cliquer sur <mark>Synchroniser maintenant</mark>.

### 2️⃣ Vérifier le fuseau horaire
- Toujours dans **Date et heure** → sélectionner le bon fuseau.

### 3️⃣ Si poste en domaine
- Invite de commande admin :
```powershell
w32tm /resync
```

### 4️⃣ Si le problème revient après redémarrage
- Suspecter pile CMOS HS → intervention sur site nécessaire.

### Prévention
- Laisser synchronisation automatique activée.

## Escalade au technicien supérieur (systèmes/réseaux)

### Quand :
- Décalage persistant malgré resynchronisation.
- Pile CMOS HS

### Informations à transmettre
- Nom et service de l’utilisateur impacté.
- Description claire du problème et symptômes.
- Étapes déjà effectuées et résultats obtenus.
- Captures d’écran ou messages d’erreur.
- Heure et date du signalement.
