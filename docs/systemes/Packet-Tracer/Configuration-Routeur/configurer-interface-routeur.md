# Configurer les interfaces sur un Routeur

## Actions

- Onglet CLI sur le Routeur
- Faire ça pour chaque interface concernée.

## Commandes

```sh
configure terminal
interface "nom_interface"
ip address "adresse_ip" "masque"
no shutdown
exit
```

## Exemple

```sh
configure terminal
interface GigabitEthernet0/0
ip address 192.168.1.1 255.255.255.0
no shutdown
exit
```

## Astuces

- Pour vérifier qu'une interface est bien activée
```sh
show interfaces "nom_interface" status
```

- Pour vérifier l'état des interfaces
```sh
show ip interface brief
```