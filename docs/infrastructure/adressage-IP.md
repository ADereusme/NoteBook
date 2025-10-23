# Adressage IP

<br>

## Adresse IP

::: info
- Une adresse IP (Internet Protocol) est une chaîne de nombres servant à identifier de manière unique un appareil au sein d'un réseau informatique. 

- Elle est composée de quatre groupes de chiffres séparés par des points dans le cas de l'IPv4 (exemple : 192.168.1.1). Chaque groupe représente un octet, avec une valeur allant de 0 à 255. 

- L'adresse IP permet non seulement de distinguer un appareil des autres, mais aussi de localiser cet appareil.

- Une adresse IP est unique.

- Dans les réseaux locaux (comme les réseaux domestiques ou les réseaux d’entreprise), des adresses IP dites privées sont utilisées, par exemple : 192.168.x.x ou 10.x.x.x. En revanche, pour communiquer avec le reste du monde via Internet, une adresse IP publique est nécessaire. Cette dernière est attribuée par le Fournisseur d'Accès à Internet (FAI).
:::

::: warning
Il ne faut pas confondre adresse IP locale et adresse IP publique.

- L’adresse IP locale n’est accessible que dans votre réseau interne (exemple : 192.168.1.10).

- L’adresse IP publique, attribuée par votre fournisseur d’accès à Internet, est visible sur le réseau mondial et permet à votre réseau d’interagir avec des services extérieurs (exemple : 88.164.32.45).
:::

::: tip
Pour faciliter la compréhension des adresses IP, utilisons une analogie avec le système postal : une adresse IP peut être comparée à l’adresse d’une maison dans un quartier. Chaque maison a une adresse unique, permettant au facteur de savoir où livrer le courrier.
:::

::: info
Une adresse IP seule ne suffit pas à établir correctement la communication dans un réseau. Elle fonctionne avec d'autres paramètres, notamment :

- Le masque de sous-réseau, qui détermine la taille et la structure du réseau.

- La passerelle par défaut, qui est l’adresse de l’équipement permettant de sortir du réseau local (généralement le routeur ou la box Internet).
:::

## Versions d'adresses IP

::: info
Deux versions principales d'adresses IP :

### IPv4 <br>
- La version la plus utilisée aujourd’hui, bien que les adresses IPv4 soient en cours d'épuisement. Une adresse IPv4 est constituée de 32 bits, généralement représentés sous forme de 4 octets en notation décimale (exemple : 192.168.0.1).

### IPv6 <br>
- La nouvelle version de protocole conçue pour répondre à l'épuisement des adresses IPv4. Une adresse IPv6 utilise 128 bits, ce qui permet un nombre presque illimité d'adresses uniques. Elle est représentée par 8 groupes de chiffres hexadécimaux.
:::

### Structure d’une adresse IPv4

::: info
- Une adresse IPv4 est une séquence numérique composée de quatre octets séparés par des points, chacun représentant un groupe de 8 bits. 
- Elle est généralement exprimée sous sa forme décimale, chaque octet prenant une valeur comprise entre 0 et 255. Un exemple courant d’adresse IPv4 est 192.168.1.1. 
- Cette structure permet une organisation hiérarchisée du réseau en distinguant deux parties : la partie réseau et la partie hôte.

Ex : adresse IP : 192.168.1.1 en binaire : 11000000.10101000.00000001.00000001

Les adresses IPv4 sont réparties en deux grandes parties :

- La partie réseau, qui identifie le sous-réseau auquel l’adresse appartient,

- La partie hôte, qui identifie un appareil spécifique au sein de ce sous-réseau.

- La séparation entre la partie réseau et la partie hôte d’une adresse IPv4 est déterminée par le masque de sous-réseau. Ce masque précise combien de bits de l’adresse appartiennent à la partie réseau et combien sont réservés à la partie hôte.

::: details Exemple
Avec un masque /24 (255.255.255.0), les 24 premiers bits sont réservés à la partie réseau.

Prenons l’adresse 192.168.1.1/24 :

- Partie réseau (24 bits) : 192.168.1

