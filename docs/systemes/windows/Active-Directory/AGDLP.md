# AGDLP

## Definition

- AGDLP : Account, Global, Domain Local, Permission soit Compte, global, domaine local, autorisation.
- Procédure recommandée par Microsoft pour mettre en œuvre un contrôle d'accès basé sur les rôles au sein des domaines Windows.
- Les comptes d'ordinateurs et d'utilisateurs (A) doivent être membres de groupes globaux (G) qui représentent les rôles de l'entreprise.
- Pour gérer le contrôle d'accès des partages de dossiers et / ou fichiers sensibles ainsi que les imprimantes dans le domaine de l'AD, il est recommandé d'utiliser la méthode AGDLP.

## Fonctionnement

Cette méthode consiste à :
- Mettre en place une méthode simple qui va faciliter les tâches de gestion des contrôles d'accès aux ressources partagées pour les administrateurs.
- Gérer et contrôler l'accès aux ressources en utilisant des groupes locaux de domaine. En somme, afin qu'une ressource soit partagée sur le réseau, il faudra autant de groupes locaux de domaines que de types d'accès.

## Explication méthode AGDLP

![](/explication-methode-AGDLP.png)

- Un compte <mark>Utilisateur (A)</mark> est placé dans un <mark>Groupe Global (G)</mark> de sécurité
- Le <mark>Groupe Global (G)</mark> de sécurité est placé dans <mark>Groupe de Domaine Local (DL)</mark>
    - Ce groupe est plus restreint, il est rattaché uniquement au domaine
- C'est sur ce <mark>Groupe de Domaine Local (DL)</mark> que l'on va donner des <mark>Permissions (P)</mark>

## Cas Pratique

![](/cas-pratique-AGDLP.png)

- Permissions accordées en fonction des groupes auquel les utilisateurs sont rattachés.
- Les directeurs ont des dossiers confidentiels : accès total à leur dossiers, accès d'écriture et de lecture.
- Le sécrétariat ne peut pas modifier les dossiers confidentiels, mais peuvent les consulter : accès restreint, accès de lecture.
- Il y a donc un groupe avec des droits d'écriture/lecture et un autre groupe avec des droits de lecture uniquement.


## Questions ❓

💬 Quelle affirmation est correcte ?
- <mark class="purple">DIl faut affecter les groupes globaux dans les groupes dits de domaine local</mark><br>

💬 On doit créer des groupes de domaine local dans l'unité d'organisation « OU-Partag-Prom-Tech ».
- <mark class="purple">Vrai (Dans cette unité d'organisation de partage seront créés les groupes de domaine local qui serviront à la modification des accès.)</mark><br>

💬 À partir de quel gestionnaire se fait la configuration ?
- <mark class="purple">Gestionnaire de serveur</mark><br>

💬 L'autorisation de modification fait partie d'une des autorisations spéciales.
- <mark class="purple">Faux (L'autorisation de modification fait partie des autorisations de base.)</mark><br>

💬 Combien y a-t-il de profils de partage de fichiers ?
- <mark class="purple">5</mark><br>

💬 Il faut donner tous les droits à l'utilisateur pour pouvoir modifier ou supprimer des fichiers.
- <mark class="purple">Il faut donner tous les droits à l'utilisateur pour pouvoir modifier ou supprimer des fichiers.</mark><br>