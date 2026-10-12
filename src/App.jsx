import novahubPreview from "./assets/novahub-preview.png";
import GuestbookPreview from "./assets/guestbook-preview.png";
import Perfil from "./assets/Perfil_CV.jpg";
import linkedinLogo from "./assets/linkedin-rounded-svgrepo-com.svg";

const NAME = "Sergi Coll Pastor"

export default function App() {

  // Funcions per copiar el telèfon i el mail al porta-retalls
  async function copiarText(text, label) {
    try {
      await navigator.clipboard.writeText(text);
      alert(`${label} copiat al porta-retalls!`);
    } catch (err) {
      console.error(`Error al copiar ${label.toLowerCase()}: `, err);
    }
  }

  return (
      <>
      <header>
        <div className="nav-bar">
          <a class="nav-link" href="https://github.com/EsquirolDev">@EsquirolDev</a>

        <div className="principal-content">
          <a href="#inici">Inici</a>
          <a href="#sobre-mi">Sobre mi</a>
          <a href="#projectes">Projectes</a>
          <a href="#contacte">Contacte</a>
        </div>
        </div>
      </header>

    <main>
      <div className="titol">
        <h1 id="inici">{NAME}</h1>
        <p>Estudiant de 1r de DAW <b>Sant Josep Obrer</b> </p>
      </div>
        <img class="img-perfil" src={Perfil} alt="Perfil" />

      <div className="links-main">
        <a href="https://github.com/EsquirolDev" target="_blank" rel="noopener noreferrer">
          <svg className="svg" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <title>GitHub</title>
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            
          </svg>
        </a>
        <img  class="svg" src={linkedinLogo} alt="LinkedIn" />
      </div>
    
    </main>

    <div id="sobre-mi" className="sobre-mi-content">

      <h2>Sobre mi</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim voluptatibus necessitatibus laboriosam facere consequatur aliquam quas, quibusdam, tempora cupiditate quo dolores, autem id! Nobis sapiente odio sed nulla mollitia quo dolor, hic iusto temporibus nihil natus eveniet reiciendis officiis asperiores, corrupti fuga saepe quod exercitationem enim voluptates? Earum, consectetur modi.</p>
    </div>

    
    <div id="projectes" className="projectes-content">
      <h2>Projectes</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim voluptatibus necessitatibus laboriosam facere consequatur aliquam quas, quibusdam, tempora cupiditate quo dolores, autem id! Nobis sapiente odio sed nulla mollitia quo dolor, hic iusto temporibus nihil natus eveniet reiciendis officiis asperiores, corrupti fuga saepe quod exercitationem enim voluptates? Earum, consectetur modi.</p>
      <div className="projectes-cards-content">
        <div className="projecte-card">
          <h3>Projecte 1</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim voluptatibus necessitatibus laboriosam facere consequatur aliquam quas, quibusdam, tempora cupiditate quo dolores, autem id! Nobis sapiente odio sed nulla mollitia quo dolor, hic iusto temporibus nihil natus eveniet reiciendis officiis asperiores, corrupti fuga saepe quod exercitationem enim voluptates? Earum, consectetur modi.</p>
          <img src={novahubPreview} alt="novahub preview" />
        </div>

        <div className="projecte-card">
          <h3>Projecte 2</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim voluptatibus necessitatibus laboriosam facere consequatur aliquam quas, quibusdam, tempora cupiditate quo dolores, autem id! Nobis sapiente odio sed nulla mollitia quo dolor, hic iusto temporibus nihil natus eveniet reiciendis officiis asperiores, corrupti fuga saepe quod exercitationem enim voluptates? Earum, consectetur modi.</p>
        </div>

        <div className="projecte-card">
          <h3>Projecte 3</h3>
          <a href="https://guetbook.novaasist.dev/">Link</a>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim voluptatibus necessitatibus laboriosam facere consequatur aliquam quas, quibusdam, tempora cupiditate quo dolores, autem id! Nobis sapiente odio sed nulla mollitia quo dolor, hic iusto temporibus nihil natus eveniet reiciendis officiis asperiores, corrupti fuga saepe quod exercitationem enim voluptates? Earum, consectetur modi.</p>
          <img src={GuestbookPreview} alt="guestbook preview" />
        </div>
      </div>
    </div>

    <div id="contacte" className="contacte-content">
      <h2>Contacte</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim voluptatibus necessitatibus laboriosam facere consequatur aliquam quas, quibusdam, tempora cupiditate quo dolores, autem id! Nobis sapiente odio sed nulla mollitia quo dolor, hic iusto temporibus nihil natus eveniet reiciendis officiis asperiores, corrupti fuga saepe quod exercitationem enim voluptates? Earum, consectetur modi.</p>
      <div className="form-content">
        <form action="https://formspree.io/f/mnqvydqv" method="POST">
          <input type="text" name="name" placeholder="Nom" required />
          <input type="email" name="_replyto" placeholder="Email" required />
          <textarea name="message" placeholder="Missatge" required></textarea>
          <button type="submit">Enviar</button>
        
        </form>
      </div>
    </div>


    <footer>

      <div className="footer-content">

        <div className="footer-landing-page-content">
          <p>Home Page</p>
          <ul>
            <li><a href="#inici">Inici</a></li>
            <li><a href="#sobre-mi">Sobre mi</a></li>
            <li><a href="#projectes">Projectes</a></li>
            <li><a href="#contacte">Contacte</a></li>
          </ul>
        </div>

        <div className="footer-contact-content">
          <p>Contacte</p>
          <ul>
            <li><button onClick={() => copiarText("sergicollpastor@gmail.com", "Email")}>Email: sergicollpastor@gmail.com</button></li>
            <li><button onClick={() => copiarText("+34 696 33 89 32", "Telèfon")}>Telèfon: +34 696 33 89 32</button></li>
            <li><a href="https://github.com/EsquirolDev">GitHub: @EsquirolDev</a></li>
          </ul>
        </div>

      </div>

      <p>© 2026 Sergi Coll Pastor</p>
    </footer>
    </>
  )
}
