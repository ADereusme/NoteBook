# La mise en oeuvre de A à Z d'un cas d'une infrastructure ActiveDirectory

## Étape 1 : Création VM

::: info ETAPE 1
Création d'une machine virtuelle Windows Server (2022 ou autre) :
- Utilisation de VMWare Workstation Pro ou Virtualbox
- 4 GB de Mémoire / 2 Processors / 60 GB d'espace disque
:::

## Étape 2 : Création réseau

::: info ETAPE 2
Création d'un réseau :
- Sert à faire fonctionner le serveur et les postes clients
- Décocher l'option DHCP
- Réseau NAT à sélectionner dans la VM
:::

## Étape 3 : Installation de la VM

::: info ETAPE 3
Configuration et installation de Windows Server :
- Sélectionner le bon ISO à mettre dans la VM
- Ouvrir la VM
- Suivre l'installation
- Choisir la version "Standard Evaluation (expérience de bureau)"
- Installer les tools de la VM si besoin
:::

## Étape 4 : Paramétrages

::: info ETAPE 4
Configuration du serveur local (paramétrages de base) :

- Gestionnaire de serveur → Serveur local

### Changement de nom <br>
- Le serveur sera plus facile à identifier sur le réseau
- Utiliser la RFC1178
- <mark>Gestionnaire de serveur</mark> → <mark>Serveur local</mark> → Cliquer sur <mark>le nom de l'ordinateur</mark>
- Cliquer sur <mark>Modifier</mark>
- Mettre le nouveau nom
- Cliquer sur <mark>OK</mark>
- Redémarrer le serveur

### Activation du bureau à distance <br>
- Permet d'administrer le serveur depuis un poste distant
- <mark>Gestionnaire de serveur</mark> → <mark>Serveur local</mark> → Cliquer sur <mark>désactivé</mark>
- Cliquer sur <mark>Autoriser les connexions à distance à cet ordinateur</mark>
- Cliquer sur <mark>OK</mark> → <mark>Appliquer</mark> → <mark>OK</mark>
- Actualiser la page pour voir la modification

### Création d'une adresse IP fixe <br>
- Attribuer une adresse IP fixe au serveur
- <mark>Gestionnaire de serveur</mark> → <mark>Serveur local</mark> → Cliquer sur <mark>Adresse IPv4...</mark>
- Désactiver l'IPv6
- Cliquer sur <mark>Utiliser l'adresse IP suivante :</mark>
- Rentrer une adresse IP (par rapport au réseau créé précédemment)
- Mettre également le masque de sous-réseau et la passerelle par défaut
- Cliquer sur <mark>Utiliser l'adresse de serveur DNS suivante :</mark>
- Dans "Serveur DNS préféré", mettre `8.8.8.8`
- Cocher <mark>Valider les paramètres en quittant</mark>
- Cliquer sur <mark>OK</mark>
- Cliquer sur <mark>Fermer</mark>
- Attendre quelques secondes pour que les paramètres se mettent en place.
- Ne pas appliquer le correctif.
- Actualiser la page pour voir la modification
:::

## Étape 5 : Rôle ADDS

::: info ETAPE 5
Installation du rôle ADDS :
- <mark>Gestionnaire de serveur</mark> → <mark>Gérer</mark> → <mark>Ajouter des rôles et des fonctionnalités</mark>
- Sélectionner le bon serveur
- Sélectionner le rôle : <mark>AD DS</mark>
- Continuer l'installation
:::

## Étape 6 : Configuration ADDS

::: info ETAPE 6
Installation de l'Active Directory :
- Promouvoir le serveur en controleur de domaine
- Mettre le nom de domaine racine : Ex : RoseLingerie.fr
- Mettre le mot de passe pour le mode de restauration
- NetBios : le domaine en Majuscule
- Continuer l'installation
- Redémarrage du serveur
- Vérifier que le domaine à bien été pris en compte
:::

## Étape 7 : Configuration DNS

