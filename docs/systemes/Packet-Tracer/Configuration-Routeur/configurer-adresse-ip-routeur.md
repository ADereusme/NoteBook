# Configurer une adresse IP sur un Routeur

## Actions

- Onglet CLI sur le Routeur

## Commandes

```sh
enable
configure terminal
interface "nom_interface"
ip address "adresse_ip" "masque"
no shutdown
exit
```

## Exemple

```sh
enable
configure terminal
interface gigabitethernet0/0
ip address 192.168.1.1 255.255.255.0
no shutdown
exit
```

