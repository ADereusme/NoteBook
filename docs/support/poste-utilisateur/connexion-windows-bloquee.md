# Impossible de se connecter à Windows (compte verrouillé)

## Symptômes (à confirmer avec l’utilisateur)
- Message : **« Nom d’utilisateur ou mot de passe incorrect »**.
- Message : **« Votre compte a été verrouillé »**.
- Tentatives de connexion échouées.

## Causes possibles
- Mot de passe incorrect ou expiré.
- Mot de passe saisi avec erreur (majuscule, clavier QWERTY/AZERTY).
- Trop de tentatives infructueuses → compte verrouillé dans l’Active Directory.
- Problème de réseau ou de domaine.

## Procédure de résolution (script d’appel)

### 1️⃣ Vérifier le contexte
- "Depuis combien de temps avez-vous ce problème ?"
- "Avez-vous essayé de vous reconnecter plusieurs fois ?"
- "Le mot de passe a-t-il récemment été changé ?"

### 2️⃣ Vérifier la saisie du mot de passe
- Vérifier que la touche **Verr Maj** n’est pas activée.
- Taper le mot de passe dans le champ "Nom d'utilisateur" pour vérifier la saisie.
- En bas à droite, le clavier doit être en **FR (AZERTY)**, sinon :
  - Clic gauche sur l'icône de langue dans la barre des tâches
  - bascule de la langue du clavier : `Alt + Maj` ou `Win + Espace`.

### 3️⃣ Si toujours bloqué → vérifier côté serveur
- Accéder au serveur AD via **Bureau à distance** ou outil d’administration.
- Ouvrir <mark>Utilisateurs et ordinateurs Active Directory</mark>.
- Rechercher le compte utilisateur → clic droit <mark>Propriétés</mark> → onglet <mark>Compte</mark>.
- Si **Compte verrouillé** est coché → décocher.
- **Si nécessaire** : réinitialiser le mot de passe et le communiquer à l’utilisateur.
- Redémarrage du poste client après modifications du mot de passe ou profil.

### 4️⃣ Tester la connexion
- Vérifier la connexion réseau :
  - "Voyez-vous un câble branché ou l’icône Wi-Fi en bas à droite ?"
  - Si câble : vérifier sur le switch que le port est actif.
- Vérifier que le poste est bien connecté au réseau du domaine :
  - Tester la connexion avec `ping` vers le serveur de domaine.

## Prévention
- Rappeler qu’au-delà de **5 erreurs de mot de passe**, le compte est bloqué.
- Informer l’utilisateur sur la politique de mot de passe.

## Escalade au technicien supérieur (systèmes/réseaux)

### Quand :
- Mot de passe confirmé correct mais impossible de se connecter.
- Problème réseau ou domaine suspect.
- Compte utilisateur corrompu complexe.

### Informations à transmettre
- Nom et service de l’utilisateur impacté.
- Description claire du problème et symptômes.
- Étapes déjà effectuées et résultats obtenus.
- Captures d’écran ou messages d’erreur.
- Heure et date du signalement.