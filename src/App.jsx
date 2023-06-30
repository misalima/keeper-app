
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import { useState } from 'react';

function App() {
  const [notes] = useState([
    {
      "title": "Awesome",
      "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis magnam aut nesciunt obcaecati aspernatur illo sint delectus. Vitae adipisci, architecto at molestias nihil dolorem quam enim voluptatum molestiae nam reprehenderit?"
    }
  ]);

  return (
    <div className="App">
      <Header />
      <Note
        title={notes[0].title}
        text={notes[0].text} 
      />
      
      <Footer />
    </div>
  );
}

export default App;
