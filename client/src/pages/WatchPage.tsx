import { ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function WatchPage() {
  return (
    <div className="h-screen w-screen bg-black">
      <nav className="fixed flex w-full p-4 z-10 items-center gap-8 bg-black bg-opacity-8">
        <ArrowLeftIcon className="w-10 text-white cursor-pointer hover:opacity-80 transition" />
        <p className="text-white text-3xl font-bold">
          <span className="font-light">Watching:</span> South Park
        </p>
      </nav>

      <iframe
        className="h-full w-full"
        allowFullScreen
        allow="autoplay"
        src="https://www.youtube.com/embed/C-xL5MROiM0?autoplay=1"
      ></iframe>
    </div>
  );
}
