# Questionnaire Professionnel

## Exploiter l'infrastructure

### Elements de l'infrastructure
💬 <mark class="orange">Define ITIL.</mark><br>
- Information Technology Infrastructure Library. 
- C'est un référentiel de bonnes pratiques pour gérer les services informatiques.
- lt is a set of best practice processes for the delivery of IT services.

<br>

💬 <mark class="orange">Donnez le cycle de vie d'un ticket d'incident.</mark><br>
- Créé => Affecté => En cours => Résolu => Clos => Archivé

<br>

💬 <mark class="orange">Définissez la notion GTR et GTI.</mark><br>
- GTR => Garantie de Temps de Rétablissement.
- C'est la durée maximale au cours de laquelle un prestataire d'infogérance s'engage à rétablir le bon fonctionnement du service informatique de son client après un incident bloquant ou une coupure de service.

<br>

- GTI => Garantie de Temps d'Intervention.
- C'est la durée maximale au cours de laquelle un prestataire d'infogérance s'engage à intervenir auprès d'un incident bloquant ou une coupure de service déclaré par le client, sans pour autant résoudre le problème.

<br>

### Serveurs Windows et domaine Active Directory
💬 <mark class="orange">Déterminez le rôle de LDAP, Kerberos et DNS dans une infrastructure Active Directory.</mark><br>
- LDAP => protocole d'intérrogation de l'annuaire d'objets. Travaille sur le port 389 (636 pour LDAPS).

<br>

- Kerberos => système d'authentification. Travaille sur le port 88.

<br>

- DNS => permet de corréler nom de domaine et une IP. Travaille sur le port 53.

<br>

