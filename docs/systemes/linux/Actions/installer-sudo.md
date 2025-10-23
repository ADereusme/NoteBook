# Installer sudo

<br>

sudo : exécute une commande avec les droits administrateur (root).

- Activer sudo pour un utilisateur
```sh
su -
apt-get update
apt-get install sudo
usermod -aG sudo YOUR_USERNAME
```

::: info
Après, il faut penser à redémarrer la machine pour que cela soit effectif.
:::