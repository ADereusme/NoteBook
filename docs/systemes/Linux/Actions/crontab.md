# Crontab

## Fonctionnement

```sh
* * * * * command
```

::: info
- "*" : Le 1er c'est les minutes
=> de 0 à 59

- "*" : Le 2eme c'est les heures
=> de 0 à 23

- "*" : Le 3eme c'est le jour du mois
=> de 1 à 31

- "*" : Le 4eme c'est les mois
=> de 1 à 12

- "*" : Le 5eme c'est le jour de la semaine
=> de 0 à 7
=> 0 et 7 = dimanche
:::

## Mise en place

## Création du script
```sh
# Méthode 1 : crée juste le fichier
sudo touch /usr/local/bin/backup.sh

# Méthode 2 : crée le fichier et l'ouvre pour l'éditer
sudo nano /usr/local/bin/backup.sh

# Méthode 3 : crée le fichier et ajoute une première ligne dedans puis l'ouvre pour l'éditer
sudo echo "#!/bin/bash" > /usr/local/bin/backup.sh
sudo nano /usr/local/bin/backup.sh
```

### Remplissage du script
```sh
#!/bin/bash

# Dossier à sauvegarder
SOURCE="/home/user/Documents"

# Dossier de destination
DEST="/backup/$(date +'%Y-%m-%d')"

# Création du dossier de sauvegarde
mkdir -p "$DEST"

# Copie des fichiers
cp -r "$SOURCE" "$DEST"

# Log de l'opération
echo "$(date +'%Y-%m-%d %H:%M:%S') - Sauvegarde terminée avec succès." >> /var/log/backup.log
```
::: details Explications
- `#!/bin/bash` => Shebang : indique au système quel interprète utiliser pour exécuter le script.
- `SOURCE="/home/user/Documents"` => variable contenant le chemin du dossier à sauvegarder.
- `DEST="/backup/$(date +'%Y-%m-%d')"` => variable contenant le chemin du dossier de destination. Cela crée un dossier par date.
- `mkdir -p "$DEST"` => crée le dossier DEST. L'option "-p" evite les erreurs si le dossier existe déjà. Si l'utilisateur n'a pas les droits d'écriture dans "/backup", la commande échouera.
- `cp -r "$SOURCE" "$DEST"` => copie récursive du contenu de "SOURCE" vers "DEST".
- `echo "..." >> /var/log/backup.log` => "echo" redirige la sortie vers le fichier "/var/log/backup.log" en mode ajout avec ">>".
:::

### Rendre le script exécutable
```sh
chmod +x /usr/local/bin/backup.sh
```

# Ajout de la ligne dans la crontab
```sh
0 2 * * * /usr/local/bin/backup.sh
```
::: details Explications
- `0 2 * * *` => le script sera exécuter tout les jours à 2h00.
- `/usr/local/bin/backup.sh` => chemin vers le script.
:::

## Commandes

- Installer cron
```sh
# Installation
sudo apt update && sudo apt install cron
# Activation
sudo systemctl enable cron
```

- Editer le crontab de l'utilisateur actuel
```sh
crontab -e
# Pour un autre utilisateur
sudo crontab -u "User" -e
```

- Vérifier la présence de Crontab
```sh
systemctl status cron
```

- Afficher la crontab actuelle
```sh
crontab -l
```

- Supprimer la crontab de l'utilisateur
```sh
crontab -r
```

- Lister la crontab de l'utilisateur
```sh
crontab -u "user" -l
```

- Consulter les fichiers journaux de cron
```sh
cat /var/spool/crontabs/"user"
```

## Astuces

- Regarder le dossier de destination du crontab
```sh
watch ls -la "chemin_du_dossier"
```