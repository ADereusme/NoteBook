# Ajouter un utilisateur

<br>

- Utiliser la commande sudo pour éxécuter les commandes ou se connecter en super utilisateur
```sh
sudo su
```

- Créer un utilisateur :
```sh
useradd "user"
```
> ou
```sh
useradd -d /home/"user" "user"
```
::: info
Permet de spécifier un répertoire de base pour l'utilisateur.
- "-d" : spécifier le répertoire de base
- "-m" : créer un répertoire personnel pour l'utilisateur
:::

- Définir un mot de passe pour l'utilisateur
```sh
passwd "user"
```
::: info
Suivre les instructions à l’écran pour définir le mot de passe.
:::

- Afficher la liste des utilisateurs
```sh
# Méthode 1 : liste des utilisateurs de l'ordinateur
cat /etc/passwd

# Méthode 2 : liste des utilisateurs crées
cat /etc/passwd | awk -F : '{print $1}'
```