- Partie hôte (8 bits restants) : 1

Cela signifie que cette adresse appartient au réseau 192.168.1.0 et qu’elle identifie l’hôte 1 dans ce réseau.

Supposons un réseau domestique configuré avec le plan d’adressage suivant :

- Réseau : 192.168.1.0/24

- Masque de sous-réseau : 255.255.255.0

Dans ce cas :

- L’adresse 192.168.1.0 est l’adresse du réseau, utilisée pour identifier ce sous-réseau.

- L’adresse 192.168.1.255 est l’adresse de broadcast, utilisée pour envoyer des messages à tous les appareils du sous-réseau.

- Les adresses de 192.168.1.1 à 192.168.1.254 sont les adresses utilisables pour les équipements du réseau.

Prenons l'adresse 192.168.1.10 :

- Les 24 premiers bits (192.168.1) appartiennent à la partie réseau,

- Les 8 bits restants (valeur 10) représentent l’hôte.

Ainsi, cet appareil est le dixième équipement dans le réseau 192.168.1.0/24.
:::

::: info
Pour déterminer la partie réseau et la partie hôte d’une adresse IPv4, suivez les étapes suivantes :

- Identifiez le masque de sous-réseau (exemple : /24).

- Convertissez l’adresse IP en binaire.

- Séparez les bits selon le masque : les bits de la partie réseau sont définis par les bits à 1 dans le masque. Les bits restants constituent la partie hôte.

::: details Exemple
Exemple avec 192.168.1.1/24 :

- Adresse IP : 192.168.1.1 → Binaire : 11000000.10101000.00000001.00000001

- Masque de sous-réseau : /24 → Binaire : 11111111.11111111.11111111.00000000

- Partie réseau : 192.168.1

- Partie hôte : 1
:::

::: info
Certains masques de sous-réseau sont couramment utilisés :

- **/8 (255.0.0.0)** : utilisé pour les très grands réseaux

- **/16 (255.255.0.0)** : adapté aux réseaux de taille intermédiaire

- **/24 (255.255.255.0)** : fréquemment utilisé dans les réseaux domestiques et les réseaux de petites entreprises

Ces masques permettent de créer des réseaux adaptés aux besoins spécifiques de l’organisation.
:::

## Types d'adresses

::: info
### Adresses IP statiques <br>
- L'IP dynamique est la plus répandue.
- fournie gratuitement par le fournisseur d'accès.
- permet d'avoir une adresse IP temporaire, attribuée automatiquement par DHCP.

### Adresses IP dynamiques <br>
- L'IP statique est moins courante
- option disponible selon le fournisseur, mais elle est souvent payante.
- permet d'avoir une IP unique qui ne change jamais.
- Vous pouvez toujours configurer une adresse IP statique manuellement sur votre appareil.
:::

## Classes d'adresses

::: info
- 5 classes : A, B, C, D et E.
- classes A, B et C sont utilisées pour les IP privées et publiques.
- la classe D est utilisée par les applications multicast et la classe E par l'IANA pour un usage inconnu.
:::

![](/classes-adresses-IP.png)

## Mise en pratique

![](/tableau-conversion-adresse-IP.png)

::: info Calcul
- Ce tableau va nous aider à faire des conversions de décimal en binaire.
- Par exemple 16 = 00010000. On peut aussi dire que 16 = 2^4.
- Prenons un autre exemple, je veux 34 en binaire. Pour cela, je regarde le tableau et constate que le meilleur moyen
pour arriver à 34 est de faire 32 + 2, je rajoute donc un 1 sous le 2 (21) et le 32 (25) ; ce qui me donne 00100010.

- 1 octet = 8 bits. Le calcul en binaire se fait de 2^0 au 2^7 et non pas de 2^1 au 2^8 !
:::

::: details Exemple
Convertir une adresse IP :
Prenons en exemple, 192.168.0.1 donne 11000000.10101000.00000000.00000001 en binaire.
- Le calcul a été fait de cette façon : 128 + 64 / 128 + 32 + 8 / 0 / 1
- Le calcul d'un masque de sous réseau se fait de la même façon.
- Par exemple, 255.255.255.0 donne 11111111.11111111.11111111.00000000

