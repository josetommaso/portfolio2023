'use client';

import { createContext, useContext, useState } from 'react';

const ContactFormContext = createContext({});

export const ContactFormProvider = ({ children }) => {
	const [sucess, setSuccess] = useState(null);
	const [disableButton, setDisableButton] = useState(false);
	const [error, setError] = useState(null);

	return (
		<ContactFormContext.Provider
			value={{
				sucess,
				setSuccess,
				disableButton,
				setDisableButton,
				error,
				setError,
			}}
		>
			{children}
		</ContactFormContext.Provider>
	);
};

export const useContactFormContext = () => useContext(ContactFormContext);
