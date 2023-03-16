import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <div className="text-red-500 text-9xl md:text-blue-500 lg:text-green-500">
        Page vide
      </div>
      <div>Liens</div>
      <div className="flex flex-col lg:flex-row">
        <div>A</div>
        <div>B</div>
        <div>C</div>
        <div>D</div>
        <div>E</div>
        <div>F</div>
        <div>G</div>
        <div>H</div>
      </div>
    </div>
  );
}
