# L'architecture logicielle des équipements numériques

Un logiciel est un ensemble d’instructions, de procédés et de règles relatifs à un traitement de données.

## Principes logiciels

::: info
Deux catégories de logiciels :

### Les logiciels systèmes <br>
Interagissent directement avec le matériel. Exemples : Microsoft Windows Serveur 2022, Microsoft Windows 11, GNU/Linux Debian, Apple MacOS, etc.

Le logiciel système, qui est un système d’exploitation, envoie des instructions au matériel et reçoit des instructions du matériel (composants et périphériques).

### Les logiciels applicatifs <br>
Interagissent indirectement avec le matériel et qui peuvent constituer une couche supplémentaire de fonctionnalités au logiciel système. Exemples : navigateur Google Chrome, Filezilla Server, WinRAR, Foxit Reader, OpenOffice, etc..

Le logiciel applicatif qui est une application, un utilitaire ou un pilote qui s’installe sur le logiciel système et aide les utilisateurs à effectuer des tâches informatiques.

- L’application est un ajout de fonctionnalités non natives dans le système d’exploitation et est utilisée pour effectuer une tâche (ex : la bureautique avec OpenOffice).

- L’utilitaire, natif ou non au logiciel système, permet l’analyse, la configuration, l’optimisation du matériel informatique (composants et périphériques), d’un logiciel système et/ou applicatif.

- Le pilote (driver en anglais) permet de faire reconnaître un composant et/ou périphériques au logiciel système afin de tirer parti de toutes les possibilités fonctionnelles qu’offre celui-ci.
:::

::: info
Tout logiciel est soumis à des droits via un contrat de licence : 
- **Licence propriétaire (proprietary en anglais)** : l’auteur peut diffuser et modifier le logiciel. Son utilisation est payante.
- **Licence libre (open source en anglais)** : peut être utilisé, exécuté, modifié, distribué, redistribué par tous.
- **Licence gratuite (gratuiciel - freeware en anglais)** : logiciel propriétaire accessible gratuitement en utilisation, en distribution et en copie.
- **Licence partagicielle (shareware en anglais)** : logiciel propriétaire qui peut être utilisé gratuitement en essai pendant une période donnée. L’auteur autorise la diffusion.
:::

::: info
Tout logiciel est soumis à des droits via un contrat de licence : 
- **Licence propriétaire (proprietary en anglais)** : l’auteur peut diffuser et modifier le logiciel. Son utilisation est payante.
- **Licence libre (open source en anglais)** : peut être utilisé, exécuté, modifié, distribué, redistribué par tous.
- **Licence gratuite (gratuiciel - freeware en anglais)** : logiciel propriétaire accessible gratuitement en utilisation, en distribution et en copie.
- **Licence partagicielle (shareware en anglais)** : logiciel propriétaire qui peut être utilisé gratuitement en essai pendant une période donnée. L’auteur autorise la diffusion.
:::

## Couches logicielles

::: info
Il existe quatre couches logicielles :

1. Deux sont déjà connues, **la couche matérielle et la couche « logiciel système = Système d’exploitation (avec son noyau) »**.

- **Le noyau** est responsable de la gestion des ressources matérielles, de la communication entre le matériel et les logiciels, et de l’exécution des tâches de bas niveau nécessaires au bon fonctionnement du système

2. La 3e est **la couche intergicielle (middleware en anglais)**, intégrée au logiciel final, qui fournit des services et des fonctionnalités facilitant la communication entre les logiciels applicatifs et le système d’exploitation. Elle inclut des bibliothèques, des pilotes, des API (interfaces de programmation d’applications) et des protocoles de communication.

- **La bibliothèque ou librairie logicielle** est un ensemble de fonctions/méthodes (code de programmation) utilitaires, de procédures et de routines, regroupées et distribuées afin de pouvoir être utilisées sans avoir à les réécrire à chaque fois. (Ex : .lib)

- **L’API** est une interface logicielle qui permet de créer un lien d’un logiciel ou un service à un autre logiciel ou service pour échanger des données et des fonctionnalités.

3. La 4e couche est **la couche logicielle applicative (application software layer en anglais)** qui représente les interactions graphiques ou non de l’utilisateur final avec logiciel. C’est la partie d’exécution du logiciel.
:::

## Systèmes d’exploitation

::: info
- Android
- Apple IOS
- Apple macOS
- Linux
- Microsoft Windows
:::

## Tendances et évolutions de l’architecture logicielle

::: info
### Pour la virtualisation <br>
- **Conteneurisation** : les conteneurs, comme LXC ou Docker, empaquètent et déploient des applications portables simplement. Ils facilitent la mise en place et la gestion d’environnements isolés.
- **Micro-services** : l’architecture en micro-services divise les applications en petits services indépendants qui peuvent être développés et déployés de manière autonome. Cela favorise l’agilité et facilite les mises à jour.

