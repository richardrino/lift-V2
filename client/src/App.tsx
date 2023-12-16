import AddWorkoutBtn from './components/AddWorkoutBtn';
import Header from './components/Header';
import AddWorkoutModal from './components/AddWorkoutModal';
import LogItem from './components/LogItem';
import { useState } from 'react';

function App() {
	const [addingWorkout, setAddingWorkout] = useState();
	return (
		<div>
			<Header />
			<AddWorkoutBtn
				addingWorkout={addingWorkout}
				setAddingWorkout={setAddingWorkout}
			/>
			{addingWorkout && <AddWorkoutModal />}
			<LogItem />
		</div>
	);
}

export default App;
