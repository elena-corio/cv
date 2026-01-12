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
	// Hamburger Menu (Mobile)
	// ===========================
	function setupHamburgerMenu() {
		const sidebarContainer = document.getElementById('sidebar-container');
		if (!sidebarContainer) return;

		// Create hamburger button
		const hamburgerBtn = document.createElement('button');
		hamburgerBtn.className = 'hamburger-btn';
		hamburgerBtn.innerHTML = '☰';
		hamburgerBtn.setAttribute('aria-label', 'Toggle menu');
		hamburgerBtn.style.display = 'none'; // Hidden by default
		hamburgerBtn.style.position = 'fixed';
		hamburgerBtn.style.top = '5px';
		hamburgerBtn.style.right = '5px';
		hamburgerBtn.style.zIndex = '999';
		
		// Create close button for sidebar
		const closeBtn = document.createElement('button');
		closeBtn.className = 'sidebar-close-btn';
		closeBtn.innerHTML = '✕';
		closeBtn.setAttribute('aria-label', 'Close menu');
		closeBtn.style.display = 'none'; // Hidden by default
		closeBtn.style.position = 'fixed';
		closeBtn.style.top = '5px';
		closeBtn.style.right = '5px';
		closeBtn.style.zIndex = '1001';
		
// Check if we should show hamburger (mobile/tablet)
	function updateHamburgerVisibility() {
		if (window.innerWidth <= 768) {
				if (sidebarContainer.classList.contains('open')) {
					hamburgerBtn.style.display = 'none';
					closeBtn.style.display = 'block';
				} else {
					hamburgerBtn.style.display = 'block';
					closeBtn.style.display = 'none';
				}
			} else {
				hamburgerBtn.style.display = 'none';
				closeBtn.style.display = 'none';
				sidebarContainer.classList.remove('open');
			}
		}

		// Insert hamburger button into body
		document.body.appendChild(hamburgerBtn);

		// Insert close button into body
		document.body.appendChild(closeBtn);

		// Toggle sidebar
		hamburgerBtn.addEventListener('click', (e) => {
			e.stopPropagation();
			sidebarContainer.classList.add('open');
			updateHamburgerVisibility();
		});

		// Close sidebar with close button
		closeBtn.addEventListener('click', (e) => {
			e.stopPropagation();
			sidebarContainer.classList.remove('open');
			updateHamburgerVisibility();
		});

		// Close sidebar when clicking outside
		document.addEventListener('click', (e) => {
		if (window.innerWidth <= 768 && 
				!hamburgerBtn.contains(e.target) &&
				!closeBtn.contains(e.target)) {
				sidebarContainer.classList.remove('open');
				updateHamburgerVisibility();
			}
		});

		// Close sidebar when clicking on a link
		sidebarContainer.addEventListener('click', (e) => {
			if (e.target.tagName === 'A') {
				sidebarContainer.classList.remove('open');
				updateHamburgerVisibility();
			}
		});

		// Handle window resize
		window.addEventListener('resize', updateHamburgerVisibility);
		updateHamburgerVisibility();
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
			// Use relative path (works for both local and GitHub Pages)
			const headerPath = './components/header.html';
			
			console.log('Loading header from:', headerPath);
			
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
			// Use relative path (works for both local and GitHub Pages)
			const sidebarPath = './components/sidebar.html';
			
			console.log('Loading sidebar from:', sidebarPath);
			
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
				setupHamburgerMenu();
			} catch (e) {
				console.error('Error in setActiveHeaderLink or setupHamburgerMenu:', e);
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
			// Home is active if: index.html is in path, path ends with '/', or path ends with the domain name
			const isHome = pathname.includes('index.html') || 
						  pathname === '/' || 
						  pathname === '' || 
						  pathname.endsWith('/cv/') ||
						  pathname.endsWith('/cv');
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
