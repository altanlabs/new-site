import { useState } from 'react';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [language, setLanguage] = useState('en');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  const content = {
    en: {
      login: "Login",
      email: "Email",
      password: "Password",
      submit: "Login",
      back: "Back to Home"
    },
    es: {
      login: "Iniciar Sesión",
      email: "Correo Electrónico",
      password: "Contraseña",
      submit: "Iniciar Sesión",
      back: "Volver a Inicio"
    }
  };

  const langContent = content[language];

  return (
    <main className="h-screen w-full flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">{langContent.login}</h1>
          <button onClick={toggleLanguage} className="px-4 py-2 rounded-full bg-gray-200 text-black">
            {language === 'en' ? 'ES' : 'EN'}
          </button>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input
            type="email"
            placeholder={langContent.email}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 border rounded"
          />
          <Input
            type="password"
            placeholder={langContent.password}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 border rounded"
          />
          <Button type="submit" className="bg-blue-500 text-white p-2 rounded">
            {langContent.submit}
          </Button>
        </form>
        <Link to="/" className="text-blue-500 hover:underline mt-4 block text-center">{langContent.back}</Link>
      </div>
    </main>
  );
}

export default Login;
