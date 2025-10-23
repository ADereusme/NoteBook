# Ajouter un utilisateur

<br>

- Utiliser la commande sudo pour éxécuter les commandes ou se connecter en super utilisateur
```sh
sudo su
```

- supprimer un utilisateur :
```sh
deluser "user"
```
> ou
```sh
deluser --remove-home "user"
```
::: info
Supprime en plus le répertoire personnel de l'utilisateur.
:::

- Afficher la liste des utilisateurs crées
```sh
cat /etc/passwd | awk -F : '{print $1}'
```