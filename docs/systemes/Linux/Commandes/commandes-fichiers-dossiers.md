# Commandes fichiers / dossiers

## Basiques

- Lister les fichiers dans un dossier
```sh
# Methode 1
ls

# Méthode 2 : fichiers cachés
ls -a

# Méthode 3 : liste complète
ls -l

# Méthode 3 : dossier + fichiers cachés
ls -al
```

- Se déplacer entre les dossiers
```sh
cd "dossier"/
```

- Sortir d'un dossier
```sh
cd
```

- Trouver le chemin d'accès au répertoire de travail actuel
```sh
pwd
```

## Dossiers (Répertoire)

- Créer un répertoire (dossier)
```sh
mkdir "dossier"
```

- Supprimer un répertoire (dossier)
```sh
# Methode 1
rmdir "dossier"

# Méthode 2
rm -r "dossier"
```

- Forcer l'élimination d'un dossier
```sh
rm -rf "dossier"
```

- Copier un dossier
```sh
cp -r "dossier" "chemin de destination"
```

- Déplacer un dossier
```sh
mv "dossier" "chemin de destination"
```

- Renommer un dossier
```sh
mv "dossier" "nouveau nom"
```

## Fichiers 

- Créer un fichier
```sh
touch "fichier"
```

- Supprimer un fichier
```sh
# Manière simple
rm "fichier"

# Avec demande de confirmation
rm -i "fichier"
```

- Renommer un fichier
```sh
mv "fichier" "nouveau nom"
```

- Déplacer un fichier
```sh
mv "fichier" "dossier_destination"
```

- Copier un fichier
```sh
cp "fichier" "dossier_destination"
```

- Chercher un fichier
```sh
find "fichier"
```

- Afficher le contenu d'un fichier
```sh
# Methode 1
cat "fichier"

# Methode 2 : voir du texte page par page
more "fichier"
```

- Afficher les dernières lignes d’un fichier
```sh
tail "fichier"
```

- Compresser ou décompresser des fichiers
```sh
tar "fichier"
```

- Editer un fichier texte
```sh
nano "fichier"
```

- Ecrire dans un fichier texte
```sh
ls > fichier.txt
```
::: info Explications
- "ls" : lister les fichiers dans un dossier
- ">" :  permet de rediriger la sortie standard d’une commande vers un fichier
- "fichier.txt" : le fichier

Cette exemple prends la sortie de "ls" et l'écrit dans le fichier "fichier.txt".
:::

> ou

```sh
ls >> fichier.txt
```
::: info Explications
- "ls" : lister les fichiers dans un dossier
- ">>" :  permet de rediriger la sortie standard d’une commande vers la fin d'un fichier
- "fichier.txt" : le fichier

Cette exemple prends la sortie de "ls" et l'écrit à la fin du fichier "fichier.txt".
:::

- Ecrire dans un fichier texte v2
```sh
# Ecrire dans un fichier en écrasant l'existant
echo "message" >> "fichier"

# Ecrire dans un fichier sans écraser l'existant
echo "message" > "fichier"
```

## Les droits fichiers / dossiers

- Vérifier les droits
```sh
# Méthode 1
ls -l

# Méthode 2 : cibler un fichier
ls -l "fichier" 
```

- Modifier les droits
```sh
chmod
```
::: details Exemple
- Ajouter les droits d'écriture au groupe du propriétaire
```sh
chmod g+w "fichier"
```

- Retirer les droits de lectures au autres
```sh
chmod o-r "fichier"
```

- Donne tous les droits pour tous
```sh
chmod a=rwx "fichier"
```

- Retirer les droits d'écriture au groupe du propriétaire
- Retirer les droits d'écriture et d'exécution au autres
```sh
chmod g-w,o-wx "fichier"
```
:::

- Modifier les droits d'un répertoire et tout ce qu'il contient (Récursif)
```sh
chmod -R
```

- Remplace le propriétaire du fichier ou du répertoire
```sh
chown
```

- Devenir propriétaire
```sh
sudo chown
```

- Réaffecter un fichier à un nouvel utilisateur
```sh
sudo chown "nouvel_utilisateur" "fichier"
```

- Réaffecter un fichier à un nouvel utilisateur et à un nouveau groupe
```sh
sudo chown "nouvel_utilisateur":"nouveau_groupe" "fichier"
```