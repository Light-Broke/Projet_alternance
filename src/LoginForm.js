// LoginForm.js
/*import React, { useState } from "react";

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Ajoutez ici la logique de validation du login
    // Vous pouvez vérifier les informations de connexion ici
    // et appeler la fonction onLogin lorsque le login est réussi.
    onLogin({ username, password });
  };

  return (
    <div>
      <h2>Connexion</h2>
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
        <button type="button" onClick={handleLogin}>
          Se connecter
        </button>
      </form>
    </div>
  );
};

export default LoginForm;*/
// LoginForm.js
import React, { useState } from "react";

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Ajoutez ici la logique de connexion
    // Vous pouvez valider les informations de connexion ici
    // et appeler la fonction onLogin lorsque la connexion est réussie.
    onLogin({ email, password });
  };

  return (
    <div>
      <h2>Connexion</h2>
      <form>
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
        <button type="button" onClick={handleLogin}>
          Se connecter
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
