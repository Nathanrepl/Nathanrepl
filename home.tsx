import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="relative py-16 md:py-24 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
            Bienvenue sur Lyro
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Rejoignez notre communauté Discord dynamique et passionnée. Partagez, apprenez et connectez-vous avec des personnes partageant vos intérêts.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/join">
              <Button size="lg" className="group">
                Rejoindre maintenant
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg">
                En savoir plus
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl overflow-hidden aspect-square"
        >
          <img
            src="https://images.unsplash.com/photo-1542751371-adc38448a05e"
            alt="Discord Community"
            className="object-cover w-full h-full"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative rounded-2xl overflow-hidden aspect-square"
        >
          <img
            src="https://images.unsplash.com/photo-1603481546239-65146e59c49c"
            alt="Gaming Setup"
            className="object-cover w-full h-full"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative rounded-2xl overflow-hidden aspect-square md:col-span-2 lg:col-span-1"
        >
          <img
            src="https://images.unsplash.com/photo-1598550476439-6847785fcea6"
            alt="Online Community"
            className="object-cover w-full h-full"
          />
        </motion.div>
      </section>

      <section className="text-center space-y-8">
        <h2 className="text-3xl font-bold">Pourquoi nous rejoindre ?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-6 rounded-lg bg-card"
          >
            <h3 className="text-xl font-semibold mb-3">Communauté active</h3>
            <p className="text-muted-foreground">
              Des membres passionnés et accueillants prêts à partager et échanger.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 rounded-lg bg-card"
          >
            <h3 className="text-xl font-semibold mb-3">Événements réguliers</h3>
            <p className="text-muted-foreground">
              Participez à nos événements et activités communautaires variés.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 rounded-lg bg-card"
          >
            <h3 className="text-xl font-semibold mb-3">Support 24/7</h3>
            <p className="text-muted-foreground">
              Une équipe de modération disponible pour vous aider à tout moment.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}