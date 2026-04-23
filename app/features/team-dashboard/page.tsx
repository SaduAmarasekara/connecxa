export default function TeamDashboard() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-[1600px] mx-auto px-10 py-24">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6">Centralised Team Dashboard</h1>
        <p className="text-xl text-gray-600 max-w-3xl">
          Admin tools for company-wide management. Control your brand's digital presence across your entire organisation.
        </p>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-blue-50 p-12 rounded-[32px] border border-blue-100">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">Unified Branding</h2>
            <p className="text-gray-700 leading-relaxed">
              Ensure all team members' profiles align with your corporate identity. Set templates and update logos globally.
            </p>
          </div>
          <div className="bg-orange-50 p-12 rounded-[32px] border border-orange-100">
            <h2 className="text-3xl font-bold text-orange-600 mb-4">Analytics & Insights</h2>
            <p className="text-gray-700 leading-relaxed">
              Track networking performance across your team. See which events or regions are generating the most engagement.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
