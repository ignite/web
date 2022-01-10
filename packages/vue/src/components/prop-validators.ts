export const headingLevels = ['1', '2', '3', '4', '5', '6']

export const headingLevelValidator = (value: string): boolean => {
  return headingLevels.includes(value)
}
