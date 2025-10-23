# L'architecture matérielle des équipements numériques

## Les composants essentiels

::: info
### Le boitier <br>
Héberge les composants internes, notamment le module d’alimentation, la carte mère, le processeur, la mémoire, les disques durs et les cartes d’extension.

### Alimentation <br>
Fournit l’électricité (3V, 5V, 12V) aux composants. Ils existent le format AT, ATX, micro-ATX, ATX12V, BTX, EPS12V.

### Carte mère <br>
Colonne vertébrale de l’ordinateur. C’est un grand circuit imprimé contenant des canaux (fils) de communication électrique et reliant les composants ensemble. Ces composants peuvent être soudés directement sur la carte mère ou connectés au moyen de sockets, de slots d’extension ou de ports.

### Chipset <br>
Circuits intégrés contrôlant les communications entre le processeur et le reste des composants de la carte mère.

### Processeur (CPU) <br>
(micro)puce électronique qui interprète et exécute des commandes. Il est dans un emplacement identifié appelé « socket ». Il existe 2 grands constructeurs de processeurs (Intel et AMD).

### Ventilation <br>
Pour refroidir les composants, des systèmes de refroidissement ont été créés composés de ventilateurs associés ou non à un radiateur (Ventirad si association).

### Mémoires <br>
Toutes les puces mémoire stockent les données sous la forme de bits. On retrouve de la mémoire à lecture seule programmable (Read-Only Memory = ROM) ou non qui servira à stocker le programme d’amorçage du système d’exploitation. Ils s’appellent soit le programme BIOS ou le programme U-EFI. On a aussi la mémoire à accès aléatoire (Random Access Memory = RAM) qui stocke les données tant qu’elle est alimentée électriquement. L’ajout de RAM améliore les performances du système dans le nombre de données manipulées simultanément. La quantité de RAM est régie par le constructeur.

### Disques durs <br>
Périphériques de stockage de masse. De masse, car les disques durs stockent une quantité très importante de données sous forme de bits. <br>
Type de stockage : <br>
- Disque dur (Hard Disk Drive : HDD)
- Lecteurs de bandes : utilisées pour l’archivage et sauvegarde de données
- Les disques Solid-State Drive (SSD)
- Les disques normés Non Volatile Memory Express (NVME)

### Carte graphique (GPU) <br>
Elles sont sous forme de chipset intégré à la carte mère et/ou sous forme de carte d’extension dédiée.
:::

## Les différentes architectures matérielles

::: info
### Les ordinateurs de bureau (ordinateurs fixes) <br>
Un ordinateur de bureau possède une unité centrale, un écran, un clavier et une souris. L’unité centrale possède tous les composants (CPU, disques durs, alimentation, mémoires RAM, etc.) qui peuvent être changés pour le faire évoluer (Hardware upgrade). On peut rencontrer des ordinateurs fixes qui ont fusionné écran et unité centrale pour donner un tout-en-un (all-in-one).

### Un ordinateur portable (transportable) <br>
Ordinateur personnel, mais tout est fusionné en un seul bloc (écran, unité centrale, souris (dispositif de pointage), clavier) et miniaturisé.

### Les appareils mobiles <br>
Comme les tablettes numériques et les téléphones intelligents (ordiphone = smartphone) possèdent une alimentation autonome (batteries rechargeables), sont légers, sont de faible dimension et sont indépendants vis-à-vis d’autres périphériques connectés. Toutes les tablettes sont dépourvues de fonctionnalités d’appels cellulaires, ce qui les différencie d’un smartphone.

### Les serveurs <br>
Ordinateurs plus puissants et de meilleures qualités que de simples ordinateurs de bureau, car ils doivent être disponibles tout le temps et répondre simultanément à de nombreuses requêtes (services). Ils sont donc conçus pour s’adapter (scalabilité) et fonctionner sous de multiples contraintes. Ce mot « serveur » ne désigne pas un type d’ordinateurs par sa taille ou poids, mais par son ou ses rôles à jouer.

### Processeur (CPU) <br>
(micro)puce électronique qui interprète et exécute des commandes. Il est dans un emplacement identifié appelé « socket ». Il existe 2 grands constructeurs de processeurs (Intel et AMD).
:::

