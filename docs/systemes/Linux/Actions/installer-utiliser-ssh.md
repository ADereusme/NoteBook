# Installation et utilisation de SSH

## Installation

- Installer SSH
```sh
sudo apt update
sudo apt install openssh-server -y
```

- Vérification
```sh
systemctl status ssh
```

- Si SSH est inactif
```sh
# Activer SSH automatiquement au démarrage de la machine
# Si on veut que le serveur soit toujours accessible en ssh
sudo systemctl enable ssh

# Démarrer le service SSH immédiatement
# Pour une utilisation immédiate, si on veut y avoir accès une fois
sudo systemctl start ssh

## Pour une utilisation immédiate et permanente
sudo systemctl start ssh
sudo systemctl enable ssh
```

## Utilisation

- Accéder à une machine via SSH
```sh
ssh "user"@"adress_ip"
```
::: details Exemple
```sh
ssh alexandre@192.168.0.2
```

- Cela va probablement demander le mot de passe de l'utilisateur alexandre.
:::

::: info
Le port par défaut est 22.
:::

- Si le port 22 est bloqué (sur certaines distributions récentes)
```sh
sudo ufw allow ssh
```


## Connexion en root via SSH

::: info
Il faut au préalable avoir installer SSH lors de l'installation de linux.
:::

- Activer l'accès SSH root
```sh
echo "PermitRootLogin yes" > /etc/ssh/sshd_config
service ssh restart

# Vérification
systemctl status ssh
```