"use client";
export default function Home() {

    const addGrudge = (e) => {
      e.preventDefault();
      // Add your logic to handle the form submission here
    };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full p-4 bg-white rounded shadow-md md:p-8 md:w-96">
        <form onSubmit={addGrudge}>
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
            className="w-full p-2 mt-1 border rounded focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="w-full p-2 mt-4 text-white bg-blue-500 rounded md:w-auto hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
          >
            Add Grudge
          </button>
        </form>
      </div>
    </div>
  );
}
