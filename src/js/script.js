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
	// Expandable Details Component
	// ===========================
	function setupExpandableDetails() {
		const headers = document.querySelectorAll('.expandable-header');
		const expandAllBtn = document.getElementById('expandAllBtn');
		let allExpanded = false;
		
		function updateButtonState() {
			const activeHeaders = document.querySelectorAll('.expandable-header.active');
			allExpanded = activeHeaders.length === headers.length;
			
			if (expandAllBtn) {
				if (allExpanded) {
					expandAllBtn.textContent = 'Collapse All';
					expandAllBtn.classList.add('expanded');
					expandAllBtn.classList.remove('collapsed');
				} else {
					expandAllBtn.textContent = 'Expand All';
					expandAllBtn.classList.add('collapsed');
					expandAllBtn.classList.remove('expanded');
				}
			}
		}
		
		// Toggle individual sections
		headers.forEach(header => {
			header.addEventListener('click', function() {
				const sectionId = this.dataset.section;
				const content = document.getElementById(sectionId);
				
				if (!content) return;
				
				// Toggle active states
				this.classList.toggle('active');
				content.classList.toggle('active');
				
				// Update button state
				updateButtonState();
				
				// Optional: Close other sections for a more minimalist feel
				// Uncomment the code below to implement accordion behavior (only one open at a time)
				/*
				headers.forEach(otherHeader => {
					if (otherHeader !== header) {
						otherHeader.classList.remove('active');
						const otherContent = document.getElementById(otherHeader.dataset.section);
						if (otherContent) {
							otherContent.classList.remove('active');
						}
					}
				});
				*/
			});
		});
		
		// Expand/Collapse All functionality
		if (expandAllBtn) {
			expandAllBtn.addEventListener('click', function() {
				if (allExpanded) {
					// Collapse all
					headers.forEach(header => {
						header.classList.remove('active');
						const content = document.getElementById(header.dataset.section);
						if (content) {
							content.classList.remove('active');
						}
					});
				} else {
					// Expand all
					headers.forEach(header => {
						header.classList.add('active');
						const content = document.getElementById(header.dataset.section);
						if (content) {
							content.classList.add('active');
						}
					});
				}
				updateButtonState();
			});
			
			// Initialize button state
			updateButtonState();
		}
	}

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
	setupExpandableDetails();
	console.log('CV page loaded and ready');

	// Optional: Set up future features
	// setupScrollTracking();
	// setupSkillFiltering();

})();

