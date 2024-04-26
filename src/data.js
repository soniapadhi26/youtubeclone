export const API_KEY = 'AIzaSyBgi1ruNHIpMOBFLQYw_Gon3dE-oKRSlhQ';
export const value_converter = (value) => {
    if (value >= 1000000) {
        return Math.floor(value / 1000000) + "M";
    } else if (value >= 1000) {
        return Math.floor(value / 1000) + "K";
    } else {
        return value.toString(); // Convert to string for consistency
    }
}

