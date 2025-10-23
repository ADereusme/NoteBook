# Configurer le routage statique sur un Routeur

## Actions

- Onglet CLI sur le Routeur

## Commandes

```sh
enable
configure terminal
```

- Répéter cette étape pour chaque interface connectée
```sh
interface "nom_interface"
ip address "adresse_ip" "masque"
no shutdown
exit
```

- Répéter cette commande pour chaque route à configurer
```sh
configure terminal
ip route "adresse_de_destination" "masque" "passerelle"
```

- Vérifier la configuration
```sh
show ip route
```

- Sauvegarder la configuration
```sh
write memory
```

## Exemple

```sh
enable
configure terminal
interface GigabitEthernet0/0
ip address 192.168.1.1 255.255.255.0
no shutdown
exit
```

```sh
configure terminal
ip route 192.168.2.0 255.255.255.0 10.0.0.2
```

- Vérifier la configuration
```sh
show ip route
```

- Sauvegarder la configuration
```sh
write memory
```

## Astuces

- Pour supprimer une route statique
```sh
no ip route "destination" "masque" "passerelle"
```

- Configurer une route par défaut
```sh
ip route 0.0.0.0 0.0.0.0 "passerelle"
```