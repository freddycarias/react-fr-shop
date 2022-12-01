import React from'react';
import ReactDOM from'react-dom/client';
import App from'./routes/App';

ReactDOM.createRoot(document.getElementById('app')).render(<App />);

//OTRA FORMA DE HACERLO 
// const root = ReactDOM.createRoot(document.getElementById('app'));
// root.render(<App />);