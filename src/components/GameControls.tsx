'use client';

export default function GameControls() {
  const handleRestart = () => {
    const frame = document.getElementById('gameFrame') as HTMLIFrameElement;
    if (frame) frame.src = frame.src;
  };

  const handleFullscreen = () => {
    const frame = document.getElementById('gameFrame') as HTMLIFrameElement;
    if (frame) {
      if (frame.requestFullscreen) {
        frame.requestFullscreen();
      }
    }
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 mt-8">
      <button onClick={handleRestart} className="apple-btn bg-gray-800 hover:bg-gray-900">
        <i className="fas fa-redo mr-2"></i> Restart Game
      </button>
      <button onClick={handleFullscreen} className="apple-btn bg-purple-600 hover:bg-purple-700">
        <i className="fas fa-expand mr-2"></i> Fullscreen
      </button>
    </div>
  );
} 