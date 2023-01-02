import React from 'react';
import { renderToString } from 'react-dom/server';
import "./App.css";

export function hello(text: string):	string {
	return renderToString(<h1 className="main">Hello {text}</h1>);
}