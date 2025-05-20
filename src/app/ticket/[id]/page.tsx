'use client';

import { useInvite } from "../../context/InviteContext";
import TicketCard from "../../components/ticket/ticket";
import { useEffect, useState } from "react";
import Loading from "@/app/loading";
import NotFound from "@/app/not-found";

export default function TicketPage() {
  const { invitadoData, loading, error } = useInvite();
  const [showTicket, setShowTicket] = useState(false);

  useEffect(() => {
    if (invitadoData && !loading) {
      setShowTicket(true);
    }

  }, [invitadoData, loading]);

  if (loading) {
    return Loading();
  }

  if (error) {
    return <NotFound />;
  }

  if (!invitadoData || !showTicket) {
    return <NotFound />;
  }


  const miembrosConfirmados = invitadoData.miembros.filter(member => member.asistira).map(member => member.id).length;
  const extras = invitadoData.invitadosAdicionales.length;
  const asistentes = miembrosConfirmados + extras;

  const data = {
    id: invitadoData.id,
    mesa: "Pendiente",
    familia: invitadoData.familia,
    integrantes: asistentes,
  };

  return (
    <div className="flex w-full h-full justify-center lg:p-5 min-h-[90vh] bg-black">
      <TicketCard {...data} />
    </div>
  );
}
