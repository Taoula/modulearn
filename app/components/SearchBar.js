import { QuestionMarkCircleIcon } from "@heroicons/react/20/solid";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/outline";

export default function Example() {
  return (
    <div>
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          type="text"
          name="account-number"
          id="account-number"
          className="block w-full pl-2 rounded-md border-0 py-1.5 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Search for a topic..."
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <MagnifyingGlassCircleIcon
            className="h-5 w-5 text-gray-500"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
}
