import Hello from "./components/hello";

export default function Home() {
  console.log("Its the response simple of course");
  return (
    <>
      <h1 className="text-3xl">Ready for your next journey</h1>
      <Hello />
    </>
  );
}
