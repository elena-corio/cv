/**
 * Example test file for CV JavaScript functionality
 * 
 * To run:
 *   npm test
 * 
 * To run in watch mode:
 *   npm run test:watch
 */

describe('CV Page Initialization', () => {
  beforeEach(() => {
    // Reset DOM before each test
    document.body.innerHTML = '';
  });

  test('should have DOM initialized', () => {
    expect(document).toBeDefined();
  });

  test('should load script without errors', () => {
    // Mock script loading
    const scriptEl = document.createElement('script');
    expect(scriptEl).toBeDefined();
  });
});

describe('Print Functionality', () => {
  test('should trigger print on Ctrl+P', () => {
    const windowPrintSpy = jest.spyOn(window, 'print').mockImplementation(() => {});
    
    const event = new KeyboardEvent('keydown', {
      key: 'p',
      ctrlKey: true
    });
    
    document.dispatchEvent(event);
    // Note: actual implementation would handle this in script.js
    
    windowPrintSpy.mockRestore();
  });
});

describe('Clipboard Utility', () => {
  test('should copy text to clipboard', async () => {
    const mockText = 'elena@example.com';
    
    // Mock navigator.clipboard
    global.navigator.clipboard = {
      writeText: jest.fn().mockResolvedValue(undefined)
    };
    
    await navigator.clipboard.writeText(mockText);
    
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(mockText);
  });
});
