"use client"

interface PianoCardProps {
  texto?: string
  className?: string
}

export default function PianoCard({ texto = "Mesa por asignar", className = "" }: PianoCardProps) {
  return (
    <div
      className={`relative rounded-xl p-[2px] w-full max-w-[300px] ${className}`}
      style={{
      
        boxShadow: "0 0 10px rgba(255, 215, 0, 0.5)",
      }}
    >
      <div className="w-full bg-black rounded-lg overflow-hidden">
        {/* Piano lid with text - made taller */}
        <div className="w-full h-10 py-5 px-4 border-b border-gray-700 flex items-center justify-center">
          <div className="text-white text-center text-3xl md:text-lg font-['forumFont']">Mesa</div>
        </div>

        {/* Piano keys */}
        <div className="relative h-14 md:h-12">
          {/* White keys - now 8 keys */}
          <div className="flex w-full h-full">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={`white-${i}`}
                className="bg-white flex-1 mx-[0.5px] h-full border-l border-r border-gray-300"
                style={{ borderRadius: "0 0 4px 4px" }}
              />
            ))}
          </div>


          

          {/* Black keys - positioned for 8 white keys - now wider */}
          <div className="absolute top-0 left-0 w-full">
         
            {/* F# */}
            <div
              className="absolute bg-gray-900 h-8 md:h-16 z-10 border border-gray-800"
              style={{
                width: "8%",
                minWidth: "10px",
                left: "calc(20% - 4%)",
                borderRadius: "0 0 3px 3px",
              }}
            />
            {/* G# */}
            <div
              className="absolute bg-gray-900 h-8 md:h-16 z-10 border border-gray-800"
              style={{
                width: "8%",
                minWidth: "12px",
                left: "calc(40% - 4%)",
                borderRadius: "0 0 3px 3px",
              }}
            />
            {/* A# */}
            <div
              className="absolute bg-gray-900 h-8 md:h-16 z-10 border border-gray-800"
              style={{
                width: "7%",
                minWidth: "12px",
                left: "calc(60% - 4%)",
                borderRadius: "0 0 3px 3px",
              }}
            />
            {/* C# (octave 2) */}
            <div
              className="absolute bg-gray-900 h-8 md:h-16 z-10 border border-gray-800"
              style={{
                width: "8%",
                minWidth: "12px",
                left: "calc(80% - 4%)",
                borderRadius: "0 0 3px 3px",
              }}
            />
            
            <div className="text-pink-500
                            font-['brillantFont']
                            text-2xl
                            px-2
                            rounded-lg 
                            font-bold
                            absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-[80%]
                            backdrop-blur-[10px] bg-white/5">{texto}</div>


          </div>
        </div>
      </div>
    </div>
  )
}
