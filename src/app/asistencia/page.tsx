"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BackgroundDetails } from "../components/backgroundDetails/backgroundDetails";
import { Separator } from "../components/separator/separator";
import { AnimatedText } from "../components/textShadow/textShadow";
import { useRouter } from "next/navigation";

interface FamilyMember {
  id: number;
  nombre: string;
}

interface InvitadoData {
  id: string;
  familia: string;
  miembros: FamilyMember[];
  maxExtras: number;
}

interface FormData {
  telefono: string;
  asistencia: "si" | "no";
  miembrosConfirmados: number[];
  agregarExtras: boolean;
  extras: { id: number; nombre: string }[];
  mensaje: string;
}

export default function Asistencia() {
  const router = useRouter();
  // Simulación de datos de API - esto se reemplazaría con una llamada real a la API
  const [invitadoData, setInvitadoData] = useState<InvitadoData | null>(null);
  const [loading, setLoading] = useState(true);
  const [telefonoError, setTelefonoError] = useState<string | null>(null);
  
  // Inicializar con asistencia "si"
  const [formData, setFormData] = useState<FormData>({
    telefono: "",
    asistencia: "si",
    miembrosConfirmados: [],
    agregarExtras: false,
    extras: [],
    mensaje: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [clicked, setClicked] = useState(false);

  // Simular carga de datos de la API
  useEffect(() => {
    // Aquí harías la llamada a tu API real
    setTimeout(() => {
      // Datos de ejemplo
      const miembrosIds = [1, 2, 3];
      setInvitadoData({
        id: "fam123",
        familia: "Familia Zarazúa Cruz",
        miembros: [
          { id: 1, nombre: "Lourdes" },
          { id: 2, nombre: "Verónica" },
          { id: 3, nombre: "Mireya" }
        ],
        maxExtras: 2
      });
      
      // Inicializar miembrosConfirmados con todos los IDs y asegurarse que asistencia sea "si"
      setFormData(prev => ({
        ...prev,
        miembrosConfirmados: miembrosIds,
        asistencia: "si"
      }));
      
      setLoading(false);
    }, 1000);
  }, []);

  // Manejar cambios en los checkboxes de miembros de familia
  const handleMemberChange = (id: number, checked: boolean) => {
    setFormData(prev => {
      const newMiembrosConfirmados = checked 
        ? [...prev.miembrosConfirmados, id]
        : prev.miembrosConfirmados.filter(memberId => memberId !== id);
      
      // Si no quedan miembros confirmados, cambiar asistencia a "no"
      const newAsistencia = newMiembrosConfirmados.length === 0 ? "no" : prev.asistencia;
      
      return { 
        ...prev, 
        miembrosConfirmados: newMiembrosConfirmados,
        asistencia: newAsistencia
      };
    });
  };

  // Manejar cambios en los inputs de texto y radio buttons
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'radio' && name === 'asistencia') {
      const target = e.target as HTMLInputElement;
      const newValue = target.value as "si" | "no";
      
      // Si cambia a "no", limpiar errores de teléfono
      if (newValue === "no") {
        setTelefonoError(null);
      }
      
      // Solo permitir cambiar a "si" si hay miembros confirmados
      if (newValue === "si" && formData.miembrosConfirmados.length === 0) {
        return; // No permitir el cambio
      }
      
      setFormData(prev => ({
        ...prev,
        [name]: newValue
      }));
    } else if (type === 'checkbox' && name === 'agregarExtras') {
      const target = e.target as HTMLInputElement;
      setFormData(prev => ({
        ...prev,
        agregarExtras: target.checked,
        extras: target.checked ? prev.extras : []
      }));
    } else if (name === 'telefono') {
      // Validar que solo se ingresen números
      const numericValue = value.replace(/\D/g, '');
      
      // Validar longitud del teléfono
      if (formData.asistencia === "si" && numericValue.length !== 0 && numericValue.length !== 10) {
        setTelefonoError("El número debe tener 10 dígitos");
      } else {
        setTelefonoError(null);
      }
      
      setFormData(prev => ({
        ...prev,
        [name]: numericValue
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  // Manejar cambios en los nombres de extras
  const handleExtraChange = (id: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      extras: prev.extras.map(extra => 
        extra.id === id ? { ...extra, nombre: value } : extra
      )
    }));
  };

  // Agregar un nuevo extra
  const addExtra = () => {
    if (invitadoData && formData.extras.length < invitadoData.maxExtras) {
      const newId = Date.now();
      setFormData(prev => ({
        ...prev,
        extras: [...prev.extras, { id: newId, nombre: "" }]
      }));
    }
  };

  // Eliminar un extra
  const removeExtra = (id: number) => {
    setFormData(prev => ({
      ...prev,
      extras: prev.extras.filter(extra => extra.id !== id)
    }));
  };

  const validateForm = (): boolean => {
    // Si la asistencia es "si", validar teléfono
    if (formData.asistencia === "si") {
      if (formData.telefono.length !== 10) {
        setTelefonoError("El número debe tener 10 dígitos");
        return false;
      }
      
      // Verificar que al menos un miembro esté confirmado
      if (formData.miembrosConfirmados.length === 0) {
        return false;
      }
    }
    
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validar el formulario antes de enviar
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setClicked(true);
    
    // Aquí enviarías los datos a tu backend
    console.log("Datos a enviar:", {
      invitadoId: invitadoData?.id,
      ...formData
    });
    
    // Simulando un envío con un timeout
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Redirigir después de 2 segundos
      setTimeout(() => {
        router.push("/detalles");
      }, 2000);
    }, 1500);
  };

  // Determinar si mostrar la sección de asistencia "si"
  const showSiSection = formData.asistencia === "si";
  
  // Determinar si mostrar la sección de asistencia "no"
  const showNoSection = formData.asistencia === "no";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full min-h-screen bg-transparent flex flex-col items-center"
    >
      <BackgroundDetails />

      <div className="w-full sm:w-[80%] flex flex-col items-center p-4 rounded-2xl text-center mb-10 backdrop-blur-[4px] bg-black/35 border border-white/30 shadow-xl">
        <div className="text-[40px] sm:text-[60px] md:text-[70px] font-['weddingSecondaryFont'] text-white">
          Confirmación de Asistencia
        </div>

        <Separator width="32" height="0.5" color="yellow" />
        <h3 className="text-white tracking-widest uppercase text-lg sm:text-lg">
          26 de septiembre de 2026
        </h3>
        <h3 className="text-[#bbdb93] italic tracking-widest uppercase text-xs sm:text-lg">
          Confirma tu asistencia
        </h3>
        <Separator marginDown="4" width="32" height="0.5" color="yellow" />

        <div className="font-['forumFont'] text-white max-w-xl mx-auto text-md sm:text-[22px] mb-8">
          <AnimatedText
            textSizeClasses="text-[30px] sm:text-[40px]"
            color="#ffffff"
            shadowColor="#ffe600"
          >
            {invitadoData?.familia || "Familia"}
          </AnimatedText>
          Por favor, completa el siguiente formulario para confirmar tu asistencia a nuestro evento.
        </div>

        {loading ? (
          <div className="w-full max-w-md p-6 rounded-lg bg-black/50 border border-[#ffe600]/30 shadow-lg">
            <div className="text-[#ffe600] text-xl mb-4 font-['forumFont']">Cargando información...</div>
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[#ffe600]"></div>
            </div>
          </div>
        ) : submitted ? (
          <div className="w-full max-w-md p-6 rounded-lg bg-black/50 border border-[#ffe600]/30 shadow-lg">
            <div className="text-[#ffe600] text-2xl mb-4 font-['forumFont']">¡Gracias por confirmar!</div>
            <p className="text-white mb-4">Hemos recibido tu confirmación de asistencia.</p>
            <div className="text-[#bbdb93]">Redirigiendo...</div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md p-6 rounded-lg bg-black/50 border border-[#ffe600]/30 shadow-lg"
          >
            {invitadoData && (
              <div className="mb-6">
                <div className="mb-6 flex flex-col justify-center items-center">
                  <label className="block text-[#ffe600] text-md font-medium mb-2">
                    ¿Podrás asistir?
                  </label>

                  <div className="flex space-x-4 bg-black/40 p-3 rounded-md">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="asistencia-si"
                        name="asistencia"
                        value="si"
                        checked={formData.asistencia === "si"}
                        onChange={handleChange}
                        className="w-4 h-4 accent-[#bbdb93] bg-black border-[#bbdb93]"
                        disabled={formData.miembrosConfirmados.length === 0}
                      />
                      <label htmlFor="asistencia-si" className={`ml-2 ${formData.miembrosConfirmados.length === 0 ? 'text-gray-500' : 'text-white'}`}>
                        Sí, asistiré
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="asistencia-no"
                        name="asistencia"
                        value="no"
                        checked={formData.asistencia === "no"}
                        onChange={handleChange}
                        className="w-4 h-4 accent-[#bbdb93] bg-black border-[#bbdb93]"
                      />
                      <label htmlFor="asistencia-no" className="ml-2 text-white">
                        No podré asistir
                      </label>
                    </div>
                  </div>
                </div>

                {showSiSection ? (
                  <>
                    <div className="mb-4 flex flex-col items-center">
                      <label className="block text-[#ffe600] text-md font-medium mb-2">
                        Confirma quién asistirá:
                      </label>
                      <div className="space-y-2 bg-black/40 p-3 rounded-md">
                        {invitadoData.miembros.map(miembro => (
                          <div key={miembro.id} className="flex items-center">
                            <input
                              type="checkbox"
                              id={`miembro-${miembro.id}`}
                              checked={formData.miembrosConfirmados.includes(miembro.id)}
                              onChange={(e) => handleMemberChange(miembro.id, e.target.checked)}
                              className="w-4 h-4 accent-[#bbdb93] bg-black border-[#bbdb93]"
                              style={{ accentColor: '#bbdb93' }}
                            />
                            <label htmlFor={`miembro-${miembro.id}`} className="ml-2 text-white">
                              {miembro.nombre}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {invitadoData && invitadoData.maxExtras > 0 && (
                      <div className="mb-4">
                        <div className="flex items-center mb-2">
                          <input
                            type="checkbox"
                            id="agregarExtras"
                            name="agregarExtras"
                            checked={formData.agregarExtras}
                            onChange={handleChange}
                            className="w-4 h-4 accent-[#bbdb93] bg-black border-[#bbdb93]"
                            style={{ accentColor: '#bbdb93' }}
                          />
                          <label htmlFor="agregarExtras" className="ml-2 text-[#ffe600] text-sm font-medium">
                            Agregar invitados extras (máximo {invitadoData.maxExtras})
                          </label>
                        </div>

                        {formData.agregarExtras && (
                          <div className="space-y-3 mt-3 bg-black/40 p-3 rounded-md">
                            {formData.extras.map((extra, index) => (
                              <div key={extra.id} className="flex items-center space-x-2">
                                <input
                                  type="text"
                                  value={extra.nombre}
                                  onChange={(e) => handleExtraChange(extra.id, e.target.value)}
                                  placeholder={`Nombre del invitado extra ${index + 1}`}
                                  className="flex-1 px-3 py-2 bg-black/70 border border-[#ffe600]/30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#ffe600]/50"
                                />
                                <button
                                  type="button"
                                  onClick={() => removeExtra(extra.id)}
                                  className="p-2 text-[#ff9eb1] hover:text-[#ff7a93]"
                                >
                                  ✕
                                </button>
                              </div>
                            ))}

                            {formData.extras.length < invitadoData.maxExtras && (
                              <button
                                type="button"
                                onClick={addExtra}
                                className="mt-2 px-4 py-1 bg-black/50 border border-[#ffe600]/30 rounded-md text-[#ffe600] hover:bg-black/70 transition-colors"
                              >
                                + Agregar invitado extra
                              </button>
                            )}
                          </div>
                        )}
                      </div>
                    )}

                    <div className="mb-4">
                      <label htmlFor="telefono" className="block text-green-300 text-md font-medium mb-2">
                        Número de Whatsapp *
                      </label>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        required={formData.asistencia === "si"}
                        className={`w-full px-3 py-2 bg-black/70 border ${telefonoError ? 'border-red-500' : 'border-[#ffe600]/30'} rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#ffe600]/50 mb-2`}
                        placeholder="10 dígitos"
                        maxLength={10}
                      />
                      {telefonoError && (
                        <span className="text-red-600 text-sm font-[oswaldFont] bg-yellow-300 rounded-md p-1">{telefonoError}</span>
                      )}
                    </div>
                  </>
                ) : (
                  <div className="mb-4 p-4 bg-black/40 rounded-md text-center font-[oswaldFont] flex flex-col text-xl items-center justify-center">
                    <span className="text-yellow-300 mb-2">Lamentamos que no puedan acompañarnos.</span>
                    <span className="text-white">¡Gracias por hacérnoslo saber!</span>
                    <span className="text-green-400">¡Nos veremos pronto para festejar!</span>
                  </div>
                )}
              </div>
            )}

            <div className="mb-6">
              <label htmlFor="mensaje" className="block text-pink-400 text-md font-medium mb-2">
                Buzon de los novios (opcional)
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                rows={3}
                className="w-full px-3 py-2 bg-black/70 border border-[#ffe600]/30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#ffe600]/50"
                placeholder="¿Algún mensaje para los novios?"
              ></textarea>
            </div>

            <div className="flex justify-center">
              <motion.button
                type="submit"
                disabled={isSubmitting || (formData.asistencia === "si" && (formData.telefono.length !== 10 || formData.miembrosConfirmados.length === 0))}
                whileTap={{ scale: 0.95 }}
                className="w-[60%] sm:w-[65%] md:w-[70%] lg:w-[75%] flex justify-center items-center gap-2 h-14 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-[linear-gradient(to_right,rgba(0,0,0,0.5),rgba(255,215,0,0.4),rgba(0,0,0,0.5))] hover:bg-[linear-gradient(to_right,rgba(0,0,0,0.6),rgba(255,215,0,0.5),rgba(0,0,0,0.6))] hover:shadow-xl hover:shadow-yellow-400 hover:scale-105 duration-300 backdrop-blur-md border border-white/35 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none"
              >
                {isSubmitting ? "Enviando..." : "Enviar respuesta"}
              </motion.button>
            </div>

            <div className="mt-4 text-center">
              <button
                type="button"
                onClick={() => router.push("/detalles")}
                className="text-[#ff9eb1] hover:text-[#ff7a93] transition-colors duration-300"
              >
                Volver a detalles
              </button>
            </div>
          </form>
        )}
      </div>
    </motion.div>
  );
}