💬 <mark class="orange">Expliquez la démarche pour qu'un client Microsoft Windows 11 puisse intégrer un domaine studi.lan.</mark><br>
- Le client doit pouvoir communiquer« réseautiquement » avec le serveur AD.
- Le client doit avoir l'IP du serveur AD en IP DNS préféré.
- Dans les propriétés avancées où sont gérés les paramètres du groupe du travail, il faut rentrer dans le champ texte le domaine (ici, c'est« studi.lan »). Le compte administrateur du domaine sera demandé pour autoriser cette intégration.

<br>

💬 <mark class="orange">Expliquez ce qu'est une forêt AD.</mark><br>
- Une forêt Active Directory (forêt AD) représente le plus haut niveau de conteneur logique dans une configuration Active Directory contenant des domaines, utilisateurs, ordinateurs et règles de groupe.

<br>

💬 <mark class="orange">Donnez le champ d'enregistrement DNS permettant de déclarer un serveur de messagerie électronique.</mark><br>
- Il s'agit du champ MX.

<br>

### Serveurs Linux
💬 <mark class="orange">Qui est à l'origine du 1er noyau GNU/Linux ?</mark><br>
- Linus Torvalds.

<br>

💬 <mark class="orange">Comment exécuter une commande à privilège sans se connecter au super-utilisateur ?</mark><br>
- Il faut utiliser la commande« sudo » devant la commande à exécuter.
- L'utilisateur sans pouvoir doit être déclaré dans le fichier« sudoers » pour utiliser avec succès la commande sudo.

<br>

💬 <mark class="orange">Quel est le nom exact du service américain qui permet de faire un serveur http ?</mark><br>
- C'est Apache (service apache2).

<br>

💬 <mark class="orange">Écrivez la commande à exécuter permettant de donner au fichier nommé« studi-linux.txt » tous les droits au propriétaire, tous les droits au groupe propriétaire et exécution au reste.</mark><br>
- chmod 771 studi-linux.txt

<br>

### Exploiter un réseau IP
💬 <mark class="orange">Soit 2 sous-réseaux à implémenter à partir de l'adresse 172.23.0.0/16. Donnez le plan TCP-IP de chaque sous-réseau.</mark><br>
- @R du 1er S-R = 172.23.0.0/17
- @D du 1er S-R = 172.23.127.255/17
- Pool lP du 1er S-R = 172.23.0.1/17 à 172.23.127.254/17

::: details Rappel du problème
- On part de l’adresse réseau 172.23.0.0/16 et on doit obtenir 2 sous-réseaux.
- Pour diviser un /16 en 2 sous-réseaux, on « emprunte » 1 bit au masque.
- Donc le masque devient /17 (16 + 1).
:::

::: details Masque et incrément
- Masque /17 = 255.255.128.0
- En binaire : 11111111.11111111.10000000.00000000 (32-17 = 15 bits à 0)
<br><br>
- L’incrément du troisième octet = 128 (car le bit utile dans le 3ᵉ octet vaut 128).
- Donc les sous-réseaux commencent tous les 128 valeurs du 3ᵉ octet : 0, 128, 256 (mais 256 dépasse → fin à 255).
:::

::: details Sous-réseau 1
- Adresse réseau (R) : 172.23.0.0/17
- (3ᵉ octet = 0 → début)
<br><br>
- Adresse broadcast (D) : 172.23.127.255/17
- (fin du bloc : 3ᵉ octet = 127, 4ᵉ octet = 255)
<br><br>
- Pool d’adresses utilisables : 172.23.0.1 à 172.23.127.254
- (.0 = adresse réseau, .127.255 = broadcast ; utilisables entre les deux)
<br><br>
- Nombre d’hôtes utilisables :
- calcul : 2^(32-17) - 2 = 2^15 - 2 = 32768 - 2 = 32766 hôtes.
:::

<br>

- @R du 2è S-R = 172.23.128.0/17
- @D du 2è S-R = 172.23.255.255/17
- Pool lP du 2è S-R = 172.23.128.1/17 à 172.23.255.254/17

::: details Sous-réseau 2
- Adresse réseau (R) : 172.23.128.0/17
- (3ᵉ octet = 128 → deuxième bloc)
<br><br>
- Adresse broadcast (D) : 172.23.255.255/17
- (fin du 2ᵉ bloc : 3ᵉ octet = 255, 4ᵉ octet = 255)
<br><br>
- Pool d’adresses utilisables : 172.23.128.1 à 172.23.255.254
<br><br>
- Nombre d’hôtes utilisables : idem → 32766.
:::

<br>

💬 <mark class="orange">Donnez un protocole de communication gérant des sessions de télécommunication multimédia (son, image, téléphonie réseau) et le numéro de port associé.</mark><br>
- Session Initiation Protocol (SIP) - Port 5060 (version sécurisée SIPS sur 5061).

<br>

💬 <mark class="orange">Expliquez ce que font ces commandes Cisco sur un commutateur.</mark><br>

::: info Commandes
```sh
SWITCH(config)# interface G0/1 
SWITCH(config-if)# switchport mode access 
SWITCH(config-if)# switchport port-security 
SWITCH(config-if)# switchport port-security maximum1
SWITCH(config-if)# switchport port-security mac-address 0094.EEFA.9669
SWITCH(config-if)# switchport port-security violation shutdown
```
:::

- Switchport-Port Security permet donc de contrôler au plus bas niveau les accès au réseau.
- On autorise ici uniquement une seule adresse MAC« 0094.EEFA.9669 ».
- Dès que la « violation >> est constatée, le port passe en état« err-disabled » (shutdown : port s'éteint) et un message de log est envoyé.

<br>

💬 <mark class="orange">Quelle est l'utilité de la norme 802.lX dans les réseaux sans fils ?</mark><br>
- C'est un standard lié à la sécurité des réseaux informatiques permettant de contrôler l'accès aux équipements d'infrastructures réseaux et aussi de relayer les informations liées aux dispositifs d'identification.

<br>

## Maintenir l'infrastructure

### Maintenir des serveurs dans une infrastructure virtualisée
💬 <mark class="orange">What are the differences between a type 1 hypervisor and a type 2 hypervisor ?</mark><br>
- A Type 1 hypervisor, native, is a system software that runs directly on the hardware; it has been optimized for virtualization.
- Un hyperviseur de type 1, natif, est un logiciel système qui s'exécute directement sur le matériel ; il a été optimisé pour la virtualisation.

<br>

- A Type 2 hypervisor, non-native, is an application software installed on top of an existing operating system.
- Un hyperviseur de type 2, non natif, est un logiciel d'application installé par-dessus un système d'exploitation existant.

<br>

💬 <mark class="orange">Donnez un protocole de communication (et le numéro de port associé) permettant d'établir un accès à distance sécurisé pour administrer un actif ou un serveur, par exemple.</mark><br>
- Protocole Secure Shell (SSH) sur le port 22.

<br>

💬 <mark class="orange">Après avoir défini les acronymes, donnez les différences entre une simple architecture IAAS ou d'applications SAAS ou de services hébergés en PAAS.</mark><br>
- IAAS => (Infrastructure as a service)
- SAAS => (Software as a service)
- PAAS => (Platform as a service)

<br>

### Automatiser des tâches à l'aide de scripts
💬 <mark class="orange">Donnez 3 langages de scripting.</mark><br>
- Powershell, Bash et Python.

<br>

💬 <mark class="orange">Expliquez ce script Powershell :</mark><br>

::: info Script
```Powershell
# Commande 1
$disklnfo = Get-WmiObject Win32_LogicalDisk-Filter "Drive Type= 3" / Se/ect-Object
Device/D, FreeSpace, Size

# Commande 2
foreach ($disk in $disklnfo) {
    $driveletter = $disk.Device/D
    $freeSpaceGB = [math]::Round($disk.Free5pace / 1GB, 2)
    $tota/SpaceGB = [math]::Round($disk.Size / 1GB, 2)

    Write-Host "Drive $driveletter- Free Space: ${freeSpaceGB}GB / Total Space:
${totalSpaceGB }GB"
}
```
:::

- Commande 1 : script pour afficher l'espace disque disponible. Obtenir les informations de l'espace disque.
- Commande 2 : a²fficher les informations sur chaque disque.

<br>

💬 <mark class="orange">Expliquer ce script Bash.</mark><br>

::: info Script
```sh
#!/bin/bash
ps-eo pid,%mem,cmd--sort=-%mem / head-n 6
```
:::

- Afficher les 5 processus les plus gourmands en mémoire.

<br>

💬 <mark class="orange">Donnez les commandes Cisco pour créer 2 vlan sur un switch de 48 ports full gigaethernet de niveau 2: un vlan identifié par 10 et appelé « marketing» et le 2e identifié par 20 et appelé « direction », ensuite pour affecter le 1er vlan au 2 premiers ports et le 2e vlan aux 2 suivants.
Le dernier port permettra-t-il le transit de tous les vlan ?</mark><br>

::: info Commandes
```sh
SWITCH(config)# vlan 10 name marketing
SWITCH(config-vlan)# exit
SWITCH(config)# vlan 120 name direction
SWITCH(config-vlan)# exit
SWITCH(config)# interface range G0/1-2
SWITCH(config-if-range)# switchport mode access
SWITCH(config-if-range)# switchport access vlan 10
SWITCH(config-if-range)# exit
SWITCH(config)# interface range G0/3-4 
SWITCH(config-ifrange)# switchport mode access 
SWITCH(config-if­range)# switchport access vlan 20 
SWITCH(config-if-range)# exit
SWITCH(config)# interface G0/48 
SWITCH(configif)# switchport mode trunk
```
:::

<br>

💬 <mark class="orange">Interprétez ces 2 lignes dans le pare-feu :</mark><br>

![](/questionnaire-pare-feu.png)

- 1er tableau : on autorise le flux entrant internet HTTPS depuis Internet.
- 2e tableau : on redirige le trafic HTTPS entrant vers le serveur web HTTPS du réseau local.

<br>

💬 <mark class="orange">Qu'est-ce qu'une passerelle d'interconnexion sécurisée ?</mark><br>
- Une passerelle d'interconnexion sécurisée est constituée d'une ou plusieurs« DMZ » qui doivent être des zones neutres, perdables, protégées par des pare-feux périmétriques et servant, en leur sein et autant que possible, à la rupture protocolaire et à l'analyse du trafic échangé entre un réseau public et le SI interne de l'entité.

<br>

### Automatiser des tâches à l'aide de scripts
💬 <mark class="orange">Définissez les acronymes PRA et PCA.</mark><br>
- PCA => Plan de Continuité d'Activités.
- PRA => Plan de Reprise d'Activités.

<br>

💬 <mark class="orange">Donnez une explication à une sauvegarde complète, à une sauvegarde différentielle et à une sauvegarde incrémentielle.</mark><br>
- Sauvegarde complète => toutes les données de la source sont copiées sur la destination.

<br>

- Sauvegarde différentielle => seules les données de la source modifiées par rapport à la dernière sauvegarde complète sont copiées sur la destination.

<br>

- Sauvegarde incrémentielle => seules les données de la source modifiées par rapport à la dernière sauvegarde sont copiées sur la destination.

<br>

💬 <mark class="orange">Donnez 3 manières (outils) pour sauvegarder.</mark><br>
- Fonctionnalité native sauvegarde du système d'exploitation, un script Shell (tar ou cp), un logiciel comme veeam backup ou Cobian Reflector.

<br>

### Exploiter et maintenir les services de déploiement des postes de travail.
💬 <mark class="orange">Définissez la politique BYOD.</mark><br>
- Bring Your Own Device ➔ « Apportez Votre Équipement personnel de Communication », ou AVEC. C'est une politique qui désigne l'usage d'équipements informatiques personnels dans un contexte professionnel.

<br>

💬 <mark class="orange">Définissez la notion PXE.</mark><br>
- L'amorçage PXE (Pre-boat eXecution Environ ment) permet à un poste informatique de démarrer depuis le réseau en récupérant une image de système d'exploitation qui se trouve sur un serveur de déploiement.

<br>

💬 <mark class="orange">Donnez 2 solutions de déploiement de systèmes d'exploitation par le réseau.</mark><br>
- Rôle Microsoft Windows Deployement Service (WDS) et le logiciel opensource FOG.