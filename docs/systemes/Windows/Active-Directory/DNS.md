# DNS

## Definition

- DNS : Domain Name System - Système de Noms de Domaine
- Service qui fait la liaison d'un nom de domaine avec une adresse IP.
- Sert à associer des noms de domaine à des adresses IP.
- Le nom de domaine est composé d’une continuité de caractères ainsi que d’une extension qui désigne l’espace de noms.

::: info
### DNS Dynamique <br>
- Comme un assistant qui met constamment à jour votre adresse dans un carnet d’adresses chaque fois que vous déménagez.
- Par exemple, si vous hébergez un site web sur un serveur avec une adresse IP dynamique, le DDNS s’assure que toute personne qui tape votre nom de domaine est toujours dirigée vers votre serveur actuel, même si l’adresse IP a changé.

### DNS inversé (rDNS) <br>
- Permet de trouver le nom de domaine associé à une adresse IP.
- C’est un outil précieux pour les administrateurs de réseau qui doivent tracer des activités suspectes.
:::

## Fonctionnement

Le DNS est un processus en plusieurs étapes : 
- Lorsqu’un utilisateur entre un nom de domaine dans son navigateur, la requête est d’abord envoyée à un serveur DNS local.
- Si ce serveur ne connaît pas l’adresse IP, la demande est transférée à un serveur DNS supérieur.
- Ce processus se poursuit jusqu’à ce que l’adresse IP soit trouvée.
- Ensuite, le site web est retourné à l’utilisateur à travers cette adresse IP.

::: info
Chaque ordinateur connecté à un réseau dispose d’une adresse IP unique qui lui permet d’être identifié, un peu à la manière d’une adresse postale permettant de localiser une résidence dans le monde physique. La plupart des réseaux recourent à un ou plusieurs systèmes DNS (Domain Name System) qui associent ces adresses IP à des noms de domaine plus faciles à retenir pour les utilisateurs.
:::

## Composition d'une adresse internet (URL)

![](/composition-adresse-internet.png)

::: info
### http ou https <br>
- Protocole qui précède le prefixe.
- Indique la méthode utilisé pour accéder au site.

### Le préfixe <br>
- WWW (World Wide Web)
- Précède le nom de domaine

### Le nom de domaine <br>
- Distingue les différents sites sur le web

### L'extension <br>
- Peut être générique ou géographique
- Donne des informations supplémentaires sur le site (localisation géographique ou type d'organisation)
:::


## Questions ❓

💬 Quel est l’acronyme du système de noms de domaine ?
- <mark class="purple">DNS</mark><br>

💬 Parmi les périphériques suivants, lequel peut traduire un nom d’hôte en adresse IP ?
- <mark class="purple">Serveur DNS</mark><br>

💬 Un nom de domaine est composé d’une adresse Internet.
- <mark class="purple">Faux</mark><br>

💬 Comment le Domain Name System (DNS) facilite-t-il l’interprétation des adresses IP par les utilisateurs et les machines sur un réseau informatique ?
- <mark class="purple"> Le DNS permet aux utilisateurs de se référer aux ordinateurs et aux autres ressources à l’aide de noms de domaine faciles à comprendre, plutôt qu’à l’aide de leurs adresses IP numériques. </mark><br>

💬 Quelle est la principale fonction d'une zone DNS directe ?
- <mark class="purple">Gérer les enregistrements DNS d'un domaine spécifique</mark><br>

💬 Qu'est-ce qu'une zone DNS inversée ?
- <mark class="purple">Une zone DNS qui associe des adresses IP à des noms de domaine</mark><br>

💬 Quelle est la principale fonction d'une zone DNS primaire ?
- <mark class="purple">Gérer les enregistrements DNS d'un domaine spécifique</mark><br>

💬 Quelle est la principale fonction d'une zone DNS secondaire ?
- <mark class="purple">Fournir une redondance pour les serveurs DNS</mark><br>

💬 Quel type d'enregistrement DNS est utilisé pour associer un nom de domaine à une adresse IP ?
- <mark class="purple">Enregistrement A</mark><br>

💬 Quel enregistrement DNS est utilisé pour spécifier le serveur de messagerie pour un domaine ?
- <mark class="purple">Enregistrement MX</mark><br>

💬 Quel enregistrement DNS est couramment utilisé pour créer des alias de noms de domaine ?
- <mark class="purple">Enregistrement CNAME</mark><br>

💬 Quel enregistrement DNS est utilisé pour stocker des informations textuelles arbitraires ?
- <mark class="purple">Enregistrement TXT</mark><br>

💬 Quel enregistrement DNS est utilisé pour associer un nom de domaine à une adresse IPv6 ?
- <mark class="purple">Enregistrement AAAA</mark><br>