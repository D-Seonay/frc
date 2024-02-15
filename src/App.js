import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Remplacez 'Switch' par 'Route'
import Navbar from './component/Navbar';
import './index.css';
import GlassBackground from './component/ui/GlassBackground';
import Works from './component/Works';
import CursorTracker from "./component/ui/CursorTracker";
import WavyBorder from "./component/ui/WavyBorder";
import AboutMe from "./component/ParallaxComponent";

function App() {
	return (
		<>

			<GlassBackground>
				<Router>
					<Navbar />
					<CursorTracker />
					<Routes>
						<Route path="/" element={<Works />} />
						<Route path="/about" element={<AboutMe />} />
						<Route path="/works" element={<Works />} />
						<Route path="/wavy-border" element={<WavyBorder />} />
						<Route path="*" element={<h1>404</h1>} />
						{/* Définissez les autres routes ici */}
					</Routes>
				</Router>
			</GlassBackground>
		</>
	);
}

export default App;
