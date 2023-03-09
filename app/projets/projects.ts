export interface Project {
  title: string
  date: string
  images: string[]
  description: string
  tags: string[]
  slug?: string
}

// an array of cool project ideas
export const projects: Project[] = [
  {
    title: "Le fauteuil qui se transforme en ballon",
    date: "2022-01-01",
    images: [
      "/fauteuil_ballon.png",
      "/fauteuil-2.png",
      "/fauteuil-3.png",
      "/fauteuil-4.png",
      "/fauteuil-5.png",
    ],
    description: `
    # Processus de design : Le fauteuil qui se transforme en ballon

## Objectif

Notre objectif était de créer un fauteuil innovant qui pourrait offrir une expérience unique et ludique à l'utilisateur tout en étant confortable et fonctionnel.

## Recherche

### Analyse du marché

- Nous avons analysé les tendances actuelles en matière de design de mobilier et les besoins des consommateurs.
- Nous avons étudié les différents types de fauteuils existants sur le marché ainsi que les matériaux utilisés et les techniques de fabrication.

### Inspiration

- Nous avons recherché de l'inspiration dans les domaines de l'aéronautique, du sport extrême et de la science-fiction.
- Nous avons étudié des œuvres d'art et des designs conceptuels pour explorer des formes et des configurations innovantes.

### Citation pertinante

> "L'inspiration existe, mais elle doit vous trouver en train de travailler" - Pablo Picasso

## Conception

### Ébauches

- Nous avons créé plusieurs croquis pour explorer différentes formes et configurations possibles.
- Nous avons évalué les avantages et les inconvénients de chaque idée.

### Modèles 3D

- Nous avons créé des modèles 3D pour visualiser les idées les plus prometteuses.
- Nous avons testé les modèles en 3D à l'aide de simulations pour évaluer leur stabilité et leur sécurité.

### Citation pertinante

> "La beauté est la combinaison de la forme et de la fonction" - Frank Lloyd Wright

## Prototype

### Matériaux

- Nous avons choisi des matériaux légers et résistants pour la structure du fauteuil.
- Nous avons sélectionné des tissus confortables et durables pour l'assise et le dossier.

### Fabrication

- Nous avons travaillé avec des artisans locaux pour fabriquer le prototype.
- Nous avons surveillé chaque étape de la production pour garantir la qualité et la précision.

### Tests

- Nous avons testé le prototype dans différentes conditions pour évaluer sa stabilité et son confort.
- Nous avons demandé des retours à des utilisateurs pour améliorer le design.

### Citation pertinante

> "La perfection est atteinte, non pas lorsqu'il n'y a plus rien à ajouter, mais lorsqu'il n'y a plus rien à retirer." - Antoine de Saint-Exupéry

## Raffinement

### Améliorations

- Nous avons effectué plusieurs ajustements pour optimiser le confort et la fonctionnalité du fauteuil.
- Nous avons travaillé sur le système de déploiement des ailes pour le rendre plus facile à utiliser.

### Tests supplémentaires

- Nous avons testé le fauteuil amélioré dans des conditions plus variées.
- Nous avons sollicité des avis d'experts en design pour confirmer les améliorations.

### Citation pertinante

> "Le design n'est pas ce que vous voyez, c'est ce que vous ressentez" - Steve Jobs

## Production

### Fabrication en série

- Nous avons réalisé une production en série pour répondre à la demande du marché.

## Tâches réalisées

- Analyse du marché
- Recherche d'inspiration
- Création d'ébauches et de mod

      `,
    tags: ["mobilier", "transport"],
    slug: "fauteuil-ballon",
  },
  {
    title: "La machine à fabriquer des vagues",
    date: "2022-02-15",
    images: ["/machine_vagues.png"],
    description:
      "Une machine qui produit des vagues de différentes tailles et formes pour les surfeurs.",
    tags: ["sport", "technologie"],
    slug: "machine-vagues",
  },
  {
    title: "Le robot jardinier",
    date: "2022-03-22",
    images: ["/robot_jardinier.png"],
    description:
      "Un robot qui s'occupe de l'entretien des jardins en taillant les haies, tondant la pelouse, etc.",
    tags: ["jardinage", "technologie"],
    slug: "robot-jardinier",
  },
  {
    title: "La lampe qui crée une ambiance sonore",
    date: "2022-04-05",
    images: ["/lampe_sonore.png"],
    description:
      "Une lampe qui projette de la lumière tout en créant une ambiance sonore relaxante.",
    tags: ["luminaire", "audio"],
    slug: "lampe-sonore",
  },
  {
    title: "Le bureau qui se transforme en lit",
    date: "2022-05-12",
    images: ["/bureau_lit.png"],
    description:
      "Un bureau pratique qui peut être transformé en lit pour une petite sieste.",
    tags: ["mobilier", "sommeil"],
    slug: "bureau-lit",
  },
  {
    title: "Le casque qui traduit les pensées en musique",
    date: "2022-06-19",
    images: ["/casque_musique.png"],
    description:
      "Un casque qui utilise la technologie pour traduire les pensées en musique.",
    tags: ["technologie", "audio"],
    slug: "casque-musique",
  },
  {
    title: "Le tapis roulant pour chien",
    date: "2022-07-26",
    images: ["/tapis_roulant_chien.png"],
    description:
      "Un tapis roulant spécialement conçu pour les chiens pour leur permettre de faire de l'exercice à l'intérieur.",
    tags: ["animaux", "sport"],
    slug: "tapis-roulant-chien",
  },
  {
    title: "Le vase qui parle",
    date: "2022-08-02",
    images: ["/vase_parlant.png"],
    description:
      "Un vase qui émet des phrases inspirantes pour égayer votre journée.",
    tags: ["décoration", "audio"],
    slug: "vase-parlant",
  },
  {
    title: "Le barbecue volant",
    date: "2022-09-09",
    images: ["/barbecue_volant.png"],
    description:
      "Un barbecue qui peut voler pour vous permettre de faire des grillades dans des endroits insolites.",
    tags: ["cuisine", "transport"],
    slug: "barbecue-volant",
  },
  {
    title: "Le distributeur de câlins",
    date: "2022-10-16",
    images: ["/distributeur_calins.png"],
    description:
      "Un distributeur qui vous donne un câlin quand vous en avez besoin.",
    tags: ["animaux", "mobilier"],
    slug: "distributeur-calins",
  },
  {
    title: "Le robot qui fait la vaisselle",
    date: "2022-11-23",
    images: ["/robot_vaisselle.png"],
    description: "Un robot qui fait la vaisselle pour vous.",
    tags: ["technologie", "cuisine"],
    slug: "robot-vaisselle",
  },
  {
    title: "Le robot qui fait le ménage",
    date: "2022-12-30",
    images: ["/robot_menage.png"],
    description: "Un robot qui fait le ménage pour vous.",
    tags: ["technologie", "mobilier"],
    slug: "robot-menage",
  },
]

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const getProjectBySlug = async (slug: string) => {
  await sleep(500)
  return projects.find((project) => project.slug === slug)
}
