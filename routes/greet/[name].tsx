import { PageProps } from "$fresh/server.ts";

export default function GreetPage(props: PageProps) {
  const { name } = props.params;
  return (
    <main>
      <p class = "font-bold bg-[#86efac]">Greetings to you, {name}!</p>
    </main>
  );
}