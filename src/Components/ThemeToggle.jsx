    import { useState, useEffect } from 'react';

    export default function ThemeToggle() {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        document.documentElement.className = theme;
    }, [theme]);

    return (
        <div className="fixed top-4 right-4 z-50">
        <button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="bg-gray-200 dark:bg-gray-800 p-2 rounded"
        >
            {theme === 'light' ? '🌙' : '☀️'}
        </button>
        </div>
    );
    }
