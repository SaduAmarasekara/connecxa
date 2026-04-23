export default function ContactManager() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-[1600px] mx-auto px-10 py-24">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6">Contact Manager</h1>
        <p className="text-xl text-gray-600 max-w-3xl">
          Keep your connections synced and sorted. Never lose track of a valuable lead or partnership again.
        </p>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-blue-50 p-12 rounded-[32px] border border-blue-100">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">Seamless Syncing</h2>
            <p className="text-gray-700 leading-relaxed">
              Automatically sync your new connections with your phone's contact list and our centralised database.
            </p>
          </div>
          <div className="bg-orange-50 p-12 rounded-[32px] border border-orange-100">
            <h2 className="text-3xl font-bold text-orange-600 mb-4">Smart Sorting</h2>
            <p className="text-gray-700 leading-relaxed">
              Organise contacts by industry, meeting location, or date. Add notes and follow-up reminders instantly.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
