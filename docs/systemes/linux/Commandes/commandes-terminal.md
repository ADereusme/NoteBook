# Commandes terminal

## Utilisateurs

- Exécuter une commande avec des privilèges
```sh
sudo
```

- Modifier le mot de passe de l'utilisateur
```sh
sudo passwd
```

- Modifier le mot de passe de root
```sh
sudo passwd root
```

- Se connecter en mode admin
```sh
sudo root
```

- Changer d'utilisateur
```sh
su - "utilisateur"
```

- Passer sur le root
```sh
# Methode 1
su

# Methode 2
su -
```

## Réseaux

- Visualiser des informations sur le réseau
```sh
# Methode 1
ifconfig

# Methode 2
ip a

# Methode 3
ip addr
```

- Renouvellement DHCP sur Debian
```sh
sudo dhclient
```

## Paquets

- Mettre à jour la liste des paquets 
```sh
apt-get update
```

- Installer les nouvelles versions des paquets déjà installés
```sh
apt-get upgrade
```

- Installer un paquet spécifié (une application)
```sh
apt-get install "nom_paquet"
```

- Désinstaller le paquet précisé
```sh
apt-get remove "nom_paquet"
```

## Services

Démarrer un service
```sh
systemctl start "Service"
```

Redémarrer un service
```sh
systemctl restart "Service"
```
::: info
- Exemple : service cron => cron.service
:::

Régarder le status d'un service
```sh
systemctl status "Service"
```

Activer un service
```sh
systemctl enable "Service"
```

Vérifier si un service est installé et sa version
```sh
"Service" --version
```

## Autres

- Obtenir plus d'informations sur une commande
```sh
man "commande"
```

- Afficher l'historique des commandes
```sh
history
```

- Redémarrer la machine
```sh
# Méthode 1
init 6

# Méthode 2
sudo reboot

# Méthode 2
systemctl reboot
```

- Arrêter la machine
```sh
# Méthode 1
init 0

# Méthode 2
sudo shutdown -h now
```

- Tuer un programme
```sh
kill "Programme"
```

- Créer ou exploiter une archive Unix
```sh
tar -xvf archive.tar
```