### Pour l’externalisation (Cloud Computing) <br>
- **Edge Computing** : les données sont traitées sur le demandeur (ou un intermédiaire) local. Cela réduit la latence et améliore la réactivité pour les applications contraintes en temps.
- **Serverless Computing (« Function as a Service », ou FaaS)**, le fournisseur gère les ressources des serveurs externalisés et le client crée et déploie des applications ou services sans gérer l’infrastructure hébergeante.

### Pour l’internet des objets (Internet of Things) <br>
- **Edge AI** : les objets intègrent une couche d’intelligence artificielle (edge AI) pour avoir plus rapidement des décisions et réduire leur besoin de connectivité externe.
- **Sécurité IoT** : les objet sont quasiment conçus en intégrant dès le début du projet la sécurité (security by design).

### Pour l’intelligence artificielle <br>
- Tout logiciel informatique embarquera tôt ou tard une intelligence artificielle pour avoir une prise de décision plus sûre, plus rapide puis pour renforcer sécuritairement les échanges d’informations.
:::


## Questions ❓

### Principes logiciels

💬 Qu’est-ce qu’un logiciel système ?
- <mark class="purple">Un logiciel qui interagit directement avec le matériel</mark><br>

💬 Quelle est la caractéristique d’une licence libre (open source) ?
- <mark class="purple">Tous peuvent utiliser, exécuter et modifier le logiciel</mark><br>

💬 Quel est le rôle d’un pilote (driver) dans un système informatique ?
- <mark class="purple">Analyser et configurer le matériel informatique</mark><br>

💬 Quel type de logiciel interagit directement avec le logiciel système ?
- <mark class="purple">Aucun</mark><br>

💬 Qu’apporte un logiciel métier ?
- <mark class="purple">Des spécificités fonctionnelles par entreprise</mark><br>

### Couches logicielles

💬 Quelle est la principale responsabilité de la couche du noyau (kernel) dans les couches logicielles ?
- <mark class="purple">Gérer la mémoire, la planification des tâches et les opérations d’E/S</mark><br>

💬 Qu’est-ce qu’une API (Interface de Programmation d’Applications) dans les couches logicielles ?
- <mark class="purple">Un système d’exploitation</mark><br>

💬 Quelle couche logicielle fournit des services et des fonctionnalités facilitant la communication entre les logiciels applicatifs et le système d’exploitation ?
- <mark class="purple">La couche matérielle</mark><br>

💬 Quel est le rôle principal de la couche logicielle applicative dans les couches logicielles ?
- <mark class="purple">Gérer les interfaces logicielles standardisées (API)</mark><br>

💬 Quel principe sous-tend le fonctionnement des couches logicielles ?
- <mark class="purple">Le principe d’abstraction</mark><br>

### Systèmes d’exploitation

💬 Quelle est la part de marché de Microsoft Windows pour les utilisateurs finaux (clients) fin mai 2023 ?
- <mark class="purple">75,62 %</mark><br>

### Tendances et évolutions

💬 Qu’est-ce que la conteneurisation dans le domaine de l’architecture logicielle ?
- <mark class="purple">Un modèle d’architecture client-serveur</mark><br>

💬 Quelle est la principale caractéristique de l’architecture en micro-services ?
- <mark class="purple">Elle divise les applications en petits services indépendants</mark><br>

💬 Qu’est-ce que l’Edge Computing dans l’Internet des Objets (IoT) ?
- <mark class="purple">Une approche pour traiter les données localement plutôt qu’à distance</mark><br>

💬 Qu’est-ce que le Serverless Computing (FaaS) ?
- <mark class="purple">Un modèle où le fournisseur gère les ressources des serveurs et le client déploie des applications sans gérer l’infrastructure</mark><br>

💬 Comment les architectures logicielles modernes contribuent-elles à la sécurité des données ?
- <mark class="purple">En intégrant de nouvelles couches de sécurité, telles que la conteneurisation et le « zero trust »</mark><br>

### Rappels

💬 Quelle tendance logicielle divise une application en composants indépendants, interconnectés par des interfaces bien définies ?
- <mark class="purple">Architecture micro-services</mark><br>

💬 Quelle technologie permet aux développeurs de déployer et de gérer des applications dans des conteneurs légers et isolés ?
- <mark class="purple">Conteneurisation</mark><br>

💬 Quelle tendance architecturale vise à déplacer le traitement et l’analyse des données le plus près possible de la source, réduisant ainsi la latence et améliorant la réactivité des applications ?
- <mark class="purple">Edge Computing</mark><br>

💬 Concevoir des logiciels en intégrant le client au cœur du projet logiciel, c’est être :
- <mark class="purple">Agile</mark><br>

💬 L’acronyme UX veut dire en français :
- <mark class="purple">Expérience utilisateur</mark><br>