# Commandes DNS

::: info Cache DNS
#### Affichage du cache DNS
- Permet d'afficher le cache dns en cour sur la machine.

```cmd
ipconfig /displaydns
```

#### Vidage du cache DNS
- Permet de vider le cache dns sur la machine.

```cmd
ipconfig /flushdns
```
:::

::: info Recherche DNS
#### Affichage du serveur par défaut
- Permet d'intérroger les serveurs de noms

```cmd
nslookup
```

#### Adresse IP du serveur
- Permet de trouver l'adresse IP du serveur
- Il suffit de taper le nom du serveur

```cmd
"le nom du serveur"
```

#### Nom du serveur
- Permet de trouver le nom du serveur
- Il suffit de taper l'adresse IP su serveur
- Pour cela, la zone de recherche avancée doit etre configurée

```cmd
"adresse IP du serveur"
```
:::