Maintenant que nous connaissons la base du calcul, on va déterminer la partie réseau et la partie hôte de 192.168.56.128 /24.

On commence par mettre l'IP et le masque de sous réseau en binaire :
- 192.168.56.128 = 11000000.10101000.00111000.10000000
- 255.255.255.0 = 11111111.11111111.11111111.00000000

On additionne ensuite les deux adresses binaires.
:::

::: details Exemple

### Méthode 1 <br>
Pour additionner deux adresses binaires :
- on regarde nos deux résultats
- et là où l'on retrouve 1 et 1, on marque 1,
- mais si on à 1 et 0, ou 0 et 0, on marque 0.
- Le résultat de l'addition est 11000000.10101000.00111000.00000000
- Ce qui nous donne en adresse réseau 192.168.56.0

Avec ce calcul, on trouve aussi la partie hôte (en gras) et la partie réseau (au début).

On peut aussi trouver le nombre de machines sur un réseau :
- On prend par exemple le /24. 
- On doit le soustraire par 32 (bits maximums d'un masque de sous réseau). 32 - 24 = 8
- On peut maintenant utiliser la formule : 2^8 - 2 = 254
- On enlève 2, car cela représente la première adresse (NetID) et la dernière (Broadcast).

Prenons 192.168.56.128 pour trouver le NetID et le Broadcast :
- 192.168.56.128 = 11000000.10101000.00111000.10000000.
- 255.255.255.0 = 11111111.11111111.11111111.00000000.

Pour trouver le NetID :
- on met à 0 tous les bits de l'IP là où le masque arrive à sa suite finale de 0 (en gras)
- ce qui nous donne 192.168.56.0.

Pour trouver le Broadcast :
- au lieu de mettre des 0, on met des 1
- ce qui nous donne 192.168.56.255.

On trouve alors la première adresse machine 192.168.56.1 et la dernière 192.168.56.254.

### Méthode 2 : le nombre magique <br>
- 172.25.30.50 /23
- /23 = 255.255.254.0.

On prend l'octet dans l'adresse IP correspondant à l'octet du masque qui n'est pas à 255 (il s'appelle l'octet
significatif) :
- 30 pour l'IP et 254 pour le masque.
- Le calcul est 256 - 254 = 2.

Maintenant, on cherche le multiple de 2 inférieur ou égal à 30 :
- 30 est un multiple de 2
- le NetID est 172.25.30.0.

Pour trouver le Broadcast, on soustrait 1 du multiple suivant :
- 32 - 1 = 31
- le Broadcast est 172.25.31.255.

C'est le même résultat sans le calcul binaire.
:::

::: details Exercice
- L'IP utilisé sera 192.168.100.0 /19
- Le but sera de créer 2 réseaux 300 Techniciens / 120 Vendeurs.

- Il faut Trouver :
- l'adresse réseau NetID et Broadcast
- le nombre de machines disponibles
- la première et dernière adresse machine

192.168.100.0 /19
/19 = 255.255.224.0
- Avec le nombre magique : 256 - 224 = 32.
- Le multiple de 32 inférieur ou égal à 100 est 96.
- On trouve le NetID 192.168.96.0.
- Pour le Broadcast, on soustrait 1 du multiple suivant. Donc 128 - 1 = 127.
- On trouve le Broadcast 192.168.127.255.

Maintenant, on va trouver le nombre de machines disponibles au total.
- 32 - 19 = 13.
- 2^13 - 2 = 8190 machines disponibles.
- 300 + 120 = 420. 
- On a suffisamment de machines disponibles pour créer les deux réseaux. 

On commence par le réseau ayant besoin du plus de machines.
- Techniciens : 300 machines = 192.168.96.0
- On regarde dans le tableau des puissances pour trouver le masque de sous réseau égal ou supérieur au nombre de machines demandées.
- 2^9 = 512 et 2^8 = 256, on choisit les 512 machines puis on soustrait 2, ce qui nous donne 510 machines.
- 32 - 9 = 23 alors notre masque de sous réseau sera en /23. Donc 255.255.254.0.
- 256 - 254 = 2.
- Le multiple de 2 le plus proche de 96 est 96.
- 98 - 1 = 97. Le Broadcast est 192.168.97.255.

On peut alors déterminer la première et dernière machine : 
- 192.168.96.1 et 192.168.97.254

On fait ensuite l'autre réseau.
- Vendeurs : 120 machines. On commence au réseau suivant : 192.168.98.0
- Le masque de sous réseau le plus proche pour 120 est 2^7 = 128 - 2 = 126. On a assez de machines.
- 32 - 7 = 25. Le masque de sous réseau est /25. Donc 255.255.255.128.
- 256 - 128 = 128.
- Le multiple de 128 le plus proche de 0 est 0.
- 128 - 1 = 127. Le Broadcast est 192.168.98.127.

On peut alors déterminer la première et dernière machine : 
- 192.168.98.1 et 192.168.98.126
:::

## Protocole TCP/IP

::: info
- Le protocole TCP / IP (Protocole de Contrôle des Transmissions / Protocole Internet) est la règle permettant aux adresses IP de communiquer sur Internet et d'acheminer les paquets permettant la communication.

- TCP et IP sont deux protocoles différents : TCP livre les données / IP obtient l'adresse à laquelle sont envoyées les données.
:::


## Questions ❓

💬 Quel est le rôle principal d'une adresse IP dans un réseau ?
- <mark class="purple">Identifier et localiser un appareil dans le réseau</mark><br>

💬 Que signifie l'adresse réseau 192.168.10.0/24 ?
- <mark class="purple">C'est l'adresse qui identifie le sous-réseau</mark><br>

💬 Combien d'adresses IP utilisables peut-on obtenir dans un réseau /24 ?
- <mark class="purple">254 (Un réseau /24 a 256 adresses possibles. En retirant l’adresse réseau et l’adresse de broadcast, il reste 254 adresses utilisables.)</mark><br>

💬 Quel est le format correct d'une adresse IPv4 ?
- <mark class="purple">xxx.xxx.xxx.xxx</mark><br>

💬 Quelle commande permet de vérifier l’adresse IP d’un ordinateur sous Windows ?
- <mark class="purple">ipconfig</mark><br>

💬 Quel est le rôle de l’adresse de broadcast ?
- <mark class="purple">Envoyer un message à tous les appareils du réseau</mark><br>

💬 Dans le sous-réseau 192.168.10.0/24, quelle est l’adresse de broadcast ?
- <mark class="purple">192.168.10.255</mark><br>

💬 Quelle adresse pourrait être attribuée à un ordinateur dans le réseau 192.168.10.0/24 ?
- <mark class="purple">192.168.10.1</mark><br>

💬 Quel masque de sous-réseau correspond à la notation /24 ?
- <mark class="purple">255.255.255.0</mark><br>

💬 Quelle est la plage d’adresses utilisables dans le réseau 192.168.10.0/24 ?
- <mark class="purple">192.168.10.1 à 192.168.10.254</mark><br>

💬 De quelle nature est l'adresse 172.17.1.16 ?
- <mark class="purple">Privée</mark><br>

💬 À quelle classe appartient 172.17.1.16 ?
- <mark class="purple">B</mark><br>

💬 De combien d'octets est constitué une adresse IP ?
- <mark class="purple">4</mark><br>

💬 De combien de bits est constitué une adresse IP ?
- <mark class="purple">32</mark><br>

💬 De combien de couches est composé le modèle TCP / IP ?
- <mark class="purple">4</mark><br>

💬 Quel est le nombre maximum d'hôtes de 192.168.98.0 /25 ?
- <mark class="purple">126</mark><br>

💬 Quel est le nombre maximum d'hôtes de 172.30.50.35 /24 ?
- <mark class="purple">254</mark><br>

💬 Quelle est l'adresse Broadcast de 10.192.1.5 /9 ?
- <mark class="purple">10.255.255.255</mark><br>

