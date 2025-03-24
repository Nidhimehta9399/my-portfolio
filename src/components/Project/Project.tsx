import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                </div>
            </header>
            <div className="body">
              <h3>Jarvis</h3>
              <b>Role:</b> Frontend Developer
              <br/>
              <br/>
              <p> Developed a scalable component library, improving UI consistency.
Built responsive dashboards for Admin, Cleaners, and Customers.
Optimized performance for smooth user experience.
 </p>
            </div>
            <footer> <ul className="tech-list"> <li>React</li> <li>Typescript</li> <li>Styled components</li> <li>Storybook</li> </ul> </footer>
          </div>
        </ScrollAnimation>

      <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                </div>
            </header>
            <div className="body">
              <h3>Chat Application in HRMS</h3>
              <b>Role:</b> Full Stack Developer
              <br/>
              <br/>
              <p> Developed a chat system with private & group messaging.
Implemented real-time updates (read receipts, message management).
Ensured secure backend integration and message storage.
 </p>
            </div>
            <footer> <ul className="tech-list"> <li>React</li> <li>Node JS</li> <li>MongoDB</li> <li>Socket.io</li> </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                </div>
            </header>
            <div className="body">
              <h3>Pabau</h3>
              <b>Role:</b> Full Stack Developer
              <br/>
              <br/>
              <p> Built an online appointment scheduling system for hospitals.
Integrated secure patient record management.
Developed admin dashboards for efficient hospital operations
 </p>
            </div>
            <footer> <ul className="tech-list"> <li>Next JS</li> <li>Node JS</li> <li>MongoDB</li> <li>Rest APIs</li> </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                </div>
            </header>
            <div className="body">
              <h3>RightData</h3>
              <b>Role:</b> Frontend Developer
              <br/>
              <br/>
              <p> Designed and developed a dynamic database schema UI supporting N-level
hierarchy.
Enhanced UI performance and usability for seamless database co  
 </p>
            </div>
            <footer> <ul className="tech-list"> <li>React</li> <li>Type Script</li>  </ul> </footer>
          </div>
        </ScrollAnimation>

      </div>
    </Container>
  );
}