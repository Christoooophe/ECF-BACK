# Back end projet ecf juillet 2024

---

## Détail du projet

Ce projet back est fait avec Express.

Pour démarrer le projet, assurez vous d'avoir node d'installé  puis faites ces commandes 
````text
npm install
node app.js
````

Le projet tourne sur le port 8000.

Les routes sont ici : 

````text

````
J'ai utilisé express, basé sur NodeJS, qui permet d'utiliser javascript sur serveur. De plus, il embarque plusieurs fonctionnalités qui rendent le développement plus simple.
Je l'ai choisi aussi car il est plutôt rapide à mettre en place, et étant donné que je ne travaille que sur un fichier json stocké sur serveur,
je n'avais pas besoin d'utiliser une technologie plus complexe.

Au vu de la consigne, j'aurais pu faire un simple fichier json, stocké en dur
dans la partie front, avec une liste de questions et des utilisateurs. J'ai préféré partir sur un back end dédié, qui n'est 
pas relié à une base de données. 

La consigne indiquait de concevoir un prototype. Ce prototype, une fois validé, pourrait passer en étape de développement/production.
Le fait d'avoir créé un back end à part entière permet de déployer plus facilement ce projet et de le rendre évolutif. 
Il suffit d'ajouter des questions dans la base de données pour que tous les utilisateurs puissent y accéder. De plus, si une version mobile ou autre support doit
être développée, tout est centralisé au même endroit. 

Je n'ai par contre pas relié mon serveur à une base de données. Pour le moment tout est écrit dans un fichier json. Il n'y
avait pas ici de réel intérêt de passer par un mongodb.


Dans ce projet, on retrouve deux routes principales, celles du joueur et celles des questions
On peut récupérer toutes les questions ou une seule via son id.
Pour les joueurs, on peut les récupérer, les créer et les mettre à jour.


