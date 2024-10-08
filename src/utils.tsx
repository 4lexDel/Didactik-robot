/**
 * Retrieve the value of a CSS variable.
 * @param variableName The name of the CSS variable (e.g., '--primary-color')
 * @returns The value of the CSS variable (e.g., '#3490dc')
 */
export const getCssVariableValue = (variableName: string): string => {
    const rootStyles = getComputedStyle(document.documentElement);
    return rootStyles.getPropertyValue(variableName).trim();
};