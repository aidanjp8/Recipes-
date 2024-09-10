import React from 'react';
import './App.css';
import ResponsiveAppBar from './responsiveAppBar'; // Adjust the path if necessary
import MultilineTextFields from './Recipe';

function App() {
  return (
      <div className="App">
        <ResponsiveAppBar />
          <MultilineTextFields/>
        {/* Add other components or content here */}
      </div>
  );
}

export default App;
