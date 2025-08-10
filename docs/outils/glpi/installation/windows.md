# Installation de GLPI sur Windows
<br>

- Environnement : **VMware Workstation Pro**
- Hébergement : **WampServer**


## 1. Préparer la VM Windows

### Configuration recommandée
| Ressource  | Minimum conseillé                   |
|------------|-------------------------------------|
| CPU        | 2 vCPU                              |
| RAM        | 4 Go (W10), 8 Go (W11)              |
| Stockage   | 64 Go                               |
| Réseau     | Bridge ou NAT selon le besoin       |
| OS         | Windows 10/11 Pro ou Windows Server |

💡 **Astuce VMware** :
🌐 [Setup Windows 11 Without Microsoft Account](https://www.youtube.com/watch?app=desktop&v=LWlwd7T1TYU)


## 2. Installer WampServer

1. Pour fonctionner Wamp Server nécessite des prérequis applicatifs :
    - Télécharger le fichier 🌐 [VisualCppRedist_AIO_x86_x64.exe](https://github.com/abbodi1406/vcredist/releases)
    - Lancer l'installation, cliquer sur <mark>Next</mark>, patienter, puis sur <mark>Finish</mark>

2. Ensuite, nous pouvons installer Wamp Server :
    - Télécharger 🌐 [WampServer](https://www.wampserver.com/)
    - Lancer l'installation en tant qu'administrateur
    - Suivre les étapes d'installation
    - Sélectionner le navigateur et l'éditeur de texte que WAMP va utiliser.

3. Lancer WampServer et vérifier :
    - que l’icône dans la barre des tâches est **verte** (services actifs).
    - quand tapant `localhost` dans le navigateur, nous arrivons sur la page de Wamp Server.


## 3. Télécharger et placer GLPI

1. 🌐 [Télécharger la dernière version de GLPI](https://glpi-project.org/downloads/)

2. Extraire le contenu dans le dossier :
```text
C:\wamp64\www\glpi
```

Le contenu est un dossier nommé **glpi**.


## 4. Créer la base de données

1. Ouvrir **PhpMyAdmin** via :
```text
http://localhost/phpmyadmin
```
Une autre solution :
- Cliquer sur l'icône WAMP dans la barre des tâches
- Puis <mark>PhpMyAdmin</mark> et <mark>PhpMyAdmin</mark>

2. Se connecter avec l’utilisateur **root** (sans mot de passe).

3. Créer la base de données :
    - Cliquer sur <mark>Nouvelle base de données</mark>
    - Donner un nom à la base de données : `glpi`

4. Créer un utilisateur dédié :
    - Onglet <mark>Privilèges</mark>
    - Cliquer sur <mark>Ajouter un compte utilisateur</mark>
    - Nom d'utilisateur : `glpiuser`
    - Nom d'hôte : `localhost`
    - Mot de passe : `MotDePasseFort`

> [!TIP]
> Bien entendu, « MotDePasseFort » est à changer par un mot de passe de son choix.

5. Cocher <mark>Privilèges globaux</mark>

6. Puis terminer en cliquant sur <mark>Executer</mark>

7. Vérifier que le compte est bien crée :
    - Retourner sur la page de connexion **phpMyAdmin**
    - Remplacer les identifiants par ceux de l'utilisateur précédemment crée


## 5. Configurations facultatives

### Configurer PHP

1. Ajouter des extensions manquantes :
    - Clic gauche sur l'icône Wamp Server
    - Menu <mark>PHP</mark> puis menu <mark>Extensions PHP</mark>
    - Activer l'extension <mark>bz2</mark>
    - Attendre la mise à jour des paramètres
    - Recommencer pour l'extension <mark>sodium</mark>

2. Modifier le fichier de configuration **php.ini** :
    - Clic gauche sur l'icône Wamp Server
    - Menu <mark>PHP</mark> puis cliquer sur <mark>php.ini [apache module]</mark>
    - Chercher « **session.cookie_httponly** » (Ctrl + F)
    - Rajouter `on` pour l'activer
    - Chercher « **max_execution_time** » (Ctrl + F)
    - Mettre `600` à la place de `120`

> [!NOTE]
> <div style="text-align: justify;"> **« session.cookie_httponly = on »** : refuser l’accès à un cookie de session depuis le langage de programmation javascript car il peut être corrompu. <br>
  **« max_execution_time = 600 »** : définir une limite de temps de 600 secondes pour l’exécution d’un script PHP afin d’éviter de saturer le serveur web.
</div>

### Configurer le service web

1. Accéder au fichier de configuration :
    - Clic gauche sur l'icône Wamp Server
    - Menu <mark>Apache</mark> puis cliquer sur <mark>httpd-vhosts.conf</mark>

2. A la suite de ce fichier, ajouter le texte suivant :
```text
#
<VirtualHost *:80>
ServerName srv-glpi
ServerAlias 192.168.10.80 
DocumentRoot "C:/wamp64/www"
Alias "/glpi" "C:/wamp64/www/glpi/public"
<Directory "C:/wamp64/www/glpi/">
Require all granted
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^(.*)$ index.php [QSA,L]
</Directory>
</VirtualHost>
#
```
> [!WARNING]
> Penser à adapter les variables « ServerName » et « ServerAlias » à votre infrastructure.

- Fermer le fichier en enregistrant les modifications.

### Configurer le pare-feu local pour autoriser l’accès distant à GLPI
<br>
<div style="text-align: justify;">
Cette étape permet d'autoriser l'accès à GLPI depuis d'autres machines que le serveur dans le réseau local.
Dans le cas contraire, on restera bloqué à la machine sur laquelle est installé Wamp Server et on ne pourra pas inventorier nos équipements avec l’agent-glpi par exemple car le serveur refusera les requêtes.
</div>

1. Taper `pare-feu` dans la barre de recherche windows

2. Aller dans  « **Autoriser une application via le pare-feu Windows** »

3. Cliquer sur <mark>Modifier les paramètres</mark> (pour débloquer la configuration)

4. Cliquer sur <mark>Autoriser une autre application</mark>

5. Cliquer sur <mark>Parcourir</mark>

6. Aller chercher « **httpd.exe** » dans le dossier de Wamp :
```text
C:\wamp64\bin\apache\apache(votre version)\bin
```

7. Cliquer sur <mark>Ouvrir</mark>

8. Cliquer sur <mark>Ok</mark>

9. Cocher les cases <mark>Privé</mark> et <mark>Public</mark> de la ligne **Apache http Server** ajouter aux applications autorisées.

## 6. Installation web de GLPI

1. Avant toutes choses, redémarrer les services WAMP :
    - Clic gauche sur l'icône Wamp Server
    - Cliquer sur <mark>Redémarrer les services</mark>
    - Attendre que l'icône soit **verte**

2. Accéder à l’URL :
```text
http://localhost/glpi

ou

http://nom-ou-ip-du-serveur-glpi/glpi (à privilégié)
```

3. Choisir la langue et accepter la licence

4. Sélectionner <mark>Installer</mark>

5. Indiquer les paramètres de connexion :
    - Serveur MySQL : `localhost`
    - Utilisateur : `glpiuser`
    - Mot de passe : `MotDePasseFort` (le mot de passe de l'utilisateur)
    - Base de donnée : `glpi` (le nom donné précédemment)

6. Cliquer sur <mark>Continuer</mark> jusqu'au bouton <mark>Utiliser GLPI</mark>

7. Rentrer les identifiants de connexion :
    - Identifiant : `glpi`
    - Mot de passe : `glpi`


## 7. Dernières manipulations

Des avertissements peuvent apparaitre lors de la connexion.

### Avertissement des mots de passe

- Cliquer sur les noms dans l'avertissement
- Changer le mot de passe de chacun
- Ne pas oublier de valider

### Avertissement du fichier install

- Supprimer le fichier **install.php** :
```text
C:\wamp64\www\glpi\install
```

Le chemin sera différent si le chemin par défaut est modifié lors de l'installation de WAMP.

### Avertissement du dossier racine

- Se référer à l'étape : <mark class="purple">Configurer le service web</mark>


## 📚 Ressources utiles

- 🌐 [Installer GLPI sous WAMP Server](https://neptunet.fr/wamp-glpi/#A)

---
<br>

📎 [Retour à GLPI](/outils/glpi/glpi)