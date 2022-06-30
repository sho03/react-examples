import React, { useEffect, useRef, useState } from "react";

export default function InputEvents() {

	const [value, setValue] = useState("");

	const ref = useRef<HTMLInputElement>(null);

	useEffect(() => {
		ref.current?.focus();
	}, [])

	const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.code === "Enter") {
			console.log("press Enter")
		}
	}

	return (
		<>
		<div>
			<input type="text" value={value} onChange={(e) => setValue(e.target.value)} onKeyPress={onKeyPress} ref={ref}/>
		</div>
		<div>
			<input type="text" value={value} onChange={(e) => setValue(e.target.value)} onKeyPress={onKeyPress} ref={ref}/>
		</div>
		</>
	)
}