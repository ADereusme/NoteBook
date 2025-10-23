# Les fondamentaux du câblage réseaux

## Les prises réseaux

::: info
### Le port Ethernet <br>
Prise dans laquelle on vient connecter un câble, qui sert à relier des équipements informatiques qui doivent communiquer entre eux et être reliés à Internet.

### RJ45 <br>
La fiche (ou connecteur) qui est sertie à chaque extrémité du câble. Par extension, on donne également ce nom au câble lui-même (le câble Ethernet), et souvent aussi au port Ethernet (la prise dans laquelle il vient se brancher). Cette prise se trouve sur chacun des appareils pouvant être reliés à Internet : box, PC, routeur, switch, console de jeux, TV, etc.
:::

## Différentes catégories de câbles Ethernet

![](/categories-cable-reseaux.png)

::: info
Les câbles Ethernet sont répartis en différentes catégories. Ces catégories sont déterminées par leur capacité à transmettre plus de débit sur des bandes passantes plus larges, en fonction de la section de leurs fils, du nombre de paires utilisées, du pas de leur torsade et du blindage. La catégorie et le blindage doivent être inscrits sur la gaine.

### CAT.5 <br>
Les câbles de catégorie 5 sont encore les plus répandus, car ils sont utilisés depuis de nombreuses années. Ils restent fiables pour des réseaux domestiques ou des petites et moyennes installations professionnelles.

### CAT.6 <br>
Les câbles de catégorie 6 et 6a conviennent aux installations des moyennes et grandes installations professionnelles pour un trafic réseau élevé. C'est aussi la catégorie de câbles réseaux des institutions publiques.

### CAT.7 <br>
Les câbles de catégorie 7 et 7a sont prêts pour les futures normes de transmission de réseaux pour lesquels il y a un fort besoin de trafic, avec des besoins en bande passante encore plus élevés. Des connecteurs spécifiques ont été élaborés (GG45), mais ne peuvent pas s'implémenter car la norme utilise toujours le RJ45 pour les appareils et les câbles de Cat.7.

### CAT.8 <br>
Les futures normes de transmission réseaux exigent une augmentation supplémentaire de la bande passante. Ceci a été pris en compte dans la définition de la Cat.8 avec les deux variantes Cat.8.1 et Cat.8.2. Jusqu'à présent, les câbles de Catégorie 8 sont principalement utilisés dans les centres de données (data centers), ou comme connexions courtes entre les switchs et les routeurs, en raison de leur courte portée.
:::

## Différents blindages de câbles Ethernet

::: info
Le blindage d'un câble assure sa protection contre les perturbations électromagnétiques. Le blindage varie donc selon les catégories de câbles, et on peut trouver plusieurs références.

- **U/UTP** : pas de blindage de la gaine, pas de blindage des paires torsadées.
- **F/UTP** : blindage de la gaine par feuille d'aluminium, pas de blindage des paires torsadées.
- **S/UTP** : blindage de la gaine par tresse, pas de blindage des paires torsadées.
- **SF/UTP** : blindage de la gaine par tresse et feuille d'aluminium, pas de blindage des paires torsadées.
- **U/FTP** : pas de blindage de la gaine, blindage des paires torsadées par feuille d'aluminium.
- **F/FTP** : blindage de la gaine par feuille d'aluminium, blindage des paires torsadées par feuille d'aluminium.
- **S/FTP** : blindage de la gaine par tresse, blindage des paires torsadées par feuille d'aluminium.
- **SF/FTP** : blindage de la gaine par tresse et feuille d'aluminium, blindage des paires torsadées par feuille d'aluminium.
:::

## Différents types de câbles

::: info
### Câbles droits <br>
Les câbles droits ont le même sertissage sur les deux fiches et servent à relier deux appareils de type différents : un ordinateur à une box par exemple, ou un switch à un routeur.

### Câbles croisés <br>
Les câbles croisés ont un sertissage opposé sur les deux fiches, au niveau des paires 1/2 et 3/6. Ils servent à relier deux appareils de même type : deux switchs, par exemple, ou deux PC.

### Câbles monobrins <br>
Les paires torsadées sont constituées d'un fil à un seul brin. Ces câbles sont donc plus rigides et servent à équiper les faux plafonds et les murs, de la baie de brassage à la prise murale. Ils sont plus performants, car ils génèrent moins d'atténuation. La longueur de l'installation directe ne doit pas dépasser 90 m.

### Câbles multibrins <br>
Les paires torsadées sont constituées de fils multibrins très fins. Plus souples, ils sont utilisés pour raccorder les équipements entre eux, ou aux prises murales. Un câble Ethernet multibrins, auquel on a serti une fiche à chaque extrémité, devient un cordon Ethernet.
:::


## Questions ❓

💬 Quel nouveau format de connecteur est apparu avec les câbles de catégorie 7 ?
- <mark class="purple">GG45 (GG45 pour Giga Gate 45)</mark><br>

💬 À quelle classe appartient un câble Ethernet de catégorie 6 ?
- <mark class="purple">E</mark><br>

💬 Quel débit maximum peut supporter un câble de catégorie 5E ?
- <mark class="purple">1 GBits/s</mark><br>

💬 À quoi sert le blindage de la gaine des câbles Ethernet ?
- <mark class="purple">Les protéger des interférences électromagnétiques</mark><br>

💬 J'ai acheté un câble Ethernet sur lequel est écrit U/UTP. Ce câble est assurément blindé.
- <mark class="purple">Faux</mark><br>

💬 Mon employeur réclame un câble doté d'un blindage maximum au niveau de la gaine. Lequel choisir ?
- <mark class="purple">SF/UTP</mark><br>

💬 Selon la nouvelle nomenclature, quel est le câble qui présente le blindage le plus complet ?
- <mark class="purple">SF/FTP</mark><br>

💬 Dans un câble Ethernet croisé, quelles sont les paires inversées au niveau du sertissage ?
- <mark class="purple">1/2 et 3/6</mark><br>

💬 Quel est l'avantage des câbles monobrins ?
- <mark class="purple">Ils génèrent moins d'atténuation</mark><br>

💬 Quelle est la longueur maximum pour raccorder un câble Ethernet monobrin ?
- <mark class="purple">90 m</mark><br>