import React from 'react';
import { render } from 'react-dom';
import TimerApp from './components/TimerApp';
import '../style/style.css';

render(<TimerApp />, document.getElementById('timer'));
