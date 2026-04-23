export default function CRMDealManager() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-[1600px] mx-auto px-10 py-24">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6">CRM Deal Manager</h1>
        <p className="text-xl text-gray-600 max-w-3xl">
          Track, manage, and close deals on the go. Integrated sales tools to help you convert connections into customers.
        </p>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-blue-50 p-12 rounded-[32px] border border-blue-100">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">Pipeline Visibility</h2>
            <p className="text-gray-700 leading-relaxed">
              Monitor your sales pipeline in real-time. Identify which deals need immediate attention and track progress effortlessly.
            </p>
          </div>
          <div className="bg-orange-50 p-12 rounded-[32px] border border-orange-100">
            <h2 className="text-3xl font-bold text-orange-600 mb-4">Mobile CRM</h2>
            <p className="text-gray-700 leading-relaxed">
              Update deal statuses and log interactions directly from your phone after meeting a potential client.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
