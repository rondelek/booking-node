export default function Profile() {
  return (
    <div className="py-8">
      <h1 className="text-center">Mój profil</h1>

      <p>Imię</p>
      <p>Nazwisko</p>

      <div className="flex-column border rounded-full p-4 my-4">
        <p className="underline">Ostatnia lekcja</p>
      </div>

      <div className="flex-column border rounded-full p-4 my-4">
        <p className="underline">Następna lekcja</p>
      </div>

      <div className="flex-column border rounded-full p-4 my-4">
        <p className="underline">Płatności</p>
      </div>
    </div>
  );
}