::: info ETAPE 7
Configuration du DNS :
- <mark>Gestionnaire de serveur</mark> → Clique droit sur <mark>DNS</mark> → <mark>Gestionnaire DNS</mark>
- La zone de recherche directe est déjà remplie

Rappel :
- Le DNS sert à traduire des adresses IP en noms
- Il peut aussi servir à traduire des noms en adresse IP (zone de recherche inversée)

- Cliquer sur <mark>Zones de recherche inversée</mark> → <mark>Nouvelle zone...</mark>
- Cliquer sur <mark>Suivant</mark> plusieurs fois
- Rentrer l'ID du réseau
- Cliquer sur <mark>Suivant</mark> jusqu'à la fin

- Cliquer sur le dossier avec le nom de domaine dans "Zones de recherche directes"
- Cliquer sur le nom du serveur
- Cliquer sur <mark>Mettre à jour l'enregistrement de pointeur (PTR) associé</mark>
- Cliquer sur <mark>Appliquer</mark> → <mark>OK</mark>

- On reviens sur le dossier dans "Zones de recherche inversée"
- Cliquer sur <mark>Actualiser</mark>
- Le pointeur apparait
:::

## Étape 8 : Rôle DHCP

::: info ETAPE 8
Installation du rôle DHCP :
- <mark>Gestionnaire de serveur</mark> → <mark>Gérer</mark> → <mark>Ajouter des rôles et des fonctionnalités</mark>
- Sélectionner le bon serveur
- Sélectionner le rôle : <mark>Serveur DHCP</mark>
- Continuer l'installation
:::

## Étape 9 : Configuration DHCP

::: info ETAPE 9
Configuration du DHCP :
- Cliquer sur <mark>Terminer la configuration DHCP</mark> depuis l'icône drapeau
- Continuer la configuration

Création d'une nouvelle étendue :
- <mark>Gestionnaire de serveur</mark> → Clique droit sur <mark>DHCP</mark> → <mark>DHCP</mark>
- Clique droit sur <mark>IPv4</mark> → <mark>Nouvelle étendue</mark>
- Donner un nom à cette étendue
- Donner une plage d'adresses IP avec le bon masque sous-réseau
- Si besoin, mettre des adresses d'exclusions
- Ajouter la passerelle par défaut
- Cliquer sur <mark>Suivant</mark> jusqu'à la fin
:::

## Étape 10 : Modification réseau

::: info ETAPE 10
Modification des propriétés de la carte réseau :
- Changer l'adresse l'adresse de serveur DNS et mettre l'adresse IP du serveur à la place
- Cocher <mark>Valider les paramètres en quittant</mark>
- Cliquer sur <mark>OK</mark>
- Cliquer sur <mark>Fermer</mark>
- Attendre quelques secondes pour que les paramètres se mettent en place.
- Ne pas appliquer le correctif.

Pour forcer la mise à jour :
- Clique droit sur le réseau
- Cliquer sur <mark>Désactiver</mark>
- Clique droit sur le réseau
- Cliquer sur <mark>Activer</mark>
- Attendre quelques secondes pour que les paramètres se mettent en place.

On en profite pour faire les mises à jour sur le serveur :
- Aller dans <mark>Windows Update</mark>
- Faire les mises à jour
- Penser à faire un snapshot de la VM
:::

## Étape 11 : Users/Ordi dans l'AD

::: info ETAPE 11
Création de dossiers d'ordinateurs et d'utilisateurs :
- Le but étant de remplir l'annuaire de l'AD : Ordinateurs et Utilisateurs.
- <mark>Gestionnaire de serveur</mark> → Clique droit sur <mark>ADDS</mark> → <mark>Utilisateurs et ordinateurs Active Directory</mark>
- Créer une ou plusieurs OU : "Unité d'organisation". (dossiers et sous-dossiers)
- Mettre les ordinateurs et utilisateurs dans Ces "OU"
:::

