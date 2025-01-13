import "@radix-ui/themes/styles.css";
import { Toggle } from '@radix-ui/react-toggle';
import { SunIcon, MoonIcon } from '@radix-ui/react-icons';
import { useTheme } from "../hooks/use-theme";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Avatar } from "../components/ui/avatar";

function Index() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <main className={`h-screen w-full ${theme === 'dark' ? 'bg-neutral-950 text-white' : 'bg-white text-black'} flex flex-col items-center`}>
      <header className="w-full p-4 flex justify-between items-center bg-blue-600 text-white">
        <div className="flex items-center gap-4">
          <Avatar className="bg-white text-blue-600" size="lg">SS</Avatar>
          <h1 className="text-2xl font-bold">SERGI SA</h1>
        </div>
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
      </header>

      <section className="flex-1 flex flex-col items-center justify-center gap-8 p-8">
        <Card className="max-w-2xl p-6 shadow-lg">
          <h2 className="text-3xl font-semibold mb-4">Welcome to SERGI SA</h2>
          <p className="text-lg mb-4">
            At SERGI SA, we are pioneers in AI consultancy, dedicated to automating processes and enhancing efficiency for businesses worldwide. Our team of experts leverages cutting-edge technology to deliver tailored solutions that drive innovation and growth.
          </p>
          <h3 className="text-2xl font-semibold mb-2">Our Services</h3>
          <ul className="list-disc list-inside mb-4">
            <li>AI Strategy Consulting</li>
            <li>Process Automation</li>
            <li>Data Analysis and Insights</li>
            <li>Custom AI Solutions</li>
          </ul>
          <p className="text-lg">
            Partner with us to transform your business operations and stay ahead in the competitive market.
          </p>
        </Card>

        <form className="flex flex-col gap-4 w-full max-w-md">
          <h3 className="text-xl font-semibold mb-2">Schedule a Meeting</h3>
          <Input type="text" placeholder="Your Name" className="p-2 border rounded" />
          <Input type="email" placeholder="Your Email" className="p-2 border rounded" />
          <Input type="text" placeholder="Preferred Date & Time" className="p-2 border rounded" />
          <Button type="submit" className="bg-blue-500 text-white p-2 rounded">Schedule</Button>
        </form>
      </section>

      <footer className="w-full p-4 bg-blue-600 text-white text-center">
        © 2025 SERGI SA. All rights reserved.
      </footer>
    </main>
  );
}

export default Index;