## Les technologies embarquées dans les composants

::: info
### Pour les processeurs <br>
- **Cache** : stocker temporairement les données fréquemment utilisées et ainsi accélérer l’accès aux données et réduire les latences de traitement.
- **Dynamic** voltage and Frequency Scaling (DVFS) : cette technologie ajuste la tension et la fréquence du processeur en temps réel en fonction de la charge de travail.
- **Énergie** : cette technologie ajuste la consommation d’énergie en fonction de la charge de travail et de la température comme la mise en veille de parties du processeur.
- **Hyper-Threading (HT)** : cette technologie d’Intel permet à un cœur physique du processeur de traiter deux exécutions simultanément.
- **Simultaneous Multi-Threading (SMT)** : cette technologie est du constructeur AMD et est similaire à Hyper-Threading
- **Pipeline** : cette technologie permet d’exécuter plusieurs étapes d’une instruction en même temps. Cela améliore le débit d’instructions et accélère le traitement.
- **Turbo Boost / Turbo Core** : cette technologie ajuste automatiquement la fréquence du processeur en fonction de la charge de travail.
- **Virtualization Technology (VT-x, AMD-V)** : ces technologies permettent de créer des environnements virtuels (machines virtuelles) en isolant les ressources de calculs.

### Pour les cartes graphiques <br>
- **SLI** : créée par NVIDIA, c’est une technologie de superposition de cartes graphiques (notamment de GPU) permettant une gestion performante et affinée des calculs graphiques (texture, ombrage, profondeur) et d’augmentation de puissances de calculs.
- **Crossfire** : Idem que SLI, mais créée par AMD.
- **Variable Rate Shading (VRS)** : technologie qui ajuste la résolution ou la fréquence d’échantillonnage de l’image, permettant des économies de puissance sans dégrader la qualité visuelle.
- **Tensor Cores / AI Acceleration** : technologie embarquant des instructions spécifiques dans les calculs d’intelligence artificielle.
- **CUDA NVIDIA / Stream AMD** : technologie donnant aux cœurs graphiques la possibilité de traiter plusieurs tâches simultanément.
:::

## Les normes et standards des composants : connectiques

::: info
Les connectiques des ordinateurs ont un rôle vital dans la communication entre les différents composants et périphériques et également dans le transfert des données (réseau ou autre)

- USB (Universal Serial Bus) et USB Type-C (réversible) et USB PD (alimentation électrique)
- Thunderbolt
- HDMI
- DisplayPort
- PATA/IDE : connectique de disques durs obsolète
- SATA
- M2 compatible SATA, PCIe et NVMe
- Réseaux filaires : câble coaxial, Ethernet/Ethernet POE (alimentation électrique), fibre optique
- Réseaux sans fils : WiFi, Bluetooth, RFID dont NFC
:::

## Comment choisir son équipement numérique ?

::: info
- **Énergie** : choisir des composants optimisés sur le plan énergétique
- **Espace** : avoir plus de mémoire vive permettra de gérer plus de tâches simultanément sans ralentissement.
- **Évolutivité** : vérifier que vos composants soient compatibles avec les composants futurs lors d’une évolution matérielle.
- **Puissance de traitement** : choisir des processeurs plus rapides avec plus de cœurs et des cartes graphiques puissantes.
- **PATA/IDE** : connectique de disques durs obsolète
- **Pilotes et support** : les fabricants fournissent une garantie, des pilotes et un support adéquats.
- **Prix** : allouer le bon budget.
- **Type d’utilisation** : vos besoins (bureautique, jeux, montage, etc.) jaugeront le choix bas, moyen et haut de gamme des composants.
- **Système d’exploitation** : vérifier que vos composants choisis soient compatibles avec le système d’exploitation à utiliser.
:::

## Technologies émergentes

