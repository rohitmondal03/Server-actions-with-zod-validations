import ToDoForm from "./_components/form";

export default function Home() {
  return (
    <section style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "2rem",
    }}>
      <h1>
        Todos app !!
      </h1>

      <ToDoForm />
    </section>
  );
}
