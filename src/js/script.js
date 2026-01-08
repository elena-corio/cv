/**
 * script.js
 * CV Interactivity
 * 
 * Features:
 * - Print/PDF export
 * - Dynamic year display
 * - Copy email to clipboard
 * - Scroll tracking
 * - Placeholders for future enhancements
 */

(function() {
	'use strict';

	// ===========================
	// Print / Save
	// ===========================
	const printBtn = document.getElementById('printBtn');
	if(printBtn) {
		printBtn.addEventListener('click', () => window.print());
	}

	// Print on Ctrl+P
	document.addEventListener('keydown', function(e) {
		if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
			e.preventDefault();
			window.print();
		}
	});

	// ===========================
	// Current Year Display
	// ===========================
	const yearEl = document.getElementById('year');
	if(yearEl) {
		yearEl.textContent = new Date().getFullYear();
	}

	// ===========================
	// Copy Email to Clipboard
	// ===========================
	const copyBtn = document.getElementById('copyEmail');
	if(copyBtn) {
		copyBtn.addEventListener('click', async () => {
			const email = copyBtn.dataset.email || document.getElementById('emailLink')?.textContent;
			if(!email) return;
			try {
				await navigator.clipboard.writeText(email);
				const original = copyBtn.textContent;
				copyBtn.textContent = 'Copied!';
				setTimeout(() => copyBtn.textContent = original, 1500);
			} catch(e) {
				console.warn('Clipboard write failed', e);
			}
		});
	}

	// ===========================
	// Scroll Tracking (Future)
	// ===========================
	function setupScrollTracking() {
		// TODO: Highlight active section on scroll
		// Useful for future table of contents or progress indicator
	}

	// ===========================
	// Skill Filtering (Future)
	// ===========================
	function setupSkillFiltering() {
		// TODO: Add interactive skill category filtering
		// - Toggle skill visibility by category
		// - Search/filter by keyword
	}

	// ===========================
	// Dark Mode Toggle (Future)
	// ===========================
	window.toggleDarkMode = function() {
		// TODO: Implement dark mode
		// - Store preference in localStorage
		// - Apply dark theme CSS
	};

	// ===========================
	// Export to PDF (Future)
	// ===========================
	window.exportToPDF = function() {
		// TODO: Integrate PDF library (html2pdf, jsPDF)
		// - Convert CV to PDF with proper formatting
		// - Maintain colors and layout
	};

	// ===========================
	// Initialize
	// ===========================
	console.log('CV page loaded and ready');

	// Optional: Set up future features
	// setupScrollTracking();
	// setupSkillFiltering();

})();