## Étape 12 : Groupes dans l'AD

::: info ETAPE 12
Création de groupes d'employés :
- Il est plus facile de donner des droits à un groupe qu'à des utilisateurs isolés.
- Création de <mark>Groupes Globaux</mark>
- Ajout des utilisateurs dans les <mark>Groupes Globaux</mark>
:::

## Étape 13 : Paramétrage droits

::: info ETAPE 13
Paramétrage des droits et permissions par groupe : AGDLP
- Voir infos AGDLP, section cas pratique : [AGDLP](/systemes/Windows/Active-Directory/AGDLP)
- Création de <mark>Groupes de Domaine Local</mark>
- Ajout des <mark>Groupes Globaux</mark> dans les <mark>Groupes de Domaine Local</mark>

Autres paramètres pour les droits :
- Gérer les droits NTFS sur les dossiers dans les lecteurs réseaux
- Clic droit sur un dossier → <mark>Propriétés</mark> → <mark>Sécurité</mark>
:::

## Étape 14 : Pools de stockage

::: info ETAPE 14
Création de pools de stockage puis de volumes :
- Eteindre la VM
- <mark>Settings</mark> de la vm → <mark>Stockage</mark> et rajouter des espaces disques
- Rallumer la VM
- <mark>Gestionnaire de serveur</mark> → <mark>Services de fichiers et de stockage</mark> → <mark>Disques</mark> : on peut voir les disques rajoutés.
- Créer les pools de stockage
:::

## Étape 15 : Installation GPO

::: info ETAPE 15
Installation des stratégies de groupe : GPO

Chemin d'accès :
- <mark>Gestionnaire de serveur</mark> → <mark>Outils</mark> → <mark>Gestion de stratégie de groupe</mark>

Exemple : bloquer l'utilisation de CMD :
- Chercher l'OU où se trouve les utilisateurs
- Clic droit sur le dossier → <mark>Créer un objet GPO dans ce domaine</mark>
- Donner un nom à la GPO
:::

## Étape 16 : Configuration GPO

::: info ETAPE 16
Configuration des stratégies de groupe : GPO

Chemin d'accès :
- <mark>Gestionnaire de serveur</mark> → <mark>Outils</mark> → <mark>Gestion de stratégie de groupe</mark>

Exemple : bloquer l'utilisation de CMD :
- Aller sur la GPO → Clic droit dessus → <mark>Modifier</mark>
- Choisir comment va s'appliquer la GPO : agir par rapport à l'ordinateur ou au compte utilisateur. Pour ce cas, ça sera par rapport au compte utilisateur.

Forcer la mise à jour des GPO :
- Ouvrir <mark>CMD</mark> sur le serveur
- Taper la commande : `gpupdate /force`
- Si besoin faire la même chose sur le poste client

Suite de l'exemple : bloquer l'utilisation de CMD :
- Ouvrir <mark>CMD</mark> sur le poste client
- Vérifier si la GPO est fonctionnelle
- Si "Non", déconnexion/reconnexion de la session
:::

## Étape 17 : Serveur d'impression

::: info ETAPE 17

### Si l'imprimante est sur le réseau local, LAN domicile <br>

1. Désactiver le DHCP du serveur :
- Le réseau domestique à un DHCP automatique via la box
- Il faut désactiver le DHCP du serveur pour éviter les conflits
- <mark>Gestionnaire de serveur</mark> → <mark>Gérer</mark> → <mark>supprimer des rôles et fonctionnalités</mark>

2. Modifications réseaux :
- Modifier la carte réseau
    - Enlever l'adressage en ip fixe et le basculer en DHCP (lo box du domicile donnera l'adresse IP)
    - Modifier le DNS et mettre l'adresse IP de la box
