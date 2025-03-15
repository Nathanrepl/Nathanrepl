import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SiDiscord } from "react-icons/si";

export default function Join() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold mb-6">Rejoignez Lyro</h1>
        <p className="text-xl text-muted-foreground">
          Faites partie de notre communauté grandissante
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid md:grid-cols-2 gap-8 items-center"
      >
        <div>
          <img
            src="https://images.unsplash.com/photo-1609741947364-7d153767bd0a"
            alt="Discord communication"
            className="rounded-lg"
          />
        </div>
        <Card>
          <CardContent className="p-6 space-y-6">
            <h2 className="text-2xl font-semibold">Rejoindre le serveur</h2>
            <p className="text-muted-foreground">
              Cliquez sur le bouton ci-dessous pour rejoindre notre serveur Discord et commencer votre aventure avec nous !
            </p>
            <a
              href="https://discord.gg/3sgcVjdrDx"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="w-full">
                <SiDiscord className="mr-2 h-5 w-5" />
                Rejoindre Discord
              </Button>
            </a>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="grid md:grid-cols-3 gap-6"
      >
        <Card>
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-semibold mb-3">Accès instantané</h3>
            <p className="text-muted-foreground">
              Rejoignez immédiatement la communauté après avoir cliqué sur le lien d'invitation.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-semibold mb-3">Canaux exclusifs</h3>
            <p className="text-muted-foreground">
              Accédez à des canaux thématiques et des discussions passionnantes.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-semibold mb-3">Événements spéciaux</h3>
            <p className="text-muted-foreground">
              Participez à nos événements communautaires réguliers.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}