::: info
- **3D Stacking** : on empile les composants au lieu de les éclater sur la surface.
- **Edge Computing** : le traitement des données se fait sur les périphériques demandeurs au lieu de tout traiter centralement sur les serveurs externalisés.
- **L’informatique quantique** : avoir des bits d’états 1 et 0, superposés.
- **L’intelligence artificielle** : dans les équipements numériques.
- **L’informatique neuromorphique** : les processeurs dits neuromorphiques reproduiront les capacités de traitement parallèle et de reconnaissance de motifs pour des applications telles que l’intelligence artificielle et l’apprentissage automatique.
- **Nanotechnologie** : l’utilisation de composants électroniques et de matériaux à l’échelle nanométrique.
:::


## Questions ❓

### Architecture matérielle

💬 Quel composant présenté est responsable du stockage à long terme des données dans un PC ?
- <mark class="purple">Disque dur (HDD)</mark><br>

💬 Quel type de PC est conçu pour être transportable et léger, adapté aux utilisateurs en déplacement ?
- <mark class="purple">Ordinateur portable</mark><br>

💬 Quelle mémoire stocke temporairement les fichiers en cours dʼutilisation (tant quʼelle est alimentée) ?
- <mark class="purple">RAM</mark><br>

💬 Quel composant est responsable du traitement des calculs et des instructions dans un PC ?
- <mark class="purple">Processeur (CPU)</mark><br>

💬 Quel type de PC est spécifiquement conçu pour des tâches de calculs intensifs, tels que la modélisation 3D ou les
rendus vidéo ?
- <mark class="purple">Station de travail</mark><br>

### Technologies et normes

💬 Quelle technologie de stockage offre généralement les vitesses de lecture et dʼécriture les plus rapides dans un PC
hors registre ?
- <mark class="purple">Mémoire cache (La mémoire cache (SRAM) est la mémoire la plus rapide après le registre.)</mark><br>

💬 Quelle connectique est utilisée pour connecter un clavier et une souris à un PC ?
- <mark class="purple">USB</mark><br>

💬 Quel composant PC est responsable du rendu des graphiques et de l'affichage sur l'écran ?
- <mark class="purple">Carte graphique (GPU)</mark><br>

💬 Quel facteur devrait être pris en compte lors du choix d'un PC pour des jeux vidéo exigeants ?
- <mark class="purple">Carte graphique puissante</mark><br>

💬 Quel facteur devrait être pris en compte lors du choix d'un PC pour des tâches de montage vidéo ou de
modélisation 3D ?
- <mark class="purple">Vitesse du processeur (CPU)</mark><br>

### Architectures spécifiques

💬 Quelle architecture matérielle est utilisée dans les smartphones et les tablettes en raison de sa faible
consommation d'énergie et de sa conception compacte ?
- <mark class="purple">ARM</mark><br>

💬 Quelle technologie émergente de stockage promet des performances ultra-rapides grâce à l'utilisation de la
lumière pour lire et écrire des données ?
- <mark class="purple">Stockage photonique</mark><br>

💬 Quelle architecture informatique est ouverte, librement disponible et adaptée aux conceptions personnalisées, ce
qui en fait une option attrayante pour les projets de recherche et les innovations matérielles ?
- <mark class="purple">RISC-V</mark><br>

💬 Quelle technologie émergente de mémoire non volatile crée des matériaux très petits ?
- <mark class="purple">Mémoire nano-persistante</mark><br>

💬 Quelle technologie embarque une intelligence dans les équipements numériques ?
- <mark class="purple">Intelligence artificielle</mark><br>

### Rappels

💬 Quelle technologie est conçue pour traiter de nombreuses tâches de calcul en parallèle ?
- <mark class="purple">CUDA</mark><br>

💬 Quelle architecture est couramment utilisée dans les ordinateurs portables minces et légers ?
- <mark class="purple">Ultrabook</mark><br>

💬 Quelle technologie permet d'empiler les composants électroniques pour améliorer les performances et
économiser de l'espace ?
- <mark class="purple">R3D Stacking</mark><br>

💬 Quelle technologie permet aux ordinateurs de se plier et de se détacher pour être utilisés comme des tablettes ?
- <mark class="purple">2-en-1 (Convertible)</mark><br>

💬 Les attaques « Spectre » et « Meltdown » sont à l'origine d'une faiblesse de la technologie :
- <mark class="purple">Préchargement spéculatif</mark><br>