'use client';

import { useEffect, useState } from 'react';

export default function DebugPage() {
  const [currentTheme, setCurrentTheme] = useState('Loading...');

  useEffect(() => {
    const theme = document.documentElement.getAttribute('data-theme');
    setCurrentTheme(theme || 'No theme set');
  }, []);

  const switchTheme = (theme: string) => {
    document.documentElement.setAttribute('data-theme', theme);
    setCurrentTheme(theme);
    console.log('Switched to theme:', theme);
  };
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-4xl font-bold mb-8">Theme Debug Page</h1>
      
      {/* Current Status */}
      <div className="bg-base-200 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Debug Info</h2>
        <p className="mb-2">Current theme attribute: <span className="font-bold text-primary">{currentTheme}</span></p>
        <p className="mb-4">This page tests if the custom DaisyUI theme is working properly.</p>
        
        {/* CSS Test */}
        <div className="mt-4 p-4 border-2 border-dashed border-primary">
          <p>This box should have a green dashed border when ecpbEmeraldTheme is active</p>
          <div 
            className="w-4 h-4 bg-primary inline-block mr-2"
            style={{
              backgroundColor: currentTheme === 'ecpbEmeraldTheme' ? '#10b981' : undefined
            }}
          ></div>
          <span>Primary color test square</span>
        </div>
      </div>

      {/* Button Tests */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold">Button Tests</h3>
        <div className="flex gap-4 flex-wrap">
          <button className="btn btn-primary">Primary (#10b981)</button>
          <button className="btn btn-secondary">Secondary (#059610)</button>
          <button className="btn btn-accent">Accent (#34d399)</button>
          <button className="btn btn-neutral">Neutral</button>
        </div>
      </div>

      {/* Alert Tests */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold">Alert Tests</h3>
        <div className="alert alert-info">
          <span>Info alert - should be blue (#3b82f6)</span>
        </div>
        <div className="alert alert-success">
          <span>Success alert - should be green (#22c55e)</span>
        </div>
        <div className="alert alert-warning">
          <span>Warning alert - should be yellow (#f59e0b)</span>
        </div>
        <div className="alert alert-error">
          <span>Error alert - should be red (#ef4444)</span>
        </div>
      </div>

      {/* Color Swatches */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold">Color Swatches</h3>
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-primary text-primary-content p-4 rounded">Primary</div>
          <div className="bg-secondary text-secondary-content p-4 rounded">Secondary</div>
          <div className="bg-accent text-accent-content p-4 rounded">Accent</div>
          <div className="bg-neutral text-neutral-content p-4 rounded">Neutral</div>
        </div>
      </div>

      {/* Base Colors */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold">Base Colors</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-base-100 text-base-content p-4 rounded border">Base 100</div>
          <div className="bg-base-200 text-base-content p-4 rounded">Base 200</div>
          <div className="bg-base-300 text-base-content p-4 rounded">Base 300</div>
        </div>
      </div>

      {/* Theme Switcher */}
      <div className="bg-base-200 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4">Theme Switcher Test</h3>
        <div className="flex gap-4">
          <button 
            className="btn btn-primary" 
            onClick={() => switchTheme('ecpbEmeraldTheme')}
          >
            Use Custom Theme
          </button>
          <button 
            className="btn btn-secondary" 
            onClick={() => switchTheme('light')}
          >
            Use Light Theme
          </button>
        </div>
      </div>

      {/* Theme Attribute Check */}
      <div className="bg-base-200 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4">HTML Theme Check</h3>
        <p>Open browser dev tools and check the HTML element for: <code>data-theme=ecpbEmeraldTheme</code></p>
        <p>Current theme: <span className="font-bold text-primary">{currentTheme}</span></p>
      </div>
    </div>
  );
}
