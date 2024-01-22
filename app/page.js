import { sql } from "@vercel/postgres";
import { addGrudge } from "./actions/createGrudge";
import SubmitButton from "./components/SubmitButton";
export default async function Home() {
  
  const {rows} = await sql`SELECT * FROM Grudges`


  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-teal-400 to-blue-500">
      <div className="w-full p-4 bg-white rounded-md shadow-md md:p-8 md:w-96">
        <form onSubmit={addGrudge} className="space-y-4">
          <label
            htmlFor="grudgeName"
            className="block text-lg font-semibold text-gray-700"
          >
            Name Of Grudge
          </label>
          <input
            type="text"
            name="grudgeName"
            id="grudgeName"
            placeholder="Name of Grudge"
            className="w-full p-3 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <SubmitButton />
        </form>
        <div className="p-4 mt-4">
          {rows.map((grudge, index) => (
            <div
              key={index}
              className="p-3 mt-2 text-white bg-gray-800 rounded-md shadow-md"
            >
              {grudge.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
