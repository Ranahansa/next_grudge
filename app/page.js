import { sql } from "@vercel/postgres";
import { addGrudge } from "./actions/createGrudge";
import SubmitButton from "./components/SubmitButton";
export default async function Home() {
  
  const {rows} = await sql`SELECT * FROM Grudges`


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full p-4 bg-white rounded shadow-md md:p-8 md:w-96">
        <form action={addGrudge}>
          <label
            htmlFor="grudgeName"
            className="block text-sm font-medium text-gray-700"
          >
            Name Of Grudge
          </label>
          <input
            type="text"
            name="grudgeName"
            id="grudgeName"
            placeholder="Name of Grudge"
            className="w-full p-2 mt-1 text-black border rounded focus:outline-none focus:border-blue-500"
          />
          <SubmitButton />
        </form>
        <div className="p-4 mt-4">
          {
            rows.map((grudge, index) => (
              <div key={index} className="p-2 mt-2 text-black bg-gray-600 rounded-md shadow">{grudge.name}</div>
            ))
          }
        </div>
      </div>
    </div>
  );
}
