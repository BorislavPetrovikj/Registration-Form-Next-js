import RegistrationForm from "./components/RegistrationForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-center text-3xl font-bold text-gray-900 mb-8">
          Registration Form
        </h1>
        <RegistrationForm />
      </div>
    </main>
  );
}
