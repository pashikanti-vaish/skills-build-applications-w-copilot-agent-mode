// Timezone configurations
const timezones = {
    'ny': { name: 'America/New_York', elementId: 'clock-ny' },
    'london': { name: 'Europe/London', elementId: 'clock-london' },
    'tokyo': { name: 'Asia/Tokyo', elementId: 'clock-tokyo' },
    'sydney': { name: 'Australia/Sydney', elementId: 'clock-sydney' },
    'dubai': { name: 'Asia/Dubai', elementId: 'clock-dubai' },
    'singapore': { name: 'Asia/Singapore', elementId: 'clock-singapore' }
};

/**
 * Format time with leading zeros
 * @param {number} time - The time value
 * @returns {string} - Formatted time string
 */
function formatTime(time) {
    return String(time).padStart(2, '0');
}

/**
 * Update all timezone clocks
 */
function updateClocks() {
    const now = new Date();

    // Update each timezone clock
    Object.values(timezones).forEach(tz => {
        const timeInTz = new Date(now.toLocaleString('en-US', { timeZone: tz.name }));
        const hours = formatTime(timeInTz.getHours());
        const minutes = formatTime(timeInTz.getMinutes());
        const seconds = formatTime(timeInTz.getSeconds());
        
        const timeString = `${hours}:${minutes}:${seconds}`;
        const element = document.getElementById(tz.elementId);
        
        if (element) {
            element.textContent = timeString;
        }
    });

    // Update local time info
    const localHours = formatTime(now.getHours());
    const localMinutes = formatTime(now.getMinutes());
    const localSeconds = formatTime(now.getSeconds());
    const localTimeString = `${localHours}:${localMinutes}:${localSeconds}`;
    
    const localTimeElement = document.getElementById('local-time');
    if (localTimeElement) {
        localTimeElement.textContent = localTimeString;
    }

    // Update local timezone info
    const localTimezoneElement = document.getElementById('local-timezone');
    if (localTimezoneElement) {
        const tzName = Intl.DateTimeFormat().resolvedOptions().timeZone;
        localTimezoneElement.textContent = tzName;
    }
}

/**
 * Initialize the clock
 */
function initializeClock() {
    // Update immediately
    updateClocks();
    
    // Update every second
    setInterval(updateClocks, 1000);
    
    console.log('✓ Digital Multi-Timezone Clock initialized successfully');
    console.log('  Timezones:', Object.keys(timezones).map(key => timezones[key].name).join(', '));
}

// Start the clock when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeClock);
} else {
    initializeClock();
}
