"use client";

import { createContext, useContext, useState, useEffect, ReactNode, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { API_CONFIG, getApiUrl } from '../config/api';

// Definir tipos para los datos del invitado
interface InvitadoData {
  id: string;
  familia: string;
  miembros: { id: number; nombre: string; asistira: boolean }[];
  maxExtras: number;
  respuesta: boolean;
  asistir: boolean | null;
  buzon: string | null;
  telefono: string;
}

// Definir el tipo para el contexto
interface InviteContextType {
  inviteId: string | null;
  invitadoData: InvitadoData | null;
  loading: boolean;
  error: string | null;
  fetchInviteData: () => Promise<void>;
}

// Crear el contexto
const InviteContext = createContext<InviteContextType | undefined>(undefined);

// Componente que usa useSearchParams
function InviteParamsHandler({ 
  setInviteId, 
  inviteId 
}: { 
  setInviteId: (id: string | null) => void;
  inviteId: string | null;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Extraer el ID de la URL
  useEffect(() => {
    
    const pathSegments = pathname.split('/');
    const idFromPath = pathSegments.length > 2 && pathSegments[1] === 'ticket' ? pathSegments[2] : null;
    const idFromQuery = searchParams?.get('id');
    const storedId = typeof window !== 'undefined' ? localStorage.getItem('inviteId') : null;
    const newId = idFromPath || idFromQuery || storedId;
    
    if (newId && newId !== inviteId) {
      setInviteId(newId);
      if (typeof window !== 'undefined') {
        localStorage.setItem('inviteId', newId);
      }
    }
  }, [pathname, searchParams, inviteId, setInviteId]);

  return null;
}


export function InviteProvider({ children }: { children: ReactNode }) {
  const [inviteId, setInviteId] = useState<string | null>(null);
  const [invitadoData, setInvitadoData] = useState<InvitadoData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);


  const fetchInviteData = async () => {
    if (!inviteId) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(getApiUrl(API_CONFIG.ENDPOINTS.GET_INVITE_DATA), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id_invitado: inviteId }),
      });
      
      if (!response.ok) {
        throw new Error('Error al obtener datos del invitado');
      }
      
      const data = await response.json();
      
      setInvitadoData({
        id: data.data.invitado.id_invitado,
        familia: data.data.invitado.nombre,
        miembros: data.data.invitado.miembros,
        maxExtras: data.data.invitado.adicionales,
        asistir: data.data.asistira,
        respuesta: data.data.respuesta,
        buzon: data.data.buzon,
        telefono: data.data.invitado.telefono
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
      console.error('Error al obtener los datos:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (inviteId) {
      fetchInviteData();
    }
  }, [inviteId]);

  return (
    <InviteContext.Provider value={{ inviteId, invitadoData, loading, error, fetchInviteData }}>
      <Suspense fallback={null}>
        <InviteParamsHandler setInviteId={setInviteId} inviteId={inviteId} />
      </Suspense>
      {children}
    </InviteContext.Provider>
  );
}

export function useInvite() {
  const context = useContext(InviteContext);
  if (context === undefined) {
    throw new Error('useInvite debe ser usado dentro de un InviteProvider');
  }
  return context;
}
