// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize Twitch Embed
  initTwitchEmbed();
  
  // Smooth scrolling for navigation links
  setupSmoothScrolling();
});

/**
 * Initialize the Twitch embed player
 * Default channel can be changed or made configurable
 */
function initTwitchEmbed() {
  // Get the container element
  const embedContainer = document.getElementById('twitch-embed');
  
  // Only proceed if the container exists
  if (embedContainer) {
    // Default channel - can be changed to your preferred channel
    const defaultChannel = 'twitchpresents';
    
    // Check URL parameters for custom channel
    const urlParams = new URLSearchParams(window.location.search);
    const channelParam = urlParams.get('channel');
    
    // Use channel from URL parameter or default
    const channel = channelParam || defaultChannel;
    
    // Create the Twitch embed
    new Twitch.Embed("twitch-embed", {
      width: "100%",
      height: "100%",
      channel: channel,
      layout: "video",
      autoplay: true,
      // Optional: parent domain for embedding
      parent: ["checkthevibe.dev", "localhost"]
    });

    // Listen for the embed ready event
    embedContainer.addEventListener(Twitch.Embed.VIDEO_READY, function() {
      console.log('The Twitch embed is ready');
    });
  }
}

/**
 * Setup smooth scrolling for navigation links
 */
function setupSmoothScrolling() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  for (const link of links) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70, // Adjust for header height
          behavior: 'smooth'
        });
      }
    });
  }
}

/**
 * Toggle mobile navigation menu
 * To be implemented when responsive design is added
 */
function toggleMobileNav() {
  // Mobile navigation toggle to be implemented
}