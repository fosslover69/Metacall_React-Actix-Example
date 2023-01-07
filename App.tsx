import React from 'react';
import { renderToString } from 'react-dom/server';

export function hello(text: string):	string {
	return renderToString(
	<div>
		<script src="https://cdn.tailwindcss.com"></script>
		<h1 className="text-4xl font-bold">Hello {text}</h1></div>);
}