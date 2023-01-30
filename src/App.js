import logo from './logo.svg';
import './App.css';
// Hier wird eine Komponente geladen die in der anderen Datei definiert ist.
// So können Komponenten wiederverwertet werden und müssen nicht 1000x neu geschrieben werden.
// Sind also wie solche kleinen Vorlagen.
import { Button } from './components/Button/Button';

/**
 * Hier ist deine App Komponente die in der index.js eingebunden wird.
 * Hier kommt der Inhalt deiner Seite rein.
 */
function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Bearbeite <code>src/App.js</code> und speichere zum neu laden.
        </p>
      </header>

      <main>
        <p>Hier gibts ne Beispielkomponente:</p>

        <div className='buttons'>
          {/* Die Komponenten werden dann wie HTML Tags eingebunden */}
          <Button>Ein Button</Button>

          {/* Je nachdem was die Komponenten für Attribute haben, können die hier angegeben werden */}
          <Button disabled>Ein deaktivierter Button</Button>

          <Button size='big'>Ein großer Button</Button>
          <Button size='small'>Ein kleiner Button</Button>
        </div>
      </main>
    </div>
  );
}

export default App;
