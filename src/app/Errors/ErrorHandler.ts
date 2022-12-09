export const ErrorList = {
  dataNotValid: 'Data structure not valid',
  undefinedError: 'Undefined error'
}

export const ErrorHandler = {
  getMessage(e: any): string {
    if (typeof e === 'object') return e.message || ErrorList.undefinedError
    else if (typeof e === 'string') return e
    return ErrorList.undefinedError
  }
}
