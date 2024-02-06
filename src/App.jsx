import "./App.css";
import TaskApp from "./components/Task/TaskApp";

function App() {
  // const [isPlayerA, setIsPlayerA] = useState(true);
  // const [to, setTo] = useState(contacts[0]);
  return (
    <>
      {/* <Quiz></Quiz> */}
      {/* <EffectiveCursor></EffectiveCursor> */}
      {/* <DynamicFormCreation></DynamicFormCreation> */}
      {/* <FeedbackForm></FeedbackForm> */}
      {/* <RedundantForm></RedundantForm> */}
      {/* <Travel></Travel> */}
      {/* <TravelEditable></TravelEditable> */}
      {/* <TravelPlan></TravelPlan> */}
      {/* <Accordion></Accordion> */}
      {/* counter start  */}
      {/* <div>
        {isPlayerA ? (
          <Counter key="Taylor" person="Taylor" />
        ) : (
          <Counter key="Sarah" person="Sarah" />
        )}
        <button
          onClick={() => {
            setIsPlayerA(!isPlayerA);
          }}
        >
          Next player!
        </button>
      </div> */}
      {/* counter end  */}
      {/* chat start */}
      {/* <div>
        <ContactList
          contacts={contacts}
          selectedContact={to}
          onSelect={(contact) => setTo(contact)}
        />
        <Chat contact={to} />
      </div> */}
      {/* chat end */}
      <TaskApp></TaskApp>
      {/* <Page></Page> */}
      {/* <ProfilePage></ProfilePage> */}
    </>
  );
}

export default App;
