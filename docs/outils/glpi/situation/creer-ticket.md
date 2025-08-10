# Créer un ticket dans GLPI

Créer un ticket dans GLPI permet de signaler un incident ou une demande d’assistance.

## 1. Connexion à GLPI

-  Accédez à l'interface GLPI via votre navigateur (ex. `http://glpi.mondomaine.local`).
-  Identifiez-vous avec vos identifiants personnels.


## 2. Accès à la création de ticket

- Une fois connecté, cliquez sur **Assistance** > **Tickets** dans le menu supérieur.
- Cliquez ensuite sur le bouton **+ Créer un ticket**.


## 3. Remplissage du formulaire

Remplissez les champs suivants :

| Champ                  | Description                                                                            |
|------------------------|----------------------------------------------------------------------------------------|
| **Type**               | Déterminer le type du ticket (Incident ou Demande).                                   |
| **Catégorie**          | Choisir une catégorie correspondant au problème ("Matériel", "Logiciel").             |
| **Urgence**            | Sélectionner les niveaux selon la criticité du ticket. Il y à 5 niveau d'urgence.     |
| **Observateurs**       | Déterminer à qui le ticket sera envoyé. Généralement envoyé au Helpdesk.              |
| **Lieu**               | Optionnel, selon votre configuration. Indiquez l’endroit où survient le problème.     |
| **Titre**              | Un titre clair et concis du problème. Titre du ticket.                                |
| **Description**        | Décrivez précisément l'incident ou la demande. N'oubliez pas d'ajouter des détails.   |
| **Fichier joint**      | Ajoutez une capture d’écran ou un document si nécessaire.                             |

Les différents niveau d'urgence :

| Urgence                | Description                                                                                                                        |
|------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **Très basse**         | Demande traitée dans la semaine ou semaine suivante. Le soucis n'est pas bloquant pour l'utilisateur.                             |
| **Basse**              | Demande traitée dans la semaine. Il s'agit d'une demande effectuée à l'avance pour éviter l'urgence.                              |
| **Moyenne**            | Demande traitée dans les 72 heures. Elle sont considérées comme urgences à risques pour l'utilisateur.                            |
| **Haute**              | Demande traitée dans les 24 à 48 heures. Situation bloquante et majeure. L'utilisateur peut difficilement utiliser sa machine.    |
| **Très haute**         | Solution à trouvée dans les prochaines heures. Situation critique ou l'utilisateur ne peut absolument plus utiliser sa machine.   |


## 4. Enregistrement

- Cliquez sur le bouton **Ajouter** pour soumettre le ticket.
- Vous serez redirigé vers la fiche du ticket nouvellement créé.


## 5. Confirmation

- Un numéro de ticket est attribué automatiquement.
- Vous pouvez suivre l’évolution du ticket depuis l’onglet **Mes tickets**.


## ✅ Conseils pratiques

- Soyez précis et factuel dans vos descriptions.
- N’oubliez pas de signaler les horaires de disponibilité pour les interventions.
- Ajoutez des captures d’écran si cela peut aider à comprendre le problème.

---
<br>

📎 [Retour à GLPI](/outils/glpi/glpi)
