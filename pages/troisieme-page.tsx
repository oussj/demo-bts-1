import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <div
        onClick={() => {
          console.log("hello");
        }}
        className="text-red-500 text-9xl md:text-blue-500 lg:text-green-500"
      >
        Deuxième page
      </div>
      <div>Liens</div>
      <div className="flex flex-col lg:flex-row">
        <div>Bonjour les amis </div>
        <div>Bonjour les amis </div>
        <div>Bonjour les amis </div>
        <div>Bonjour les amis </div>
        <div>Bonjour les amis </div>
        <div>Bonjour les amis </div>
        <div>Bonjour les amis </div>
        <div>Bonjour les amis </div>
      </div>
    </div>
  );
}
