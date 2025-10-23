# Installer les tools dans VMWare

<br>

```sh
sudo apt update
sudo apt install open-vm-tools open-vm-tools-desktop -y
sudo systemctl enable --now open-vm-tools.service
sudo systemctl reboot
```