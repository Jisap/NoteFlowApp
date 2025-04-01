
import SmartOganization from "../../assets/graphics/SmartOrganization.webp"
import ContextualReminders from "../../assets/graphics/ContextualReminders.webp"



const Features = () => {
  return (
    <section>
      <div>
        <div />
        
        <h2>
          All The Tools You Need to <br />
          <span>Supercharge </span> Your Note Taking
        </h2>

        <div>
          <figure>
            <img 
              src={SmartOganization}
              alt="Smart Organization IPhone Graphic"
            />
          </figure>
          <div>
            <p>
              Smart Organization
            </p>
            <p>
              Automatically categorize and tag your notes using AI-driven
              analysis. NoteFlow intelligency identifies hay topics and
              organizes your content, making it easy to find and retrieve
              your notes when you need them most.
            </p>
          </div>
        </div>

        <div>
          <div>
            <p>
              Contextual Reminders
            </p>
            <p>
              {" "}
              Stay on top of important tasks with AI-powered reminders that
              adapt to the context of your notes. NoteFlow recognizes deadlines,
              follow-ups, and key actions from your notes and sends timely alerts
              to ensure nothing slips through the cracks.
            </p>
          </div>
          <figure>
            <img
              src={ContextualReminders}
              alt="Smart Organization IPhone Graphic"
            />
          </figure>
        </div>
      </div>
    </section>
  )
}

export default Features