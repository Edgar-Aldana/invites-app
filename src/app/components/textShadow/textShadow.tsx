interface AnimatedTextProps {
  textSizeClasses?: string; // Ej: "text-4xl md:text-6xl lg:text-7xl"
  color?: string;
  shadowColor?: string;
  animation?: string;
  children: React.ReactNode;
}

export function AnimatedText({
  textSizeClasses = 'text-4xl',
  color = 'white',
  shadowColor = '#da286c',
  animation = '',
  children,
}: AnimatedTextProps) {
  return (
    <div
      className={`font-['weddingStarlightFont'] font-bold text-shadow-md ${textSizeClasses} ${animation}`}
      style={{
        color: color.startsWith('#') ? color : undefined,
        textShadow: `8px 8px 16px ${shadowColor}`,
      }}
    >
      {children}
    </div>
  );
}
