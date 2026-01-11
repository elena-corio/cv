/**
 * script.js
 * CV Interactivity
 * 
 * Features:
 * - Load sidebar from sidebar.html
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
	// Load Sidebar Component
	// ===========================
	async function loadSidebar() {
		const sidebarContainer = document.getElementById('sidebar-container');
		if (!sidebarContainer) return;

		try {
			// Determine if we're in src/ folder by checking current page path
			const isInSrc = window.location.pathname.includes('/src/');
			const sidebarPath = isInSrc ? 'sidebar.html' : 'src/sidebar.html';
			
			console.log('Loading sidebar from:', sidebarPath, 'isInSrc:', isInSrc);
			
			const response = await fetch(sidebarPath);
			if (!response.ok) throw new Error(`HTTP ${response.status}`);
			const html = await response.text();
			console.log('Sidebar loaded successfully');
			sidebarContainer.innerHTML = html;
		} catch (error) {
			console.error('Error loading sidebar:', error);
			// Fallback: show error message
			sidebarContainer.innerHTML = '<p style="padding: 20px; color: #999;">Sidebar unavailable</p>';
		}
	}

	// Load sidebar when DOM is ready
	async function init() {
		await loadSidebar();
		setupExpandableDetails();
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', init);
	} else {
		init();
	}

	// ===========================
	// Initialize
	// ===========================
	// This will be called after sidebar is loaded in the DOMContentLoaded event above

})();
