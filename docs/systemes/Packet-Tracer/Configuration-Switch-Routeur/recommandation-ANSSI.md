# Application des recommandations ANSSI

<br>

La plupart des commandes se font sur le Switch et sur le Routeur.

Résultat attendu :
- Telnet (non sécurisé) est désactivé
- SSH est activé et chiffré
- Un compte administrateur dédié et protégé par mot de passe chiffré est en place
- On administrer l'équipement à distance de manière sécurisée
- On respecte les bonnes pratiques de sécurité recommandées par l’ANSSI

## Mots de passe

- Définir des mots de passe pour la console et le mode privilégié :
```sh
line console 0
password "MotDeP@sseConsole"
login
enable secret "MonMotDeP@sse"
```

- Activer le chiffrement des mots de passe :
```sh
# Applique un algorithme de chiffrement
service password-encryption
```

## Ports inutilisés

Pour bloquer toute connexion non autorisée, on désactive les ports inutilisés.
- Cela se fait généralement sur le switch uniquement :
```sh
# Ici on prends comme exemple les ports 8 à 24
interface range FastEthernet 0/8 – 24
shutdown
exit
exit
# Vérification
show interfaces status
```

## Accès distant

Il faut configurer l'accès distant de manière sécurisé en SSH.

- Mettre en place une connexion SSH chiffré :
```sh
# Définir un nom de domaine interne, nécessaire pour générer une clé RSA
ip domain-name comptaas.lan

# Donner un nom à l'équipement, ici SW1 pour le switch
# Ce nom sera utilisé dans la génération de la clé SSH
hostname SW1

# Généré une paire de clé RSA de 2048 bits
# Permet aux connexions SSH d’être chiffrées et sécurisées
# Sans cette commande, SSH ne peut pas fonctionner
crypto key generate rsa
```

- Création d'un compte administrateur local :
```sh
# Compte administrateur local avec le niveau de privilège maximum (15)
# Le mot de passe est stocké de façon chiffrée grâce à secret
username admin privilege 15 secret "MotDeP@sseAdmin"
```

- Configuration des connexions distantes Telnet et SSH :
```sh
# On entre dans la configuration des lignes VTY
# Utilisées pour les connexions distantes (Telnet/SSH)
line vty 0 4

# Interdire Telnet et autoriser uniquement SSH
# Empêche toute connexion non chiffrée
transport input ssh

# On indique que les accès SSH doivent utiliser la base locale d’utilisateurs (compte admin)
login local

# On force l'équipement à utiliser SSH version 2, plus sécurisé et moderne que la version 1
ip ssh version 2
```

## Sauvegarde

- Il faut sauvegarder la configuration :
```sh
write memory
```