"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BackgroundDetails } from "../components/backgroundDetails/backgroundDetails";
import { Separator } from "../components/separator/separator";
import { AnimatedText } from "../components/textShadow/textShadow";
import { useRouter } from "next/navigation";
import { FaCheckCircle, FaTimesCircle, FaUserPlus, FaWhatsapp, FaEnvelope, FaHeart, FaArrowLeft, FaCalendarAlt, FaPencilAlt, FaInfoCircle, FaHandHoldingHeart } from "react-icons/fa";
import { BsPerson, BsPersonCheck } from "react-icons/bs";

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
  const [editingPhone, setEditingPhone] = useState(false);

  // Inicializar con asistencia "si"
  const [formData, setFormData] = useState<FormData>({
    telefono: "5512634987",
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

      // Inicializar con checkboxes en blanco
      setFormData(prev => ({
        ...prev,
        miembrosConfirmados: [],
        asistencia: "si"
      }));

      setLoading(false);
    }, 1000);
  }, []);

  // Estado para mostrar aviso de selección requerida
  const [showSelectionWarning, setShowSelectionWarning] = useState(false);

  // Manejar cambios en los checkboxes de miembros de familia
  const handleMemberChange = (id: number, checked: boolean) => {
    setFormData(prev => {
      const newMiembrosConfirmados = checked
        ? [...prev.miembrosConfirmados, id]
        : prev.miembrosConfirmados.filter(memberId => memberId !== id);

      // Mostrar aviso si no hay miembros seleccionados
      if (newMiembrosConfirmados.length === 0) {
        setShowSelectionWarning(true);
      } else {
        setShowSelectionWarning(false);
      }

      return {
        ...prev,
        miembrosConfirmados: newMiembrosConfirmados
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
        setShowSelectionWarning(false);
      }

      // Si cambia a "si" y no hay miembros confirmados, mostrar aviso
      if (newValue === "si" && formData.miembrosConfirmados.length === 0) {
        setShowSelectionWarning(true);
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

      const numericValue = value.replace(/\D/g, '');


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


  const handleExtraChange = (id: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      extras: prev.extras.map(extra =>
        extra.id === id ? { ...extra, nombre: value } : extra
      )
    }));
  };


  const addExtra = () => {
    if (invitadoData && formData.extras.length < invitadoData.maxExtras) {
      const newId = Date.now();
      setFormData(prev => ({
        ...prev,
        extras: [...prev.extras, { id: newId, nombre: "" }]
      }));
    }
  };


  const removeExtra = (id: number) => {
    setFormData(prev => ({
      ...prev,
      extras: prev.extras.filter(extra => extra.id !== id)
    }));
  };

  const validateForm = (): boolean => {

    if (formData.asistencia === "si") {
      if (formData.telefono.length !== 10) {
        setTelefonoError("El número debe tener 10 dígitos");
        return false;
      }


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
      // Ya no redireccionamos automáticamente
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
          Respuesta a la invitación
        </div>

        <Separator width="32" height="0.5" color="yellow" />
        <h3 className="text-white tracking-widest uppercase text-lg sm:text-lg">
          26 de septiembre de 2026
        </h3>
        <h3 className="text-[#bbdb93] italic tracking-widest uppercase text-xs sm:text-lg">
          ENVIANOS TU RESPUESTA
        </h3>
        <Separator marginDown="4" width="32" height="0.5" color="yellow" />

        <div className="font-['forumFont'] text-white max-w-xl mx-auto text-md sm:text-[22px] mb-4">
          <AnimatedText
            textSizeClasses="text-[30px] sm:text-[40px]"
            color="#ffffff"
            shadowColor="#ffe600"
          >
            {invitadoData?.familia || ""}
          </AnimatedText>
        </div>

        <div className="bg-[#ffe600]/20 border border-[#ffe600] rounded-lg p-3 mb-8 max-w-md mx-auto">
          <div className="text-white text-center text-sm sm:text-base flex items-center justify-center" style={{ fontFamily: 'Oswald, sans-serif', lineHeight: '1.5', margin: 0, padding: 0 }}>
            <FaCalendarAlt className="text-[#ffe600] mr-2 flex-shrink-0 animate-pulse" />
            <span>
              <span className="text-[#ffe600] font-semibold">¡Tu respuesta es importante! 💌</span> Por favor completa este formulario antes del <span className="text-[#ffe600] font-semibold ml-1">21 de marzo de 2026</span> para indicarnos si podemos contar con su presencia.
              <br /> <br />
              <span className="text-green-300 font-semibold text-sm">¡Gracias por ayudarnos a organizar este día especial!</span>
            </span>
          </div>
        </div>

        {loading ? (
          <div className="w-full max-w-md p-6 rounded-lg bg-black/50 border border-[#ffe600]/30 shadow-lg">
            <div className="text-[#ffe600] text-xl mb-4 font-['forumFont']">Cargando información...</div>
            <div className="flex justify-center">
              <motion.img
                src="/media/images/sunflower-loading.png"
                alt="Cargando..."
                className="w-16 h-16"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
              />
            </div>
          </div>
        ) : submitted ? (
          <div className="w-full max-w-md p-6 rounded-lg bg-black/50 border border-[#ffe600] shadow-lg">
            <div className="text-[#ffe600] text-2xl mb-4 font-['forumFont']">¡Gracias por tu tiempo!</div>
            <p className="text-white mb-4">Hemos recibido tu respuesta.</p>

            {formData.asistencia === "si" && (
              <div className="flex flex-col items-center mt-6">
                <button
                  onClick={() => router.push("/itinerario")}
                  className="px-6 py-3 bg-[linear-gradient(to_right,rgba(0,0,0,0.5),rgba(255,215,0,0.4),rgba(0,0,0,0.5))] hover:bg-[linear-gradient(to_right,rgba(0,0,0,0.6),rgba(255,215,0,0.5),rgba(0,0,0,0.6))] rounded-md text-white font-semibold border border-white/30 hover:shadow-lg hover:shadow-yellow-400/30 transition-all duration-300 flex items-center"
                >
                  <FaCalendarAlt className="mr-2 text-yellow-300" /> Ver itinerario
                </button>
              </div>
            )}

          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md p-6 rounded-lg bg-black/50 border border-[#ffe600]/60 shadow-lg"
          >
            {invitadoData && (
              <div className="mb-6">
                <div className="mb-6 flex flex-col justify-center items-center">
                  <label className="flex justify-center items-center text-[#ffc600] text-lg font-medium mb-2 w-full">
                    <FaHeart className="mr-2 text-pink-400 animate-pulse" />
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
                        className="w-4 h-4 accent-green-500 bg-black border-[#bbdb93]"
                      />
                      <label htmlFor="asistencia-si" className="ml-2 flex items-center text-white">
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
                        className="w-4 h-4 accent-[red] bg-black border-[#bbdb93]"
                      />
                      <label htmlFor="asistencia-no" className="ml-2 flex items-center text-white">
                        No podré asistir
                      </label>
                    </div>
                  </div>
                </div>

                {showSiSection ? (
                  <>
                    <div className="mb-4 flex flex-col items-center">
                      <label className="flex justify-center items-center text-[#ffc600] text-lg font-medium mb-2 w-full">
                        <BsPersonCheck className="mr-2 text-blue-300 text-xl" />
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
                              className="w-5 h-5"
                              style={{ accentColor: '[#bbdb93]' }}
                            />
                            <label htmlFor={`miembro-${miembro.id}`} className="ml-2 text-white font-semibold flex items-center">
                              <BsPerson className="mr-1 text-blue-300" /> {miembro.nombre}
                            </label>
                          </div>
                        ))}
                      </div>
                      {showSelectionWarning && (
                        <div className="mt-2 text-red-500 bg-white/85 border border-red-500 px-3 py-1 rounded-md text-sm font-semibold flex items-center">
                          <BsPersonCheck className="mr-2" /> Es necesario seleccionar al menos un invitado
                        </div>
                      )}
                    </div>


                    {invitadoData && invitadoData.maxExtras > 0 && (
                      <div className="border border-white rounded-xl border-dashed flex flex-col items-center mb-8 p-2">

                        <div className="flex justify-center items-center text-white italic mb-4 w-full">
                          <FaUserPlus className="mr-2 text-pink-300" />
                          Invitados adicionales ({invitadoData.maxExtras})
                        </div>

                        <div className="text-pink-400 text-xs">
                          Sabemos que existen personas importantes que comparten contigo,
                          por lo que si conocemos a tu pareja, siéntete libre de agregar su información en esta sección.
                        </div>



                        <div className="flex items-center mb-2 mt-5">
                          <input
                            type="checkbox"
                            id="agregarExtras"
                            name="agregarExtras"
                            checked={formData.agregarExtras}
                            onChange={handleChange}
                            className="w-5 h-5 border-2"
                            style={{ accentColor: '#ff00ff' }}
                          />
                          <label htmlFor="agregarExtras" className="ml-2 flex items-center text-[#ffc600] text-md font-medium">
                            ¿Llevarás pareja?
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
                                  placeholder={`Nombre del invitado adicional ${index + 1}`}
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
                                className="mt-2 px-4 py-1 bg-black/50 border border-[#ffc600]/30 rounded-md text-[#ffc600] hover:bg-black/70 transition-colors"
                              >
                                + Agregar invitado adicional
                              </button>
                            )}
                          </div>
                        )}
                      </div>
                    )}

                    <div className="mb-4 border border-green-300 rounded-xl border-dashed flex flex-col items-center p-2">

                      <label htmlFor="telefono" className="flex justify-center items-center text-green-300 text-md font-medium mb-2">
                        <FaWhatsapp className="mr-2 text-green-400" />
                        Notificaciones del evento
                      </label>

                      <div className="text-white text-xs mb-4">
                        El número registrado, se utilizará para enviar su ticket de entrada.
                        Modificar si es necesario.
                      </div>


                      <div>
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
                      </div>
                      {telefonoError && (
                        <span className="text-red-600 text-sm font-[oswaldFont] bg-yellow-300 rounded-md p-1 flex items-center justify-center">
                          {telefonoError}
                        </span>
                      )}
                    </div>
                  </>
                ) : (
                  <div className="mb-4 p-4 bg-black/40 rounded-md text-center font-[oswaldFont] flex flex-col text-xl items-center justify-center">
                    <div className="flex flex-col justify-center items-center text-yellow-300 mb-2">
                      <FaHandHoldingHeart className="w-10 h-10 mr-2 text-pink-500" />
                      <span className="font-bold text-white mt-2">{invitadoData?.familia} </span>
                      <span>Sabemos que aunque no podrás asistir, te encontrarás con nosotros en espíritu.</span>
                    </div>
                    <span className="text-green-400">¡Gracias por hacérnoslo saber!</span>

                  </div>
                )}
              </div>
            )}

            <div className="mb-6 border border-pink-300 rounded-xl border-dashed flex flex-col items-center p-2">

              <label htmlFor="mensaje" className="flex justify-center items-center text-pink-400 text-md font-medium mb-4">
                <FaEnvelope className="mr-2 text-pink-300" />
                Buzón de los novios (opcional)
              </label>

              <div className="text-white text-xs mb-4">
                {invitadoData?.familia}, Nos encantaría  leer sus buenos deseos.

              </div>


              <div className="w-[95%]">
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-3 py-2 bg-black/70 border border-[#ffe600]/30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#ffe600]/50"
                  placeholder="!Déjanos un mensaje que recordemos por siempre!"
                ></textarea>
              </div>
            </div>

            <div className="flex justify-center">
              <motion.button
                type="submit"
                disabled={isSubmitting || (formData.asistencia === "si" && (formData.telefono.length !== 10 || formData.miembrosConfirmados.length === 0 || (formData.agregarExtras && (formData.extras.length === 0 || formData.extras.some(extra => extra.nombre.trim() === "")))))}
                whileTap={{ scale: 0.95 }}
                className="w-[60%] sm:w-[65%] md:w-[70%] lg:w-[75%] flex justify-center items-center gap-2 h-14 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-[linear-gradient(to_right,rgba(0,0,0,0.5),rgba(255,215,0,0.4),rgba(0,0,0,0.5))] hover:bg-[linear-gradient(to_right,rgba(0,0,0,0.6),rgba(255,215,0,0.5),rgba(0,0,0,0.6))] hover:shadow-xl hover:shadow-yellow-400 hover:scale-105 duration-300 backdrop-blur-md border border-white/35 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none"
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                      className="mr-2"
                    >
                      <FaHeart className="text-pink-400" />
                    </motion.div>
                    Enviando...
                  </>
                ) : (
                  <>
                    <FaEnvelope className="mr-2 text-yellow-300" /> Enviar respuesta
                  </>
                )}
              </motion.button>
            </div>

            <div className="mt-4 text-center">
              <button
                type="button"
                onClick={() => router.push("/detalles")}
                className="text-[#ff9eb1] hover:text-[#ff7a93] transition-colors duration-300 flex items-center justify-center"
              >
                <FaArrowLeft className="mr-2 text-pink-300" /> Volver a detalles
              </button>
            </div>
          </form>
        )}
      </div>
    </motion.div>
  );
}