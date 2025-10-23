# Commandes CMD

## Réseaux

- Permet de savoir quelles commandes on peut faire avec ipconfig
```bat
ipconfig /?
```

- Chercher des informations réseaux
```bat
:: Méthode 1
ipconfig

:: Méthode 2 : plus d'infos
ipconfig /all
```

- Connaitre le ping (perte de paquets)
```bat
ping "adress_ip"
```

- Afficher les FPS et autres données : `ctrl + shift + o`

## Autres

- Accéder à un autre lecteur
```bat
V:
```

- Accéder à un autre lecteur + accéder à un répertoire
```bat
cd /d C:\Windows
```

## Nettoyage

```bat
:: Méthode 1
sfc /scannow

:: Méthode 2
DISM /Online /Cleanup-Image /CheckHealth

:: Méthode 2
chkdsk
```