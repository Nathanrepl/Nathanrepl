import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold mb-6">À propos de Lyro</h1>
        <p className="text-xl text-muted-foreground">
          Découvrez notre histoire et notre mission
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid md:grid-cols-2 gap-8 items-center"
      >
        <div>
          <img
            src="https://images.unsplash.com/photo-1563986768609-322da13575f3"
            alt="Discord server community"
            className="rounded-lg"
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Notre communauté</h2>
          <p className="text-muted-foreground">
            Lyro est plus qu'un simple serveur Discord - c'est une communauté vivante où chacun peut trouver sa place. Nous nous efforçons de créer un environnement accueillant et dynamique pour tous nos membres.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-card rounded-lg p-8"
      >
        <h2 className="text-2xl font-semibold mb-6">Nos valeurs</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-medium mb-2">Respect</h3>
            <p className="text-muted-foreground">
              Le respect mutuel est au cœur de notre communauté.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Partage</h3>
            <p className="text-muted-foreground">
              Nous encourageons le partage de connaissances et d'expériences.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Innovation</h3>
            <p className="text-muted-foreground">
              Nous sommes toujours à la recherche de nouvelles idées.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-center"
      >
        <img
          src="https://images.unsplash.com/photo-1611162617474-5b21e879e113"
          alt="Discord moderators"
          className="rounded-lg mb-6 mx-auto"
        />
        <h2 className="text-2xl font-semibold mb-4">Notre équipe</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Notre équipe de modérateurs passionnés travaille dur pour maintenir un environnement sain et agréable pour tous les membres de la communauté.
        </p>
      </motion.div>
    </div>
  );
}