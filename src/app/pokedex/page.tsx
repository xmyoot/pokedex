import MainDisplay from '@/components/MainDisplay';
import SideDisplay from '@/components/SideDisplay';
async function getData() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon/');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

const Pokedex = async () => {
  const data = await getData();
  const listUrl = data.results.map((pokemon: any) => pokemon.url);
  return (
    <main className="flex min-h-screen flex-row content-end justify-center p-5">
      <MainDisplay pokemon={listUrl} />
      <SideDisplay pokemon={listUrl} />
    </main>
  );
};
export default Pokedex;
