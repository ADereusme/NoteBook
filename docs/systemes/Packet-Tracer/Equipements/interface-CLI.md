# Interface CLI (Interface de Ligne de Commande)

## Commandes

- Entrer en mode privilégié
```sh
enable
```

- Passer en mode de confi guration globale
```sh
# Méthode 1
configure terminal

# Méthode 2 : abrégé
conf t
```

- Sortir d'un mode de configuration
```sh
exit
```

- Voir la configuration en cours
```sh
show running-config
```

- Enregistrer les modifications
```sh
# Méthode 1
write memory

# Méthode 2
copy running-config startup-config
```

## Switch (Commutateur)

- Activer une interface
```sh
# Méthode 1
no shutdown

# Méthode 2 : abrégé
no sh
```

- Afficher la table d'adresses MAC
```sh
Enable
show mac address-table
```

- Voir uniquement les entrées associées à un port spécifique
```sh
show mac address-table interface "nom_interface"
```