# Changer le nom d'une machine sous Linux

<br>

- Modifier le hostname de la machine
```sh
echo "NewName" > /etc/hostname

# Mettre également à jour le nom dans /etc/hosts
nano /etc/hosts
```

- Pour vérifier
```sh
cat /etc/hostname
cat /etc/hosts
```