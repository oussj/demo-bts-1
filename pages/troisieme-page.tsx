import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
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
