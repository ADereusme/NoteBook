# DHCP

## Definition

- DHCP :  Dynamic Host Configuration Protocol
- C'est pour faire de l'adressage IP dynamique

## Fonctionnement

::: info
4 étapes :

### DHCP discover <br>
Un client sur lequel nous connecterions un câble réseau (ou lors d’une connexion à un réseau wifi) va envoyer une requête en broadcast pour trouver un serveur DHCP et demander une adresse IP à celui-ci. Cette requête sera destinée à tous les équipements écoutant sur le port UDP 67 (et donc sous-entendu au(x) serveur(s)DHCP).

### DHCP offer <br>
Un serveur DHCP sur le réseau répond favorablement à la requête de notre client et propose au client une adresse IP en unicast.

### DHCP request <br>
- Demande IP du client.
- Il sélectionne une offre parmi la/les offres reçues et envoie une requête de type DHCP REQUEST en broadcast en indiquant l’adresse IP qu’il souhaite obtenir si plusieurs offres ont été émises.

### DHCP ACK <br>
Cette dernière étape met fin à la demande du client : le serveur formalise l’acceptation du client en unicast.
:::

## Utilisation

L’administrateur réseau devra au préalable construire son plan d’adressage IP. Dans un réseau simple, son cas de figure sera facilité. Nous pouvons imaginer une étendue DHCP allant de 192.168.1.2 à 192.168.1.254 dans un réseau en /24 (254 IP utilisables). 192.168.1.1 étant généralement destiné à la passerelle (routeur) de l’entreprise.

::: details Notion réseau
La configuration d’un réseau en DHCP fait appel à plusieurs notions : adresse IP, masque de sous-réseau, passerelle, DNS. Revoyons ensemble ces notions.

L’adresse IP est un numéro d’identification attribué à un appareil connecté au réseau Internet. Avoir une adresse IP permet à cet appareil de communiquer avec d’autres appareils disposant eux-mêmes d’une adresse IP.

Les adresses IPV4, fréquemment utilisées dans un réseau local LAN sont composés de 4 octets (donc 32 bits), par exemple : 192.168.10.20

Il existe les adresses IP publiques et les adresses IP privées. Les premières sont fournies par les opérateurs internet (Orange, SFR, etc.) et exclusivement valables sur Internet. Les secondes sont en revanche destinées au LAN.

Afin de définir cela, il existe des classes d’adresses IP :

- La classe A de l’adresse IP 0.0.0.0 à 126.255.255.255 (privées et publiques).

- La classe B de l’adresse IP 128.0.0.0 à 191.255.255.255 (privées et publiques).

- La classe C de l’adresse IP 192.0.0.0 à 223.255.255.255 (privées et publiques).

Et au sein de ces classes, une partie est dédiée à la sphère privée :

- Les adresses IP privées de la classe A : 10.0.0.0 à 10.255.255.255

- Les adresses IP privées de la classe B : 172.16.0.0 à 172.31.255.255

- Les adresses IP privées de la classe C : 192.168.0.0 à 192.168.255.255

Dans la configuration de votre DHCP, il faudra veiller à utiliser un adressage privé.

Associé à cela, le masque de sous-réseau va définir le réseau dans lequel vous allez travailler. Dans un MSR, la partie de gauche est dédiée au réseau et la partie de droite est dédié aux hôtes de votre réseau. Exemple avec ce masque : 255.255.255.0 (/24 pour la notation CIDR). Les 3 premiers octets (255.255.255) sont dédiés au réseau, car tous les bits sont activés à 1. Ainsi si nous découpons le premier octet (255), il s’avère que les 8 bits (128 64 32 16 8 4 2 1) sont activés et la somme de ces bits donne 255. Pour rappel, un octet équivaut à 8 bits dans le langage informatique.

Il en va de même pour les 2 octets suivants (255.255). Ainsi, 8+8+8 donneront 24, d’où la notation CIDR /24. Enfin le dernier octet (0) sera dédié aux hôtes et donc aux adresses IP de notre réseau. Sur ce dernier octet, il y aura en tout 256 adresses IP (de .0 à .255). Cependant, dans un réseau, il y a toujours deux adresses réservées :

