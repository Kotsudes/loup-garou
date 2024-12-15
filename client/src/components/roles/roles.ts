export type typeRole = {
    name: string
    image: string
    description: string
}

export const roles = [
    {
        name: "Simple Villageois",
        image: "/roles/simple_villageois.png",
        description:
            "Il peut voter durant le jour pour essayer d'éliminer un loup garou"
    },
    {
        name: "Simple Villageois variante",
        image: "/roles/simple_villageois.png",
        description:
            "Il peut voter durant le jour pour essayer d'éliminer un loup garou. Il peut également se concerter une fois le jour dans la partie avec les autres simples villageois pour éliminer un joueur de leur choix"
    },
    {
        name: "Loup-Garou",
        image: "/roles/loup_garou.png",
        description:
            "Il peut se réunir la nuit avec les autres loups afin d'éliminer un villagois."
    },
    {
        name: "Chasseur",
        image: "/roles/chasseur.png",
        description: "A sa mort peut tuer un joueur de son choix"
    },
    {
        name: "Cupidon",
        image: "/roles/cupidon.png",
        description: "Il peut lier deux destins dans le village"
    },
    {
        name: "Petite fille",
        image: "/roles/petite_fille.png",
        description: "Elle peut observer les loups garous la nuit"
    },
    {
        name: "Sorcière",
        image: "/roles/sorciere.png",
        description:
            "Une fois par partie, elle peut sauver la victime des loups. Elle peut également éliminer un joueur"
    },
    {
        name: "Voleur",
        image: "/roles/voleur.png",
        description: "Il peut changer sa carte avec une autre."
    },
    {
        name: "Voleur variante",
        image: "/roles/voleur.png",
        description: "Il peut changer sa carte avec celle d'un autre joueur."
    },
    {
        name: "Voyante",
        image: "/roles/voyante.png",
        description: "Chaque nuit, elle découvre le rôle d'un joueur"
    },
    {
        name: "Voyante bavarde",
        image: "/roles/voyante.png",
        description:
            "Chaque nuit, elle découvre le rôle d'un joueur et révèle le rôle découvert à tout le monde"
    },
    {
        name: "Voyante myope",
        image: "/roles/voyante.png",
        description: "Chaque nuit, elle découvre le camp d'un joueur"
    },
    {
        name: "Ancien du village",
        image: "/roles/ancien.png",
        description:
            "Il résiste à la première attaque des loups la nuit. S'il est voté par le village le jour, tous les villageois perdent leur pouvoir"
    },
    {
        name: "Bouc émissaire",
        image: "/roles/bouc_emissaire.png",
        description:
            "Le bouc émissaire est sacrifié en cas d'égalité durant le vote"
    },
    {
        name: "Idiot du village",
        image: "/roles/idiot_du_village.png",
        description:
            "S'il est voté par le village, il est gracié, mais perd son droit de vote"
    },
    {
        name: "Joueur de flûte",
        image: "/roles/joueur_de_flute.png",
        description:
            "Chaque nuit, il envoute deux joueurs. Lorsque l'ensemble des joueurs en vie sont envoutés, il gagne la partie"
    },
    {
        name: "Salvateur",
        image: "/roles/salvateur.png",
        description:
            "Chaque nuit, il peut protéger un joueur. Il ne peut pas protéger le même joueur deux nuits de suite"
    },
    {
        name: "Corbeau",
        image: "/roles/corbeau.png",
        description:
            "Chaque nuit, il peut ajouter 2 votes supplémentaire au joueur de son choix pour le prochain vote."
    },
    {
        name: "Loup blanc",
        image: "/roles/loup_blanc.png",
        description: "Une nuit sur deux, il peut éliminer un loup-garou"
    },
    {
        name: "Maire",
        image: "/roles/maire.png",
        description: "Son vote compte pour deux voix"
    },
    {
        name: "Maire juge",
        image: "/roles/maire.png",
        description: "En cas d'égalité au vote, le maire tranche"
    },
    {
        name: "Ange",
        image: "/roles/ange.png",
        description:
            "Si l'ange se fait éliminer le premier jour par le vote du village, il gagne la partie"
    },
    {
        name: "Chien-loup",
        image: "/roles/chien_loup.jpg",
        description:
            "Au début de la partie, il choisit d'être un simple villageois ou un loup-garou"
    },
    {
        name: "Enfant sauvage",
        image: "/roles/enfant_sauvage.png",
        description:
            "Au début de la partie, il choisit un modèle. Si ce dernier meurt, il devient un loup garou"
    },
    {
        name: "Grand méchant loup",
        image: "/roles/grand_mechant_loup.jpg",
        description:
            "Il peut éliminer un joueur supplémentaire tant qu'aucun loup n'est mort"
    },
    {
        name: "Infect père des loups",
        image: "/roles/infect_pere_des_loups.png",
        description:
            "Il peut choisir d'infecter une victime une fois dans la partie"
    },
    {
        name: "Montreur d'ours",
        image: "/roles/montreur_ours.png",
        description:
            "Au réveil du village, si au moins un loup lui est adjacent, l'ours grogne"
    },
    {
        name: "Montreur d'ours malin",
        image: "/roles/montreur_ours.png",
        description:
            "Au réveil du village, l'ours grogne pour chaque loup adjacent au montreur d'ours"
    },
    {
        name: "Renard",
        image: "/roles/renard.png",
        description:
            "Chaque nuit, il peut sentir trois personnes. Si aucune d'elle n'est un loup, il perd son pouvoir"
    },
    {
        name: "Renard voisin",
        image: "/roles/renard.png",
        description:
            "Chaque nuit, il peut sentir une personne et ses voisons. Si aucune d'elle n'est un loup, il perd son pouvoir"
    },
    {
        name: "Villageois-Villageois",
        image: "/roles/villageois_villageois.png",
        description:
            "Il peut voter le jour et est innocent aux yeux de tous les joueurs."
    },
    {
        name: "Soeurs",
        image: "/roles/soeurs.png",
        description:
            "Elles se connaissent mutuellement et peuvent discuter la nuit"
    },
    {
        name: "Frères",
        image: "/roles/freres.jpg",
        description:
            "Ils se connaissent mutuellement et peuvent discuter la nuit"
    }
]