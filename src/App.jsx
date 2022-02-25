import "bootstrap/dist/css/bootstrap.min.css";
import {useState} from "react";
import {Container} from "react-bootstrap";

import MyCard from "./components/MyCard";

function App() {
  const DARTH_VADER_LINE = [
    {
      text: "No hay escapatoria. No me obligues a destruirte. No te dejes ganar como lo hizo Obi-Wan. Luke, todavía no te has dado cuenta de tu importancia. Si combinamos nuestras fuerzas, podremos poner fin a esta beligerancia y poner orden en la galaxia.",
    },
    {
      text: "Si conocieras el poder del reverso tenebroso. Obi-Wan no te dijo lo que le pasó a tu padre.",
    },
    {text: "No, yo soy tu padre."},
    {text: "Examina tus sentimientos. ¡Sabes que es verdad!"},
    {
      text: "Luke, tú puedes destruir al Emperador, él se ha percatado de ello. Únete a mí y juntos gobernaremos la galaxia como padre e hijo.",
    },
  ];
  const LUKE_SKYWALKER_LINE = [
    {
      text: "¡Jamás me uniré a ti.!",
    },
    {text: "Me dijo lo suficiente. Dijo que tú lo mataste."},
    {text: "Eso no es verdad. ¡Es imposible!"},
    {text: "¡Noooooo! ¡Noo! ¡No!"},
  ];

  const [numberLuke, setNumberLuke] = useState(0);
  const [numberDarth, setNumberDarth] = useState(0);

  function nextLine(callback, state, length) {
    state < length - 1 ? callback(state + 1) : callback(0);
  }

  return (
    <div className="App">
      <Container className="m-5">
        <MyCard
          callback={setNumberLuke}
          lines={LUKE_SKYWALKER_LINE}
          nextLine={nextLine}
          state={numberLuke}
          title="Luke Skywalker"
        />
        <MyCard
          callback={setNumberDarth}
          lines={DARTH_VADER_LINE}
          nextLine={nextLine}
          state={numberDarth}
          title="Darth Vader"
        />
      </Container>
    </div>
  );
}

export default App;
