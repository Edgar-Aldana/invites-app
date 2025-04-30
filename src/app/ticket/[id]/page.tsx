import TicketCard from "../../components/ticket/ticket";

interface PageProps {
  params: {
    id: string;
  };
}

export default function TicketPage({ params }: PageProps) {
  const id = params.id;

  const data = {
    mesa: "por asignar",
    familia: "Zarazúa Cruz",
    integrantes: 3,
  };

  return (
    <div className="flex w-full h-full justify-center lg:p-5 min-h-screen bg-black">
      <TicketCard {...data} />
    </div>
  );
}
