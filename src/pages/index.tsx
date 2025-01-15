import "@radix-ui/themes/styles.css";
import { Toggle } from '@radix-ui/react-toggle';
import { SunIcon, MoonIcon } from '@radix-ui/react-icons';
import { useTheme } from "../hooks/use-theme";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Avatar } from "../components/ui/avatar";
import { Link } from "react-router-dom";
import { useState } from 'react';

function Index() {
  const { theme, setTheme } = useTheme();
  const [language, setLanguage] = useState('en');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  const content = {
    en: {
      welcome: "Welcome to SERGI SA",
      description: "At SERGI SA, we are pioneers in AI consultancy, dedicated to automating processes and enhancing efficiency for businesses worldwide. Our team of experts leverages cutting-edge technology to deliver tailored solutions that drive innovation and growth.",
      services: "Our Services",
      serviceList: [
        "AI Strategy Consulting",
        "Process Automation",
        "Data Analysis and Insights",
        "Custom AI Solutions"
      ],
      partner: "Partner with us to transform your business operations and stay ahead in the competitive market.",
      schedule: "Schedule a Meeting",
      login: "Login"
    },
    es: {
      welcome: "Bienvenido a SERGI SA",
      description: "En SERGI SA, somos pioneros en consultoría de IA, dedicados a automatizar procesos y mejorar la eficiencia de las empresas en todo el mundo. Nuestro equipo de expertos utiliza tecnología de vanguardia para ofrecer soluciones personalizadas que impulsan la innovación y el crecimiento.",
      services: "Nuestros Servicios",
      serviceList: [
        "Consultoría de Estrategia de IA",
        "Automatización de Procesos",
        "Análisis de Datos e Información",
        "Soluciones de IA Personalizadas"
      ],
      partner: "Asóciese con nosotros para transformar las operaciones de su negocio y mantenerse a la vanguardia en el mercado competitivo.",
      schedule: "Programar una Reunión",
      login: "Iniciar Sesión"
    }
  };

  const langContent = content[language];

  return (
    <main className={`h-screen w-full ${theme === 'dark' ? 'bg-neutral-950 text-white' : 'bg-white text-black'} flex flex-col items-center`}>
      <header className="w-full p-4 flex justify-between items-center bg-blue-600 text-white">
        <div className="flex items-center gap-4">
          <Avatar className="bg-white text-blue-600">SS</Avatar>
          <h1 className="text-2xl font-bold">SERGI SA</h1>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={toggleLanguage} className="px-4 py-2 rounded-full bg-gray-200 text-black">
            {language === 'en' ? 'ES' : 'EN'}
          </button>
          <Toggle
            pressed={theme === 'dark'}
            onPressedChange={toggleTheme}
            className={`px-4 py-2 rounded-full flex items-center gap-2 transition-colors
              ${theme === 'dark' 
                ? 'bg-neutral-800 hover:bg-neutral-700 text-white' 
                : 'bg-gray-200 hover:bg-gray-300 text-black'
              }`}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          </Toggle>
        </div>
      </header>

      <section className="w-full h-64 bg-cover bg-center mb-8" style={{ backgroundImage: 'url(https://source.unsplash.com/1600x900/?artificial-intelligence)' }}>
        <div className="w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <h2 className="text-4xl font-bold text-white">{langContent.welcome}</h2>
        </div>
      </section>

      <section className="flex-1 flex flex-col items-center justify-center gap-8 p-8">
        <Card className="max-w-2xl p-6 shadow-lg">
          <p className="text-lg mb-4">
            {langContent.description}
          </p>
          <h3 className="text-2xl font-semibold mb-2">{langContent.services}</h3>
          <ul className="list-disc list-inside mb-4">
            {langContent.serviceList.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
          <p className="text-lg">
            {langContent.partner}
          </p>
        </Card>

        <form className="flex flex-col gap-4 w-full max-w-md">
          <h3 className="text-xl font-semibold mb-2">{langContent.schedule}</h3>
          <Input type="text" placeholder="Your Name" className="p-2 border rounded" />
          <Input type="email" placeholder="Your Email" className="p-2 border rounded" />
          <Input type="text" placeholder="Preferred Date & Time" className="p-2 border rounded" />
          <Button type="submit" className="bg-blue-500 text-white p-2 rounded">Schedule</Button>
        </form>

        <Link to="/login" className="text-blue-500 hover:underline mt-4">{langContent.login}</Link>
      </section>

      <footer className="w-full p-4 bg-blue-600 text-white text-center">
        © 2025 SERGI SA. All rights reserved.
      </footer>
    </main>
  );
}

export default Index;
