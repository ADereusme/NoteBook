# Configurer les VLANs sur un switch

## Actions

- Onglet CLI sur le Switch

## Commandes

- Création des VLANs
```sh
enable
configure terminal
vlan "VLAN_ID"
name "nom_VLAN"
exit
```

- Affectation des ports au VLANs
```sh
interface range "interfaces"
switchport mode access
switchport access vlan "VLAN_ID"
exit
```

- Sécurisation des ports
```sh
# Sélection de l'interface et sécurisation des ports
interface "nom_interface"
switchport mode access
switchport port-security
# Limiter le nombre d’adresses MAC autorisées sur un port
switchport port-security maximum "nombre"
# Activer l'apprentissage dynamique et sécuriser les adresses apprises
switchport port-security mac-address sticky
```

- Configuration d'un port en mode trunk
```sh
# Choisir une interface qui n'est pas utilisée
interface "nom_interface"
switchport mode trunk
```

## Exemple

- Création des VLANs
```sh
enable
configure terminal

# VLAN 10
vlan 10
name RH
exit

# VLAN 20
vlan 20
name Comptabilite
exit

# VLAN 30
vlan 30
name Informatique
exit
```

- Affectation des ports au VLANs
```sh
# Les ports fa0/1 et fa0/2 sont configurés pour être membres du VLAN 10.
interface range fa0/1-2
switchport mode access
switchport access vlan 10
exit

# Les ports fa0/3 et fa0/4 sont configurés pour être membres du VLAN 20.
interface range fa0/3-4
switchport access vlan 20
exit

# Les ports fa0/5 et fa0/6 sont configurés pour être membres du VLAN 30.
interface range fa0/5-6
switchport access vlan 30
exit
```

- Sécurisation des ports
```sh
interface fa0/1-6
switchport mode access
switchport port-security
switchport port-security maximum 2
switchport port-security mac-address sticky
```

- Configuration d'un port en mode trunk
```sh
interface FA0/7
switchport mode trunk
```

## Astuces

- Vérification des VLANs configurés
```sh
show vlan brief
```

- Sauvegarder la configuration
```sh
copy running-config startup-config
```