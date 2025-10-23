/**
 * Calculates OEE metrics from raw production data.
 * @param {object} data - The press.data object.
 * @returns {object} - An object with calculated metrics (A, P, Q, OEE).
 */
const calculateOEE = (data) => {
    const {
        plannedProductionTime,
        actualRunTime,
        idealCycleTime,
        totalPartsProduced,
        goodPartsProduced
    } = data;

    // 1. Availability
    // (Actual Run Time / Planned Production Time)
    let availability = 0;
    if (plannedProductionTime > 0) {
        availability = (actualRunTime / plannedProductionTime);
    }

    // 2. Performance
    // (Total Parts * Ideal Cycle Time) / Actual Run Time
    let performance = 0;
    if (actualRunTime > 0) {
        const idealRunTime = totalPartsProduced * idealCycleTime;
        performance = idealRunTime / actualRunTime;
    }

    // 3. Quality
    // (Good Parts / Total Parts)
    let quality = 0;
    if (totalPartsProduced > 0) {
        quality = goodPartsProduced / totalPartsProduced;
    }

    // 4. OEE
    // Availability * Performance * Quality
    const oee = availability * performance * quality;

    return {
        availability: (availability * 100),
        performance: (performance * 100),
        quality: (quality * 100),
        oee: (oee * 100),
    };
};

/**
 * Gets the tailwind color class based on the OEE score.
 * World-class OEE is 85%+.
 * @param {number} oee - The OEE score.
 * @returns {string} - Tailwind text color class.
 */
const getOeeColor = (oee) => {
    if (oee >= 85) return 'text-green-600';
    if (oee >= 60) return 'text-yellow-500'; // Amber for Fair
    if (oee > 0) return 'text-red-600';
    return 'text-gray-700';
};

/**
 * Gets the tailwind *background* color class for the OEE status label.
 */
const getOeeBgColor = (oee) => {
    if (oee >= 85) return 'bg-green-600';
    if (oee >= 60) return 'bg-yellow-500'; // Amber for Fair
    if (oee > 0) return 'bg-red-600';
    return 'bg-gray-700';
};

/**
 * Gets the status text for the gauge.
 */
const getOeeStatus = (oee) => {
    if (oee >= 85) return 'World Class';
    if (oee >= 60) return 'Fair';
    if (oee > 0) return 'Needs Improvement';
    return 'Offline';
};

/**
 * Gets the color for individual metric cards based on value vs. target.
 * @param {number} value - The actual metric value.
 * @param {number} target - The target metric value.
 * @returns {string} - Tailwind text color class.
 */
const getMetricColor = (value, target) => {
    if (value >= target) return 'text-green-600';
    // If it's within 80% of the target, consider it amber (yellow)
    if (target > 0 && value >= target * 0.8) return 'text-yellow-500';
    return 'text-red-600';
};

/**
 * Initial state for a new press.
 */
const createNewPress = (name, sampleData = false) => {
    let data = {
        plannedProductionTime: 0,
        actualRunTime: 0,
        idealCycleTime: 0,
        totalPartsProduced: 0,
        goodPartsProduced: 0,
    };

    // Pre-fill with sample data
    if (sampleData) {
        data = {
            plannedProductionTime: 480,
            actualRunTime: 420,
            idealCycleTime: 1, // min/piece
            totalPartsProduced: 400,
            goodPartsProduced: 380,
        };
    }

    return {
        id: crypto.randomUUID(),
        name: name,
        data: data,
        targets: {
            availability: 90,
            performance: 95,
            quality: 99,
        }
    };
};