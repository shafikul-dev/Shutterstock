interface CountdownTimerProps {
  time: string;
}

export default function CountdownTimer({ time }: CountdownTimerProps) {
  return (
    <div className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded text-sm font-semibold text-gray-900 shadow-sm">
      <span className="text-red-600">#</span> {time}
    </div>
  );
}