- Eteindre le serveur
- Modifier le réseau dans les settings de la VM (serveur + client) : <mark>accès par pont</mark>
- Rallumer la VM serveur puis récupérer l'adresse IP attribuée en DHCP
- Modifier de nouveau la carte réseau
    - Repasser en adresse IP fixe en mettant celle attribuée par le DHCP
    - Remettre également le masque de sous-réseau ainsi que la passerelle par défaut
- Modifier le serveur DNS
    - <mark>Gestionnaire de serveur</mark> → Clic droit sur <mark>DNS</mark> → <mark>Gestionnaire DNS</mark>
    - <mark>Zones de recherche directes</mark> → Clic droit sur <mark>_msdc.nomDuDomaine</mark> → <mark>Propriétés</mark> → <mark>Serveurs de noms</mark>
    - Cliquer sur <mark>Modifier</mark> → Rajouter l'adresse du serveur
    - Cliquer sur <mark>Appliquer</mark> → <mark>OK</mark>
    - <mark>Zones de recherche inversée</mark> → supprimer la précédente
    - Créer une nouvelle zone
- Modifier de nouveau la carte réseau
    - Changer le DNS et mettre l'adresse IP du serveur
- Forcer la mise à jour :
    - Clique droit sur le réseau
    - Cliquer sur <mark>Désactiver</mark>
    - Clique droit sur le réseau
    - Cliquer sur <mark>Activer</mark>
    - Attendre quelques secondes pour que les paramètres se mettent en place.

3. Installation rôle d'impression :
- Ajout du rôle <mark>Services d'impression et de numérisation de documents</mark>
- <mark>Menu Windows</mark> → On tape <mark>Gestion de l'impression</mark> puis on l'ouvre

4. Configuration du pilote :
- <mark>Serveurs d'impression</mark> → Clique droit sur <mark>Pilotes</mark> → <mark>Ajouter un pilote</mark>
    - Suivre l'installation
    - Chercher le constructeur de l'imprimante et le model. Si on ne trouve pas le bon model, prendre un pilote universel.

5. Configuration du port : Pour que le serveur d'impression puisse communiquer avec l'imprimante
- <mark>Serveurs d'impression</mark> → Clique droit sur <mark>Ports</mark> → <mark>Ajouter un port</mark>
    - Choisir un port standard TCP/IP
    - Donner l'adresse IP de l'imprimante
- L'imprimante doit être en ligne, allumée et disponible pour que cela fonctionne

6. Configuration de l'imprimante :
- <mark>Serveurs d'impression</mark> → Clique droit sur <mark>Imprimantes</mark> → <mark>Ajouter une imprimante</mark>
    - Choisir le port crée précédemment
    - Utiliser le pilote crée précedemment
    - Donner un nom à l'imprimante (même nom pour le nom du partage)
    - Cocher la case <mark>Partager cette imprimante</mark>
- Clic droit sur l'imprimante crée → Onglet <mark>Partage</mark> → Cocher <mark>Lister dans l'annuaire</mark>
    - Cliquer sur <mark>Appliquer</mark> → <mark>OK</mark>

7. Connexion côté client :
- Se connecter côté client avec un profil sur le réseau (utiliser les identifiants de l'administrateur réseau)
- Modifier les paramètres réseau
    - Vérifier que le DHCP de la box à bien attribué une adresse IP
    - Changer le DNS et mettre l'adresse IP du serveur
    - Cocher la case <mark>Valider les paramètres en quittant</mark>

8. Ajouter l'imprimante côté client (W10) :
- <mark>Panneau de configuration</mark> → <mark>Afficher les périphériques et imprimantes</mark> → <mark>Ajouter une imprimante</mark>
    - Sélectionner celle sur le serveur

9. Configuration imprimante côté client :
- Clic droit sur l'imprimante → <mark>Définir comme imprimante par défaut</mark>

10. Vérifications :
- Se connecter avec un profil utilisateur standard du domaine
- Tester avec une impression

### Imprimante connecté au serveur sur le réseau de l'entreprise <br>
- Voir dans le premier cas de cette étape à partir de l'étape 3.
:::

