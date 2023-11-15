// App.js
/*import LoginForm from "./LoginForm";
import React from "react";
import SignupForm from './SignupForm';
import { useState } from "react"; // Assurez-vous d'avoir cette ligne d'import

const App = () => {
  // Utilisez useState pour définir et gérer l'état de 'isLoggedIn'
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // La fonction handleLogin est maintenant capable de modifier l'état 'isLoggedIn'
  const handleLogin = (userData) => {
    // Implémentez la logique de connexion ici
    // En fonction du résultat, mettez à jour l'état isLoggedIn
    console.log("Login successful!", userData);
    setIsLoggedIn(true);
  };

  return (
    <div>
      <h1>Mon Application</h1>
      {isLoggedIn ? (
        <p>Bienvenue! Vous êtes connecté.</p>
      ) : (
        // Passez la fonction handleLogin au composant LoginForm
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;*/
// App.js
/*import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false);

  const handleLogin = (userData) => {
    // Implémentez la logique de connexion ici
    // En fonction du résultat, mettez à jour l'état isLoggedIn
    console.log("Login successful!", userData);
    setIsLoggedIn(true);
  };

  const handleSignup = (userData) => {
    // Implémentez la logique de création de compte ici
    // En fonction du résultat, mettez à jour l'état isLoggedIn
    console.log("Account created!", userData);
    setIsLoggedIn(true);
  };

  return (
    <div>
      <h1>Mon Application</h1>
      {isLoggedIn ? (
        <p>Bienvenue! Vous êtes connecté.</p>
      ) : (
        <div>
          {showSignupForm ? (
            <SignupForm onSignup={handleSignup} />
          ) : (
            <LoginForm onLogin={handleLogin} />
          )}
          <button onClick={() => setShowSignupForm(!showSignupForm)}>
            {showSignupForm ? "Revenir à la connexion" : "Créer un compte"}
          </button>
        </div>
      )}
    </div>
  );
};

export default App;*/
// App.js
import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false);

  const handleLogin = (userData) => {
    // Implémentez la logique de connexion ici
    // En fonction du résultat, mettez à jour l'état isLoggedIn
    console.log("Login successful!", userData);
    setIsLoggedIn(true);
  };

  const handleSignup = (userData) => {
    // Implémentez la logique de création de compte ici
    // En fonction du résultat, mettez à jour l'état isLoggedIn
    console.log("Account created!", userData);
    setIsLoggedIn(true);
  };

  return (
    <div>
      <h1>Mon Application</h1>
      {isLoggedIn ? (
        <p>Bienvenue! Vous êtes connecté.</p>
      ) : (
        <div>
          {showSignupForm ? (
            <SignupForm onSignup={handleSignup} />
          ) : (
            <LoginForm onLogin={handleLogin} />
          )}
          <button onClick={() => setShowSignupForm(!showSignupForm)}>
            {showSignupForm ? "Revenir à la connexion" : "Créer un compte"}
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
