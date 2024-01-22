"use client"

import {useFormStatus} from 'react-dom'

export default function SubmitButton() {
    const {pending} = useFormStatus();
    return (
      <button
        type="submit"
        className="w-full p-2 mt-4 text-white bg-blue-500 rounded md:w-auto hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
        aria-disabled={pending}
      >
        {pending ? 'Saving...' : 'Add Grudge'}
      </button>
    );
}