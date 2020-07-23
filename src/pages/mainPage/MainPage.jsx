import React from 'react';

function MainPage() {
  return (
    <div className="h-screen bg-blue-600 p-10">
      <p className="text-white font-bold text-4xl my-5">Дизайна нет, но вы держитесь!!!</p>
      <button
        type="button"
        className="px-3 py-2 border rounded text-blue-200 border-blue-400 hover:text-white hover:border-white focus:outline-none"
      >
        Какая то кнопка
      </button>
    </div>
  );
}

export default MainPage;
