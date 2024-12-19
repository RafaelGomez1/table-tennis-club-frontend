import React, { useState } from 'react';
import { Navigation, type View } from './components/Navigation';
import { BookingsView } from './components/BookingsView';
import { CompetitionView } from './components/CompetitionView';
import { ThemeToggle } from './components/ThemeToggle';

function App() {
  const [currentView, setCurrentView] = useState<View>('bookings');

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img 
                src="/logo.png" 
                alt="TT Sant Andreu Logo" 
                className="h-12 w-12 object-contain"
              />
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white text-center">
                Tennis Taula Sant Andreu
              </h1>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <Navigation currentView={currentView} onViewChange={setCurrentView} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {currentView === 'bookings' ? <BookingsView /> : <CompetitionView />}
      </main>
    </div>
  );
}

export default App;