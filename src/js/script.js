/**
 * script.js
 * CV Interactivity
 * 
 * Features:
 * - Expandable/collapsible content sections
 * - Expand All / Collapse All button
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
	// Initialize
	// ===========================
	setupExpandableDetails();

})();

