export const validate = (form) => {
  const result = {}
  for (const field in form) {
    if(!form[field].trim()) {
      result[field] = 'Required field'
      result.isErrors = true
    }  
  }
  return result
}
export const clearFormData = (form) => {
  for (const field in form) {
    form[field] = ''
  }  
  return form
}
export const validatePass = (pass, repass) => {
  if (pass !== repass) return false
  return true
}
