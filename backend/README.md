# Mon vieux Grimoire

Mon vieux Grimoire est le backend d'un site web qui permet d'ajouter, de gérer et de noter des livres. Ce projet fournit des endpoints API pour l'interaction avec les données des livres, les utilisateurs, et la gestion des notes.

# Technologies Utilisées

Le projet utilise les technologies suivantes :

    Node.js : Environnement d'exécution pour JavaScript côté serveur.
    Express : Framework web minimaliste pour Node.js.
    MongoDB : Base de données NoSQL pour stocker les informations des livres et des utilisateurs.
    Mongoose : ORM pour interagir avec MongoDB de manière plus simple.
    bcrypt : Pour le hachage des mots de passe.
    jsonwebtoken : Pour la gestion de l'authentification via JWT.
    multer : Pour le traitement des fichiers téléchargés (ex : images de couverture des livres).
    sharp : Pour le redimensionnement et le traitement des images.
    dotenv : Pour gérer les variables d'environnement.
    Prettier : Outil de formatage de code pour assurer une cohérence stylistique dans tout le projet.

# Documentation de l'API

    Voici un aperçu des endpoints principaux :
    POST /api/auth/signup : Inscription d'un nouvel utilisateur.
    POST /api/auth/login : Connexion d'un utilisateur.
    GET /api/books : Récupère la liste de tous les livres.
    GET /api/books/:id : Récupère les détails d'un livre spécifique.
    GET /api/books/bestrating : Récupère les 3 livres ayant la meilleure note moyenne.
    POST /api/books : Ajoute un nouveau livre (authentification requise).
    PUT /api/books/ : Met à jour un livre spécifique (authentification requise).
    DELETE /api/books/:id : Supprime un livre spécifique (authentification requise).
    POST /api/books/:id/rating : Ajoute une note à un livre spécifique (authentification requise).

# Auteur

    https://github.com/Alexmqs
