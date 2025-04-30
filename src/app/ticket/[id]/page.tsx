import TicketCard from "../../components/ticket/ticket";


export default async function TicketPage(params: { params: Promise<{ id: string }>;})
{
  
  const id   = (await params.params).id;

  const data = {
    id: id,
    mesa: "Pendiente",
    familia: "Zarazúa Cruz",
    integrantes: 3,
  };

  return (
    <div className="flex w-full h-full justify-center lg:p-5 min-h-[90vh] bg-black">
      <TicketCard {...data} />
    </div>
  );
}

export const dynamic = "force-dynamic";