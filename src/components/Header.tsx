export function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-xl font-bold tracking-widest text-gray-900">
          RESORTPASS
        </div>
        <div className="flex items-center gap-4 text-sm">
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Login
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Sign Up
          </a>
        </div>
      </div>
    </header>
  );
}
