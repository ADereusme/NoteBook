# Les droits sur Linux

## Les droits simples

### A savoir
---
- Gestion des droits modifiable à tout moment
- Propre à chaque fichier
- Tout est fichier dans Linux

---

- Par défaut, le créateur du document en est le propriétaire
- "root" est le seul utilisateur à avoir les droits sur tous les fichiers
- Si un dossier est crée avec la commande "sudo", le propriétaire sera "root"

---

- La modification des droits sur un fichier n'est possible que pour deux utilisateurs : le propriétaire de ce fichier, et « root ».
- Si l'utilisateur actuel n'est pas le propriétaire, il devra faire précéder sa commande par « sudo ».

---

- Pour avoir la possibilité d'ouvrir un répertoire et son arborescence, l'utilisateur devra posséder le droit d'exécution.
- Le droit d'exécution permet par exemple, d'accéder à un dossier avec d'autres fichiers ou dossier sans voir le contenu de celui-ci.
---

### Types d'utilisateurs
- `u` => le propriétaire du fichier (User)
- `g` => le groupe auquel appartient le fichier (Group)
- `o` => tout les autres (Others)
- `a` => tout le monde (All)

### Types de droits (avec système octal)
- `r` => lecture (Read) : octale : 4
	- permet de consulter le fichier
- `w` => écriture (Write) : octale : 2
	- permet de modifier et sauvegarder les modifications dans le fichier
	- permet de rajouter, renommer ou supprimer du contenu (dossier)
- `x` => exécution (Execute) : octale : 1
	- permet de lancer l'exécution d'un logiciel ou d'un script
	- permet d'ouvrir un répertoire (dossier)
- `-` => pas de droit : octale : 0

### Types de fichier
- `-` => pour un fichier simple
- `d` => pour un répertoire (dossier, directory)
- `l` => pour un lien (link)

### Modifier les droits
- `+` => ajout d'un droit
- `-` => suppression d'un droit
- `=` => écraser les droits existants

### Droits accordés par défaut
- Debian fichier
```text
-rw-r--r-- "Propriétaire du fichier" "Groupe du fichier" (octale : 644)
```
::: info
- `-` => ceci est un fichier
- `rw-` => 1er bloc - Propriétaire : droit de lecture / écriture
- `r--` => 2eme bloc - Groupe : droit de lecture
- `r--` => 3eme bloc - Others : droit de lecture
:::

- Debian répertoire
```text
drwxr-xr-x "Propriétaire du dossier" "Groupe du dossier" (octale : 755)
```

- Ubuntu fichier
```text
-rw-rw-r-- "Propriétaire du fichier" "Groupe du fichier" (octale : 664)
```

- Ubuntu dossier
```text
drwxrwxr-x "Propriétaire du dossier" "Groupe du dossier" (octale : 775)
```


## Les droits spéciaux

### Types de droits spéciaux
- `s (SUID)` => octale : 4000 : 4
    - le s remplace le x qui donne le droit d'exécution
	- se passe au niveau du propriétaire
	- permet à n'importe quel utilisateur de lancer un programme mais avec les droits du propriétaire
	- donne à n'importe quel utilisateur les droits d'exécutions du propriétaire

<br>

- `s (SGID)` => octale : 2000 : 2
	- le s remplace le x qui donne le droit d'exécution
	- se passe au niveau du groupe
	- permet à n'importe quel utilisateur de lancer un programme mais avec les droits du groupe
	- donne à n'importe quel utilisateur les droits d'exécutions du groupe
::: info
Tout ce qui est créé dans un dossier ayant un SGID appartiendra à son propriétaire et au groupe du propriétaire de ce dossier.
:::

<br>

- `t (Sticky Bit)` => octale : 1000 : 1
	- le t remplace le x qui donne le droit d'exécution
	- se passe au niveau des autres (Others)
	- permet à n'importe quel utilisateur de lancer un programme mais avec les droits des autres
	- donne à n'importe quel utilisateur les droits d'exécutions des autres
::: info
Avec le Sticky Bit, les documents présents dans le dossier peuvent être modifiés par tous, mais ne peuvent être supprimés que par leur propriétaire, quelle que soit la combinaison des droits.
:::

<br>

- `chown `
    -  s'approprier un fichier ou un dossier
	- devenir propriétaire, pour pouvoir modifier les droits
	- doit être précédé de "sudo", il faut des droits élevés
	- doit être suivie du nom du nouveau propriétaire et du nom de fichier


## Exemples

### Changements de droits simples
- Ajouter les droits d'écriture au groupe du propriétaire
```sh
chmod g+w test
```

- Retirer les droits de lectures au autres
```sh
chmod o-r test
```

- Donne tous les droits pour tous
```sh
chmod a=rwx test
```

- Retirer les droits d'écriture au groupe du propriétaire
- Retirer les droits d'écriture et d'exécution au autres
```sh
chmod g-w,o-wx test
```

### Changements de droits simples, avec méthode octale
```sh
# Correspond à : -rwxr-xr-x
chmod 755 test
```
- Droit de lecture / écriture / exécution pour le propriétaire
- Droit de lecture / exécution pour le groupe et les autres

### Changements de droits simples sur un dossier et à son arborescence
```sh
chmod -R 751 Repertoire
```
- Tout les droits au propriétaire
- Droits de lecture et d'exécution au groupe
- Seulement les droits d'exécution aux autres
- Tout ça sur un répertoire et tout ce qu'il contient

### Changements de droits avec application SUID
```sh
chmod 4755 fichier
```
- `4` => pour SUID : hérite des droits d'exécution du propriétaire
- `7` => pour tout les droits au propriétaire
- `5` => pour droits de lecture et d'exécution au groupe
- `5` => pour droits de lecture et d'exécution aux autres

### Changements de droits avec application SGID sur un fichier
```sh
chmod g+s fichier
```
- `g` => pour groupe
- `+` => pour rajout de droits
- `s` => pour SGID : hérite des droits d'exécution du groupe

### Changements de droits avec application SGID sur un dossier
```sh
chmod g+s Repertoire
```
- `g` => pour groupe
- `+` => pour rajout de droits
- `s` => pour SGID : Tout ce qui est créé dans un dossier ayant un SGID appartiendra à son propriétaire et au groupe du propriétaire de ce dossier.

### Changements de droits avec application SGID sur un dossier, manière octale
```sh
chmod 2755 Repertoire
```
- `2` => pour SGID : sur un dossier, donc le propriétaire et le groupe du dossier sont celui du propriétaire
- `7` => pour tout les droits au propriétaire
- `5` => pour droits de lecture et d'exécution au groupe
- `5` => pour droits de lecture et d'exécution aux autres

### Changements de droits avec application Sticky Bit
```sh
chmod o+t DossierPartage
```
- `o` => pour autres (Others)
- `+` => pour rajout de droits
- `t` => pour Sticky Bit : protège de la suppression par une autre personne que son propriétaire

### Changements de droits avec application Sticky Bit, manière octale
```sh
chmod 1755 DossierPartage
```
- `1` => pour Sticky Bit
- `7` => pour tout les droits au propriétaire
- `5` => pour droits de lecture et d'exécution au groupe
- `5` => pour droits de lecture et d'exécution aux autres

### Récupérer les droits sur un dossier
```sh
sudo chown -R toto Repertoire
```
- `sudo` => pour avoir des droits élevé de faire la commande
- `chown` => pour modifier les droits, devenir propriétaire
- `-R` => pour devenir propriétaire sur tout ce qui présent dans le dossier
- `toto` => le nom du nouvel utilisateur qui prend le lead
- `Repertoire` => nom du dossier