# # Configurer le routage inter VLANs sur le routeur

## Actions

- Onglet CLI sur le Routeur
- A faire une fois que les VLANs sont crées sur le Switch.

## Commandes

- Allumer l'interface
```sh
enable
configure terminal
interface "nom_interface"
no shutdown
exit
```

- Attribution d'une adresse IP à chaque VLAN
```sh
interface "nom_interface"
encapsulation dot1Q "VLAN_ID"
ip address "adresse_ip" "masque"
no shutdown
exit
```

## Exemple

- Activer l'interface
```sh
enable
configure terminal
interface g0/0
no shutdown
exit
```

- Attribution d'une adresse IP à chaque VLAN
```sh
# VLAN 10
interface g0/0.10
encapsulation dot1Q 10
ip address 172.23.0.93 255.255.255.224
no shutdown
exit

# VLAN 20
interface g0/0.20
encapsulation dot1Q 20
ip address 172.23.0.62 255.255.255.192
no shutdown
exit

# VLAN 30
interface g0/0.30
encapsulation dot1Q 30
ip address 172.23.0.102 255.255.255.248
no shutdown
exit
```
