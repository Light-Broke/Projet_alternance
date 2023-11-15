// SignupForm.js
/*import React, { useState } from "react";

const SignupForm = ({ onSignup }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    // Ajoutez ici la logique de création de compte
    // Vous pouvez valider les informations de création de compte ici
    // et appeler la fonction onSignup lorsque la création de compte est réussie.
    onSignup({ username, password });
  };

  return (
    <div>
      <h2>Création de compte</h2>
      <form>
        <label>
          Nom d'utilisateur:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Mot de passe:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleSignup}>
          Créer un compte
        </button>
      </form>
    </div>
  );
};

export default SignupForm;*/
// SignupForm.js
import React, { useState } from "react";

const SignupForm = ({ onSignup }) => {
  const [pseudo, setPseudo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = () => {
    // Ajoutez ici la logique de création de compte
    // Vous pouvez valider les informations de création de compte ici
    // et appeler la fonction onSignup lorsque la création de compte est réussie.
    onSignup({ pseudo, email, password, confirmPassword });
  };

  return (
    <div>
      <h2>Création de compte</h2>
      <form>
        <label>
          Pseudo:
          <input
            type="text"
            value={pseudo}
            onChange={(e) => setPseudo(e.target.value)}
          />
        </label>
        <br />
        <label>
          E-mail:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Mot de passe:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <label>
          Confirmer mot de passe:
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleSignup}>
          Créer un compte
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
