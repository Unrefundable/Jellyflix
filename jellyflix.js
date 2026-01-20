/**
 * Jellyflix - Netflix-style JavaScript enhancements
 * Version: 1.0.0
 * Author: Unrefundable
 * Repository: https://github.com/Unrefundable/Jellyflix
 * 
 * Enhanced functionality to make Jellyfin behave more like Netflix
 */

(function() {
    'use strict';

    console.log('🎬 Jellyflix: Netflix-style enhancements loaded');

    // Configuration
    const CONFIG = {
        HOVER_DELAY: 800, // Delay before showing preview (ms)
        CARD_SCALE: 1.5,
        PREVIEW_ENABLED: true,
        AUTO_PLAY_NEXT: true
    };

    /**
     * Initialize all enhancements
     */
    function initJellyflix() {
        enhanceCardHoverEffects();
        addNetflixStyleNavigation();
        enhanceVideoPlayer();
        addContinueWatching();
        improveScrolling();
        addNetflixStylePreview();
        customizeUserInterface();
        
        console.log('✅ Jellyflix: All enhancements initialized');
    }

    /**
     * Enhanced card hover effects with delayed preview
     */
    function enhanceCardHoverEffects() {
        let hoverTimeout;
        
        const observer = new MutationObserver(() => {
            const cards = document.querySelectorAll('.card, .portraitCard, .backdropCard');
            
            cards.forEach(card => {
                if (!card.hasAttribute('data-jellyflix-enhanced')) {
                    card.setAttribute('data-jellyflix-enhanced', 'true');
                    
                    // Add hover listener
                    card.addEventListener('mouseenter', function(e) {
                        const cardElement = this;
                        
                        // Clear any existing timeout
                        clearTimeout(hoverTimeout);
                        
                        // Delay the hover effect
                        hoverTimeout = setTimeout(() => {
                            cardElement.classList.add('jellyflix-hover');
                            showCardPreview(cardElement);
                        }, CONFIG.HOVER_DELAY);
                    });
                    
                    card.addEventListener('mouseleave', function() {
                        clearTimeout(hoverTimeout);
                        this.classList.remove('jellyflix-hover');
                        hideCardPreview();
                    });
                }
            });
        });
        
        observer.observe(document.body, { childList: true, subtree: true });
    }

    /**
     * Show preview information on card hover
     */
    function showCardPreview(card) {
        if (!CONFIG.PREVIEW_ENABLED) return;
        
        // Create preview overlay if it doesn't exist
        let preview = card.querySelector('.jellyflix-preview');
        
        if (!preview) {
            preview = document.createElement('div');
            preview.className = 'jellyflix-preview';
            preview.style.cssText = `
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                background: linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 70%, transparent 100%);
                padding: 3rem 1rem 1rem;
                z-index: 100;
                opacity: 0;
                transition: opacity 0.3s ease;
                pointer-events: none;
            `;
            
            // Extract card information
            const title = card.querySelector('.cardTitle, .cardText')?.textContent || 'Title';
            const year = card.querySelector('.cardTextCentered')?.textContent || '';
            
            preview.innerHTML = `
                <div style="margin-bottom: 0.5rem;">
                    <strong style="font-size: 1rem; display: block; margin-bottom: 0.3rem;">${title}</strong>
                    <span style="font-size: 0.85rem; color: #aaa;">${year}</span>
                </div>
                <div style="display: flex; gap: 0.5rem; margin-top: 0.8rem;">
                    <button class="jellyflix-quick-play" style="
                        background: white;
                        color: black;
                        border: none;
                        padding: 0.4rem 1rem;
                        border-radius: 4px;
                        font-weight: 600;
                        cursor: pointer;
                        font-size: 0.85rem;
                    ">▶ Play</button>
                    <button class="jellyflix-quick-info" style="
                        background: rgba(109, 109, 110, 0.7);
                        color: white;
                        border: 2px solid white;
                        padding: 0.4rem;
                        border-radius: 50%;
                        cursor: pointer;
                        width: 32px;
                        height: 32px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    ">ℹ</button>
                </div>
            `;
            
            card.style.position = 'relative';
            card.appendChild(preview);
            
            // Add click handlers
            const playBtn = preview.querySelector('.jellyflix-quick-play');
            const infoBtn = preview.querySelector('.jellyflix-quick-info');
            
            playBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                card.click();
            });
            
            infoBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                // Simulate clicking the card for more info
                card.dispatchEvent(new MouseEvent('contextmenu', { bubbles: true }));
            });
        }
        
        setTimeout(() => {
            if (preview) {
                preview.style.opacity = '1';
            }
        }, 100);
    }

    /**
     * Hide card preview
     */
    function hideCardPreview() {
        const previews = document.querySelectorAll('.jellyflix-preview');
        previews.forEach(preview => {
            preview.style.opacity = '0';
        });
    }

    /**
     * Add Netflix-style keyboard navigation
     */
    function addNetflixStyleNavigation() {
        document.addEventListener('keydown', (e) => {
            const activeElement = document.activeElement;
            
            // Arrow key navigation through cards
            if (e.key === 'ArrowRight' || e.key === 'ArrowLeft' || 
                e.key === 'ArrowUp' || e.key === 'ArrowDown') {
                
                const cards = Array.from(document.querySelectorAll('.card'));
                const currentIndex = cards.indexOf(activeElement);
                
                if (currentIndex !== -1) {
                    e.preventDefault();
                    let nextIndex;
                    
                    if (e.key === 'ArrowRight') nextIndex = currentIndex + 1;
                    else if (e.key === 'ArrowLeft') nextIndex = currentIndex - 1;
                    else if (e.key === 'ArrowDown') nextIndex = currentIndex + 6; // Approximate row
                    else if (e.key === 'ArrowUp') nextIndex = currentIndex - 6;
                    
                    if (cards[nextIndex]) {
                        cards[nextIndex].focus();
                        cards[nextIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                }
            }
        });
    }

    /**
     * Enhanced video player with Netflix-like features
     */
    function enhanceVideoPlayer() {
        const observer = new MutationObserver(() => {
            const videoPlayer = document.querySelector('video');
            
            if (videoPlayer && !videoPlayer.hasAttribute('data-jellyflix-enhanced')) {
                videoPlayer.setAttribute('data-jellyflix-enhanced', 'true');
                
                // Add skip intro button (simulated)
                addSkipIntroButton();
                
                // Add next episode countdown
                if (CONFIG.AUTO_PLAY_NEXT) {
                    addNextEpisodeCountdown(videoPlayer);
                }
                
                // Add 10-second skip controls
                addQuickSkipControls();
            }
        });
        
        observer.observe(document.body, { childList: true, subtree: true });
    }

    /**
     * Add "Skip Intro" button
     */
    function addSkipIntroButton() {
        setTimeout(() => {
            const playerContainer = document.querySelector('.videoPlayerContainer');
            
            if (playerContainer && !document.querySelector('.jellyflix-skip-intro')) {
                const skipButton = document.createElement('button');
                skipButton.className = 'jellyflix-skip-intro';
                skipButton.textContent = 'Skip Intro';
                skipButton.style.cssText = `
                    position: absolute;
                    bottom: 100px;
                    right: 40px;
                    background: rgba(255, 255, 255, 0.9);
                    color: black;
                    border: none;
                    padding: 0.6rem 1.5rem;
                    border-radius: 4px;
                    font-weight: 600;
                    font-size: 1rem;
                    cursor: pointer;
                    z-index: 1000;
                    opacity: 0;
                    transition: all 0.3s ease;
                    pointer-events: none;
                `;
                
                playerContainer.appendChild(skipButton);
                
                // Show skip button during typical intro times (15s - 90s)
                const video = playerContainer.querySelector('video');
                if (video) {
                    video.addEventListener('timeupdate', () => {
                        const currentTime = video.currentTime;
                        if (currentTime > 15 && currentTime < 90) {
                            skipButton.style.opacity = '1';
                            skipButton.style.pointerEvents = 'auto';
                        } else {
                            skipButton.style.opacity = '0';
                            skipButton.style.pointerEvents = 'none';
                        }
                    });
                    
                    skipButton.addEventListener('click', () => {
                        video.currentTime = 90; // Skip to 90 seconds
                        skipButton.style.opacity = '0';
                    });
                }
            }
        }, 2000);
    }

    /**
     * Add next episode countdown
     */
    function addNextEpisodeCountdown(video) {
        video.addEventListener('timeupdate', () => {
            const duration = video.duration;
            const currentTime = video.currentTime;
            const timeRemaining = duration - currentTime;
            
            // Show countdown in last 30 seconds
            if (timeRemaining <= 30 && timeRemaining > 0) {
                showNextEpisodeCard(Math.floor(timeRemaining));
            }
        });
    }

    /**
     * Show "Next Episode" card with countdown
     */
    function showNextEpisodeCard(seconds) {
        let card = document.querySelector('.jellyflix-next-episode');
        
        if (!card) {
            card = document.createElement('div');
            card.className = 'jellyflix-next-episode';
            card.style.cssText = `
                position: absolute;
                bottom: 120px;
                right: 40px;
                background: rgba(20, 20, 20, 0.95);
                padding: 1.5rem;
                border-radius: 8px;
                z-index: 1000;
                min-width: 300px;
                border: 2px solid rgba(255, 255, 255, 0.2);
            `;
            
            card.innerHTML = `
                <div style="display: flex; align-items: center; gap: 1rem;">
                    <div style="flex: 1;">
                        <div style="font-size: 0.9rem; color: #aaa; margin-bottom: 0.3rem;">Next Episode</div>
                        <div style="font-weight: 600; font-size: 1rem;">Episode Title</div>
                        <div style="margin-top: 0.5rem; color: #aaa; font-size: 0.85rem;">
                            Playing in <span class="countdown">${seconds}</span>s
                        </div>
                    </div>
                    <button class="cancel-autoplay" style="
                        background: transparent;
                        border: 2px solid white;
                        color: white;
                        padding: 0.5rem 1rem;
                        border-radius: 4px;
                        cursor: pointer;
                        font-weight: 600;
                    ">Cancel</button>
                </div>
            `;
            
            const playerContainer = document.querySelector('.videoPlayerContainer');
            if (playerContainer) {
                playerContainer.appendChild(card);
                
                card.querySelector('.cancel-autoplay').addEventListener('click', () => {
                    card.remove();
                });
            }
        }
        
        const countdownSpan = card.querySelector('.countdown');
        if (countdownSpan) {
            countdownSpan.textContent = seconds;
        }
    }

    /**
     * Add 10-second skip forward/backward
     */
    function addQuickSkipControls() {
        document.addEventListener('keydown', (e) => {
            const video = document.querySelector('video');
            if (!video) return;
            
            // Left arrow - skip back 10 seconds
            if (e.key === 'ArrowLeft' && e.target === video) {
                e.preventDefault();
                video.currentTime = Math.max(0, video.currentTime - 10);
                showSkipIndicator(-10);
            }
            
            // Right arrow - skip forward 10 seconds
            if (e.key === 'ArrowRight' && e.target === video) {
                e.preventDefault();
                video.currentTime = Math.min(video.duration, video.currentTime + 10);
                showSkipIndicator(10);
            }
        });
    }

    /**
     * Show skip indicator overlay
     */
    function showSkipIndicator(seconds) {
        let indicator = document.querySelector('.jellyflix-skip-indicator');
        
        if (!indicator) {
            indicator = document.createElement('div');
            indicator.className = 'jellyflix-skip-indicator';
            indicator.style.cssText = `
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: rgba(0, 0, 0, 0.8);
                padding: 2rem;
                border-radius: 50%;
                z-index: 2000;
                font-size: 2rem;
                font-weight: 600;
                opacity: 0;
                transition: opacity 0.2s ease;
            `;
            
            const playerContainer = document.querySelector('.videoPlayerContainer');
            if (playerContainer) {
                playerContainer.appendChild(indicator);
            }
        }
        
        indicator.textContent = seconds > 0 ? `+${seconds}s` : `${seconds}s`;
        indicator.style.opacity = '1';
        
        setTimeout(() => {
            indicator.style.opacity = '0';
        }, 500);
    }

    /**
     * Improve horizontal scrolling
     */
    function improveScrolling() {
        const observer = new MutationObserver(() => {
            const scrollContainers = document.querySelectorAll('.scrollSlider, .itemsContainer');
            
            scrollContainers.forEach(container => {
                if (!container.hasAttribute('data-scroll-enhanced')) {
                    container.setAttribute('data-scroll-enhanced', 'true');
                    
                    // Enable smooth scrolling with mouse wheel
                    container.addEventListener('wheel', (e) => {
                        if (e.deltaY !== 0) {
                            e.preventDefault();
                            container.scrollBy({
                                left: e.deltaY < 0 ? -300 : 300,
                                behavior: 'smooth'
                            });
                        }
                    });
                }
            });
        });
        
        observer.observe(document.body, { childList: true, subtree: true });
    }

    /**
     * Add Netflix-style preview on hover (delayed)
     */
    function addNetflixStylePreview() {
        // This is a placeholder for more advanced preview functionality
        // In a full implementation, this could load actual video previews
        console.log('🎥 Preview functionality ready');
    }

    /**
     * Customize UI elements
     */
    function customizeUserInterface() {
        // Replace Jellyfin logo with Jellyflix branding
        const observer = new MutationObserver(() => {
            const logo = document.querySelector('.headerLeft .headerButton:first-child');
            if (logo && !logo.hasAttribute('data-jellyflix-branded')) {
                logo.setAttribute('data-jellyflix-branded', 'true');
                logo.textContent = 'JELLYFLIX';
                logo.style.cssText = `
                    color: #e50914 !important;
                    font-weight: 700 !important;
                    font-size: 1.8rem !important;
                    letter-spacing: 0.1em !important;
                `;
            }
        });
        
        observer.observe(document.body, { childList: true, subtree: true });
        
        // Add "Continue Watching" label enhancement
        enhanceContinueWatching();
    }

    /**
     * Enhance Continue Watching section
     */
    function enhanceContinueWatching() {
        const observer = new MutationObserver(() => {
            const sections = document.querySelectorAll('.section');
            
            sections.forEach(section => {
                const title = section.querySelector('.sectionTitle');
                if (title && title.textContent.includes('Continue Watching')) {
                    if (!section.hasAttribute('data-continue-enhanced')) {
                        section.setAttribute('data-continue-enhanced', 'true');
                        section.style.marginTop = '2vw';
                    }
                }
            });
        });
        
        observer.observe(document.body, { childList: true, subtree: true });
    }

    /**
     * Add Continue Watching persistence
     */
    function addContinueWatching() {
        // Monitor video progress and store in localStorage
        const videoObserver = new MutationObserver(() => {
            const video = document.querySelector('video');
            
            if (video && !video.hasAttribute('data-progress-tracked')) {
                video.setAttribute('data-progress-tracked', 'true');
                
                video.addEventListener('timeupdate', () => {
                    const itemId = window.location.pathname.split('/').pop();
                    const progress = (video.currentTime / video.duration) * 100;
                    
                    localStorage.setItem(`jellyflix_progress_${itemId}`, JSON.stringify({
                        time: video.currentTime,
                        duration: video.duration,
                        progress: progress,
                        timestamp: Date.now()
                    }));
                });
            }
        });
        
        videoObserver.observe(document.body, { childList: true, subtree: true });
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initJellyflix);
    } else {
        initJellyflix();
    }

    // Re-initialize on navigation changes (for SPA behavior)
    window.addEventListener('popstate', initJellyflix);
    
    // Watch for route changes
    let lastUrl = location.href;
    new MutationObserver(() => {
        const url = location.href;
        if (url !== lastUrl) {
            lastUrl = url;
            initJellyflix();
        }
    }).observe(document, { subtree: true, childList: true });

})();
