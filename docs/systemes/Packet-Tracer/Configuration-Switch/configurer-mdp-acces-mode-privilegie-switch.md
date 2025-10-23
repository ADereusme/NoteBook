# Configurer un mot de passe d'accès au mode privilégié sur un switch (Commutateur)

## Actions

- Onglet CLI sur le Switch

## Commandes

```sh
configure terminal
enable secret "monMotDePasseSecurise"
exit
# Vérification de la configuration
show running-config
```

## Exemple

```sh
configure terminal
enable secret monMotDePasseSecurise
exit
show running-config
```

## Astuces

- Penser à les nommer en fonction de leur emplacement
- Penser à sauvegarder la configuration