const Modal = () => {
	return (
		<>
			<form className='form form--workout' action=''>
				<label htmlFor='workoutTitle'>Title</label>
				<input id='workoutTitle' type='text' />
				<label htmlFor='workoutDate'>Date</label>
				<input id='workoutDate' type='date' />
			</form>
		</>
	);
};

export default Modal;
