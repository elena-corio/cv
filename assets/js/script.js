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

	console.log('Script.js loaded, document.readyState:', document.readyState);

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
	// Load Header Component
	// ===========================
	async function loadHeader() {
		console.log('loadHeader() called');
		const headerContainer = document.getElementById('header-container');
		console.log('headerContainer found:', !!headerContainer);
		
		if (!headerContainer) {
			console.warn('header-container not found in DOM');
			return;
		}

		try {
			// Determine if we're in src/ folder by checking current page path
			const isInSrc = window.location.pathname.includes('/src/');
			const headerPath = isInSrc ? 'header.html' : 'src/header.html';
			
			console.log('Loading header from:', headerPath, 'isInSrc:', isInSrc);
			
			const response = await fetch(headerPath);
			if (!response.ok) throw new Error(`HTTP ${response.status}`);
			const html = await response.text();
			console.log('Header loaded successfully');
			headerContainer.innerHTML = html;
		} catch (error) {
			console.error('Error loading header:', error);
			// Fallback: show error message
			headerContainer.innerHTML = '<p style="padding: 20px; color: #999;">Header unavailable</p>';
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

	// Load sidebar and header when DOM is ready
	async function init() {
		console.log('init() called');
		try {
			await loadHeader();
		} catch (e) {
			console.error('Error in loadHeader:', e);
		}
		
		// Small delay to ensure header is in DOM before setting active state
		setTimeout(() => {
			try {
				setActiveHeaderLink();
			} catch (e) {
				console.error('Error in setActiveHeaderLink:', e);
			}
		}, 100);
		
		try {
			await loadSidebar();
		} catch (e) {
			console.error('Error in loadSidebar:', e);
		}
		
		// Show expand all button only on CV page
		const isOnCVPage = window.location.pathname.includes('/cv.html');
		const expandAllBtn = document.getElementById('expandAllBtn');
		if (expandAllBtn) {
			expandAllBtn.style.display = isOnCVPage ? 'inline' : 'none';
		}
		
		try {
			setupExpandableDetails();
		} catch (e) {
			console.error('Error in setupExpandableDetails:', e);
		}
	}

	// Set active state on header links
	function setActiveHeaderLink() {
		const pathname = window.location.pathname;
		const headerLinks = document.querySelectorAll('.header-link');
		
		console.log('Current pathname:', pathname);
		
		headerLinks.forEach(link => {
			link.classList.remove('active');
			const page = link.dataset.page;
			
			// Determine current page
			const isHome = pathname.includes('index.html') || pathname === '/' || pathname === '';
			const isCV = pathname.includes('cv.html');
			const isPortfolio = pathname.includes('portfolio.html');
			
			if (page === 'home' && isHome) {
				link.classList.add('active');
				console.log('Set HOME as active');
			} else if (page === 'cv' && isCV) {
				link.classList.add('active');
				console.log('Set CV as active');
			} else if (page === 'portfolio' && isPortfolio) {
				link.classList.add('active');
				console.log('Set PORTFOLIO as active');
			}
		});
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
