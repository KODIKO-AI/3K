

function App() {
  // 📸 Όλες οι φωτογραφίες σου
  const photos = [
    "/images/extra1.jpeg",
    "/images/extra2.jpeg",
    "/images/extra3.jpeg",
    "/images/extra4.jpeg",
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
  ];

  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-8 text-gray-800 text-center">
        Εγκαταστάσεις & Εξοπλισμός
      </h1>

      {/* Πλέγμα φωτογραφιών */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
        {photos.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Φωτογραφία ${index + 1}`}
            className="rounded-lg shadow-lg w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
          />
        ))}
      </div>
    </main>
  );
}

export default App;

