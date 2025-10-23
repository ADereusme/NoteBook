# Configurer le réseau sur Linux

## Commandes

- Modifier la configuration du réseau
```sh
# Ouverture du fichier à modifier
nano /etc/network/interfaces
```

Ensuite il faut modifier le fichier :
- Aller dans "The primary network interface"
- Mettre en mode statique ou DHCP
- Si statique, renseigner les bonnes informations : adresse IP, masque, passerelle

## Exemple

```sh
iface ens33 inet static
address 192.168.0.2/24
gateway 192.168.0.254
```

![](/modification-reseau-linux.png)