# Définir un nom d'hôte sur un routeur

## Actions

- Onglet CLI sur le Routeur

## Commandes
```sh
enable
configure terminal
hostname "nom_routeur"
exit
```

## Exemple
```sh
enable
configure terminal
hostname Routeur-Salle1
exit
```

## Astuces

- Adopter une convention de nommage claire :
    - Inclure le rôle ou l’emplacement dans le nom (ex. : "Routeur-Core", "Routeur-Paris")
    - Utiliser des noms courts et explicites