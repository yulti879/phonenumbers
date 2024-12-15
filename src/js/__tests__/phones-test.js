import formatPhoneNumber from "../phones";

test('should format Russian numbers correctly', () => {
    expect(formatPhoneNumber('8 (927) 000-00-00')).toBe('+79270000000');
    expect(formatPhoneNumber('+7 960 000 00 00')).toBe('+79600000000');
    expect(formatPhoneNumber('8 012 345 67 89')).toBe('+70123456789');
});

test('should format foreign numbers correctly', () => {
    expect(formatPhoneNumber('+86 012 345 6789')).toBe('+860123456789');
    
});

test('should handle other formats', () => {    
    expect(formatPhoneNumber('123-456-7890')).toBe('+1234567890');
});

test('should handle invalid inputs gracefully', () => {
    expect(formatPhoneNumber('')).toBe('+');
    expect(formatPhoneNumber('not a phone number')).toBe('+');
})