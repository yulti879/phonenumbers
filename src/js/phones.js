export default function formatPhoneNumber(phone) {
    const normalized = phone.replace(/\D/g, '');
    
    if (normalized.startsWith('8') && normalized.length === 11) {
        return `+7${normalized.slice(1)}`;
    }
    
    return `+${normalized}`;
}