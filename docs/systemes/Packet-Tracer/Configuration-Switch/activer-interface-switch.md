# Activer une interface sur un switch (Commutateur)

## Actions

- Onglet CLI sur le Switch
- Faire ça pour chaque interface concernée.

## Commandes

```sh
configure terminal
interface "nom_interface"
no shutdown
exit
```

## Exemple

```sh
configure terminal
interface FastEthernet0/1
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

- Penser à désactiver les interfaces inutilisées
 ```sh
configure terminal
# Ici on peut regrouper les interfaces
interface range "FastEthernet 0/8 – 24"
shutdown
exit
exit
# Vérification
show interfaces status
```