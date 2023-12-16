const AddWorkoutBtn = ({ addingWorkout, setAddingWorkout }) => {
	const handleClick = () => {
		console.log('WOW');
		if (addingWorkout === true) {
			setAddingWorkout(false);
		} else {
			setAddingWorkout(true);
		}
	};

	return <button onClick={handleClick}>+ Workout</button>;
};

export default AddWorkoutBtn;