- La 1re IP du réseau (adresse réseau) : elle définit l’adressage réseau.

- La dernière IP du réseau (adresse de broadcast) : elle sert lorsqu’on souhaite contacter tous les hôtes de notre réseau.

Avec cet exemple, nous pourrons ainsi avoir 254 adresses IP utilisables pour nos hôtes.

Le calcul pour obtenir le nombre d’adresses IP utilisables dans un réseau est : (2^n) - 2 où n est le nombre de bits à 0 (ou désactivés). Dans le masque de sous-réseau 255.255.255.0, il y a 8 bits à 0 (le dernier octet). Notre calcul donnera :

(2^8) - 2 = 256 - 2 = 254

En travaillant sur de la classe C, sur l’adressage réseau 192.168.10.0/24, nous aurons donc :

- 192.168.10.0 = adresse réseau

- 192.168.10.1 = 1re IP utilisable (en général dédié à la passerelle/routeur)

- 192.168.10.254 = 254e et dernière IP utilisable

- 192.168.10.255 = adresse broadcast

Autre notion, la passerelle est très généralement l’adresse IP du routeur de l’entreprise : le routeur sert à joindre d’autres réseaux, dont Internet. Cette option est donc fondamentale à la configuration du DHCP.

Enfin, les DNS ont également une importance capitale. Les DNS renseignés permettront aux postes clients de naviguer sur internet grâce à la résolution des noms de domaines.
:::


## Questions ❓

💬 Quel est le rôle du DHCP ?
- <mark class="purple">Il fournit des adresses IP aux postes clients.</mark><br>

💬 Un des principaux avantages du DHCP est qu’il simplifie l’administration et la gestion des adresses IP sur notre parc informatique.
- <mark class="purple">Vrai</mark><br>

💬 Le DHCP ne s’utilise que sur Windows Server.
- <mark class="purple">Faux</mark><br>

💬 L’installation du rôle DHCP sur Windows server 2022 se fait à partir :
- <mark class="purple">Du gestionnaire de serveur</mark><br>

💬 Nous ne pouvons installer qu’un seul rôle DHCP sur un même Windows server.
- <mark class="purple">Vrai</mark><br>

💬 Le DHCP ne s’utilise que sur Windows Server.
- <mark class="purple">Faux</mark><br>

💬 Une étendue DHCP correspond à... :
- <mark class="purple">Un ensemble d’adresses IP utilisable sur le réseau</mark><br>

💬 Les réservations permettent de lier une adresse IP à un poste client afin que cette adresse IP soit figée de manière pérenne.
- <mark class="purple">Vrai</mark><br>

💬 On ne peut pas exclure de client au travers de la console DHCP.
- <mark class="purple">Faux</mark><br>

💬 Quelles options sont importantes à renseigner lors de la configuration du DHCP ?
- <mark class="purple">Passerelle/DNS</mark><br>

💬 Nous pouvons déclarer plusieurs étendues dans la console DHCP.
- <mark class="purple">Vrai</mark><br>

💬 Que devriez-vous faire si un scanner configuré en IP fixe était présent au niveau de votre étendue DHCP ?
- <mark class="purple">Il faudrait exclure l’adresse IP via les filtres afin de ne pas avoir de conflits d’adresses IP.</mark><br>

💬 La configuration d’une IP fixe sur Windows Server est recommandée avant d’installer le rôle DHCP.
- <mark class="purple">Vrai</mark><br>

💬 Pour réserver l'adresse souhaitée dans « Nouvelle réservation », il faut indiquer :
- <mark class="purple">L'adresse IP que l'on souhaite réserver</mark><br>
- <mark class="purple">L'adresse MAC</mark><br>

💬 La commande « ipconfig /release » permet de :
- <mark class="purple">Libérer le bail DHCP au niveau du serveur DHCP</mark><br>

💬 La commande « ipconfig /renew » permet de :
- <mark class="purple">Faire une nouvelle demande d'adresse IP au serveur DHCP</mark><br>