import { Link } from "wouter";
import { SiDiscord } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-card mt-16 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Lyro</h3>
            <p className="text-muted-foreground">
              Rejoignez notre communauté Discord passionnée et dynamique.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    À propos
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Contact
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/join">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Rejoindre
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Nous suivre</h3>
            <a
              href="https://discord.gg/3sgcVjdrDx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <SiDiscord className="h-5 w-5" />
              <span>Discord</span>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Lyro. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}