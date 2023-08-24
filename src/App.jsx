import { Routes, Route } from 'react-router-dom';
import { Actors, Movies, MovieInformation, Profile } from './pages';
import { Navbar } from './components';
const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" Component={Movies} />
          <Route path="/movie/:id" Component={MovieInformation} />
          <Route path="/actor/:id" Component={Actors} />
          <Route path="/profile/:id" Component={Profile} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
