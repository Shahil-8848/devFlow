import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import Link from "next/link";
const Home = async () => {
  const session = await auth();

  console.log(session);
  return (
    <>
      <section className="flex w-full flex-col-reverse justify-between gap-4">
        <h1 className="h1-bold">Project Questions</h1>
        <Button>
          <Link href={ROUTES.ASK_QUESTION}>Ask a question</Link>
        </Button>
      </section>
      <section>Local search</section>
      <section>Local search</section>
      <div>
        <p>Question - 3</p>
        <p>Question - 2</p>
        <p>Question - 1</p>
      </div>
    </>
  );
};

export default Home;
